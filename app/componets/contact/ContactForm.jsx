"use client";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post("https://formspree.io/f/xdorvyad", form);
    console.log(res);
    if (res.status == 200) {
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
      toast.success("Thank you.");
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div
          data-aos="slide-left"
          data-aos-delay="20"
          data-aos-duration="1500"
          className="mx-10 md:mx-20"
        >
          <h1 className="text-2xl font-bold text-slate-800 mb-5">
            Sent Me A Note
          </h1>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                className="p-3 border-2 border-slate-300 rounded-md w-full focus:border-violet-700  md:me-2  text-slate-700 placeholder:text-violet-400"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full md:w-1/2 mt-5 md:mt-0">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                placeholder="Email"
                className="p-3 border-2 border-slate-300 rounded-md w-full  md:ms-2  placeholder:text-violet-400 text-slate-700"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div>
            <textarea
              cols="30"
              rows="5"
              name="message"
              id="message"
              defaultValue={form.message}
              placeholder="Tell me more about your needs..."
              className="w-full mt-5 rounded-md border-2 border-slate-300  placeholder:text-violet-400 text-slate-700"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="text-center mt-3">
            <button
              type="submit"
              className={`rounded-3xl transition-all ease-out delay-100 ${
                loading ? "bg-red-400" : "bg-violet-700"
              }   text-white px-4 py-3 shadow-md shadow-violet-500 hover:bg-red-400`}
            >
              {!loading ? "Message Me" : "Messaging...."}
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
