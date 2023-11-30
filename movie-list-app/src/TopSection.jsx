import React from 'react';

function TopSection() {
    return (
    <div className="top-section">
        <div className="top-background" style={{ backgroundImage:"url('./src/assets/background-default.jpg')" }}></div>
        <div className="top-portrait" style={{ backgroundImage: "url('./src/assets/portrait-default.jpg')"}}></div>
        <div className="top-title">
            <h2>Johanna Park</h2>
            <h3>Film enthusiast</h3>
        </div>
    </div>
    )
}

export default TopSection;