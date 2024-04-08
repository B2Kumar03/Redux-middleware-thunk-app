import React from 'react'
import {Text,Button,Box} from '@chakra-ui/react'
const Error = () => {
  return (
    <>
    <Box display={"flex"} justifyContent={"center"}>
    <Text fontSize={30}>Something went wrong ....</Text>
    <Button>Reload</Button>
    </Box>
    </>
)
}

export default Error