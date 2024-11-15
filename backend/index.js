const express = require('express');
const app = express();

const connectDB = require('./connection/dbConn');
const contactRouter = require('./routes/contactRoute');
const PORT = 3000;
connectDB();

app.use(express.json());
app.use("/api/contacts", contactRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});