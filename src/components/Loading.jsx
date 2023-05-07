import React from 'react'
import { Spinner, Center, Box } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div>
      <Center>
        <Box p="350" >
          <Spinner color='#111F5F' size="xl" />
        </Box>
      </Center>
    </div>
  );
};

export default Loading