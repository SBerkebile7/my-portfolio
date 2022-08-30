import React from 'react';
import PDF from '../../assets/SB Resume 2022.pdf';

function Resume() {
    return (
        <div>
            <div class="heading-page">
                <div class="container">
                    <div class="col-md-12">
                        <h2>Resume and Proficiencies</h2>
                        <div class="line-dec"></div>
                    </div>
                </div>
            </div>
            <div class="services">
                <div class="container">
                    <div class="col-md-4">
                        <div class="service-item">
                            <div class="text">
                                <h2>Proficiencies</h2>
                                <ul>
                                    <li>ServiceNow</li>
                                    <li>Microsoft Office Suite</li>
                                    <li>Outlook</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-item">
                            <div class="text">
                                <h2>Skills</h2>
                                <ul>
                                    <li>Empowering new-hires</li>
                                    <li>Conflict resolution</li>
                                    <li>Critical thinking</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-item">
                            <div class="text">
                                <h2>Check out my resume</h2>
                                <ul>
                                  <li> <br/> </li>
                                  <a href = {PDF} target='_blank' rel="noreferrer">Download my resume</a>
                                  <li> <br/> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="middle-align">
        //     <h2>Front-End Proficiencies</h2>
            // <ul>
            //     <li>HTML</li>
            //     <li>CSS</li>
            //     <li>Bulma</li>
            //     <li>Bootstrap</li>
            //     <li></li>
            // </ul>

        //     <h2>Back-End Proficiencies</h2>
        //     <ul>
        //         <li>Node</li>
        //         <li>Handlebars</li>
        //         <li>React</li>
        //         <li></li>
        //     </ul>
        //     <a href = {PDF} target='_blank' rel="noreferrer">Download my resume</a>
        // </div>
    );
}

export default Resume;