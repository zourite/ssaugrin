var consumer_key = '';
var access_token = '';

const userAction = async () => {
    const response = await fetch('https://getpocket.com/v3/get', {
      method: 'POST',
    //   body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }
  