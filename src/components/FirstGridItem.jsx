import React from 'react';

const FirstGridItem = ({ title, number, imageSrc, gradientClass }) => {
    return (
        <div className="grid-item">
            <div className="new-patient-heading-container">
                <h2 className="new-patient-heading-text">{title}</h2>
                <div className="heading-and-graph-container">
                    <div className="heading-and-graph-container-text">
                        <p className="number">{number}</p>
                    </div>
                    <div className="heading-and-graph-container-image">
                        <img src={imageSrc} alt={`${title} graph`} />
                    </div>
                </div>
                <div className="bar-container">
                    <div className={gradientClass}></div>
                </div>
            </div>
        </div>
    );
};

export default FirstGridItem;
