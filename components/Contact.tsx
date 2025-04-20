import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className=" bg-indigo-100 w-full h-screen pt-16">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6 ">Contact Us</h2>
      <form className="max-w-xl mx-auto bg-white p-8 rounded shadow text-gray-800">
        <input type="text" placeholder="Your Name" className="w-full mb-4 p-3 border rounded bg-gray-100" />
        <input type="email" placeholder="Your Email" className="w-full mb-4 p-3 border rounded bg-gray-100" />
        <textarea placeholder="Your Message" className="w-full mb-4 p-3 border rounded bg-gray-100" rows={5}></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">Send</button>
      </form>
    </section>
  );
};

export default Contact;