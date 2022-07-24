// const {ipcRenderer} = require('electron');

// // const closeApp = document.getElementById('exit_btn');
// // closeApp.addEventListener('click', () => {
// //     ipcRenderer.send('closeApp ')
// // });

// function on_exit_func(){
//     ipcRenderer.send('closeApp')
// }

function on_exit_func(){
    const {ipcRenderer} = require('electron')
    ipcRenderer.send('closeApp')
 }


function on_export_func(){
    $('#my-label').css("color","red")
}