import React from 'react';
import Dashboard from '../components/dashboard/Dashboard.js'
import TopHeader from '../components/TopHeader/TopHeader.js';

const Admin = () => {
    return (
        <div className='container-fluid'>
        <TopHeader />
        <Dashboard /> 
        </div>
    );
}

export default Admin;
