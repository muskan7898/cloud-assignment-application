const express = require('express');
const path = require('path');

const app = express();

// Serve static content from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
