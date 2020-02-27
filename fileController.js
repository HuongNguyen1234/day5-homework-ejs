const fs = require("fs");

let readFile = (path, onReadFileDone) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    onReadFileDone(data);
  });
};

let readFileSync = path => {
  // return JSON.parse(fs.readFileSync(path, "utf-8"));
  return JSON.parse(fs.readFileSync(path, "utf-8"));
};

let writeFile = (path, writeData, onWriteFileDone) => {
  fs.writeFile(path, JSON.stringify(writeData), "utf-8", onWriteFileDone);
};

module.exports = {
  readFile,
  writeFile,
  readFileSync
};
