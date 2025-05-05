import asyncHandler from "express-async-handler";
import { Blog } from "../models/blog.js";

const allPosts = asyncHandler(async (req, res) => {
	try {
		const posts = await Blog.find({});
		if (posts && posts.length > 0) {
			res.json({ status: true, data: posts, message: "Posts retrieved" });
		} else {
			res.json({ status: false, message: "No Post Found" });
		}
	} catch (error) {
		res.status(500).json({ status: false, message: error.message });
	}
});

const singlePost = asyncHandler(async (req, res) => {
	try {
		const post = await Blog.findById(req.params.postID);
		if (post) {
			res.json({ status: true, data: post, message: "Posts retrieved" });
		} else {
			res.json({ status: false, message: "No Post Found" });
		}
	} catch (error) {
		res.status(500).json({ status: false, message: error.message });
	}
});

const createPost = asyncHandler(async (req, res) => {
	try {
				const { author, message } = req.body.formData;
				const newPost = await new Blog({
					message, 
					author
				});

				const savePost = await newPost.save();
				if (savePost) {
					res.json({
						status: true,
						data: savePost,
						message: "Post created and saved",
					});
				} else {
					res.json({ status: false, message: "Unable to create Post" }); 
				}
	} catch (error) {
		res.status(500).json({ status: false, message: error.message });
	}
});

const updatePost = asyncHandler(async (req, res) => {
	try {
    const {formData} = req.body
    const post = await Blog.findById(req.params.postID)
    if(post){
      const updatePost = await Blog.findByIdAndUpdate(post._id, {
        message: formData.message ? formData.message : post.message,
        author: formData.author ? formData.author : post.author,
      },
      {new: true, useFindAndModify: false})
      if(updatePost){
        res.json({status: true, message: "post updated successfully"})
      }else{
        res.json({status: false, message: "Post not updated"})
      }
    }else{
      res.json({status: false, message: "Post not found"})
    }
	} catch (error) {
		res.status(500).json({ status: false, message: error.message });
	}
});

const deletePost = asyncHandler(async (req, res) => {
	try {
    const post = await Blog.findById(req.params.postID)
    if(post){
      const deletePost = await Blog.findByIdAndDelete(post._id)
      if(deletePost){
        res.json({status: true, message: "post deleted successfully"})
      }else{
        res.json({status: false, message: "Post not deleted"})
      }
    }else{
      res.json({status: false, message: "Post not found"})
    }
    
	} catch (error) {
		res.status(500).json({ status: false, message: error.message });
	}
});


export { allPosts, singlePost, createPost, updatePost, deletePost };
