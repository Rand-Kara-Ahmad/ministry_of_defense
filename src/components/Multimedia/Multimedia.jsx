import {Fragment} from "react";
import './MultimediaStyle.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Multimedia = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
            <section className="MultiMedia mb-5 mt-5">
                <div className="container">
                    <h5 className='text-end'>وسائط متعددة</h5>
                    <div>

                        <Slider {...settings}>
                            <div className='card one'>
                                <div className="overlay"></div>
                                <h3>ملفات وثائقية</h3>
                            </div>
                            <div className='card two'>
                                <div className="overlay"></div>
                                <h3>صحف ومجلات</h3>
                            </div>
                            <div className='card one'>
                                <div className="overlay"></div>
                                <h3>ملفات وثائقية</h3>
                            </div>
                            <div className='card one'>
                                <div className="overlay"></div>
                                <h3>ملفات وثائقية</h3>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Multimedia;
