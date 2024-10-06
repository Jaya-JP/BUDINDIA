const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route
app.get('/', (req, res) => {
    res.render('index'); // Render the 'index.ejs' file
});

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
