const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, "/data/_template.db"));

let win

function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: '#ffffff',
        autoHideMenuBar: true,
        icon: '',
        show:false
    })

    win.once('ready-to-show', () => {
        win.show()
    })

    win.on('closed', () => {
        db.on("off", () => {
            console.log(db);
            win = null
        })
        db.close();
    })

    //connect to db
    const patient_data = db.all('SELECT id,(name || " " || surname) as namesurname from patients', (err, rows) => {
        for (row of rows) {
            console.log(row.id, row.namusername);
        }

        /*
            DEV ONLY
        */
        //win.loadURL("http://localhost:4200");
        win.loadFile("./pdtyping/src/demo.html");

        /*
            PROD ONLY
                first compile with angular & use ahead of time compiled index.html file
        */
        //win.loadFile(path.join(__dirname,"/pdtyping/dist/assets/index.html"));
    });

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})