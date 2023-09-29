import React from "react";
import "./CheckProgress.css";

const Progress = () => {
    return (
        <section className="Progress-section" id="about">
            <div className="container">
                <div className="section_title center">
                    <p>Your Progress</p>
                    <h2>Progress Bar</h2>
                </div>
                <div className="Progress-item">
                    <div className="Progress-item">
                        <div className="Progress-info">
                            <p>Solved</p>
                            <p>90%</p>
                        </div>
                        <div className="Progress-line" data-percent="90%">
                            <span style={{width: "90%"}}></span>
                        </div>
                    </div>
                    <div className="Progress-item">
                        <div className="Progress-info">
                            <p>Attempted</p>
                            <p>98%</p>
                        </div>
                        <div className="Progress-line" data-percent="98%">
                            <span style={{width: "98%"}}></span>
                        </div>
                    </div>
                    <div className="Progress-item">
                        <div className="Progress-info">
                            <p>Accuracy</p>
                            <p>80%</p>
                        </div>
                        <div className="Progress-line" data-percent="80%">
                            <span style={{width: "80%"}}></span>
                        </div>
                    </div>
                    <div className="Progress-item">
                        <div className="Progress-info">
                            <p>Solved</p>
                            <p>90%</p>
                        </div>
                        <div className="Progress-line" data-percent="90%">
                            <span style={{width: "90%"}}></span>
                        </div>
                    </div>
                    <div className="Progress-item">
                        <div className="Progress-info">
                            <p>Attempted</p>
                            <p>98%</p>
                        </div>
                        <div className="Progress-line" data-percent="98%">
                            <span style={{width: "98%"}}></span>
                        </div>
                    </div>
                    <div className="Progress-item">
                        <div className="Progress-info">
                            <p>Accuracy</p>
                            <p>80%</p>
                        </div>
                        <div className="Progress-line" data-percent="80%">
                            <span style={{width: "80%"}}></span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Progress;