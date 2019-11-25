import React from 'react'
import { Typography, Box } from '@material-ui/core'

const EmptyMessages: React.SFC = () => (
  <Box
    flex={1}
    textAlign="center"
    marginLeft="auto"
    marginRight="auto"
    width="90%"
    paddingTop={3}
  >
    <Typography color="textSecondary">
      No messages were sent to Cognigy. Please send your first message...
    </Typography>
  </Box>
)

export default EmptyMessages
