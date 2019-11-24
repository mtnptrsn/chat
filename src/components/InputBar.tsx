import React from 'react'
import { TextField, Box, Fab } from '@material-ui/core'
import { Send } from '@material-ui/icons'

const InputBar: React.SFC = () => (
  <Box
    display="flex"
    width="100%"
    paddingLeft={1}
    paddingTop={1}
    paddingBottom={1}
  >
    <Box flex={1}>
      <TextField fullWidth label="Type something..." variant="filled" />
    </Box>
    <Box
      width={56}
      height={56}
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Fab color="primary" size="small">
        <Send fontSize="small" />
      </Fab>
    </Box>
  </Box>
)

export default InputBar
