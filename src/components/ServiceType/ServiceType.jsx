import './ServiceTypeStyle.css'
import {Carousel} from "react-bootstrap";
import img1 from "../../assets/images/service.png";

const ServiceType = () => {

    return (
        <div className={"serviceType container"}>
            <div><h2>نوع الخدمة العسكرية</h2></div>
            <div className={"row justify-content-center p-0"}>
                <div className={"details col-md-5 col-12"}>
                    <div className={"dash"}></div>
                    <div className={"d-flex pb-2"}><h3> المكلفون</h3></div>
                    <p className={"d-block desc"}>خدمة العلم أو (الخدمة الإلزامية) مرحلة هامة وأساسية من مراحل حياتك أيها الشاب السوري، تكتسب من خلالها شرف الانتساب إلى القوات المسلحة لتصبح أحد رجال الجيش العربي السوري الأشداء المؤتمنون على السلاح, المؤهلون للدفاع عن أرض الوطن.

                        فالجيش العربي السوري مدرسة وطنية تمنحك الفرصة للتعرف على أصدقاء جدد، وفيها تشتد صلابتك البدنية والمعنوية وتصبح رجلاَ حقيقياَ قادراَ على إثبات ذاتك وجدارتك واكتشاف قدراتك.</p>
                    <button>اقرأ المزيد</button>
                </div>
                <Carousel className={"d-flex col-md-7 col-12 p-0"}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default ServiceType;
