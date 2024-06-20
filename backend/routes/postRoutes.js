const express = require('express');
const { addPost, getMyPost, getAllPosts, updatePost, deletePost } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/addPost').post(protect, addPost);
router.route('/myposts').get(protect, getMyPost);
router.route('/posts').get(getAllPosts);
router.route('/updatepost/:id').put(protect, updatePost);
router.route('/deletepost/:id').delete(protect, deletePost)

// router.route('/login').post(authUser);
// router.route('/forgotpassword').put(forgotPassword);
// router.route('/').get(allUsers);

module.exports = router;