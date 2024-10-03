import React, { useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import ApiResult from './ApiResult';

function ApiWorkflowBuilder() {
  const [users, setUsers] = useState([]);
  const [postData, setPostData] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users from the first API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  // Create a new post using the selected user ID
  const createPost = async (userId, post) => {
    try {
      setLoading(true);
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: post.title,
        body: post.body,
        userId,
      });
      setPostData(response.data);
    } catch (error) {
      setError('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  // Fetch comments by postId
  const fetchComments = async (postId) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      setComments(response.data);
    } catch (error) {
      setError('Failed to fetch comments');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <button
          onClick={fetchUsers}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Fetch Users
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Show list of users */}
      {users.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-bold">Select User for New Post:</h3>
          <ul className="list-disc pl-5">
            {users.map((user) => (
              <li key={user.id} className="mb-2">
                {user.name} ({user.email})
                <PostForm userId={user.id} createPost={createPost} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show post data if available */}
      {postData && (
        <div className="mb-6">
          <h3 className="text-xl font-bold">Post Created:</h3>
          <ApiResult data={postData} />
          <button
            onClick={() => fetchComments(postData.id)}
            className="bg-green-500 text-white p-2 rounded"
          >
            Fetch Comments for this Post
          </button>
        </div>
      )}

      {/* Show comments */}
      {comments.length > 0 && (
        <div>
          <h3 className="text-xl font-bold">Comments:</h3>
          <ApiResult data={comments} />
        </div>
      )}
    </div>
  );
}

export default ApiWorkflowBuilder;
