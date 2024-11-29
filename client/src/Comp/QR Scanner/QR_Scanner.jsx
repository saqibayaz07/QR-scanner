import React, { useState } from 'react';
import axios from 'axios';
import './qr.css'


export function QR_Scanner() {
    const [text, setText] = useState('');
    const [qrCode, setQrCode] = useState('');

    const generateQRCode = async () => {
        try {
            const response = await axios.post('http://localhost:8000/generate', { text });
            console.log('Response from server:', response); 
            setQrCode(response.data.QrCode); 
            setText(''); 
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    return (
        <>
            <div className="container">
                <h1>QR Code Generator</h1>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text"
                />
                <button onClick={generateQRCode}>Generate QR Code</button>
                {qrCode && (
                    <div>
                        <h2>Your QR Code:</h2>
                        <img src={qrCode} alt="Generated QR Code" />
                    </div>
                )}
            </div>
        </>
    );
}

