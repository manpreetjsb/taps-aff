import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

const Weather: React.FC = () => {
  return (
    <Container>
      <Grid m={2}>
        <Typography component={'h1'} variant={'h1'} textAlign='center'>
          taps aff/oan
        </Typography>
      </Grid>
    </Container>
  )
}

export default Weather
