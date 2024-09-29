import { UserContext } from '@/Context/AuthContext';
import { Avatar, Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import QRCode from 'react-qr-code';

const index = () => {
  const {user} = useContext(UserContext)
  return (
    <Box>
    
      <Box display='flex'  justifyContent='center'>
        <Box className="cardView" mt={7} sx={{background:'white', boxShadow:'10px 10px 40px grey', width:'70%', borderRadius:'10px'}} px={5} py={5}>
        
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={user?.cardNumber ? user?.cardNumber : ''}
            viewBox={`0 0 256 256`}
          />
          <Typography component='p' textAlign='center' mt={3}>{user?.cardNumber}</Typography>
        </Box>
      </Box>

      <Box display='flex'  justifyContent='center'>
        <Box className="cardView" mt={7} sx={{background:'white', boxShadow:'10px 10px 40px grey', width:'70%', borderRadius:'10px'}} px={5} py={5}>
          <Box>
            <Typography variant='h5' textAlign={'center'}>Available Coins: ${user?.availableCoins}</Typography>
            <Typography variant='h5' textAlign={'center'}>Total Coins: ${user?.totalSaveCoins}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default index;