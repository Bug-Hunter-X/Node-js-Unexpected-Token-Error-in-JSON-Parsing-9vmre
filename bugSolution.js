const express = require('express');
const app = express();
app.get('/', (req, res) => {
  let jsonData = '{"name":"John Doe", "age":30}'; //Valid JSON 
  try {
    const parsedData = JSON.parse(jsonData);
    console.log(parsedData);
    res.send(parsedData);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(500).send('Error parsing JSON');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// The try...catch block handles potential errors during JSON parsing, preventing the application from crashing. 
//It logs the error and sends a 500 error response to the client.