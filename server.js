const http = require("http");
const PORT = 7777;
let app = require("./app");
let server = http.createServer(app);
server.on("error", (error)=>console.log(`****error**** ${error.message}`));
server.listen(PORT, () => console.log(`server listening at ${PORT}`));
