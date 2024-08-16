import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({
        dealerID: '',
        msisdn: '',
        mpin: '',
        balance: '',
        status: '',
        transAmount: '',
        transType: '',
        remarks: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/assets', formData);
            console.log('Asset created:', response.data);
            alert('Asset created successfully');
        } catch (error) {
            console.error('Error creating asset:', error);
            alert('Failed to create asset');
        }
    };

    return (
        <div className="App">
            <h1>Create Asset</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="dealerID" placeholder="Dealer ID" value={formData.dealerID} onChange={handleChange} required />
                <input type="text" name="msisdn" placeholder="MSISDN" value={formData.msisdn} onChange={handleChange} required />
                <input type="text" name="mpin" placeholder="MPIN" value={formData.mpin} onChange={handleChange} required />
                <input type="text" name="balance" placeholder="Balance" value={formData.balance} onChange={handleChange} required />
                <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
                <input type="text" name="transAmount" placeholder="Transaction Amount" value={formData.transAmount} onChange={handleChange} required />
                <input type="text" name="transType" placeholder="Transaction Type" value={formData.transType} onChange={handleChange} required />
                <input type="text" name="remarks" placeholder="Remarks" value={formData.remarks} onChange={handleChange} required />
                <button type="submit">Create Asset</button>
            </form>
        </div>
    );
}

export default App;
