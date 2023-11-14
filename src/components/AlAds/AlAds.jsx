import './AlAdsStyle.css'
import img1 from './../../assets/images/Rectangle 50.png'
import img2 from './../../assets/images/001 1.png'
import img3 from './../../assets/images/7-116-660x330 1.png'
import 'bootstrap/dist/js/bootstrap.min.js';
import line from "../../assets/images/Line 6.png";

const AlAds = () => {

    return (
        <div className="ads container">
            <div className="d-block">
                <div><h2>الإعلانات</h2></div>
                <div className="ads_cards row justify-content-center">
                    <div className="ads-card">
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <div className={"caption"}>
                            <h3>قمة ثنائية بين سورية والصين بعد غياب طويل </h3>
                            <p>حدث مفصلي في تاريخ العلاقات الثنائية بين البلدين في مواجهة الأوضاع الدولية المفعمة بعوامل
                                عدم الاستقرار, بعد أكثر من خمسة عشر عاماً التقى الرئيس الصيني.. <b
                                    className={"text-decoration-underline"}>اقرأ المزيد</b></p>
                        </div>
                    </div>
                    <div className="ads-card">
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="First slide"
                        />
                        <div className={"caption"}>
                            <h3>قمة ثنائية بين سورية والصين بعد غياب طويل </h3>
                        </div>
                    </div>
                    <div className="ads-card">
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                        />
                        <div className={"caption"}>
                            <h3>قمة ثنائية بين سورية والصين بعد غياب طويل </h3>
                        </div>
                    </div>
                </div>
                <div className={"mt-3"}><img src={line} style={{width: "70vw", display: "inline-block", margin: "10px"}}
                                             alt={""}/><span style={{fontSize:"1.2vw"}}>   المزيد {">"}</span></div>

            </div>
        </div>
    );
};

export default AlAds;
