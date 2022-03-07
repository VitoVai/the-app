import React from 'react';
import { Typography, Box } from '@mui/material';

const HeroPage = () => (
  <Box>
    <Box sx={{
      backgroundImage: 'url(/heroPicture1.jpg)',
      backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      backgroundPosition: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: '95vh',
      maxWidth: 'auto',
    // mb: -6,
    // width: '100vw',
    // mb: -6,
    }}
    >

      {/* <Box>
      <CardMedia
        component="img"
        height="390"
        image="/static/images/cards/fight-night.png"
        alt="conor"
      />
    </Box> */}
      <Box sx={{ width: { sm: '100%', md: '80%' } }}>
        <Typography display="block" variant="h2" align="center" color="common.white">
          UFC Fight Night: Santos vs. Ankalaev
          <br />
          <Typography variant="h3"> Kovo 13, 2022</Typography>
        </Typography>
      </Box>
    </Box>
  </Box>

);

export default HeroPage;
