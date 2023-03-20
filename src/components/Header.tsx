import React from 'react'
import { Image } from '../assets/image'

const Header = () => {
    return (

        <div className="header_absolute ">
            <div className="page_header_wrapper" style={{ height: '101px' }}>
                <header className="page_header">
                    <div className="page-header-contant">
                        <div className='main-tag-row'>
                            <div className='header-first-artical'>
                                <a href="/" className="logo">
                                    <img src={Image.logo} alt="Logo" />
                                </a>
                            </div>
                            <div className='header-second-artical'>
                                <div className='nav-wrap'>
                                    <nav className='top-nav'>
                                        <ul>
                                            <li>
                                                <a href='/' >Home</a>
                                            </li>
                                            <li>
                                                <a href='/' >Pages</a>
                                            </li>
                                            <li>
                                                <a href='/' >Contant</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className='icon-list'>
                                    <div className='text-left'>
                                        <a href='/' >Donate</a>
                                    </div>
                                    <div className='icons-chees'>
                                        <ul>
                                            <li>
                                                <img src={Image.userIcons} />
                                            </li>
                                            <li>
                                                <img src={Image.searchIcon} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>

    )
}

export default Header
