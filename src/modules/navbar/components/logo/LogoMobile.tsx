import Box from '@mui/material/Box'

import Link from 'next/link'

import { SvgLogo } from '@modules/navbar/components/logo'

export default function LogoMobile() {
  return (
    <Box sx={{ my: 'auto', pt: '4px', px: '8px' }}>
      <Link href='/'>
        <SvgLogo sx={{ height: '11px', width: '55px' }} />
      </Link>
    </Box>
  )
}
