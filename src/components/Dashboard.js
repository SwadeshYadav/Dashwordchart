import React from 'react';
import Layout from './Layout';
import { Typography, Paper, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Layout> 
      <Typography variant="h4" gutterBottom className='text-blue-500'>
        Dashboard
      </Typography> 
      <Grid container spacing={3} className="grid-container">
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }} >
            <Typography variant="h6" gutterBottom className='font-semibold'>
              Widget 1 
            </Typography> 
            <Typography variant="body1">
              Content for Widget 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Paper> 
        </Grid>  
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom className='font-semibold'>
              Widget 2
            </Typography>
            <Typography variant="body1">
              Content for Widget 2 goes here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom className='font-semibold'>
              Widget 3
            </Typography>
            <Typography variant="body1">
              Content for Widget 3 goes here. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom className='font-semibold'>
              Widget 4
            </Typography>
            <Typography variant="body1">
              Content for Widget 4 goes here. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom className='font-semibold'>
              Widget 5
            </Typography>
            <Typography variant="body1">
              Content for Widget 5 goes here. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" gutterBottom className='font-semibold'>
              Widget 6
            </Typography>
            <Typography variant="body1">
              Content for Widget 6 goes here. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
