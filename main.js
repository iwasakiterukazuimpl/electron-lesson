const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  // ウィンドウを作成
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // index.html をロード
  win.loadFile('index.html')
}

// Electron が起動したらウィンドウ生成
app.whenReady().then(createWindow)

// Rendererから "greet" を受け取る
ipcMain.on("greet", (event, text) => {
    const message = `入力された文字は、${text}です！ Mainで作成されました。`
    event.reply("greet-reply", message)
})

// macOS用の終了処理
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})