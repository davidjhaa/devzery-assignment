import React, { useState } from 'react';

function PostForm({ userId, createPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      createPost(userId, { title, body });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input
        type="text"
        placeholder="Post Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Post
      </button>
    </form>
  );
}

export default PostForm;
