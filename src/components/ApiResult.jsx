import React from 'react';

function ApiResult({ data }) {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <pre className="whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default ApiResult;
