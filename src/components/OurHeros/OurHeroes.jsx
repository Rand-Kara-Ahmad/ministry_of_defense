import './OurHeroesStyle.css'
import img1 from './../../assets/images/card_1_img.png'
import img2 from './../../assets/images/card_2_img.png'
import img3 from './../../assets/images/card_3_img.png'
import 'bootstrap/dist/js/bootstrap.min.js';
import line from "../../assets/images/Line 6.png";

const OurHeroes = () => {

    return (
        <div className="ads container">
            <div className="d-block">
                <div><h2>أبطال جيشنا</h2></div>
                <div className="ads_cards row justify-content-center">
                    <div className="ads-card">
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <div className={"caption"}>
                            <h3>شهداء معركة الريف الغربي, عنوان للتضحية في وجه الإرهاب </h3>
                            <p>في السابع عشر من نيسان استبسل الملازم أحمد أحمد في مواجهة عدد من المسلحين.. اقرأ المزيد</p>
                        </div>
                    </div>
                    <div className="ads-card">
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="First slide"
                        />
                        <div className={"caption"}>
                            <h3>الذكرى الثلاثين لحرب تشرين التحريرية.. </h3>
                        </div>
                    </div>
                    <div className="ads-card">
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                        />
                        <div className={"caption"}>
                            <h3>أسر الشهداء, تضحية وفداء.. </h3>
                        </div>
                    </div>
                </div>
                <div className={"mt-3"}><img src={line} style={{width: "70vw", display: "inline-block", margin: "10px"}}
                                             alt={""}/><span style={{fontSize:"1.2vw"}}>   المزيد {">"}</span></div>

            </div>
        </div>
    );
};

export default OurHeroes;
