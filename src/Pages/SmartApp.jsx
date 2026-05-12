import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function SmartApp() {
    return (
        <div className="smart-app-page-wrapper">
            <Navbar />
            <main style={{ padding: '160px 0', textAlign: 'center', minHeight: '60vh' }}>
                <div className="container">
                    <h1 className="section-title">Smart Application Development</h1>
                    <p className="section-subtitle mt-4">Ideate, validate, and build digital products quickly with our elite engineering team.</p>
                    <div style={{ marginTop: '50px', padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-grey)' }}>Page Content Coming Soon</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}