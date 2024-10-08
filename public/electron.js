const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'media/icons/electron.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '..', 'build', 'index.html')}`
  )

  mainWindow.on('closed', () => (mainWindow = null))
}

app.disableHardwareAcceleration()
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})