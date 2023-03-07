import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

import { profileContainer, profileItem } from '@modules/profile/animation'
import { TabPanel, TabPanelBox } from '@modules/profile/components/tab-panel'

interface IPublicProfilePanel {
  index: number
  value: number
}

export default function PublicProfilePanel({ value, index }: IPublicProfilePanel) {
  return (
    <TabPanel value={value} index={index}>
      <motion.div
        className='container'
        variants={profileContainer}
        initial='hidden'
        animate='visible'>
        <motion.div className='container' variants={profileItem} initial='hidden' animate='visible'>
          <TabPanelBox>
            <Typography>Account Panel</Typography>
          </TabPanelBox>
        </motion.div>
      </motion.div>
    </TabPanel>
  )
}
