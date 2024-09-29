import { UserContext } from '@/Context/AuthContext';
import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import {baseUrl} from '@/baseUrl'
const index = () => {
  const { user } = useContext(UserContext);
  const [transaction, setTransaction] = useState([]);
  
  useEffect(() => {
    if (!user?.id) return; // Ensure user ID is available before fetching
    fetch(`${baseUrl}/transaction/customer/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        Promise.all(
          data?.map(async (myData) => {
            const merchantRes = await fetch(`${baseUrl}/marchent/merchent/${myData?.merchantId}`);
            const merchantData = await merchantRes.json();
            return { ...myData, merchantName: merchantData?.Item?.businessName };
          })
        )
          .then((results) => setTransaction(results))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log({ err }));
  }, [user?.id]);
  

  


  console.log({transaction})
  return (
    <Box>
     <Box display='flex'  justifyContent='center'>
        <Box className="cardView" mt={7} sx={{background:'white', boxShadow:'10px 10px 40px grey', width:'90%', borderRadius:'10px'}} px={5} py={5}>
        <Typography variant='h5'>Trasaction history</Typography>
         
         <Box>
            {transaction?.map((transit) => <Box my={2} display='flex' justifyContent='space-between'>
              <Typography component='p'>{transit?.merchantName}</Typography>
              <Typography sx={{color: transit?.method === 'CTM' ? 'red': 'green'}} component='p'>{transit?.method === 'CTM' ? "-" : ""} {transit?.ammount}</Typography>
            </Box>)}
         </Box>
         
        </Box>
      </Box>
    </Box>
  );
};

export default index;