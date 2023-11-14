process.stdin.setEncoding('utf-8');

process.stdin.on('data', (messageFromTerminal) => {
  console.log(messageFromTerminal);
});
