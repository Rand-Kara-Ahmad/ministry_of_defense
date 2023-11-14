import card1 from "./../../assets/images/box1-leader.png"
import card2 from "./../../assets/images/box2-leader.png"
import card3 from "./../../assets/images/box3-leader.png"
import './OurLeadersStyle.css'

const OurLeaders = () => {

    return (
        <div className="leaders">
            <div className="container d-flex justify-content-center">
                <div className='row d-flex justify-content-center'>
                    <div className={"this-card col-12 col-md-6 col-lg-4"}>
                        <img src={card3} alt=""/>
                        <label>العماد علي حمود عباس</label>
                        <p>نائب القائد العام للجيش والقوات المسلحة - وزير الدفاع</p>
                    </div>
                    <div className={"this-card col-12 col-sm-6 col-md-6 col-lg-4"}>
                        <img src={card2} alt=""/>
                        <label>الفريق بشار حافظ الأسد</label>
                        <p>رئيس الجمهورية العربية السورية
                            القائد العام للجيش والقوات المسلحة</p>
                    </div>
                    <div className={"this-card col-12 col-sm-6 col-md-6 col-lg-4"}>
                        <img src={card1} alt=""/>
                        <label>العماد محمود عبد الوهاب شوا</label>
                        <p>نائب وزير الدفاع</p>
                    </div>
                               </div>
            </div>
        </div>
    );
};

export default OurLeaders;
