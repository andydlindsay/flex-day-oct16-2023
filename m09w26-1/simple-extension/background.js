console.log('inside the background script');

// run the app on icon click
// chrome.action.onClicked.addListener(() => {
//   console.log('icon was clicked on');
// });

// fetch data
// fetch('https://www.dnd5eapi.co/api/classes')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   });

// set default values in storage
// chrome.storage.local.set({
//   appTitle: 'welcome to the app',
//   counter: -10,
// });

// do things on a loop/timer
chrome.alarms.create('every 5 seconds', {
  // delayInMinutes: 10, // optional
  periodInMinutes: 5 / 60, // optional
  // when: 151837947123907 // optional
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm);

  if (alarm.name === 'every 5 seconds') {
    // do something

    chrome.notifications.create('whatever', {
      title: 'fancy title for notification',
      message: 'wake up! it is time for work',
      iconUrl: 'images/icon.png',
      type: 'basic' // 'basic', 'image', 'list', 'progress'
    });

  }
});
