export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#!">
          {/* <img
            src="/assets/logo.png"
            alt=""
            className="w-36 mx-auto mb-2 dark:hidden"
          />
          <img
            src="/assets/logo_dark.png"
            alt=""
            className="w-36 mx-auto mb-2 hidden dark:block"
          /> */}
          <h1 className="w-28 mx-auto cursor-pointer mb-4 dark:hidden bg-transparent font-bold text-2xl">
            Sri Tamilarasi<span className="text-[#b820e6] font-bold">.</span>
          </h1>
          {/* <img
            src="./assets/logo_dark.png"
            alt="Logo"
            className="w-28 cursor-pointer mr-14 hidden dark:block"
          /> */}
          <h1 className="w-28 mx-auto cursor-pointer mb-4 hidden dark:block bg-transparent font-bold text-2xl text-white">
            Sri Tamilarasi<span className="text-[#b820e6] font-bold">.</span>
          </h1>
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <img
            src="./assets/mail_icon.png"
            alt=""
            className="w-5 dark:hidden"
          />
          <img
            src="./assets/mail_icon_dark.png"
            alt=""
            className="w-5 hidden dark:block"
          />

          <a href="mailto:tamilarasi3086@gmail.com">
           tamilarasi3086@gmail.com
          </a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p>
          © 2026{" "}
          <a href="mailto:tamilarasi3086@gmail.com" target="_blank">
            tamilarasi3086@gmail.com
          </a>{" "}
          • All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/JayapriyaSiakumar">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jayapriya-s-a4ab26115/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
