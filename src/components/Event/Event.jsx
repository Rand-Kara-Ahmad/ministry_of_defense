import './EventStyle.css'
import img1 from './../../assets/images/events/events1.png'
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/js/bootstrap.min.js';

const Event = () => {

    return (
        <Carousel className={"event"}>
            <Carousel.Item>
                <div className={"date"}>حدث اليوم <div className={""} style={{margin:"auto 5%",borderLeft: "1px solid white", height: "2.489vw"}}></div> 1/حزيران/2023</div>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>قمة ثنائية بين سورية والصين بعد غياب طويل </h3>
                    <p>حدث مفصلي في تاريخ العلاقات الثنائية بين البلدين في مواجهة الأوضاع الدولية المفعمة بعوامل عدم الاستقرار, بعد أكثر من خمسة عشر عاماً التقى الرئيس الصيني.. <b className={"text-decoration-underline"}>اقرأ المزيد</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={"date"}>حدث اليوم <div className={""} style={{margin:"auto 5%",borderLeft: "1px solid white", height: "2.489vw"}}></div> 1/حزيران/2023</div>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>قمة ثنائية بين سورية والصين بعد غياب طويل </h3>
                    <p>حدث مفصلي في تاريخ العلاقات الثنائية بين البلدين في مواجهة الأوضاع الدولية المفعمة بعوامل عدم الاستقرار, بعد أكثر من خمسة عشر عاماً التقى الرئيس الصيني.. <b className={"text-decoration-underline"}>اقرأ المزيد</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={"date"}>حدث اليوم <div className={""} style={{margin:"auto 5%",borderLeft: "1px solid white", height: "2.489vw"}}></div> 1/حزيران/2023</div>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>قمة ثنائية بين سورية والصين بعد غياب طويل </h3>
                    <p>حدث مفصلي في تاريخ العلاقات الثنائية بين البلدين في مواجهة الأوضاع الدولية المفعمة بعوامل عدم الاستقرار, بعد أكثر من خمسة عشر عاماً التقى الرئيس الصيني.. <b className={"text-decoration-underline"}>اقرأ المزيد</b></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Event;
