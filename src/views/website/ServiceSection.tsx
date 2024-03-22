import {
  LuBadgeCheck,
  LuRocket,
  LuRotateCcw,
  LuStore,
  LuTruck,
} from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <section id="about" className="w-full container mb-32">
      <h3 className="text-4xl text-center mb-12">
        <span className="mark-z">خدماتنا</span>
      </h3>
      <div className="flex flex-col justify-between items-center gap-5">
        <div className="flex flex-row justify-between items-center gap-5">
          <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuTruck className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">استلام الشحنات</h3>
            <p className="text-[#000000de] text-center text-sm">
              قم بإنشاء شحنتك قبل الساعة 12:00 ظهرآ ويسعدنا الوصول إلى مقركم
              لاستلام الشحنات في نفس اليوم
            </p>
          </div>
          <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuRocket className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">التوصيل في اليوم التالي</h3>
            <p className="text-[#000000de] text-center text-sm">
              نعدك بتسليم البيك أب في اليوم التالي ، اعتمادًا على موقع التسليم
              في المدينة
            </p>
          </div>
          <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuBadgeCheck className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">استبدال الشحنات</h3>
            <p className="text-[#000000de] text-center text-sm">
              حيث يستطيع الراسل تفعيل خيار استبدال الشحنة من المرسل اليه من خلال
              خدمة طرد مقابل طرد.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-5">
          <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuRotateCcw className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">مرتجعات العملاء</h3>
            <p className="text-[#000000de] text-center text-sm">
              تقوم تليجراف باسترجاع الشحنات الخاصة بالعملاء في اسرع وقت ممكن.
            </p>
          </div>
          <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuStore className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">التخزين</h3>
            <p className="text-[#000000de] text-center text-sm">
              تتيح تليجراف خدمة تخزين المنتجات لعملائها مجانا وشحنها بمجرد ابلاغ
              الراسل بوجود شحنة.
            </p>
          </div>
          <div className="w-[350px] min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <FaMoneyBillWave className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">التحصيل النقدي</h3>
            <p className="text-[#000000de] text-center text-sm">
              نقدم خدمات التحصيل النقدي بأكثر من طريقة منها التحويلات البنكية
              والالكترونية وكذلك الاستلام من فروع الشركة او من خلال مندوب نقدا.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
