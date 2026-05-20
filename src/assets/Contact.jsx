import React, { useEffect, useState } from 'react';
import AOS from 'aos';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Simple validation
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required!';
    if (!email) newErrors.email = 'Email is required!';
    if (!message) newErrors.message = 'Message is required!';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if any
      return; // If there's any error, stop the form submission
    }

    // If validation passes, show the success message
    console.log({ name, email, message });
    setIsSubmitted(true); // Set state to show the success pop-up

    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-16 leading-normal uppercase text-fuchsia-500"
      >
        Contact Me
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full lg:w-1/2">
        {/* Name and Email */}
        <div className="lg:flex gap-6">
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full my-2 lg:my-0 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-base text-slate-300 placeholder-slate-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full my-2 lg:my-0 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-base text-slate-300 placeholder-slate-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        {/* Message */}
        <textarea
          cols="20"
          rows="8"
          placeholder="Write your message..."
          className="w-full rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-base text-slate-300 placeholder-slate-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

        {/* Submit Button */}
        <button
          type="submit"
          className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-5 px-14 uppercase relative overflow-hidden b_glow font-semibold tracking-wider"
        >
          Submit
        </button>
      </form>

      {/* Success Pop-up */}
      {isSubmitted && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-fuchsia-500">Thank you!</h2>
            <p className="mt-4 text-lg">Your message has been submitted successfully.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 py-2 px-6 bg-fuchsia-800 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
