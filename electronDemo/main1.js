/**
 * @file file description here.
 * @author winstar
 * @date 2017/12/14
 */

const {app, BrowserWindow, ipcMain, shell} = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index1.html'),
        protocol: 'file:',
        slashes: true
    }));
    shell.beep();
}

ipcMain.on('openFile', (event, path) => {
    const {dialog} = require('electron');
    const fs = require('fs');
    dialog.showOpenDialog((fileNames) => {
        if (fileNames === undefined) {
            console.log('No file selected');
        } else {
            readFile(fileNames[0]);
        }
    });

    function readFile(filepath) {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                alert('An error ocurred reading the file: ' + err.message);
                return;
            }

            event.sender.send('fileData', data);
        })
    }
});

app.on('ready', createWindow);
