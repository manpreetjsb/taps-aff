import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import CardContent from '@mui/material/CardContent'

import { CardStyle, CardMediaStyle } from './Weather.style'
import shirt from '../images/shirt.png'
import jumper from '../images/jumper.png'
import jsonData from '../location_weather.json'

import { Iweather } from '../types/weather.types'

const Weather: React.FC = () => {
  return (
    <Container>
      <Grid m={2}>
        <Typography component={'h1'} variant={'h1'} textAlign='center'>
          taps aff/oan
        </Typography>
      </Grid>
      <Box>
        <Grid container display={'flex'} spacing={4}>
          {jsonData.map((item: Iweather) => {
            return (
              <Grid item key={item.location} sm={6} xs={12}>
                <CardStyle>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color='text.secondary'
                      gutterBottom
                    >
                      Todays Temprature in
                    </Typography>
                    <Typography variant='h3' component='div'>
                      {item.location}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontWeight: 'bold' }}
                      color='text.secondary'
                    >
                      {item.temperature}
                    </Typography>
                  </CardContent>
                  <Typography variant='body2'>
                    what to wear.
                    <br />
                    <span>{item.temperature >= 15 ? 'Shirt' : 'Jumper'}</span>
                  </Typography>
                  <CardMediaStyle
                    image={item.temperature >= 15 ? shirt : jumper}
                    component='img'
                    alt={item.temperature >= 15 ? 'Shirt' : 'Jumper'}
                  />
                </CardStyle>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  )
}

export default Weather
