require('dotenv').config();

const express = require('express');
const app = express();
// const stripe = require('stripe')('sk_test_51O52b5Aln7fup2uKNt5SJjDPUKGMaosS2YkyX0RlADSKMh7FdfvEF1frqUuLaeQM8DKL8x9AQhxR2nIehq77HyWw00cVVN31Ny');
const morgan = require('morgan');
const cors = require('cors');

// MIDDLEWARE 
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('first page');
});

const PORT = process.env.PORT || 5253;

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
