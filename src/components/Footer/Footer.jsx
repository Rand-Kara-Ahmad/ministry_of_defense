import './FooterStyle.css'
import logo from './../../assets/images/Logo.png'
import li from './../../assets/images/LinkedIn.png'
import fa from './../../assets/images/Facebook.png'
import yo from './../../assets/images/YouTube.png'
import ins from './../../assets/images/Instagram.png'
import x from './../../assets/images/TwitterX.png'
import te from './../../assets/images/Telegram App.png'

const Footer = () => {
    return (
        <div className={"site-footer"}>
            <div className={"container"}>
                <div className={"row "}>
                    <div className={"d-flex footer-logo col-12 col-md-6 col-lg-3"}>
                        <div className={"widget"}>
                            <img className={""} src={logo} alt=""/>
                            <h4>وزارة الدفاع السورية</h4>
                        </div>
                    </div>
                    <div className={"col-12 col-md-6 col-lg-3"}>
                        <div className={"widget"}>
                            <h3>روابط مساعدة</h3>
                            <ul className={"list-unstyled links"}>
                                <li>رئاسة الجمهورية العربية السورية</li>
                                <li>رئاسة مجلس الوزراء</li>
                                <li>وزارة الداخلية</li>
                                <li>وكالة سانا الإخبارية</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-12 col-md-6 col-lg-3"}>
                        <div className={"widget"}>
                            <h3>للإستفسار</h3>
                            <ul className={"list-unstyled links"}>
                                <li>+963 999 999 999</li>
                                <li>abc123@gmail.com</li>
                            </ul>

                            <h3>للشكاوي</h3>
                            <ul className={"list-unstyled links"}>
                                <li>+963 999 999 999</li>
                                <li>ص.ب : 0000</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"social col-12 col-md-6 col-lg-3"}>
                        <div className={"widget"}>
                            <h3>تابعنا على</h3>
                            <ul className={"list-unstyled links"}>
                                <li className={"col-md-4 col-6"} style={{display: "inline flow-root list-item"}}><img src={li} alt=""/></li>
                                <li className={"col-md-4 col-6"} style={{display: "inline flow-root list-item"}}><img src={fa} alt=""/></li>
                                <li className={"col-md-4 col-6"} style={{display: "inline flow-root list-item"}}><img src={yo} alt=""/></li>
                                <li className={"col-md-4 col-6"} style={{display: "inline flow-root list-item"}}><img src={ins} alt=""/></li>
                                <li className={"col-md-4 col-6"} style={{display: "inline flow-root list-item"}}><img src={x} alt=""/></li>
                                <li className={"col-md-4 col-6"} style={{display: "inline flow-root list-item"}}><img src={te} alt=""/></li>
                            </ul>

                            <ul className={"list-unstyled links"}>
                                <h3>روابط مساعدة</h3>
                                <li >رئاسة الجمهورية العربية السورية</li>
                                <li >رئاسة مجلس الوزراء</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>جميع الحقوق محفوظة لصالح وزارة الدفاع السورية 2023©</div>
            </div>
        </div>
    );
};

export default Footer;
