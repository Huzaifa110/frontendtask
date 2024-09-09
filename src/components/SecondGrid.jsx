import React from 'react'
import './SecondGrid.css';
import LineGraph from './LineGraph';
import StackedBarGraph from './StackedBarGraph';
import PointyLineGraph from './PointyLineGraph';

const SecondGrid = () => {
    return (
        <div className="grid-container-2">
            <div className="new-patient">
                <div className='new-patient-header'>
                    <div className="left-new-patient-header">
                        <h2 className="new-patient-heading">New Patient</h2>
                    </div>
                    <div className="right-new-patient-header"><span className='twenty-five-percent'></span>25% High then last month</div>
                </div>
                <div className="new-patient-summary-container">
                    <div className="overall-growth-container" style={{ marginRight: '20px' }}>
                        <div className="overall-growth-heading">Overall Growth</div>
                        <div className="overall-growth-percentage">35.80%</div>
                    </div>
                    <div className="monthly-container">
                        <div className="monthly-heading">Monthly</div>
                        <div className="monthly-percentage">45.20%</div>
                    </div>
                    <div className="day-container">
                        <div className="day-heading">Day</div>
                        <div className="day-percentage">5.5%</div>
                    </div>
                </div>
                <LineGraph />
            </div>
            <div className="new-patient">
                <div className='new-patient-header'>
                    <div className="left-new-patient-header">
                        <h2 className="new-patient-heading">Heart Surgeries</h2>
                    </div>
                    <div className="right-heart-surgeries-header"><span className='thirty-percent'></span>30% Low then last month</div>
                </div>
                <div className="new-patient-summary-container">
                    <div className="overall-growth-container" style={{ marginRight: '20px' }}>
                        <div className="overall-growth-heading">Overall Growth</div>
                        <div className="overall-growth-percentage">20.60%</div>
                    </div>
                    <div className="monthly-container">
                        <div className="monthly-heading">Monthly</div>
                        <div className="monthly-percentage">65.30%</div>
                    </div>
                    <div className="day-container">
                        <div className="day-heading">Day</div>
                        <div className="day-percentage">4.90%</div>
                    </div>
                </div>
                <StackedBarGraph />
            </div>
            <div className="new-patient">
                <div className='new-patient-header'>
                    <div className="left-new-patient-header">
                        <h2 className="new-patient-heading">Medical Treatment</h2>
                    </div>
                    <div className="right-new-patient-header"><span className='twenty-five-percent'></span>20% High then last month</div>
                </div>
                <div className="new-patient-summary-container">
                    <div className="overall-growth-container" style={{ marginRight: '20px' }}>
                        <div className="overall-growth-heading">Overall Growth</div>
                        <div className="overall-growth-percentage">38.40%</div>
                    </div>
                    <div className="monthly-container">
                        <div className="monthly-heading">Monthly</div>
                        <div className="monthly-percentage">52.49%</div>
                    </div>
                    <div className="day-container">
                        <div className="day-heading">Day</div>
                        <div className="day-percentage">4.70%</div>
                    </div>
                </div>
                <PointyLineGraph />
            </div>
        </div>
    )
}

export default SecondGrid;