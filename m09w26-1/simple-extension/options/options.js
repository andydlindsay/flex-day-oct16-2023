console.log('inside the options file');

// grab the DOM elements
const form = document.getElementById('options-form');
const appTitleInput = document.getElementById('app-title');
const counterInput = document.getElementById('counter');

// listen for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newAppTitle = appTitleInput.value;
  const newCounter = counterInput.value;

  console.log(newAppTitle, newCounter);

  chrome.storage.local.set({
    appTitle: newAppTitle,
    counter: newCounter,
  });
});
