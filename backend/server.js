const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const colors = require("colors");
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json()); // to accept json data

app.use(cors({
    origin: ["http://localhost:3000", "https://banao-mern-task2-frontend.onrender.com"]
}));


app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

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