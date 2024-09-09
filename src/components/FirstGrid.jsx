import React from 'react';
import './FirstGrid.css';
import BiggerLineGraph from './BiggerLineGraph';
import newPatientGraphImage from '../assets/images/newpatientsgraph.png';
import opdGraphImage from '../assets/images/opdgraph.png';
import todaysOperationsGraphImage from '../assets/images/todaysoperationsgraph.png';
import visitorsGraphImage from '../assets/images/visitors-graph-image.png';

const FirstGrid = () => {
    return (
        <div className="grid-container-1">
            <div className="left-grid">
                <div className="grid-item new-patient-container">
                    <div className="new-patient-heading-container">
                        <h2 className="new-patient-heading-text">New Patients</h2>
                        <div className="heading-and-graph-container">
                            <div className="heading-and-graph-container-text">
                                <p className='number'>125</p>
                            </div>
                            <div className="heading-and-graph-container-image">
                                <img src={newPatientGraphImage} alt="image" />
                            </div>
                        </div>
                        <div className="bar-container">
                            <div className="line-gradient-newpatient"></div>
                        </div>
                    </div>
                </div>
                <div className="grid-item opd-patients-container">
                    <div className="new-patient-heading-container">
                        <h2 className="new-patient-heading-text">OPD Patients</h2>
                        <div className="heading-and-graph-container">
                            <div className="heading-and-graph-container-text">
                                <p className='number'>218</p>
                            </div>
                            <div className="heading-and-graph-container-image">
                                <img src={opdGraphImage} alt="image" />
                            </div>
                        </div>
                        <div className="bar-container">
                            <div className="line-gradient-opdsection"></div>
                        </div>
                    </div>
                </div>
                <div className="grid-item todays-operations-container">
                    <div className="new-patient-heading-container">
                        <h2 className="new-patient-heading-text">Today's Operations</h2>
                        <div className="heading-and-graph-container">
                            <div className="heading-and-graph-container-text">
                                <p className='number'>25</p>
                            </div>
                            <div className="heading-and-graph-container-image">
                                <img src={todaysOperationsGraphImage} alt="image" />
                            </div>
                        </div>
                        <div className="bar-container">
                            <div className="line-gradient-todaysoperation"></div>
                        </div>
                    </div>
                </div>
                <div className="grid-item visitors-container">
                    <div className="new-patient-heading-container">
                        <h2 className="new-patient-heading-text">Visitors</h2>
                        <div className="heading-and-graph-container">
                            <div className="heading-and-graph-container-text">
                                <p className='number'>2,479</p>
                            </div>
                            <div className="heading-and-graph-container-image">
                                <img src={visitorsGraphImage} alt="image" />
                            </div>
                        </div>
                        <div className="bar-container">
                            <div className="line-gradient-visitors"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hospital-survey">
                <div className="hospital-survey-header">
                    <div className="hospital-survey-header-left">
                        <p className="hospital-survey-header-left-text">HOSPITAL SURVEY</p>
                    </div>
                    <div className="hospital-survey-header-right">
                        <span className="down-button-admit"></span>
                        <span className="cross-button-admit"></span>
                    </div>
                </div>
                <BiggerLineGraph />
            </div>
        </div>
    );
};

export default FirstGrid;
