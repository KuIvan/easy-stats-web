import React from 'react'
import { Typography } from '@mui/material'
import Link from 'next/link'
// src

interface DefaultMenuTitleProps {
  title: string
  isHighlighted: boolean
  link: string
}

export default function DefaultMenuTitle({ title, isHighlighted, link }: DefaultMenuTitleProps): JSX.Element {
  return (
    <Link passHref href={link}>
      <a>
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            '&:hover': {
              fontSize: 60,
              animation: 'neon 5s infinite',
              animationTimingFunction: 'linear',
              textShadow: '0 0 10px rgba(255,255,255,.8),' +
                '0 0 20px rgba(255,255,255,.8),' +
                '0 0 22px rgba(255,255,255,.8),' +
                '0 0 40px rgba(219,66,217,.8),' +
                '0 0 60px rgba(219,66,217,.8),' +
                '0 0 80px rgba(219,66,217,.8),' +
                '0 0 100px rgba(219,66,217,.5),' +
                '0 0 140px rgba(219,66,217,.5),' +
                '0 0 200px rgba(219,66,217,.5)',
            },
            cursor: 'pointer',
            textShadow: isHighlighted ? '0 0 10px rgba(255,255,255,.8), ' +
              '0 0 20px rgba(255,255,255,.8),' +
              '0 0 22px rgba(255,255,255,.8),' +
              '0 0 40px rgba(219,66,217,.8),' +
              '0 0 60px rgba(219,66,217,.8),' +
              '0 0 80px rgba(219,66,217,.8),' +
              '0 0 100px rgba(219,66,217,.5),' +
              '0 0 140px rgba(219,66,217,.5),' +
              '0 0 200px rgba(219,66,217,.5)' : 'none',
            '@keyframes neon': {
              '0%': {
                opacity: 1,
              },
              '20%': {
                opacity: 0,
              },
              '35%': {
                opacity: 1,
              },
              '50%': {
                opacity: 0,
              },
              '73%': {
                opacity: 1,
              },
              '85%': {
                opacity: 0,
              },
              '100%': {
                opacity: 1,
              },
            },
          }}
        >
          {title}
        </Typography>
      </a>
    </Link>
  )
}
