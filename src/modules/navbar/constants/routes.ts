export const ROUTES = {
  ADD_PRIMARY: [{ name: 'Ask a question', url: '/ask' }],
  BOTTOM_NAVIGATION_MOBILE: [
    { name: 'Questions', url: '/', value: 'questions' },
    { name: 'Search', url: '/', value: 'search' },
    { name: 'Ask', url: '/ask', value: 'ask' },
    { name: 'Taxonomy', url: '/taxonomy', value: 'taxonomy' },
    { name: 'Notifications', url: '/notifications', value: 'notifications' },
  ],
  NOTIFICATIONS_PRIMARY: [
    { name: 'Messages', url: '/' },
    { name: 'Alerts', url: '/' },
  ],
  NAVIGATION_PRIMARY: [
    { name: 'Questions', url: '/' },
    { name: 'Taxonomy', url: '/taxonomy' },
  ],
  NAVIGATION_SECONDARY: [
    { name: 'For you', url: '/foryou' },
    { name: 'Following', url: '/following' },
  ],
  SUPPORT_PRIMARY: [
    { name: 'Help', url: '/' },
    { name: 'About Auxilium', url: '/' },
  ],
  SUPPORT_SECONDARY: [{ name: 'Send Feedback', url: '/' }],
}
