import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

export const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor  font-[300] text-[16px]"
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor  font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]  sm:leading-[46px] mt-5"
            >
              I'm Qobiljon Ibaydullayev <br />
              Front end developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in-duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16] border-b border-solid border-smallTextColor"
              >
                see portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem velit consectetur reiciendis quas commodi
              voluptatibus voluptate accusamus inventore harum temporibus!
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor font-[600] text-[15]">
                Follow me:
              </span>
              <span>
                <a
                  className="text-smallTextColor font-[600] text-[18]"
                  href="https://instagram.com/yoqubovich_2001?igshid=MzMyNGUyNmU2YQ=="
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a
                  className="text-smallTextColor font-[600] text-[18]"
                  href="https://github.com/"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  className="text-smallTextColor font-[600] text-[18]"
                  href="https://t.me/Yoqubovich_2001"
                >
                  <i class="ri-telegram-line"></i>
                </a>
              </span>
              <span>
                <a
                  className="text-smallTextColor font-[600] text-[18]"
                  href=" https://www.facebook.com/qobiljon.ibaydullayev.9/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
                <img src={heroImg} alt="hero img" />
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                <div className="mb-10">
                    <h2 className="text-smallTextColor font-[700] text-[32]">
                        <CountUp start={0} end={6} duration={2} suffix=" month +"/>
                    </h2>
                    <h4 className="text-smallTextColor font-[400] text-[18]">
                        Years of Experience
                    </h4>
                </div>

                <div className="mb-10">
                    <h2 className="text-smallTextColor font-[700] text-[32]">
                        <CountUp start={0} end={80} duration={2} suffix="%"/>
                    </h2>
                    <h4 className="text-smallTextColor font-[400] text-[18]">
                        Succes Rate
                    </h4>
                </div>

                <div className="mb-10">
                    <h2 className="text-smallTextColor font-[700] text-[32]">
                        <CountUp start={0} end={2} duration={2} suffix="+"/>
                    </h2>
                    <h4 className="text-smallTextColor font-[400] text-[18]">
                        Happy Clients
                    </h4>
                </div>

                <div className="mb-10">
                    <h2 className="text-smallTextColor font-[700] text-[32]">
                        <CountUp start={0} end={20} duration={2} suffix="+"/>
                    </h2>
                    <h4 className="text-smallTextColor font-[400] text-[18]">
                        Projects Complated
                    </h4>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};
