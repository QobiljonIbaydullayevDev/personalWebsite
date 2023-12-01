import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[440px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5988.252225033354!2d69.26465209686044!3d41.37134468659217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cc35f730131%3A0xabfc68fc1c7bbde4!2z0K7QvdGD0YHQsNCx0LDQtC03LCDQotCw0YjQutC10L3RgiAxMDAxOTAsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1701275266205!5m2!1sru!2s"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450] lg: flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full">
                <div className="mb-5">
                <input className="w-full p-3 focus:outline-none rounded-[5px]" type="text" placeholder="Enter your name" />
                </div>

                <div className="mb-5">
                <input className="w-full p-3 focus:outline-none rounded-[5px]" type="email" placeholder="Enter your email" />
                </div>

                <div className="mb-5">
                <input className="w-full p-3 focus:outline-none rounded-[5px]" type="text" placeholder="Subject" />
                </div>

                <div className="mb-5">
                <textarea className="w-full p-3 focus:outline-none rounded-[5px]" rows={3} type="text" placeholder="Write your message" />
                </div>

                <button type="submit" className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-liner duration-150">Send Message</button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};
