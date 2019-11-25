import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'

const Progress: React.SFC = () => (
  <Box
    width="100%"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <CircularProgress />
  </Box>
)

export default Progress
