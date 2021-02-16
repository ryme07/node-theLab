const http = require("http");
const app = require("./app");
const PORT = "8000";

app.set("port", process.env.PORT || PORT);
const server = http.createServer(app);

server.listen(process.env.PORT || PORT);
console.log(`Port listen - ${PORT}`);
