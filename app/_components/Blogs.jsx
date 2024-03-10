import React from 'react'

function Blogs() {
  return (
    
<div className='grid grid-cols-2 mb-10 pt-4 pl-4 pb-4'>
  
    <div>
      <article className="flex bg-gray-100 transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25 mr-4 mb-4">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
    >
      <span>2023</span>
      <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
      <span>Oct 7</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <img
      alt="twfan alaqsa"
      src="data:image/jpeg;base64,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"
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div
      className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
    >
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
      طوفان الاقصى - المقاومة الفلسطينية تشن هجوما على اسرائيل
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
      يشكل هجوم حماس على إسرائيل في 7 أكتوبر نقطة تحول مهمة في القضية الفلسطينية وميزان القوى في الشرق الأوسط. أنا لا أشير فقط إلى إسرائيل التي تلقي ما معدله طن واحد من القنابل يوميا على غزة دون تمييز بين المدنيين والجنود، ولا العقاب الجماعي للفلسطينيين في غزة، أو المذبحة التي راح ضحيتها آلاف الفلسطينيين كجزء من سياستها الاحتلالية، كما فعلت في الماضي. لأنه بغض النظر عما تفعله إسرائيل، لن يكون هناك شيء على الإطلاق كما هو بالنسبة لها، وسيظل هجوم 7 أكتوبر صدمة كبيرة لعقود.
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <a
        href="/test"
        className="block bg-red-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-400 rounded-sm"
      >
        اكمل القرائة
      </a>
    </div>
  </div>
</article>
    </div>
    <div>
<article className="flex bg-gray-100 transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25 mr-4 mb-4">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
    >
      <span>2023</span>
      <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
      <span>Oct 20</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <img 
      alt="نزوح"
      src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/655e/live/c3e4b5e0-8622-11ee-be54-0fdd91d5b15d.jpg"
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div
      className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
    >
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
        نزوح عشرات آلاف الفلسطينيين من غزة باتجاه رفح
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
      يواصل عشرات آلاف النازحين الفلسطينيين من مدينة غزة ومن سكان أطراف خان يونس الثلاثاء التوجه نحو جنوب القطاع، بعدما أنذرهم الجيش الإسرائيلي بهجوم على المناطق المتواجدين فيها، في حين قالت رئيسة اللجنة الدولية للصليب الأحمر ميريانا سبولياريتش إن ما يحدث بغزة يمثل فشلًا أخلاقيًا واضحًا يواجه المجتمع الدولي.
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <a
        href="/test"
        className="block bg-red-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-400 rounded-sm"
      >
        اكمل القرائة
      </a>
    </div>
  </div>
</article>



    </div>
    <div>
<article className="flex bg-gray-100 transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25 mr-4 mb-4 ">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
    >
      <span>2024</span>
      <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
      <span>feb 7</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <img
      alt=""
      src="https://www.alquds.co.uk/wp-content/uploads/2024/02/new8-730x438.jpg"
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div
      className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
    >
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
        غزة بعد أربعة شهور من الحرب
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
      غزة ـ «القدس العربي»:  في السابع من أكتوبر العام المنصرم بدأت الحرب في قطاع غزة بين الجيش الإسرائيلي وحركة حماس والفصائل الفلسطينية المشاركة معها في هذه الحرب. اليوم تكمل الحرب 4 شهور من عمرها ولا أحد يدري متى ستكون نهايتها ولا علامة تدل على شارة اقترابها من النهاية. هنا في قطاع غزة كل شيء قد تلاشى فلا حياة تستطيع أن ترى مظاهرها أو أدنى متطلباتها ليعيش الناس.
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <a
        href="/test"
        className="block bg-red-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-400 rounded-sm"
      >
        اكمل القرائة
      </a>
    </div>
  </div>
</article>



    </div>
    <div>
<article className="flex bg-gray-100 transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25 mr-4 mb-4 ">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
    >
      <span>2023</span>
      <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
      <span>Oct 7</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <img
      alt=""
      src="https://data.arab48.com/data/news/2024/03/07/640-376/20240307033525.jpg"
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div
      className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
    >
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
        مقرّر أمميّ: استخدام إسرائيل التجويع في غزة "إبادة جماعيّة"
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
      وقال فخري من جنيف، اليوم الخميس، إن سكان غزة يواجهون جوعًا غير مسبوق منذ بداية الحرب الإسرائيلية ضدهم في تشرين الأول/ أكتوبر.

وأضاف المقرر الأممي: "لم نر قط مجتمعًا يموت جراء التجويع بهذه السرعة وبشكل كامل، وما نراه في الوقت الراهن يعتبر مجاعة".

وتابع: "إننا نرى حاليًا أطفالًا في غزة يموتون بسبب سوء التغذية والعطش"، وأضاف: "لم يسبق لنا أن رأينا أطفالا يُدفعون بهذه السرعة إلى سوء التغذية في أي صراع عبر التاريخ الحديث".
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <a
        href="/test"
        className="block bg-red-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-400 rounded-sm"
      >
        اكمل القرائة
      </a>
    </div>
  </div>
</article>



    </div>

  </div>
  )
}

export default Blogs
