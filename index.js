const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 1000,
    height: 800,
  });
  mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`);
});