const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define your API routes
app.get('/api/users', (req, res) => {
    setTimeout(() => {
        // Simulating a delay of 2 seconds before sending the response
        const users = ['John', 'Jane', 'Bob'];
        res.json(users);
      }, 2000);
});

app.get('/api/users/data', (req, res) => {
    setTimeout(() => {
        // Simulating a delay of 3 seconds before sending the response
        const data = ['1', '2', '3'];
        res.json(data);
      }, 3000);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});