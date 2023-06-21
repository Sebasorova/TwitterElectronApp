//Import Dependencies
const {app, BrowserWindow, ipcMain} = require('electron');
const client = require('discord-rich-presence')('1108829190654013592');

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
    width: 1280,
    height: 700,
    icon: __dirname + '/TwitterLogo.png',
    autoHideMenuBar: true,
  })
  //Load the Twitter Website
  win.loadURL('https://twitter.com');
}
//When the App is ready then Create the Window
app.whenReady().then(() => {
  createWindow();
});
//If all the windows of the App are closed then the App quits
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
//Debug
app.on('ready', () => {
  console.log('ready');
})
