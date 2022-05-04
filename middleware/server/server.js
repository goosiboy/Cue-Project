const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;
const helmet = require("helmet");
const session = require('express-session');
const bodyParser = require("body-parser");
const port = process.env.PORT || 4001;
const index = require("./src/routes/index");

const app = express();

app.use(helmet());

// TODO: replace with generated secret
app.use(session({
    secret: "example",
    name: "cookieSessionId",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 2678400000,
        secure: true,
        sameSite: "strict",
    },
}));

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self' https://www.youtube.com https://youtube.com;"
    );
    next();
});

// Disable 'x-powered-by' to mitigate targeted attacks
app.disable('x-powered-by');

/* BodyParser configurations */
app.use(bodyParser.json({ limit: '200kb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(index);

const httpServer = http.createServer(app);

// TODO: FIX CORS POLICY
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

let interval;

io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);

    socket.on("messageFromClient", function (data) {
        console.log("messageFromClient: " + data.user + " | message : " + data.message);
        io.sockets.emit("messageFromServer", data);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};

httpServer.listen(port, () => console.log(`Listening on port ${port}`));