import React from 'react';
import TestCaseForm from './components/TestCase';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar />
      <TestCaseForm />
    </div>
  );
}

export default App;
