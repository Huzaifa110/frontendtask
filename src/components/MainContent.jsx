import React from 'react';
import './MainContent.css';
import FirstGrid from './FirstGrid';
import SecondGrid from './SecondGrid';
import AdmitContainer from './AdmitContainer';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="dashboard-header">
                <span className="dashboard-text">Dashboard</span>
                <span className='right-portion'>
                    <span className='home-icon'></span>
                    <span className="home-heading">Home</span>
                    <span className="arrow"></span>
                    <span className="right-dashboard">Dashboard</span>
                </span>
            </div>
            <FirstGrid />
            <SecondGrid />
            <AdmitContainer />
        </div>
    );
};

export default MainContent;