require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB(); 

const app = express();

app.use(express.json());
app.use(cors({
    'Access-Control-Allow-Origin':'*'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/stores', require('./routes/stores'))
app.use('/api/v1/stores/user', require('./routes/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});