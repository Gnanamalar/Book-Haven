import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to Book Haven - your gateway to a world of stories. Explore curated collections, featured books, and join our vibrant book community for personalized recommendations and exclusive content.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header