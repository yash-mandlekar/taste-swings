const express = require('express');
const app = express();
const port = 4000;
const cookieParser = require("cookie-parser")
const mongoDB = require('./db')
mongoDB();

app.get('/', (req, res) => {
    res.send("hello world");
})
app.use(
    require("cors")({
        origin: [
            "https://taste-swings.vercel.app",
            "http://localhost:3000",
        ],
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/api', require('./Routes/CreateUsers'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});