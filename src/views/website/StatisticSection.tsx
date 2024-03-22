const StatisticSection = () => {
  return (
    <section id="statistic" className="w-full">
      <div className="statistic-background">
        <div className="flex flex-row justify-between gap-10 relative z-10 container">
          <div className="flex-1 flex flex-col justify-between" dir="ltr">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between items-end gap-y-4">
                <h4 className="text-4xl text-white">
                  <span className="mark">148K</span>
                </h4>
                <h4 className="text-2xl text-white">شحنات مسلمة</h4>
              </div>
              <div className="flex flex-col justify-between items-end gap-y-4 mr-5">
                <h4 className="text-4xl text-white">
                  <span className="mark">23</span>
                </h4>
                <h4 className="text-2xl text-white">محافظة مشمولة</h4>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end gap-y-4 mr-5">
              <h4 className="text-4xl text-white">
                <span className="mark">920</span>
              </h4>
              <h4 className="text-2xl text-white">عملاء راضون</h4>
            </div>
          </div>
          <div className="bg-primary flex-1 p-16 text-right">
            <h3 className="text-3xl text-white mb-10">
              ...بعض الإحصائيات التي ستنال رضاك
            </h3>
            <p className="text-sm text-white/90">
              الآن يمكنك الانضمام إلينا والاستمتاع بتجربة توصيل رائدة واحترافية
              بأسعار تنافسية للغاية والاستفادة من جميع خدماتنا المقدمة في هذا
              المجال ، وإليكم بعض إحصائتنا ونجاحاتنا حتى الآن
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;
