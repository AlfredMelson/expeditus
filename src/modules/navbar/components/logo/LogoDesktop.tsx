import Tooltip from '@mui/material/Tooltip'

import Link from 'next/link'

import { SvgLogo } from '@modules/navbar/components/logo'

export default function LogoDesktop() {
  return (
    <Tooltip title='Expeditus' placement='bottom'>
      <Link href='/'>
        <SvgLogo
          sx={{
            height: '22px',
            width: '110px',
          }}
        />
      </Link>
    </Tooltip>
  )
}
