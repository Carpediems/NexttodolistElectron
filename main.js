const electron = require('electron')
const path = require("path");
const app = electron.app
// require('electron-reloader')(module);
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain
const Menu = electron.Menu

var minWindow = null
app.on('ready',()=>{
    Menu.setApplicationMenu(null)
    minWindow = new BrowserWindow({
        width:1200,
        height:800,
        minHeight:693,
        minWidth:1020,
        title:"测试",
        backgroundColor: '#FFFFFF', // 设置背景颜色为红色
        titleBarStyle: 'hidden',

        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,   //改默认设置  在主进程中设置，允许使用node语法
            contextIsolation: true,  //问题所在！！！！！

        },
        // titleBarOverlay: true
    })

    minWindow.loadURL('http://localhost:3000')
    // const invisPath = path.join(__dirname, './layout.tsx')
    // minWindow.loadFile(invisPath)
    minWindow.webContents.openDevTools()
    minWindow.on('close',()=>{
        minWindow = null
    })
    ipc.on('window-minimize',()=>{
        minWindow.minimize()
    })
    ipc.on('window-maximize',()=>{
        if(minWindow.isMaximized()){
            minWindow.unmaximize()
        }else{
            minWindow.maximize()
        }
    })
    ipc.on('window-close',()=>{
        minWindow.close()
    })
    ipc.on('window-move',(pos)=>{
        minWindow.setPosition(pos.windowX,pos.windowY)
    })
})

