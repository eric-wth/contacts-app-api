const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

// CONFIGURATIONS
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {

    res.send('Hello World!')

})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})