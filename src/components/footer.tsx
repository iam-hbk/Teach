import Image from "next/image";
import Link from "next/link";
import React from "react";
import Newslettrer from "../assets/amico.svg";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="footer bg-base-200 p-10 text-base-content">
      <nav>
        <h6 className="footer-title">Product</h6>
        <Link href={"#privacy-policies"} className="link-hover link">
          Privacy Policies
        </Link>
        <Link href={"#terms-of-use"} className="link-hover link">
          Terms of Service
        </Link>
        <Link href={"#faq"} className="link-hover link">
          FAQ
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Ressources</h6>
        <Link href="#documentation" className="link-hover link">
          Documentation
        </Link>
        <Link href="#case-studies" className="link-hover link">
          Case Studies
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="#about-us" className="link-hover link">
          About Us
        </Link>
        <Link href="#contact-us" className="link-hover link">
          Contact Us
        </Link>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <div className="flex flex-row items-center gap-7">
          <Image
            width={200}
            height={200}
            alt="newsletter-image"
            src={Newslettrer}
            className="h-auto w-auto max-w-[200px] max-h-[200px]"
          />
          <div>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input join-item input-bordered"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
