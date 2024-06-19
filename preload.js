const { contextBridge, ipcRenderer, remote, shell } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    minimizeWindows:()=>{
        ipcRenderer.send('window-minimize');
    },
    MaximizeWindows:()=>{
        ipcRenderer.send("window-maximize")
    },
    CloseWindow:()=>{
        ipcRenderer.send("window-close")
    }

});
