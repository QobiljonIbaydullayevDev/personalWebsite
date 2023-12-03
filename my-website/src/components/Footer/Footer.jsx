import React from "react";
// import resume from '../../assets/data/resumeData'

export const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products ?
            </h2>
            <a href="#contact">
              <button
                className="bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in-duration-300 py-2 px-4 rounded-[8px]"
              >
                <i class="ri-mail-line"></i>Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              ullam quasi vitae veritatis dolore, blanditiis enim tenetur sed
              quod voluptatum.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">Follow me:</span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1  rounded-[50px] cursor-pointer text-center">
                <a
                  className="text-gray-400 font-[600] text-[18px]"
                  href="https://instagram.com/yoqubovich_2001?igshid=MzMyNGUyNmU2YQ=="
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1  rounded-[50px] cursor-pointer text-center">
                <a
                  className="text-gray-400 font-[600] text-[18px]"
                  href="https://github.com/"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1  rounded-[50px] cursor-pointer text-center">
                <a
                  className="text-gray-400 font-[600] text-[18px]"
                  href="https://t.me/Yoqubovich_2001"
                >
                  <i class="ri-telegram-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1  rounded-[50px] cursor-pointer text-center">
                <a
                  className="text-gray-400 font-[600] text-[18px]"
                  href=" https://www.facebook.com/qobiljon.ibaydullayev.9/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
            <ul className="flex items-center justify-center mt-10 gap-10">
              <li>
                <a className="text-gray-400 font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600]" href="#contact">
                  Contact
                </a>
              </li>
              {/* <li>
                <a className="text-gray-400 font-[600]" href={resume} download="resume">
                  Resume
                </a>
              </li> */}
            </ul>
          </div>
      </div>
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">Q</span>
                <div className="leadin-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">Qobiljon</h2>
                  <p className="text-gray-400  font-[500]  text-[14px]">personal</p>
                </div>
              </div>
            </div>
            <div className="text-gray-400  font-[500]  text-[14px]">Developed by Qobiljon Ibaydullayev. 2023</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
