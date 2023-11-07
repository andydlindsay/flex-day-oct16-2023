let timeRemaining = 10;

const intervalRef = setInterval(() => {
  timeRemaining -= 1;
  console.log(timeRemaining);

  if (timeRemaining <= 0) {
    clearInterval(intervalRef);
  }
}, 500);

// console.log(intervalRef);
