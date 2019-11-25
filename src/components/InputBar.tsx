import React from 'react'
import { TextField, Box, Fab, useTheme } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { StandardTextFieldProps } from '@material-ui/core/TextField'

interface IInputBarProps {
  onSendMessage: (message: string) => void
}

const InputBar: React.SFC<IInputBarProps> = ({ onSendMessage }) => {
  const [textValue, setTextValue] = React.useState('')
  const theme = useTheme()

  const onChangeText: StandardTextFieldProps['onChange'] = e =>
    setTextValue(e.target.value)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (textValue === '') return null
    onSendMessage(textValue)
    setTextValue('')
  }

  const onClickButton = () => {
    onSendMessage(textValue)
    setTextValue('')
  }

  return (
    <Box
      display="flex"
      width="100%"
      paddingLeft={2}
      paddingTop={2}
      paddingBottom={2}
      borderColor={theme.palette.grey[200]}
      borderTop={1}
    >
      <Box flex={1}>
        <form onSubmit={onSubmit}>
          <TextField
            value={textValue}
            onChange={onChangeText}
            fullWidth
            label="Your message"
            variant="filled"
          />
        </form>
      </Box>
      <Box
        paddingLeft={2}
        paddingRight={2}
        height="100%"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Fab
          disabled={textValue === ''}
          onClick={onClickButton}
          color="primary"
          size="small"
        >
          <Send fontSize="small" />
        </Fab>
      </Box>
    </Box>
  )
}

export default InputBar
