import {Email, Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <footer>
        <div>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <Email/>
            <p>
                Contact: 1234567890
            </p>
        </div>
    </footer>
  )
}

export default Footer