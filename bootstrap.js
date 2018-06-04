const {app, BrowserWindow} = require('electron')

//var app = require('app');
//var BrowserWindow = require('browser-window');

const path = require('path')
const url = require('url')
require('electron-reload')(__dirname);
let win

//require('crash-reporter').start();

//var mainWindow = null;


function createWindow () {
        win = new BrowserWindow({
                'width': 325,
                'height': 400,
                'max-width': 325,
                'max-height': 450,
                'min-width': 325,
                'min-height': 250
        });

        win.loadURL(url.format({
                pathname: path.join(__dirname, './index.html'),
                protocol: 'file:',
                slashes: true
        }))

        win.on('closed',() => {
                win = null;
        })
//      win.openDevTools()

}
app.on('ready', createWindow)


app.on('window-all-closed', function() {
        if (process.platform != 'darwin') {
                app.quit();
        }
});
app.on('activate', () => {
        if (win == null){
                createWindow()
        }
})

//app.on('ready', function() {
//      mainWindow = new BrowserWindow({
//              'width': 325,
//              'height': 324,
//              'max-width': 325,
//              'max-height': 324,
//              'min-width': 325,
//              'min-height': 324
//      });

//      mainWindow.loadUrl('file://' + __dirname + '/index.html');

//      mainWindow.on('closed', function() {
//              mainWindow = null;
//      });
//});
