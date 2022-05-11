import styled from '@mui/styled-engine'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

interface ImageBlockProps {
  component?: string
  alt?: string
}

export const CardStyle = styled(Card)`
  text-align: center;
`

export const CardMediaStyle = styled(CardMedia)<ImageBlockProps>`
  margin: 0 auto;
  object-fit: 'contain';
  width: '60%';
`
