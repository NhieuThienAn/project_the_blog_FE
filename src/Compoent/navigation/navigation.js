import React, { useEffect, useState, useContext } from 'react';
import "./navigation.scss"
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../DarkValue/DarkModeContext';
function Navigation(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  function updatePageWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updatePageWidth);
    return () => {
      window.removeEventListener('resize', updatePageWidth);
    };
  }, []);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={darkMode ? 'header dark-mode' : 'header light-mode'}>
        <h4 className={darkMode ? 'header__username dark-mode' : 'header__username light-mode'}>Your name</h4>
        <Link className={darkMode ? 'header__browser dark-mode' : 'header__browser light-mode'} to="/">Blog</Link>
        <Link className={darkMode ? 'header__browser dark-mode' : 'header__browser light-mode'} to="/project">Projects</Link>
        <Link className={darkMode ? 'header__browser dark-mode' : 'header__browser light-mode'} to="/about">About</Link>
        <Link className={darkMode ? 'header__browser dark-mode' : 'header__browser light-mode'} to="/newsLetter">Newsletter</Link>
        <button className={darkMode ? 'header__mode btn_dark-mode ' : "header__mode btn_light-mode"} onClick={handleModeChange}>
          {width > 768 && !darkMode ?
            <div className='svg__display'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z" fill="white" />
                <path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" fill="white" />
              </svg>

            </div>

            :
            <div className='svg__display light-mode'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#090D1F" />
                <path d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z" fill="#090D1F" />
                <path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" fill="#090D1F" />
              </svg>
            </div>

          }
          {width > 768 && !darkMode ?
            <div className='svg__display'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="white" />
              </svg>
            </div>
            :
            <div className='svg__display light-mode'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9793 22.241L11.9793 22.2409L11.9722 22.2406C6.62035 22.0017 2.15035 17.686 1.7787 12.4447L1.77866 12.4442C1.45429 7.94125 4.05835 3.72964 8.26286 1.9614C8.81547 1.73167 9.19101 1.72373 9.43064 1.77165C9.67007 1.81954 9.81772 1.93194 9.90025 2.01741L9.90019 2.01746L9.90639 2.02367C9.99116 2.10843 10.0995 2.25509 10.1442 2.48454C10.1887 2.71296 10.1792 3.06939 9.95178 3.58991L9.95128 3.59107C9.46357 4.71491 9.2195 5.91384 9.22996 7.1434C9.25175 11.8463 13.1486 15.8185 17.8985 16.0097C18.5886 16.0414 19.2652 15.9881 19.9173 15.8724L19.9194 15.872C20.5024 15.7661 20.8651 15.8384 21.0844 15.9351C21.3035 16.0317 21.4219 16.1714 21.4845 16.2729C21.5493 16.3777 21.6232 16.5483 21.6141 16.7885C21.6049 17.0286 21.5109 17.3863 21.1582 17.8625L21.1563 17.865C19.1319 20.6343 15.9128 22.2501 12.4599 22.2501C12.2875 22.2501 12.1322 22.25 11.9793 22.241ZM2.27113 12.4044L2.27122 12.4057C2.62969 17.4243 6.89946 21.5182 11.987 21.7396C15.4443 21.9073 18.7243 20.3307 20.7432 17.5757L20.7433 17.5757L20.7468 17.5707C20.9192 17.3294 21.0111 17.1411 21.0581 17.0157L21.2837 16.4141L20.6452 16.3432C20.514 16.3286 20.3031 16.3182 19.9974 16.3787C19.3054 16.5016 18.5833 16.549 17.8699 16.5205L17.8698 16.5205C12.8528 16.321 8.74916 12.1062 8.71995 7.15865C8.72014 5.84669 8.97644 4.58694 9.49646 3.40409C9.62388 3.1228 9.65268 2.91939 9.66609 2.81213L9.73634 2.25011H9.16995C9.00012 2.25011 8.77385 2.2891 8.46577 2.41936C4.46087 4.1015 1.97631 8.11911 2.27113 12.4044Z" stroke="#090D1F" />
              </svg>
            </div>

          }
        </button>
        <div className='menu__display'>
          {
            darkMode ?
              <svg className='header__menu' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_614_1954)">
                  <path d="M26.7333 14.667H5.26667C4.56711 14.667 4 15.2341 4 15.9337V16.067C4 16.7666 4.56711 17.3337 5.26667 17.3337H26.7333C27.4329 17.3337 28 16.7666 28 16.067V15.9337C28 15.2341 27.4329 14.667 26.7333 14.667Z" fill="white" />
                  <path d="M26.7333 21.333H5.26667C4.56711 21.333 4 21.9001 4 22.5997V22.733C4 23.4326 4.56711 23.9997 5.26667 23.9997H26.7333C27.4329 23.9997 28 23.4326 28 22.733V22.5997C28 21.9001 27.4329 21.333 26.7333 21.333Z" fill="white" />
                  <path d="M26.7333 8H5.26667C4.56711 8 4 8.56711 4 9.26667V9.4C4 10.0996 4.56711 10.6667 5.26667 10.6667H26.7333C27.4329 10.6667 28 10.0996 28 9.4V9.26667C28 8.56711 27.4329 8 26.7333 8Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_614_1954">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              :
              <svg className='header__menu' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_618_707)">
                  <path d="M26.7333 14.667H5.26667C4.56711 14.667 4 15.2341 4 15.9337V16.067C4 16.7666 4.56711 17.3337 5.26667 17.3337H26.7333C27.4329 17.3337 28 16.7666 28 16.067V15.9337C28 15.2341 27.4329 14.667 26.7333 14.667Z" fill="#1A1A1A" />
                  <path d="M26.7333 21.333H5.26667C4.56711 21.333 4 21.9001 4 22.5997V22.733C4 23.4326 4.56711 23.9997 5.26667 23.9997H26.7333C27.4329 23.9997 28 23.4326 28 22.733V22.5997C28 21.9001 27.4329 21.333 26.7333 21.333Z" fill="#1A1A1A" />
                  <path d="M26.7333 8H5.26667C4.56711 8 4 8.56711 4 9.26667V9.4C4 10.0996 4.56711 10.6667 5.26667 10.6667H26.7333C27.4329 10.6667 28 10.0996 28 9.4V9.26667C28 8.56711 27.4329 8 26.7333 8Z" fill="#1A1A1A" />
                </g>
                <defs>
                  <clipPath id="clip0_618_707">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
          }
        </div>
      </div>
    </>
  );
}

export default Navigation;
