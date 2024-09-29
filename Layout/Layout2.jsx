import SimpleBottomNavigation from '@/src/core/Footer';
import { Box } from '@mui/material';
import React from 'react';

const Layout2 = ({ children }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      height='100vh'
    >
      <Box display='flex' justifyContent='center' flexGrow={1}>
        <Box
          height='100%'
          sx={{
            backgroundImage: 'url(/assets/images/background.png)',
            backgroundSize: 'cover', // Ensure the background covers the box
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent repeating the image
            width: {
              xs: '100%', // 100% width for mobile (xs)
              sm: '30%',  // 30% width for larger screens (sm and above)
            },
          }}
        >
          {children}
        </Box>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Box sx={{
          width: {
            xs: '100%', // 100% width for mobile (xs)
            sm: '30%',  // 30% width for larger screens (sm and above)
          }, 
          position: 'fixed', 
          bottom: 0, 
        }}>
          <SimpleBottomNavigation />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout2;
