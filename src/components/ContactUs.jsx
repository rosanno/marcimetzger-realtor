import React, { useState } from "react";
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          CALL OR VISIT US
        </h1>

        <motion.div
          className="h-1 bg-blue-600 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 hover:shadow-blue-100 transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-linear-to-b from-blue-600 to-indigo-600 rounded-full"></div>
              Send a Message
            </h2>

            <div className="space-y-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2 ml-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-300 outline-none ${
                    focused === "name"
                      ? "border-blue-500 bg-white shadow-lg shadow-blue-100 scale-[1.02]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2 ml-1"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  required
                  className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-300 outline-none ${
                    focused === "email"
                      ? "border-blue-500 bg-white shadow-lg shadow-blue-100 scale-[1.02]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2 ml-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  rows="6"
                  className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-300 outline-none resize-none ${
                    focused === "message"
                      ? "border-blue-500 bg-white shadow-lg shadow-blue-100 scale-[1.02]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Tell us about your real estate needs..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-200 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center mt-6">
                🔒 Protected by reCAPTCHA. See{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Terms
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-linear-to-r from-green-500 to-emerald-500 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-200 transform hover:scale-[1.02] transition-all duration-300 group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg">WhatsApp</p>
              </div>
            </div>
          </motion.a>

          {/* Agent Info Card */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold bg-linear-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  M
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Marci Metzger
                </h3>
                <p className="text-sm text-blue-600 font-medium">
                  THE RIDGE REALTY GROUP
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3190 HW-160, Suite F<br />
                  Pahrump, Nevada 89048
                  <br />
                  United States
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <a
                  href="tel:+12069196886"
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  (206) 919-6886
                </a>
              </div>
            </div>
          </motion.div>

          {/* Office Hours Card */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
                <span className="text-gray-700 font-medium">Open Today</span>
                <span className="text-blue-600 font-bold">
                  8:00 AM - 7:00 PM
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700 font-medium">Daily Hours</span>
                <span className="text-gray-900 font-semibold">
                  8:00 AM - 7:00 PM
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-linear-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-xl">
              <p className="text-sm text-gray-700 leading-relaxed">
                💡 <span className="font-semibold">Flexible scheduling:</span>{" "}
                Appointments outside office hours available upon request. Just
                call!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
