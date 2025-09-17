const { contextBridge, ipcRenderer } = require('electron')

// セキュアなAPIをレンダラープロセスに公開
contextBridge.exposeInMainWorld('electronAPI', {
  greet: (text) => ipcRenderer.send('greet', text),
  onGreetResponse: (callback) =>
    ipcRenderer.on("greet-reply", (event, message) => callback(message))
})