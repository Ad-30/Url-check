
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const psi = require("psi");
app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());


app.use(bodyParser.json());



app.post('/url', async (req, res) => {
  const { url } = req.body;

  try {
    const options = { key: 'AIzaSyAZ87QCRhssiLv2xKoUu6U-iBpJzBIy3kk' };
    const data = await psi(url, options);
    console.log("Success");
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});







app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
