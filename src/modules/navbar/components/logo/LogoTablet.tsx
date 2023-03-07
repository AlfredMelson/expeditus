import Link from 'next/link'

import { SvgLogo } from '@modules/navbar/components/logo'

export default function LogoTablet() {
  return (
    <Link href='/'>
      <SvgLogo sx={{ height: '22px', width: '110px' }} />
    </Link>
  )
}
