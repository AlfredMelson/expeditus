export const ROUTES = {
  MORE: [
    { name: 'Save for later', url: '/', icon: 'save' },
    { name: 'Hide questions from', url: '/', icon: 'hide' },
    { name: 'More quesitons like this', url: '/', icon: 'more' },
    { name: 'Fewer questions like this', url: '/', icon: 'fewer' },
  ],
  MORE_AUTHOR: [
    { name: 'Info on', url: '/', icon: 'info' },
    { name: 'Follow', url: '/', icon: 'follow' },
    { name: 'Mute', url: '/', icon: 'mute' },
    { name: 'Block', url: '/', icon: 'block' },
  ],
  MORE_INLINE: [
    { name: 'Share', url: '/taxonomy', icon: 'share' },
    { name: 'Save for later', url: '/', icon: 'save' },
  ],
  ENGAGEMENT: [
    { name: 'Engagement metrics', onclick: 'handleChange1', icon: 'engagement' },
    { name: 'Question activity', onclick: 'handleChange2', icon: 'activity' },
    { name: 'Other', onclick: 'handleChange3', icon: 'other' },
  ],
}
