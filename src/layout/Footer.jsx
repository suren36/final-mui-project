import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1976D2", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "150px", padding: "20px" }}>
      <Box>
        <Typography variant='h3' textAlign="center" sx={{ fontWeight: 'bold', mb: 1 }}>Delivering Happiness Anytime</Typography>
        <Typography variant='h6' textAlign="center" sx={{ fontStyle: 'italic' }}>Order Quickly, Eat Healthily</Typography>
      </Box>
    </Box>
  )
}
