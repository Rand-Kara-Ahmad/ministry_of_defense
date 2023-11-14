import {Fragment} from "react";
import './NewsStyle.css'
import line from '../../assets/images/Line 6.png'

const News = () => {

    return (
        <Fragment>
            <div className="LastNews">
                <div className=" justify-content-center">
                    <div><h2>آخر الأخبار</h2></div>

                    <div className="ne-lastnews_cards row justify-content-center">
                        <div className="ne-lastnews-card-1 col-lg-4 col-md-6 col-12">
                            <div className="ne-card-1-img"></div>
                            <div className="ne-card-1-rec">
                                <p className="ne-card-1-text">فعاليات في مختلف المحافظات السورية في يوم الجيش العربي السوري..<a href="#">اقرأ المزيد</a></p>
                                <p className="ne-card-1-banner">أخبار محلية</p>
                            </div>
                        </div>
                        <div className="ne-lastnews-card-1 col-lg-4 col-md-6 col-12">
                            <div className="ne-card-2-img"></div>
                            <div className="ne-card-1-rec">
                                <p className="ne-card-1-text">فعاليات في مختلف المحافظات السورية في يوم الجيش العربي السوري..<a href="#">اقرأ المزيد</a></p>
                                <p className="ne-card-1-banner">أخبار محلية</p>
                            </div>
                        </div>
                        <div className="ne-lastnews-card-1 col-lg-4 col-md-6 col-12">
                            <div className="ne-card-3-img"></div>
                            <div className="ne-card-1-rec">
                                <p className="ne-card-1-text">فعاليات في مختلف المحافظات السورية في يوم الجيش العربي السوري..<a href="#">اقرأ المزيد</a></p>
                                <p className="ne-card-1-banner">أخبار محلية</p>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-3"}><img src={line} style={{width:"70vw",display: "inline-block",margin:"10px"}} alt={""}/><span>   المزيد {">"}</span></div>

                </div>
            </div>
        </Fragment>
    );
};

export default News;
