import {Fragment} from "react";
import './OurOrganizationsStyle.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import org_1 from './../../assets/images/en-removebg-preview.png'
import './OurOrganizationsStyle.css'
const OurOrganizations = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Fragment>
            <section className="Org mt-5 mb-5">
                <div className="container">
                    <div className='Org-slid'>
                        <Slider {...settings}>
                            <div className="org-1">
                                <div className="org-1-box">
                                    <img src={org_1} alt=""/>
                                    <p>ادارة المشاريع الانتاجية</p>
                                </div>
                            </div>
                            <div className="org-1">
                                <div className="org-1-box">
                                    <img src={org_1} alt=""/>
                                    <p>ادارة المشاريع الانتاجية</p>
                                </div>
                            </div>
                            <div className="org-1">
                                <div className="org-1-box">
                                    <img src={org_1} alt=""/>
                                    <p>ادارة المشاريع الانتاجية</p>
                                </div>
                            </div>
                            <div className="org-1">
                                <div className="org-1-box">
                                    <img src={org_1} alt=""/>
                                    <p>ادارة المشاريع الانتاجية</p>
                                </div>
                            </div>
                            <div className="org-1">
                                <div className="org-1-box">
                                    <img src={org_1} alt=""/>
                                    <p>ادارة المشاريع الانتاجية</p>
                                </div>
                            </div>
                            <div className="org-1">
                                <div className="org-1-box">
                                    <img src={org_1} alt=""/>
                                    <p>ادارة المشاريع الانتاجية</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default OurOrganizations;
