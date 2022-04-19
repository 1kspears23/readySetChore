const app = require('./app')

const PORT = 3001;


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Ready Set Chore application." });
    console.log("Hello World")
})
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server! said the READY SET CHORE" });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
