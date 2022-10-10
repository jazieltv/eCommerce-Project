const url = 'shirts.json';

let data = {
  shirt: 'Jaziel'
}

let fetchData = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8'
  })
}

fetch(url, fetchData)
  .then(function() {
    // Handle response you get from the API
  });