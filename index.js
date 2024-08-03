const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Catch-all route to handle requests to non-existent files
app.use((req, res) => {
    res.status(404).send('Error: File Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
