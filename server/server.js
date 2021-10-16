const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; 



app.use(express.static(path.resolve(__dirname, '../public')));


//testing server
app.get('/', (req, res) => {
    console.log('AHHHHHHHH');
  });







//server listening on port 3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;