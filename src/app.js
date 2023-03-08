const express = require("express")
const app = express()
const path = require("path")
const PORT = 3030

// public
app.use(express.static("public"))

// template engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

// routers
const indexRouter = require("./routes/indexRouter");

// routes
app.use("/", indexRouter);

/* app.get("/forms", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/forms.html"))
})

app.get("/register", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get("/login", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/login.html"))
}) */


//  ENTRY POINT
app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT} http://localhost:${PORT}`);
})