import React, { useState } from 'react'
import { Image } from '../assets/image'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from "redux"
import { showLoginModal } from '../store/actionCreators';
import SingUp from '../views/SingUp';
import { useNavigate } from 'react-router';
import { ArticleState } from '../store/type';

const Header = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const navigate = useNavigate()
    const state: ArticleState = useSelector((state: ArticleState) => state)

    const { isLoginModalOpen, user } = state

    return (
        <>
            <div className='header-slide-content'>
                <div className='header-slide-content-main'>
                    <div className='header-slide-content-icon'>
                        <ul>
                            <li>
                                <img src={Image.userIcons} />
                            </li>
                            <li>
                                <img src={Image.searchIcon} />
                            </li>
                        </ul>
                    </div>
                    <div className='header-button'>
                        <a href='/' >Donate</a>
                    </div>
                </div>
            </div>
            <div className="header_absolute ">
                <div className="page_header_wrapper">
                    <header className="page_header">
                        <div className="page-header-contant">
                            <div className='main-tag-row'>
                                <div className='header-first-artical'>
                                    <a onClick={() => navigate("/")} className="logo">
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
                                                <li><h3>
                                                    {user && user.userName}
                                                </h3>
                                                </li>
                                                <li onClick={() => dispatch(showLoginModal(!isLoginModalOpen))}>
                                                    <img src={Image.userIcons} />
                                                </li>
                                                <li>
                                                    <img src={Image.searchIcon} />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='navigation-menu'>
                                    <img src={Image.navigation} alt='navigation' />
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            {isLoginModalOpen && <SingUp />}
        </>
    )
}

export default Header
