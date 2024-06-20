const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
// const rugsRoutes = require('./routes/rugsRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const colors = require("colors");
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json()); // to accept json data

app.use('/api/user', userRoutes);
// app.use('/api/rugs', rugsRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('API is running');
});


const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`.cyan.bold)
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();