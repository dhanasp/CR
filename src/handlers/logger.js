const timeStamp=function(){
  let time=new Date();
  return `${time.toDateString()} ${time.toLocaleString()}`
}

const logger = function(req, res,next) {
  let logs = [
    "------------------------------------------------",
    `${timeStamp()}`,
    `${req.method}`,
    `${req.url}`,
    `${JSON.stringify(req.headers, null, 2)}`
  ].join("\n");
  console.log(`${req.url}`, `${req.method}`);
  req.app.fs.appendFile("./log/request.log",logs,next);
};

exports.logger = logger;
