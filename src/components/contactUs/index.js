import React from "react";
import Image from "next/image";
import ContactForm from "./contactForm";

const Index = () => {
  return (
    <div className="contact-container-about">
      <div className="contact-wrapper-about">
        <div className="">
          <h1 className="contact-heading">Contact us</h1>
          <p className="font-normal text-[21px] leading-[31.5px] opacity-80 m-0 text-white font-Poppins">
            Get in touch today
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="rounded-full bg-btncolor w-10 h-10 flex items-center justify-center">
              <Image src="/images/map/expand_more.svg" width={24} height={24} alt="show more" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-card-box">
        <div className="contact-left-content">
          <div className="help-box">
            <h2 className="help-heading">How can we help?</h2>
            <p className="help-para">Drop us a line to book a demo, or ask a question</p>
          </div>
          <ContactForm />
        </div>
        <div className="contact-right-content">
          <h3 className="find-heading whitespace-pre">Or find us here:</h3>
          <div className="find-flx-bx">
            <Image src="/images/wtsup-logo.png" alt="" width={40} height={40} />
            <p className="find-sub-heading">+12 3456 7890</p>
          </div>
          <div className="find-flx-bx">
            <Image src="/images/telegram-logo.png" alt="" width={40} height={40} />
            <p className="find-sub-heading">telegram@something</p>
          </div>
          <div className="find-flx-bx">
            <Image src="/images/email-logo.png" alt="" width={40} height={40} />
            <p className="find-sub-heading">info@hemergy.co</p>
          </div>
        </div>
      </div>
      <div className="contact-wather-img" />
    </div>
  );
};

export default Index;
