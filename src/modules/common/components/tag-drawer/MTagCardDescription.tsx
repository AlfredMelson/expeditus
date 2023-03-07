import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function MTagCardDescription() {
  return (
    <Stack direction='column' sx={{ mt: 2, px: 2 }}>
      <Typography variant='body1' paragraph sx={{ textIndent: '20px', fontSize: '15px' }}>
        For questions about programming in ECMAScript (JavaScript/JS) and its different
        dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the
        same as Java! Include all labels that are relevant to your question; e.g., [node.js],
        [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte].
      </Typography>
    </Stack>
  )
}
