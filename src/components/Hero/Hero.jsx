import './HeroStyle.css'
import solider from './../../assets/images/Flag.png'
const Hero = () => {

    return (
        <div className="hero">
            <div className="container">
                <div className="text-hero">
                    <h3>حماة الديار عليكم سلام</h3>
                    <p>وزارة الدفاع هي السلطة الإدارية للقوات المسلحة السورية تأسست قبيل الجلاء الفرنسي... <b className={"text-decoration-underline"}>اقرأ المزيد</b></p>
                </div>
                <div className="solider">
                    <img src={solider} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
