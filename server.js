const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/space_platform', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // In production, use hashed passwords!
});

const postSchema = new mongoose.Schema({
    username: String,
    content: String,
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// User registration
app.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'User registered successfully' });
});

// User login
app.post('/login', async (req, res) => {
    const user = await User.findOne(req.body);
    if (user) {
        res.send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

// Post a message
app.post('/posts', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.send({ message: 'Post created successfully' });
});

// Get all posts
app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
