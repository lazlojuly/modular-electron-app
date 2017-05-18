import { shell } from 'electron'

export const editMenu = {
  label: 'Edit',
  submenu: [
    {role: 'undo'},
    {role: 'redo'},
    {type: 'separator'},
    {role: 'cut'},
    {role: 'copy'},
    {role: 'paste'},
    {role: 'pasteandmatchstyle'},
    {role: 'delete'},
    {role: 'selectall'}
  ]
}

export const viewMenu = {
  label: 'View',
  submenu: [
    {role: 'reload'},
    {role: 'forcereload'},
    {role: 'toggledevtools'},
    {type: 'separator'},
    {role: 'resetzoom'},
    {role: 'zoomin'},
    {role: 'zoomout'},
    {type: 'separator'},
    {role: 'togglefullscreen'}
  ]
}

export const windowMenu = {
  role: 'window',
  submenu: [
    {role: 'minimize'},
    {role: 'close'}
  ]
}

export const helpMenu = {
  role: 'help',
  submenu: [
    {
      label: 'Learn More',
      click () { shell.openExternal('https://mendeley.com') }
    }
  ]
}
