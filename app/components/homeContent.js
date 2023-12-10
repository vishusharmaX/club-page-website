import React from 'react';

const CyberSecurityClub = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                    fontFamily: 'Cascadia Code, monospace',
                    color: 'white',
                    padding: '2rem',
                }}
            >
                <div style={{ marginTop: '3rem' }}>

                </div>

                <div style={{ fontSize: '1.5rem',marginBottom: '1rem', maxWidth: '800px' }}>
                    Join VIT Bhopal's Cyber Warrior Club to explore cutting-edge technology and gain valuable cybersecurity knowledge and experience through training, workshops, and collaboration with fellow enthusiasts. All levels of expertise are welcome.
                </div>

                <h1 style={{ fontSize: '2rem', marginTop: '2rem' }}>Who are we ?</h1>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.5', maxWidth: '88%', marginTop: '1rem' }}>
                    A cyber warrior is a well-trained, skilled professional in the information technology or information security industry who manages computer network operations. Their work on infrastructure and skills in problem-solving protect network vulnerabilities.
                </p>
            </div>
        </>
    );
};

export default CyberSecurityClub;
