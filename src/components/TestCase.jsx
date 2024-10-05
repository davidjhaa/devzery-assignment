import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoCopyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addApiObject, editApiObject, removeApiObject } from '../redux/apiSlice';

const initialHeaders = [
    { id: 1, key: 'Content-Type', value: 'application/json' },
    { id: 2, key: 'Accept', value: 'application/json' },
    { id: 3, key: 'Authorization', value: 'aeiuhoqoi45h4yk3lyykl46sskkh' },
    { id: 4, key: 'Accept-Encoding', value: 'gzip' },
    { id: 5, key: 'Cache-Control', value: 'no-cache' },
];

const TestCaseForm = () => {
    const dispatch = useDispatch();
    const[title, setTitle] = useState();
    const[priority, setPriority] = useState();
    const[request, setRequest] = useState({});
    const[response, setResponse] = useState({});
    const [headers, setHeaders] = useState(initialHeaders);

    const handleAddApi = () => {
        dispatch(
          addApiObject({
            title: 'Get User Data',
            priority: 'high',
            reqObject: { userId: 1 },
            resObject: { data: [] },
            header: { Authorization: 'Bearer token' },
          })
        );
      };

    const addApiSequence = () => {
        const newId = apiSequences.length + 1;
        setApiSequences([...apiSequences, { id: newId, name: `New API Sequence ${newId}` }]);
    };

    const addHeader = () => {
        const newId = headers.length + 1;
        setHeaders([...headers, { id: newId, key: '', value: '', isEditableKey: true, isEditableValue: true }]);
    };

    const toggleEditableKey = (id) => {
        setHeaders(
            headers.map(header =>
                header.id === id ? { ...header, isEditableKey: !header.isEditableKey } : header
            )
        );
    };

    // Toggle value editability for a specific header
    const toggleEditableValue = (id) => {
        setHeaders(
            headers.map(header =>
                header.id === id ? { ...header, isEditableValue: !header.isEditableValue } : header
            )
        );
    };

    const handleKeyChange = (id, newKey) => {
        setHeaders(
            headers.map(header =>
                header.id === id ? { ...header, key: newKey } : header
            )
        );
    };

    const handleValueChange = (id, newValue) => {
        setHeaders(
            headers.map(header =>
                header.id === id ? { ...header, value: newValue } : header
            )
        );
    };

    return (
        <div className="flex bg-gray-800 min-h-screen rounded-lg">
            <div className='w-auto p-6'>
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-2xl font-semibold mb-4 text-pink-500">New Test Case</h1>
                    <div>
                        <button 
                            onClick={handleAddApi}
                            className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-6 rounded-lg mr-2"
                        >
                            Add
                        </button>
                        <button className="bg-black text-white py-1 px-4 rounded-lg">
                            cancel
                        </button>
                    </div>
                </div>

                <div className="flex bg-gray-800 text-white rounded-lg mx-auto p-4" >
                    <div className='w-[350px]'>
                        <label className="block text-sm font-medium mb-2">Test Case Title</label>
                        <div>
                            <textarea
                                rows="4"
                                placeholder="Describe what this test case is about..."
                                className="w-[320px] bg-gray-700 border border-gray-600 rounded-lg p-2 text-white resize-none"
                            ></textarea>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                            onClick={addApiSequence}
                        >
                            + Add API Sequence
                        </button>
                    </div>
                    <div className='w-[320px]'>
                        <label className="block text-sm font-medium mb-2">Priority</label>
                        <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white">
                            <option>Medium</option>
                            <option>High</option>
                            <option>Low</option>
                        </select>
                        <div className="mt-4">
                            <div className='flex justify-between content-center px-2'>
                                <label className="block text-sm font-medium mb-1">Request</label>
                                <div className='flex gap-2'>
                                    <FiEdit />
                                    <IoCopyOutline />
                                </div>
                            </div>
                            <textarea
                                rows='5'
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 text-white font-mono"
                            >
                            </textarea>
                        </div>
                        <div className="mt-4">
                            <div className='flex justify-between content-center px-2'>
                                <label className="block text-sm font-medium mb-1">Response</label>
                                <div className='flex gap-2'>
                                    <FiEdit />
                                    <IoCopyOutline />
                                </div>
                            </div>
                            <textarea
                                rows='5'
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 text-white font-mono"
                            >
                            </textarea>
                        </div>
                    </div>
                </div>

            </div>
            {/* right half */}
            <div className="w-auto bg-gray-900 px-4 py-4">
                <div className="bg-gray-700 flex justify-center items-center mb-4 rounded-lg">
                    <button
                        onClick={addHeader}
                        className="  text-pink-400 py-2 px-4 rounded-lg"
                    >
                        + Add Header
                    </button>
                </div>
                <div className='mb-3'>
                    <span className='text-lg text-white'>Headers</span>
                </div>
                {headers.map((header) => (
                    <div key={header.id} className="w-full bg-gray-900 rounded-lg mb-4">
                        {/* Key Field */}
                        <div className="w-full flex justify-between bg-gray-600 p-1 rounded-tl-lg rounded-tr-lg">
                            {header.isEditableKey ? (
                                <input
                                    type="text"
                                    value={header.key}
                                    onChange={(e) => handleKeyChange(header.id, e.target.value)}
                                    className="bg-gray-800 text-white rounded-lg w-auto"
                                />
                            ) : (
                                <span className="text-white px-2">{header.key}</span>
                            )}
                            <button
                                onClick={() => toggleEditableKey(header.id)}
                                className="text-gray-300 ml-2"
                            >
                                <FiEdit />
                            </button>
                        </div>

                        {/* Value Field */}
                        <div className="w-full flex justify-between bg-gray-800 p-1 rounded-bl-lg rounded-br-lg">
                            {header.isEditableValue ? (
                                <input
                                    type="text"
                                    value={header.value}
                                    onChange={(e) => handleValueChange(header.id, e.target.value)}
                                    className="bg-gray-900 px-2 text-white rounded-lg"
                                />
                            ) : (
                                <span className="text-gray-400 px-2">{header.value}</span>
                            )}
                            <button
                                onClick={() => toggleEditableValue(header.id)}
                                className="text-gray-300"
                            >
                                <FiEdit />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestCaseForm;