const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./connection/dbConn');
const contactRouter = require('./routes/contactRoute');
const PORT = 3000;
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/contacts", contactRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});