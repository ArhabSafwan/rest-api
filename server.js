// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express(); 

// Define the port number, using an environment variable if available, or default to 3000
const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})
// Start the server and have it listen on the specified port
app.listen(PORT, () => {
    // Log a message to the console indicating the server is running and on which port
    console.log(`Server is running on ${PORT}`);
});
