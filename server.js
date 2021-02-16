const { errorHandler, normalizePort } = require("./_helpers/errorHandler");
const http = require("http");
const app = require("./app");
const PORT = "8000";

const port = normalizePort(process.env.PORT || PORT);
app.set("port", port);

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe" + address : "port" + port;
  console.log("listening on " + bind);
});

server.listen(port);
