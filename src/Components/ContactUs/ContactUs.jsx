const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <Helmet>
        <title>UrbanEdge | Contact-Us</title>
      </Helmet> */}
      <div className="bg-[#f3f9fc]  gap-4 p-8 mt-8 mb-12 rounded-lg">
        <div className="text-center mb-8">
        <h2 className="text-5xl  font-semibold mb-4 font-rancho text-[#374151]">
          Contact With Us
        </h2>
        <p className="font-raleway text-[#1B1A1AB3] text-sm md:text-base lg:text-base">
        We value your feedback and are here to assist you. If you have any questions, suggestions, or inquiries, please feel free to reach out to us. We aim to respond to all messages within 24 hours.
        </p>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
          <form className="mb-4">
            <div className="flex flex-col md:flex-row lg:flex-row gap-2 mb-3">
              <div className="md:w-1/2 lg:w-1/2">
                <label
                  className="block text-[#131313] text-lg font-medium mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input className="w-full p-2 rounded-md" type="text" id="name" />
              </div>
              <div className="md:w-1/2 lg:w-1/2">
                <label
                  className="block text-[#131313] text-lg font-medium mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input className="w-full p-2 rounded-md" type="email" id="email" />
              </div>
            </div>
            <label
              className="block text-[#131313] text-lg font-medium mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input className="w-full mb-3 p-2 rounded-md" type="text" id="subject" />
            <label
              className="block text-[#131313] text-lg font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              className="w-full  rounded-md"
            ></textarea>
          </form>

          <button
            className="border px-10 py-2 text-lg text-white font-semibold bg-[#2f9fb8]"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Send
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Thank you Sir!!!</h3>
              <p className="py-4">Your message is successfully sended</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="mt-8 ">
          <h2 className="text-4xl font-semibold mb-4 font-rancho">
            Get In Touch With Tropical Tours
          </h2>
          <div className="mb-4 font-raleway">
            <p className="text-[#131313] text-lg font-medium mb-1">
              Office Address:
            </p>
            <span>
              <address>
                Rangpur Jahaj Company,G.L. Ray Road,JSK Commercial Tower,5th
                Floor, Road-No:500,
              </address>
            </span>
          </div >
          <div className="mb-4 font-raleway">
            <p className="text-[#131313] text-lg font-medium mb-1">
              Contact Number:
            </p>{" "}
            <span>+880154236345, +88012123435462</span>
          </div>
          <div className="mb-4 font-raleway">
            <p className="text-[#131313] text-lg font-medium mb-1">
              Email Address:
            </p>{" "}
            <span>tropicaltours@officeinfo.com</span>
          </div>
          </div>
          <div className="font-raleway mb-4">
            <p className="text-[#131313] text-lg font-medium mb-1">
              Career Info:
            </p>{" "}
            <span>
              If you are interested in employment opportunities at Urban Edge
              and raise up your amazing career path with us, please email
              us:apply@tropicaltourse.com
            </span>
          </div>
          <div className="font-raleway">
            <p className="text-[#6c6767] text-lg font-medium mb-1">
              Subscribe Newsletter & Get Company News.
            </p>{" "}
            <span>
              <label className="input input-bordered flex items-center gap-2 ">
                <input type="text" className="grow p-4" placeholder="Enter Your Email" />
                <span className="lg:p-2  badge-info font-rancho text-white rounded-lg">Subscribe Now</span>
              </label>
            </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
