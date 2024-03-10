import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg: h-2/5 lg:my-6 ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        اذاعة صوت الوطن ترارارارا
        <strong className="font-extrabold text-red-700 sm:block"> الموقع الاخباري الاول عربيا. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
    تابع معنا الاخبار اولا ب اول ومش هتندم يا زميلي , سرعة فائقة بنقل الاخبار ومصداقية عالية
    مش شغلتنا بس احسن من قعدتنا :3
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          انا صح
        </a>

        <a
          className="block w-full rounded px-12 py-3 bg-gray-100 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          انا غلط
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
