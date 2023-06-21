//Import Dependencies
const {app, BrowserWindow} = require('Electron');
const client = require('discord-rich-presence')('1120853911109120024');

//Discord Rich Presence
client.updatePresence({
  state: 'Browsing',
  startTimestamp: Date.now(),
  largeImageKey: 'twitterlogo',
  instance: true,
});

//Creating the Window
const createWindow = () => {
  //Define a new BrowserWindow
  const win = new BrowserWindow({
    width: 1024,
    height: 512,
    icon: __dirname + '/TwitterLogo.png',
    autoHideMenuBar: true,
  })
  win.loadURL('https://twitter.com');
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow();
});
