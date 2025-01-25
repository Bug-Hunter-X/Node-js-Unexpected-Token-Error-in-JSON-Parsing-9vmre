const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Uncommon Error: Unexpected token } in JSON at position 1234
//This error is not directly related to the express.js code, but can occur when using a JSON parsing library (like JSON.parse())
//and trying to parse invalid JSON data.  The position indicates the point of the error in the JSON string. 
//It often involves a missing closing bracket or brace, extra commas, or invalid characters.