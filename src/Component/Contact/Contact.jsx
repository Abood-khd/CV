import emailjs from "emailjs-com";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialMedia from "../Home/SocialMedia";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wlaeejp",
        "template_9favqmp",
        e.target,
        "7vsxXgV8IY1z2bbuE"
      )
      .then(
        (result) => {
          toast.success("Your message has been sent", {
            autoClose: 5000,
          });
        },
        (error) => {
          toast.error("error");

          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div className="col-md-6">
        <h1 className=" mt-5 fw-bold">Contact</h1>

        <p className="text-color mt-5">
          Get in touch or send me an email directly on{" "}
          <span className="fw-bold">youremail@gmail.com</span>
        </p>

        <form className="mt-5 " onSubmit={sendEmail}>
          <div class="mb-3">
            <input
              type="name"
              class="form-control"
              placeholder="Name"
              name="name"
              id="senderName"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="E-mail"
              name="email"
              id="senderEmail"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              placeholder="Message"
              rows="5"
              id="message"
              name="message"
              required
            ></textarea>
          </div>

          <button className=" btn btn-dark mt-3" type="submit">
            Send Message
          </button>

          <div className="arrwwo mt-4">
            <p className="Lets Continue To Projects text-color">
              Go back home{" "}
              <Link className="text-color" to="/">
                <i class="fa-solid fa-arrow-right fa-beat-fade fa-lg mt-5 ms-3"></i>
              </Link>
            </p>
          </div>
          <SocialMedia />
        </form>
      </div>
    </>
  );
}
