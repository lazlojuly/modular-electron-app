import { app } from 'electron'

const appMenu = {
  label: app.getName(),
  submenu: [
    {role: 'about'},
    {type: 'separator'},
    {role: 'services', submenu: []},
    {type: 'separator'},
    {role: 'hide'},
    {role: 'hideothers'},
    {role: 'unhide'},
    {type: 'separator'},
    {role: 'quit'}
  ]
}

const additionalEditMenu = [
  { type: 'separator' },
  {
    label: 'Speech',
    submenu: [
      {role: 'startspeaking'},
      {role: 'stopspeaking'}
    ]
  }
]

const additionalWindowMenu = [
  {role: 'zoom'},
  {type: 'separator'},
  {role: 'front'}
]

const appendToMenu = (menu, appendage) => ({
  ...menu,
  submenu: [
    ...menu.submenu,
    ...appendage
  ]
})

export const addDarwinMenuItems = common => ([
  appMenu,
  ...common.map((menu, index) => {
    if (index === 0) {
      return appendToMenu(menu, additionalEditMenu)
    } else if (index === 2) {
      return appendToMenu(menu, additionalWindowMenu)
    } else {
      return menu
    }
  })
])
