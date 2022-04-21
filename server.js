const express = require('express');
// runs on localhost:3001
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`local server running on PORT ${PORT}`)
})