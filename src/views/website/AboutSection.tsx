import { useTranslation } from "react-i18next";
import AboutImg from "../../assets/about.png";
import { LuBadgeInfo } from "react-icons/lu";

const AboutSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="about" className="w-full container mb-32">
      <div className="flex flex-row justify-between items-center">
        <div className="flex-1">
          <img src={AboutImg} alt="about" />
        </div>
        <div
          className={`${
            i18n.language === "en" ? "text-left" : "text-right"
          } flex-1`}
        >
          <h3 className="text-3xl mb-5">
            <span className="mark">من نحن ؟</span>
          </h3>
          {t(
            "شركة تليجراف لخدمات الشحن والبريد السريع, تساهم تليجراف في تنمية المجتمع من خلال توفير مجموعة من الخدمات التجارية التي تدعم خطة التنمية من خلال تقديم خدماتها المتعددة و المتنوعة لعملائها في مجال الشحن والتوصيل وخدمات التحصيل النقدي (C.O.D) ومزيد من الخدمات الاخري في أسرع وقت ممكن و بأسعار تنافسية, حيث تقدم تليجراف جميع خدماتها من خلال مجموعة من الإدارات المحترفة في هذا المجال و كذلك تتشرف تليجراف بتقديم خدمات متنوعة لعملائها في مجال الشحن والتجارة الالكترونية من خلال فروعها او اونلاين حسب احتياج كل عميل."
          )}

          <ul className="w-full mt-10 flex flex-col justify-start items-start">
            <li className="flex flex-row items-start justify-end mt-1 gap-3 w-full">
              <p className="flex-1">
                هي شركة بريدية ولوجستية سريعة النمو مقرها الإسكندرية ، مصر
              </p>
              <LuBadgeInfo className="w-6 h-6 text-primary" />
            </li>
            <li className="flex flex-row items-start justify-end mt-1 gap-3 w-full">
              <p className="flex-1">
                تليجراف هي شركة تدعو التكنولوجيا إلى صناعة الخدمات اللوجستية
                لخلق تجربة توصيل رائدة وسلسة
              </p>
              <LuBadgeInfo className="w-6 h-6 text-primary" />
            </li>
            <li className="flex flex-row items-start justify-end mt-1 gap-3 w-full">
              <p className="flex-1">
                تأسست شركة تليجراف في عام 2019 بهدف تقديم خدمات التوصيل السريع
                والخدمات اللوجستية الرائدة في السوق إلى المنطقة
              </p>
              <LuBadgeInfo className="w-6 h-6 text-primary" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
