import { MdAttachMoney, MdLocationOn } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { LuGift } from "react-icons/lu";

const FeatureSection = () => {
  return (
    <section id="features" className="w-full container mb-32">
      <div className="features-background">
        <h3 className="text-4xl text-center mb-12">
          <span className="mark-z">مميزاتنا</span>
        </h3>
        <div className="flex flex-row justify-between gap-5 relative z-10">
          <div className="flex flex-col justify-between items-center gap-5">
            <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5 mt-10">
              <div className="bg-primary border-[6px] border-[#ffffffcc] p-5 rounded-full mb-3">
                <MdAttachMoney className="text-white w-12 h-12" />
              </div>
              <h3 className="text-black text-xl mb-1">الدفع عند الاستلام</h3>
              <p className="text-[#000000de] text-center text-sm">
                كذلك تقدم تليجراف خدمات التحصيل النقدي والدفع عند الاستلام كخيار
                لكل عملائها بدون اي رسوم اضافية
              </p>
            </div>
            <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5 mt-12">
              <div className="bg-primary border-[6px] border-[#ffffffcc] p-5 rounded-full mb-3">
                <FaStore className="text-white w-12 h-12" />
              </div>
              <h3 className="text-black text-xl mb-1">التجارة الالكترونية</h3>
              <p className="text-[#000000de] text-center text-sm">
                نحن نتعامل مع كل جانب من جوانب و متطلبات التجارة الإلكترونية
                الخاصة بك, بداية من الاحتفاظ بمنتجاتك وتخزينها بشكل آمن في
                منشآتنا ذات الموقع الاستراتيجي والتأكد من تعبئتها وشحنها بشكل
                صحيح إلى إدارة عملية التحصيلات النقدية و الإرجاع بشكل امن
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
              <div className="bg-primary border-[6px] border-[#ffffffcc] p-5 rounded-full mb-3">
                <MdLocationOn className="text-white w-12 h-12" />
              </div>
              <h3 className="text-black text-xl mb-1">تتبع الشحنات</h3>
              <p className="text-[#000000de] text-center text-sm">
                مراقبة وتتبع جميع شحناتك بداية من تقديم طلب البيك اب و حتى
                التسليم بكل سهولة من خلال موقع الشركة او من خلال التطبيق الخاص
                بالشركة
              </p>
            </div>
            <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5 mt-4">
              <div className="bg-primary border-[6px] border-[#ffffffcc] p-5 rounded-full mb-3">
                <LuGift className="text-white w-12 h-12" />
              </div>
              <h3 className="text-black text-xl mb-1">من الباب الي الباب</h3>
              <p className="text-[#000000de] text-center text-sm">
                تقوم تليجراف باستلام الشحنات من مقر الراسل والتسليم حتي باب
                العميل المحدد من قبل الراسل
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
