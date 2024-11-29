import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import qrCode from 'qrcode'
const app = express()
app.use(cors())
app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
    const { text } = req.body; 
    try {
        const QrCode = await qrCode.toDataURL(text); 
        res.json({ QrCode }); 
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).json({ error: 'Error generating QR code' }); 
    }
});

const PORT = 8000
app.listen(PORT, () => { console.log(`Server is listening at PORT ${PORT}`);
 })