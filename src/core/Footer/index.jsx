import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/router';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter()
  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: '#5271FF' }} // Set background color to blue
      >
        <BottomNavigationAction 
        onClick={() => router.push('/dashboard/history')}
          label="Transactions" 
          icon={<AccountBalanceWalletIcon sx={{ color: 'white' }} />} // Set icon color to white
          sx={{ color: 'white' }} // Set text color to white
        />
        <BottomNavigationAction 
        onClick={() => router.push('/dashboard/cards')}
          label="Card" 
          icon={<CreditCardIcon sx={{ color: 'white' }} />} // Set icon color to white
          sx={{ color: 'white' }} // Set text color to white
        />
        <BottomNavigationAction 
        onClick={() => router.push('/dashboard/profile')}
          label="My Account" 
          icon={<PersonIcon sx={{ color: 'white' }} />} // Set icon color to white
          sx={{ color: 'white' }} // Set text color to white
        />
      </BottomNavigation>
    </Box>
  );
}
