import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container">
                    <a className="navbar-brand text-white fw-bold" href="/programming-hero">Programming Hero</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/review">Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;