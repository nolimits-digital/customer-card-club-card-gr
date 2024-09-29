import { Box } from '@mui/material';
import React from 'react';

const Index = ({children}) => {
  return (
    <Box>
      <Box display='flex' justifyContent='center'>
        <Box 
          
          height='100vh' 
          sx={{
            background: 'white',
            width: {
              xs: '100%', // 100% width for mobile (xs)
              sm: '40%',  // 50% width for larger screens (sm and above)
            },
          }}
        >
         {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
