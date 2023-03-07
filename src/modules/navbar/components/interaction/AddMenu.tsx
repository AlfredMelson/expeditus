import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import { useRouter } from 'next/router'

export default function AddMenu() {
  const router = useRouter()

  const handleClick = () => {
    router.push('./ask')
  }

  return (
    <>
      {router.pathname.split('/')[1] === 'ask' ? (
        <IconButton disabled onClick={handleClick} aria-label='ask question'>
          <AddIcon fontSize='medium' />
        </IconButton>
      ) : (
        <Tooltip title='Ask question'>
          <IconButton onClick={handleClick} aria-label='ask question'>
            <AddIcon fontSize='medium' />
          </IconButton>
        </Tooltip>
      )}
    </>
  )
}

// const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
// const open = Boolean(menuAnchor)
// const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//   setMenuAnchor(event.currentTarget)
// }
// const handleClose = () => {
//   setMenuAnchor(null)
// }
//   return (
//     <>
//       <Tooltip title='Add menu'>
//         <IconButton
//           onClick={handleClick}
//           aria-label='add menu'
//           aria-controls={open ? 'account-menu' : undefined}
//           aria-haspopup='true'
//           aria-expanded={open ? 'true' : undefined}
//         >
//           <AddIcon fontSize='medium' />
//         </IconButton>
//       </Tooltip>
//       <Menu
//         anchorEl={menuAnchor}
//         id='account-menu'
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//       >
//         {ROUTES.ADD_PRIMARY.map((route, index) => (
//           <MenuItem key={index}>
//             <Link href={route.url}>
//               <ListItemText>{route.name}</ListItemText>
//             </Link>
//           </MenuItem>
//         ))}
//       </Menu>
//     </>
//   )
// }
