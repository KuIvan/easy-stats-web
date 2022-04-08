import team from 'public/icons/menu/my-team.png'
import about from 'public/icons/menu/about.png'
import home from 'public/icons/menu/home.png'
import tournaments from 'public/icons/menu/my-tournaments.png'
import stats from 'public/icons/menu/my-stats.png'
import image from 'public/icons/default/logo2-1.png'

export const menuItems = [
  { title: "Home", link: '/home', image: home },
  { title: "My Stats", link: '/my-stats', image: stats },
  { title: "My Teams", link: '/my-teams', image: team },
  { title: "Tournaments", link: '/tournaments', image: tournaments },
  { title: "About us", link: '/about', image: about },
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
