const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let assets = [];

// POST endpoint to create a new asset
app.post('/api/assets', (req, res) => {
    try {
        const asset = {
            dealerID: req.body.dealerID,
            msisdn: req.body.msisdn,
            mpin: req.body.mpin,
            balance: req.body.balance,
            status: req.body.status,
            transAmount: req.body.transAmount,
            transType: req.body.transType,
            remarks: req.body.remarks
        };

        assets.push(asset);
        res.status(201).json({ message: 'Asset created successfully', asset });
    } catch (error) {
        console.error('Error creating asset:', error.message);
        res.status(500).json({ error: 'An error occurred while creating the asset' });
    }
});

// GET endpoint to retrieve all assets
app.get('/api/assets', (req, res) => {
    res.json(assets);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
});
