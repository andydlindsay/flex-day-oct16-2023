# M04W09 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* Asynchronous Javascript and XML / AJAJ
* Invented by Microsoft

* eXtensible Markup Language

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

* Javascript is going to make our HTTP requests
* XMLHTTPRequest object (XHR)

```js
$.ajax({
  url: '/tweets',
  method: 'GET',
  success: (data) => {},
  error: (error) => {}
});

$.ajax({
  url: '/tweets',
  method: 'GET',
})
  .then((data) => {})
  .catch((error) => {});

$.get('/tweets')
$.post('/tweets', data).then()
```

Is $.ajax({
  method: GET,
  url: ‘/api/food-items’
)}

Doing the same thing as

$.get(‘/api/food-items’) ?





















