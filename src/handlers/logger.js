const logger = function(fs, req, res) {
  let logs = [
    "------------------------------------------------",
    `${timeStamp()}`,
    `${req.method}`,
    `${req.url}`,
    `${JSON.stringify(req.headers, null, 2)}`
  ].join("\n");
  console.log(`${req.url}`, `${req.method}`);
  fs.appendFile("./data/log.json");
};
exports.logger = logger;
