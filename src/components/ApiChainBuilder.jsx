// src/components/ApiChainBuilder.js
import React, { useState } from 'react';

function ApiChainBuilder({ onApiChain }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onApiChain({ title, body });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Post Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Enter Post Title"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
          Post Body
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Enter Post Body"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start API Chain
      </button>
    </form>
  );
}

export default ApiChainBuilder;
