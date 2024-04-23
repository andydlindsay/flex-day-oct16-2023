console.log('inside the popup file');

// grab the DOM elements
const appTitle = document.getElementById('app-title');
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');

let count = 0;

chrome.storage.local.get(['appTitle', 'counter'])
  .then((results) => {
    console.log(results);

    appTitle.innerHTML = results.appTitle || 'default title';

    count = results.counter || 0;
    counter.innerHTML = count;
  });

chrome.storage.onChanged.addListener((results, namespace) => {
  console.log(namespace);
  console.log(results);

  if (namespace === 'local' && results.appTitle) {
    appTitle.innerHTML = results.appTitle.newValue;
  }

  if (results.counter) {
    counter.innerHTML = results.counter.newValue;
    count = results.counter.newValue;
  }
});

increment.addEventListener('click', () => {
  count++;
  counter.innerHTML = count;
});
