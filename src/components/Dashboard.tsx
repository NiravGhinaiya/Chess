import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from './Layout'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Image } from '../assets/image';

const Dashboard = () => {

    const backGroundImage = [Image.slide01, Image.slide02, Image.slide03]

    return (
        <Layout >
            <div className='container'>
                <Swiper
                    direction={"vertical"}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Pagination, Autoplay]}
                    navigation={true}
                    effect="fade"
                    className="mySwiper"
                >
                    {backGroundImage.map(image => (
                        <SwiperSlide key={image}>
                            <div style={{
                                backgroundImage: `url(${image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                height: "100vh",
                                width: "100vw",
                                backgroundColor: 'black'
                            }}></div>
                            <div className='sub-container'>

                                <div className="row align-items-center">
                                    <div className="col-12 text-center text-sm-left">
                                        <div className="intro_layers_wrapper">
                                            <div className="intro_layers">

                                                <div className="intro_layer animated fadeInLeft" data-animation="fadeInLeft" data-delay="150" style={{ visibility: "hidden" }}>
                                                    <h2 className="text-uppercase thin">academic
                                                        <span className="color-main text-capitalize bold">chess</span>
                                                    </h2>
                                                    <p>
                                                        We are dedicated to broadening and developing chess as art, recreation, and
                                                        as a significant element of culture in Northern California.
                                                    </p>
                                                </div>

                                                <div className="many-buttons intro_layer animated fadeIn" data-animation="fadeIn" style={{ visibility: "hidden" }}>
                                                    <a href="/" className="btn btn-maincolor medium-btn">start now</a>
                                                    <a href="/" className="btn btn-outline-darkgrey medium-btn">learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Layout>
    )
}

export default Dashboard
