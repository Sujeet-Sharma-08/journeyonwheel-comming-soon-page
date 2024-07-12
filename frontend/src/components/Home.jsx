import React from "react";
import { useState } from "react";
import video from "../assets/comming-soon-video.mp4";
import toast from "react-hot-toast";

const Home = () => {
  const [formData, setFormData] = useState({ name: "", country_code: "", phone_number: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, country_code, phone_number } = formData;

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!country_code.trim() || !/^\+\d+$/.test(country_code)) {
      toast.error("Please enter a valid country code");
      return;
    }

    if (!phone_number.trim() || !/^\d+$/.test(phone_number)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // If all validations pass
    toast.success("Form submitted successfully");
    console.log(formData);
    setFormData({ name: "", country_code: "", phone_number: "" });

  };

  return (
    <div className="flex justify-center items-center relative w-full md:h-[100vh] lg:h-[100vh] bg-[#006b77]">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-4xl text-center md:text-6xl lg:text-6xl xl:text-[5rem] mt-[10rem] md:-mt-32 xl:mt-0 text-white font-bold">
            WE ARE COMING <strong>SOON!</strong>
          </p>

          <div className="w-full h-full">
            <video src={video} autoPlay loop muted></video>
          </div>

          <div className="flex flex-col gap-4 -mt-5 sm:mt-36">
            <p className="sm-text text-[1rem] md:text-[1.23rem] font-semibold text-white">
              Currently we are under development. Your favourite website will be live soon.
            </p>
            <h3 className="lg-text text-[1.25rem] md:text-[1.56rem] font-bold text-white">
              Drop your details, our agent will get in touch with you soon.
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                onChange={handleInputChange}
                className="py-3 px-2 border text-white border-white rounded-md bg-transparent outline-none"
                name="name"
                value={formData.name}
                type="text"
                placeholder="Enter Your Name"
              />

              <div className="flex gap-1">
                <input
                  className="py-3 w-[4rem] text-center border text-white border-white bg-transparent outline-none rounded-md"
                  name="country_code"
                  value={formData.country_code}
                  type="text"
                  placeholder="+91"
                  onChange={handleInputChange}
                />
                <input
                  className="py-3 px-2 w-[14rem] lg:w-[16.4rem] border text-white border-white bg-transparent outline-none rounded-md"
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  placeholder="Mobile No."
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="bg-[#943dee] mt-2 mb-10 font-semibold text-white py-3 border-none shadow-lg hover:shadow-xl hover:scale-105 duration-300 transition-all w-[12.375rem] sm:ml-[4.4rem] rounded-md">
                Request a Callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
