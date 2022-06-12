import team from 'public/icons/menu/my-team.png'
import about from 'public/icons/menu/about.png'
import home from 'public/icons/menu/home.png'
import tournaments from 'public/icons/menu/my-tournaments.png'
import stats from 'public/icons/menu/my-stats.png'
import image from 'public/icons/default/logo2-1.png'

export const menuItems = [
  { title: "Home", link: '/home', image: home },
  { title: "My Games", link: '/my-games', image: stats },
  { title: "My Teams (In Developing)", link: '/teams', image: team },
  { title: "Tournaments (In Developing)", link: '/tournaments', image: tournaments },
  { title: "About us", link: '/about', image: about },
  { title: "All Games", link: '/all-games'}
]

export const blocksAbout = [
  {
    img: image,
    title: 'EASY way to get information',
    text: 'Quick registration, user-friendly interface, easy site navigation are the components of successful obtaining of necessary and interesting information.',
    order: 'direct',
    scrollY: 343,
  },
  {
    img: image,
    title: 'EASY way to analyze statistics',
    text: "Study detailed statistics - not only yours, but also your team's - goals, assists, accurate and inaccurate passes and much, much more.",
    order: 'reverse',
    scrollY: 712,
  },
  {
    img: image,
    title: 'EASY way to get better',
    text: 'Understand where your strengths and weaknesses are - and improve your game with EASYSTATS!',
    order: 'direct',
    scrollY: 1087,
  },
]

export const menuItemsAction = [
  { id: 0, value: 'goal', label: 'Goal' },
  { id: 1, value: 'assist', label: 'Assist' },
  { id: 2, value: 'foul', label: 'Foul' },
  { id: 4, value: 'shot', label: 'Shot' },
  { id: 5, value: 'pass', label: 'Pass' },
  { id: 6, value: 'key_pass', label: 'Key pass' },
  { id: 7, value: 'dribbling', label: 'Dribbling' },
  { id: 8, value: 'losing_the_ball', label: 'Losing The Ball' },
  { id: 9, value: 'steal', label: 'Steal' },
  { id: 10, value: 'interception', label: 'Interception' },
  { id: 11, value: 'block', label: 'Block' },
  { id: 12, value: 'position_error', label: 'Position Error' },
  { id: 13, value: 'created_moment', label: 'Created Moment' },
  { id: 14, value: 'yellow_card', label: 'Yellow Card' },
  { id: 15, value: 'red_card', label: 'Red Card' }
]
