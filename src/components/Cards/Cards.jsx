import card1 from "./../../assets/images/card-1.png"
import card2 from "./../../assets/images/card-2.png"
import card3 from "./../../assets/images/card-3.png"
import './CardsStyle.css'

const Cards = () => {

    return (
        <div className="this-section">
            <div className="container d-flex justify-content-center">
                <div className='row d-flex justify-content-center'>
                    <div className={"this-card col-12 col-md-6 col-lg-4"}>
                        <div className={"card-border"}></div>
                        <img src={card3} alt=""/>
                        <label>القوى الجوية والدفاع الجوي</label>
                        <p>تمثل القوى الجوية والدفاع الجوي خط الدفاع الأول لصد أي عدوان جوي خارجي.
                            ينقسم سلاح الجو حسب الغرض والمهام إلى طيران بعيد المدى (استراتيجي)، طيران جبهة (تكتيكي).. اقرأ المزيد</p>
                    </div>
                    <div className={"this-card col-12 col-sm-6 col-md-6 col-lg-4"}>
                        <div className={"card-border"}></div>
                        <img src={card2} alt=""/>
                        <label>الــقــــوات البــريــة</label>
                        <p>تعتبر القوات البرية في الجيش العربي السوري النوع الأساسي للقوات المسلحة، وهي من أكثر أنواع القوات عدداَ وتنوعاَ من حيث التسليح وأساليب خوض الأعمال القتالية.. اقرأ المزيد</p>

                    </div>
                    <div className={"this-card col-12 col-sm-6 col-md-6 col-lg-4"}>
                        <div className={"card-border"}></div>
                        <img src={card1} alt=""/>
                        <label>القوى البحرية والدفاع الساحلي</label>
                        <p>تعتبر القوى البحرية والدفاع الساحلي في الجمهورية العربية السورية نوع من أنواع القوات المسلحة المخصص لحماية سواحل البلاد وخطوط المواصلات البحرية ومساندة القوات البرية.. اقرأ المزيد</p>
                    </div>
                               </div>
            </div>
        </div>
    );
};

export default Cards;
