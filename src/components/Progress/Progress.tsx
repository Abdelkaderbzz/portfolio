import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';
import './index.scss';
export default function Progress() {
  return (
    <Box className="circlar_progress_container">
      <CircularProgress />
    </Box>
  );
}
