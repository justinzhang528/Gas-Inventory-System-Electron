function on_exit_func(){
    const {ipcRenderer} = require('electron')
    ipcRenderer.send('closeApp')
 }