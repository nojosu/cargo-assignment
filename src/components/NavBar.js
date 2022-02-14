import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ backgroundColor: 'lightblue'}}>
      <Typography sx={{ padding: 2 }}>
        <Link to="/">Home</Link>
      </Typography>
    </Box>
  );
}

export default NavBar;