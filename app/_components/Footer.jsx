import React from 'react'

function Footer() {
  return (
   /* <footer className="bg-gray-50 lg:grid lg:grid-cols-5 dark:bg-gray-900">
    <div className="relative block h-32 lg:col-span-2 lg:h-full">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEXtHCT////sAAD//frtFiDuKSHtEBzuMjb96OTxW1nsAA7ydWztER3xZFnzd2v3p6Pze3H95d3+7urxaGHvPDPzfXbybGj2nZn6y8fvNSz6xLv719DyaVz4r6bxX1TxX1j4urfuOTzzbVbsABPzc131j4ruIRn5v7b+9fH7zsb0hH783tj4ta7vRT7ydXD2o53wUk7wTD7vQjr2m4/yZk31joHwVVD0iIVIzJDkAAAE3klEQVR4nO3ba2OaOhwGcPkbmYt0nbe2ylrdchCKWp09dd//mx1uCcpFkQpTz/N7JeH6QElCoI0GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDFYZx87G8fR2XE0jY985+3GlE8aKGbTcibN55Qf9NuPeEQCa8dEl4/JKxP0LXSdwsE95U/LD3oq1GcUA82KNJbNLx9i9L7KXo4red27+mFxwWDle0Zr8tGpLfxq8f+LhN+WT7fe1ymJ5bkS7ttWp84l0WwjRMchStPpb6NuiITo9wWaRGu3/umEn6NStb7mxRuUDzPuLhnRPPoMAbRbnhP+1RCXfZG26mEWpvvLskGUbFNn46Rj/2Uh7EKLyJby4KSCfkiP6H2srtNfi+Lq0xo3Mm9TMPzq6uCkglpfCDh3e6dyG1Z/LvCP1O2VNew/oTyamuzKm9EdR9uwr3UmFCXxfMq/0obxjKsOq2oEqgxoap1lyVr7YL0ke1oZl+exjoTNsjymipzmWwmz22/T1Nrwoag1oyqvYIp9Sb0zm+lrT0L7E7sJdRZrr0N7M84MWGVdGqNfNHhBr9JxAl/jAaB0Z6wyO8uM5oNklrECiUUYd88mgpHVc8+rCr6YfdsHFSiethFbL6TSniIM+SMjzNmzL8USUhuu+nRHoJJMv0JZzw67w1pyN7ZOKhF1cOctS2SUNM69JqdvUBC/hhNyoTRql7DH13chFIPWPSUnbD5u1jC7iZnhjU9lpA15OR+Qq9bRe/zbpo5LNMlIPkIkUio/VMsofYjp/z5aELjJSehqTpYSdMSET+bsFlFQnUQKZPTK+FLTPgkV017PP1WRMIbTvhL/ngffk/ryLYgTvhu+Vzn+hKuuZ5Gz6mEIy48antXlHCb1cXg6YThENY5EprW61PCrSVM92bkS9abSZjYG5shIRL+PxLa5L8Xoo7c67/yxzqYkUBynDpO2ApnFEr4IrwWh6tVH4IGaSdhsnHi50g4X/nvhe7V46waiF7cZ1jJo4kTrh4DssU35fNBVsKPvu9DTlrB5ESuYS47Cd/OkbCsvF6bkpXwsIpa/LKQEAkzIOGJCbPGAk9gDo4tYcsGyBGjYttcrHJnuacnZHljZQVtKf+Eh5ayE+EKsg8uqdbIPRO9MuOJYj1vltadiAatnLjAUQcTFcwnNAx+d/2hQJ49uLqn+cbF1smc1d2UGiw2olH9Xa1iZsF4PCdVQOrLko+ZWsKIh+4ZpRrzpP5M+G8avvbT1qUH/PPfvByT2AC5MqDD95eI95UxYLAvXMXImFPz67c0weNbclj5F071YzSMb57FkbFpnVP0eZDgvNY3beXxganyac+HAzLqLMbvfjKDW/Z0eBX/phDfgd492D8SkAcno7nWjfBTs27FX7SdAz2qfD2LjvzZydddzRmP/q5Tj7wXR8gr6Czujr7ki/sYlrrwmeMIF4Q1ggfU+WpJBaoNXQ0jjOVQiPZx4VWv/+ldb7UhXuhKqI8Wtan6ZK9Ed7NW5DhDKlxbxK9+XZV1c+FVjW6JU64Bjx4d2iTHno41n3/fiR/3hgN1Zosx/fU6Ap6MD9w/W7+dZ7T+425uL6Df/xZRrWSIar/uBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBD/gMFDIbCRjioHwAAAABJRU5ErkJggg=="
        alt="zobryalwatan"
        className="absolute inset-0 h-72 w-3/4 object-cover rounded-r-md place-self-center right-40"
      />
    </div>
  
    <div className="px-4 py-8 sm:px-6 lg:col-span-3 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p>
            <span className="text-md uppercase tracking-wide text-gray-500 dark:text-gray-400">
              تواصل معنا
            </span>
  
            <a
              href="#"
              className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl dark:text-white"
            >
              0123456789
            </a>
          </p>
  
          <ul className="mt-6 space-y-1 text-xs text-gray-700 dark:text-gray-200">
            <li>Monday to Friday: 10am - 5pm</li>
            <li>Weekend: 10am - 3pm</li>
          </ul>
  
          <ul className="mt-8 flex gap-6">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">فيسبوك</span>
  
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
  
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">انستجرام</span>
  
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
  
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">Twitter</span>
  
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </li>
  
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">GitHub</span>
  
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
  
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">Dribbble</span>
  
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
  
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">خدماتنا</p>
  
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  1on1 Coaching
                </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Company Review
                </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Accounts Review
                </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  HR Consulting
                </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>
  
          <div>
            <p className="font-medium text-gray-900 dark:text-white">الشركة</p>
  
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  About
                </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Meet the Team
                </a>
              </li>
  
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                Terms & Conditions
              </a>
            </li>
  
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                Privacy Policy
              </a>
            </li>
  
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                Cookies
              </a>
            </li>
          </ul>
  
          <p className="mt-4 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>*/
  
<footer
  class="flex flex-col items-center  text-center text-surface bg-niga text-white ">
    
   
  <div class="container pt-2 ">
    <div class="mb-2 flex justify-center gap-5 space-x-2">
      <a
        href="#!"
        type="button"
        class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out  focus:outline-none focus:ring-0 text-white hover:bg-teal"
        data-twe-ripple-init>
        <span class="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512">
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
      </a>

      <a
        href="#!"
        type="button"
        class="rounded-full p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-teal focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
        data-twe-ripple-init>
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512">
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
      </a>

     

      <a
        href="#!"
        type="button"
        class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-teal focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
        data-twe-ripple-init>
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
      </a>


     
    </div>
  </div>

  <div class="w-full bg-niga px-4 pb-4  text-center">
    © 2023 جميع الحقوق محفوظة : 
    <a href="https://tw-elements.com/"> ضحك افلام  </a>
  </div>
</footer>
  )
}

export default Footer
