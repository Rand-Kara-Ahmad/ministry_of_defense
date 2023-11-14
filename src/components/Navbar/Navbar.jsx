import {Fragment} from "react";
import './NavbarStyle.css';
import logo from './../../assets/images/Logo.png';
import line from './../../assets/images/Line 12.svg';
import { BsSearch} from "react-icons/bs";

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg ">
                <div className="nav-container">
                    <div className="navbar-brand logo" href="#">
                        <img src={logo} alt=""/>
                        <div className="text">
                            <p>وزارة الــدفــــــــــــــــــــــــــــــــــــــــــــاع </p>
                            <p>الجمهورية العربية السورية</p>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto g-42 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link select-home" aria-current="page" href="#">الرئيسية</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">الأخبار</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">نوع الخدمة</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">الإعلانات</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    عن الوزارة
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">قيادتنا</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">ابطال جيشنا</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">وسائط متعددة</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">منظماتنا</a></li>

                                </ul>
                            </li>
                        </ul>

                        <BsSearch className={"text-white search"}/>

                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <a className="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                               aria-controls="offcanvasExample">
                                <span className="navbar-toggler-icon"></span>
                            </a>
                        </button>
                        <div className="lang ">
                            <img src={line} alt="" className='line me-2 ms-2'/>
                            <select name="" id="">
                                <option value="">اللغة العربية</option>
                                <option value="">English</option>
                            </select>
                        </div>
                    </div>


                </div>
            </nav>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <div className="navbar-brand logo" href="#">
                            <img src={logo} alt=""/>
                            <div className="text ">
                                <p className='text-dark'>وزارة الــدفــــــــــــــــــــــــــــــــــــــــــــاع </p>
                                <p className='text-dark'>الجمهورية العربية السورية</p>
                            </div>
                        </div>
                    </h5>
                    <button type="button" className="btn-close" aria-controls="offcanvasExample" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list">
                        <li><a href="#">الرئيسية</a></li>
                        <li><a href="#">الأخبار</a></li>
                        <li><a href="#">نوع الخدمة</a></li>
                        <li><a href="#">الإعلانات</a></li>

                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;
