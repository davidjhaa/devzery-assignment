import React from 'react'

function Headers() {
    return (
        <div className="mt-8 bg-gray-500">
            <button bg-gray-500>+ Add Headers</button>
            <h2 className="text-xl font-semibold mb-4">Headers</h2>
            <div className="bg-gray-700 p-4 rounded-lg text-white font-mono">
                <div>
                    <input type='text' placeholder='Content-Type'/>
                    <input type='text' placeholder='application/json' />
                </div>
                <p>Accept: application/json</p>
                <p>Authorization: aeiuh...</p>
                <p>Accept-Encoding: gzip</p>
                <p>Cache-Control: no-cache</p>
            </div>
        </div>
    )
}

export default Headers