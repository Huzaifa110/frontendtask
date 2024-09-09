import React from 'react';
import './AdmitContainer.css';

const AdmitContainer = () => {
    return (
        <div className='admit-patient-list-container'>
            <div className="header-section-admit">
                <div className='admit-patient-list-heading-container'>
                    <h2 className='admit-patient-list-heading-text'>ADMIT PATIENT LIST</h2>
                </div>
                <div className="right-header-admit">
                    <span className="down-button-admit"></span>
                    <span className="cross-button-admit"></span>
                </div>
            </div>
            <div className='admit-patient-list-table-container'>
                <table className='admit-patient-list-table'>
                    <thead>
                        <tr>
                            <th className='table-head' style={{ width: '82.94px' }}>No</th>
                            <th className='table-head' style={{ width: '293.28px' }}>Name</th>
                            <th className='table-head' style={{ width: '392.67px' }}>Assigned Doctor</th>
                            <th className='table-head' style={{ width: '272.17px' }}>Date of Admit</th>
                            <th className='table-head' style={{ width: '251.38px' }}>Diseases</th>
                            <th className='table-head' style={{ width: '188.52px' }}>Room No</th>
                            <th className='table-head' style={{ width: '194.05px' }}>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='table-data'>1</td>
                            <td className='table-data'>Janes Brincker</td>
                            <td className='table-data'>Dr.Kenny Josh</td>
                            <td className='table-data'>27/05/2016</td>
                            <td>
                                <p className='disease-1'>Influenza</p>
                            </td>
                            <td className='table-data'>101</td>
                            <td>
                                <div className='edit-button-container'>
                                    <span className='edit-pencil-button'>
                                        <p className="edit-pencil"></p>
                                    </span>
                                    <span className='edit-empty-buton'></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='table-data'>2</td>
                            <td className='table-data'>Mark Hay</td>
                            <td className='table-data'>Dr. Mark</td>
                            <td className='table-data'>26/05/2017</td>
                            <td>
                                <p className='disease-2'>Chlorea</p>
                            </td>
                            <td className='table-data'>105</td>
                            <td>
                                <div className='edit-button-container'>
                                    <span className='edit-pencil-button'>
                                        <p className="edit-pencil"></p>
                                    </span>
                                    <span className='edit-empty-buton'></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='table-data'>3</td>
                            <td className='table-data'>Anthony Davie</td>
                            <td className='table-data'>Dr. Cinnabar</td>
                            <td className='table-data'>21/05/2016</td>
                            <td>
                                <p className="disease-3">Amoebiasis</p>
                            </td>
                            <td className='table-data'>106</td>
                            <td>
                                <div className='edit-button-container'>
                                    <span className='edit-pencil-button'>
                                        <p className="edit-pencil"></p>
                                    </span>
                                    <span className='edit-empty-buton'></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='table-data'>4</td>
                            <td className='table-data'>David Perry</td>
                            <td className='table-data'>Dr. Felix</td>
                            <td className='table-data'>20/04/2016</td>
                            <td>
                                <p className="disease-4">Jaundice</p>
                            </td>
                            <td className='table-data'>105</td>
                            <td>
                                <div className='edit-button-container'>
                                    <span className='edit-pencil-button'>
                                        <p className="edit-pencil"></p>
                                    </span>
                                    <span className='edit-empty-buton'></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='table-data'>5</td>
                            <td className='table-data'>Anthony Davie</td>
                            <td className='table-data'>Dr. Beryl</td>
                            <td className='table-data'>24/05/2016</td>
                            <td>
                                <p className="disease-5">Leptospirosis</p>
                            </td>
                            <td className='table-data'>102</td>
                            <td>
                                <div className='edit-button-container'>
                                    <span className='edit-pencil-button'>
                                        <p className="edit-pencil"></p>
                                    </span>
                                    <span className='edit-empty-buton'></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='table-data'>6</td>
                            <td className='table-data'>Alan Gilchrist</td>
                            <td className='table-data'>Dr. Joshep</td>
                            <td className='table-data'>22/05/2016</td>
                            <td>
                                <p className="disease-6">Hepatitis</p>
                            </td>
                            <td className='table-data'>103</td>
                            <td>
                                <div className='edit-button-container'>
                                    <span className='edit-pencil-button'>
                                        <p className="edit-pencil"></p>
                                    </span>
                                    <span className='edit-empty-buton'></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='table-data'>7</td>
                            <td className='table-data'>Mark Hay</td>
                            <td className='table-data'>Dr. Jayesh</td>
                            <td className='table-data'>18/06/2016</td>
                            <td>
                                <p className="disease-7">Typhoid</p>
                            </td>
                            <td className='table-data'>107</td>
                            <td>
                                <div className='edit-button-container'>
                                    <span className='edit-pencil-button'>
                                        <p className="edit-pencil"></p>
                                    </span>
                                    <span className='edit-empty-buton'></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='table-data'>8</td>
                            <td className='table-data'>Sue Woodger</td>
                            <td className='table-data'>Dr. Sharma</td>
                            <td className='table-data'>17/05/2016</td>
                            <td>
                                <p className="disease-8">Malaria</p>
                            </td>
                            <td className='table-data'>108</td>
                            <td>
                                <div className='edit-button-container'>
                                    <span className='edit-pencil-button'>
                                        <p className="edit-pencil"></p>
                                    </span>
                                    <span className='edit-empty-buton'></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdmitContainer