const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
        text: { type: String, required: true }
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
