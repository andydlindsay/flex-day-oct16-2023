const fs = require("fs");

// const fileContents = fs.readFileSync('./index.html', { encoding: 'utf-8' });
// console.log(fileContents.length);

fs.readFile("./index.html", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    // an error happened
    return console.log("err", err);
  }

  const fileOneContents = data;

  fs.readFile("./another.html", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return console.log(err);
    }

    const fileTwoContents = data;

    console.log(fileOneContents.length, fileTwoContents.length);
  });
});

// fs.readFile('./another.html', { encoding: 'utf-8' }, (err, data) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log('another.html length is', data.length);
// });

console.log("bottom of the file");
