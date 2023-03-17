import React from 'react'

const Header = () => {
    return (

        <div className="header_absolute ">
            {/* <!-- header with two Bootstrap columns - left for logo and right for navigation --> */}
            <div className="page_header_wrapper ds ms bg-transparent affix-top-wrapper" style={{ height: '101px' }}> <header className="page_header ds ms bg-transparent justify-nav-center s-overlay s-py-10 affix-top">

                <div className="container-fluid">

                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-7 col-8">
                            <a href="./" className="logo">
                                <img src="../assets/image/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-5 col-1">
                            <div className="nav-wrap">
                                {/* <!-- main nav start --> */}
                                <nav className="top-nav justify-nav-center" style={{}}>
                                    <ul className="nav sf-menu sf-js-enabled sf-arrows" style={{ touchAction: 'pan-y' }}>


                                        <li className="active">
                                            <a href="index.html" className="sf-with-ul">Home</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul style={{ display: 'none', marginTop: '30px' }}>
                                                <li>
                                                    <a href="index.html">MultiPage</a>
                                                </li>
                                                <li>
                                                    <a href="index-alt.html">MultiPage Alternative</a>
                                                </li>
                                                <li>
                                                    <a href="index_static.html">Static Intro</a>
                                                </li>
                                                <li>
                                                    <a href="index_singlepage.html">Single Page</a>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="">
                                            <a href="about.html" className="sf-with-ul">Pages</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul style={{ display: 'none', marginTop: '30px' }}>


                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="careers.html">Careers</a>
                                                </li>
                                                <li>
                                                    <a href="mission.html">Mission</a>
                                                </li>
                                                <li className="">
                                                    <a href="courses.html" className="sf-with-ul">Courses</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: ' none', marginTop: '30px', left: '100%' }}>
                                                        <li>
                                                            <a href="courses.html">Courses</a>
                                                        </li>
                                                        <li>
                                                            <a href="courses_single.html">Course single</a>
                                                        </li>
                                                    </ul>
                                                </li>


                                                <li>
                                                    <a href="pricing.html">Pricing</a>
                                                </li>


                                                {/* <!-- features --> */}
                                                <li className="">
                                                    <a href="shortcodes_iconbox.html" className="sf-with-ul">Shortcodes</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: 'none', marginTop: '30px', left: '100%' }}>
                                                        <li>
                                                            <a href="shortcodes_typography.html">Typography</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_buttons.html">Buttons</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_pricing.html">Pricing</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_iconbox.html">Icon Boxes</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_progress.html">Progress</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_tabs.html">Tabs &amp; Collapse</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_bootstrap.html">Bootstrap Elements</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_animation.html">Animation</a>
                                                        </li>


                                                    </ul>
                                                </li>
                                                {/* <!-- eof shortcodes --> */}

                                                <li className="">
                                                    <a href="shortcodes_widgets_default.html" className="sf-with-ul">Widgets</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: 'none', marginTop: '30px', left: '100%' }}>
                                                        <li>
                                                            <a href="shortcodes_widgets_default.html">Default Widgets</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_widgets_shop.html">Shop Widgets</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes_widgets_custom.html">Custom Widgets</a>
                                                        </li>
                                                    </ul>

                                                </li>
                                                <li className="">
                                                    <a href="services.html" className="sf-with-ul">Services</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: 'none', marginTop: '30px', left: '100%' }}>
                                                        <li>
                                                            <a href="services.html">Services 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="services2.html">Services 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="service-single.html">Single Service</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* <!-- gallery --> */}
                                                <li className="">
                                                    <a href="gallery-image.html" className="sf-with-ul">Gallery</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: 'none', marginTop: '30px', left: '100%' }}>
                                                        {/* <!-- Gallery image only --> */}
                                                        <li>
                                                            <a href="gallery-image.html" className="sf-with-ul">Image Only</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul style={{ display: 'none', marginTop: '30px' }}>
                                                                <li>
                                                                    <a href="gallery-image-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-image.html">3 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-image-4-cols-fullwidth.html">4 columns fullwidth</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                        {/* <!-- eof Gallery image only --> */}

                                                        {/* <!-- Gallery with title --> */}
                                                        <li>
                                                            <a href="gallery-title.html" className="sf-with-ul">Image With Title</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul style={{ display: 'none', marginTop: '30px' }}>
                                                                <li>
                                                                    <a href="gallery-title-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-title.html">3 column</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-title-4-cols-fullwidth.html">4 columns fullwidth</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* <!-- eof Gallery with title --> */}

                                                        {/* <!-- Gallery with excerpt --> */}
                                                        <li>
                                                            <a href="gallery-excerpt.html" className="sf-with-ul">Image with Excerpt</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul style={{ display: 'none', marginTop: '30px' }}>
                                                                <li>
                                                                    <a href="gallery-excerpt-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-excerpt.html">3 column</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-excerpt-4-cols-fullwidth.html">4 columns fullwdith</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* <!-- eof Gallery with excerpt --> */}


                                                        {/* <!-- Gallery item --> */}
                                                        <li>
                                                            <a href="gallery-single.html" className="sf-with-ul">Gallery Item</a><span className="sf-menu-item-mobile-toggler"></span>
                                                            <ul style={{ display: 'none', marginTop: '30px' }}>
                                                                <li>
                                                                    <a href="gallery-single.html">Style 1</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-single2.html">Style 2</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* <!-- eof Gallery item --> */}
                                                    </ul>
                                                </li>
                                                {/* <!-- eof Gallery --> */}


                                                <li className="">
                                                    <a href="team.html" className="sf-with-ul">Team</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: 'none', marginTop: '30px', left: '100%' }}>
                                                        <li>
                                                            <a href="team.html">Team List</a>
                                                        </li>
                                                        <li>
                                                            <a href="team-single.html">Team Member</a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="">
                                                    <a href="faq.html" className="sf-with-ul">FAQ</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: 'none', marginTop: '30px', left: '100%' }}>
                                                        <li>
                                                            <a href="faq.html">FAQ</a>
                                                        </li>
                                                        <li>
                                                            <a href="faq2.html">FAQ 2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>

                                            </ul>
                                        </li>
                                        {/* <!-- eof pages --> */}


                                        <li>
                                            <a href="#" className="sf-with-ul">Features</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <div className="mega-menu" style={{ display: 'none', left: '-348.422px', marginTop: '30px' }}>
                                                <ul className="mega-menu-row">
                                                    <li className="mega-menu-col">
                                                        <a href="#">Headers</a>
                                                        <ul>
                                                            <li>
                                                                <a href="header1.html">Header Type 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="header2.html">Header Type 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="header3.html">Header Type 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="header4.html">Header Type 4</a>
                                                            </li>
                                                            <li>
                                                                <a href="header5.html">Header Type 5</a>
                                                            </li>
                                                            <li>
                                                                <a href="header6.html">Header Type 6</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col">
                                                        <a href="#">Side Menus</a>
                                                        <ul>
                                                            <li>
                                                                <a href="header-side.html">Push Left</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-right.html">Push Right</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-slide.html">Slide Left</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-slide-right.html">Slide Right</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-sticked.html">Sticked Left</a>
                                                            </li>
                                                            <li>
                                                                <a href="header-side-sticked-right.html">Sticked Right</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col">
                                                        <a href="title1.html">Title Sections</a>
                                                        <ul>
                                                            <li>
                                                                <a href="title1.html">Title section 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="title2.html">Title section 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="title3.html">Title section 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="title4.html">Title section 4</a>
                                                            </li>
                                                            <li>
                                                                <a href="title5.html">Title section 5</a>
                                                            </li>
                                                            <li>
                                                                <a href="title6.html">Title section 6</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col">
                                                        <a href="footer1.html#footer">Footers</a>
                                                        <ul>
                                                            <li>
                                                                <a href="footer1.html#footer">Footer Type 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer2.html#footer">Footer Type 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer3.html#footer">Footer Type 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer4.html#footer">Footer Type 4</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer5.html#footer">Footer Type 5</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer6.html#footer">Footer Type 6</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-col">
                                                        <a href="copyright1.html#copyright">Copyright</a>

                                                        <ul>
                                                            <li>
                                                                <a href="copyright1.html#copyright">Copyright 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright2.html#copyright">Copyright 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright3.html#copyright">Copyright 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright4.html#copyright">Copyright 4</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright5.html#copyright">Copyright 5</a>
                                                            </li>
                                                            <li>
                                                                <a href="copyright6.html#copyright">Copyright 6</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </div>
                                            {/* <!-- eof mega menu --> */}
                                        </li>
                                        {/* <!-- eof features --> */}


                                        {/* <!-- blog --> */}
                                        <li>
                                            <a href="blog-right.html" className="sf-with-ul">Blog</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul style={{ display: 'none', marginTop: '30px' }}>

                                                <li>
                                                    <a href="blog-right.html">Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-left.html">Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-full.html">No Sidebar</a>
                                                </li>


                                                <li>
                                                    <a href="blog-single-right.html" className="sf-with-ul">Post</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: 'none', marginTop: '30px' }}>
                                                        <li>
                                                            <a href="blog-single-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-single-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-single-full.html">No Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>


                                            </ul>
                                        </li>
                                        {/* <!-- eof blog --> */}

                                        {/* <!-- shop --> */}
                                        <li>
                                            <a href="shop-right.html" className="sf-with-ul">Shop</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul style={{ display: 'none', marginTop: '30px' }}>
                                                <li>
                                                    <a href="shop-account-dashboard.html" className="sf-with-ul">Account</a><span className="sf-menu-item-mobile-toggler"></span>
                                                    <ul style={{ display: 'none', marginTop: '30px' }}>

                                                        <li>
                                                            <a href="shop-account-details.html">Account details</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-account-addresses.html">Addresses</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-account-address-edit.html">Edit Address</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-account-orders.html">Orders</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-account-order-single.html">Single Order</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-account-downloads.html">Downloads</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-account-password-reset.html">Password Reset</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-account-login.html">Login/Logout</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="shop-right.html">Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="shop-left.html">Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="shop-product-right.html">Product Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="shop-product-left.html">Product Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="shop-cart.html">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="shop-checkout.html">Checkout</a>
                                                </li>
                                                <li>
                                                    <a href="shop-order-received.html">Order Received</a>
                                                </li>

                                            </ul>
                                        </li>
                                        {/* <!-- eof shop --> */}

                                        {/* <!-- contacts --> */}
                                        <li>
                                            <a href="contact.html" className="sf-with-ul">Contact</a><span className="sf-menu-item-mobile-toggler"></span>
                                            <ul style={{ display: 'none', marginTop: '30px' }}>
                                                <li>
                                                    <a href="contact.html">Contact 1</a>
                                                </li>
                                                <li>
                                                    <a href="contact2.html">Contact 2</a>
                                                </li>
                                                <li>
                                                    <a href="contact3.html">Contact 3</a>
                                                </li>
                                                <li>
                                                    <a href="contact4.html">Contact 4</a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <!-- eof contacts --> */}
                                    </ul>


                                </nav>
                                {/* <!-- eof main nav --> */}
                                <span className=" text-left text-md-right d-none d-xl-block">
                                    <a href="#" className="btn btn-outline-maincolor">donate</a>
                                </span>
                                <ul className="top-includes d-none d-xl-block text-right">
                                    <li>
                                        <a className="login-form-btn" href="#" data-toggle="modal" data-target="#login-form"><i className="far fa-user"></i></a>
                                    </li>
                                    <li>
                                        <a className="contact-form-btn" href="#" data-toggle="modal" data-target="#contact-form"><i className="far fa-envelope"></i></a>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-search"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                                <div className="widget widget_search">
                                                    <form role="search" method="get" className="search-form" action="/">
                                                        <label htmlFor="search-form-top">
                                                            <span className="screen-reader-text">Search for:</span>
                                                        </label>
                                                        <input type="search" id="search-form-top" className="search-field form-control" placeholder="Search keyword" value="" name="search" />
                                                        <button type="submit" className="search-submit">
                                                            <span className="screen-reader-text">Search</span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- header toggler --> */}
                <span className="toggle_menu"><span></span></span>
            </header></div>
        </div >

    )
}

export default Header
