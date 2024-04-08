import { Box, CircularProgress } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Box ml={"50%"} mt={"20%"}><CircularProgress isIndeterminate color='green.300' /></Box>
  )
}

export default Loading