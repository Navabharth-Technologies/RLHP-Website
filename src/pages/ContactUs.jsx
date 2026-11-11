import React, { useState } from 'react';
import { orgDetails } from '../data/rlhpData';
import AnimatedWaveUnderline from '../components/AnimatedWaveUnderline';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Facebook, Instagram, Youtube } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isHuman, setIsHuman] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isHuman) {
      alert('Please check the verification box.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      alert('Thank you for contacting RLHP! We have received your message.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsHuman(false);
      setSubmitted(false);
    }, 800);
  };

  return (
    <div className="font-sans pb-20 bg-gray-50/50">

      {/* ─── 1. TOP HERO SECTION (Exact Replica of Reference) ─── */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf4eb]/90 via-[#f2f8f3] to-white border-b border-green-100/60 overflow-hidden">
        {/* Soft decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-none mb-4">
                  Contact <span className="text-[#236B28] italic font-serif">Us</span>
                </h1>
                <AnimatedWaveUnderline className="w-56 h-4 mb-6" />
                <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              {/* Breadcrumb */}
              <div className="pt-2 text-xs sm:text-sm font-semibold text-gray-400">
                Home / <span className="text-[#236B28] font-bold">Contact Us</span>
              </div>
            </div>

            {/* Right Card Image (5 Cols) - Playful Polaroid/card with children */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-[460px] h-[300px] sm:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={`${import.meta.env.BASE_URL}images/gallery/children_sports_meet.jpg`}
                  alt="Contact RLHP Children"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. FORM & CONTACT INFORMATION SECTION (Exact Replica) ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Send us a Message Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40 text-sm bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40 text-sm bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40 text-sm bg-white"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40 text-sm bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Message (optional)
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40 text-sm bg-white resize-y"
                />
              </div>

              {/* Mock Captcha Box */}
              <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl max-w-xs">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isHuman}
                    onChange={(e) => setIsHuman(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-[#236B28] focus:ring-[#236B28] cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-gray-700">I am human</span>
                </label>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                  <span className="text-[9px] text-gray-400 mt-0.5">Captcha</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 px-6 rounded-xl bg-[#236B28] hover:bg-[#154219] text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {submitted ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Information Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* Card 1: Call Us */}
              <div className="p-6 rounded-2xl border-2 border-[#236B28] bg-white flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#236B28] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-gray-950">Call Us</h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium mt-0.5 leading-relaxed">
                    0821 2454686<br />
                    (+91) 7022252030
                  </p>
                </div>
              </div>

              {/* Card 2: Email Us */}
              <div className="p-6 rounded-2xl border-2 border-[#236B28] bg-white flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#236B28] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-gray-950">Email Us</h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium mt-0.5 leading-relaxed">
                    rlhpintervita@gmail.com<br />
                    mysore@rlhp.org
                  </p>
                </div>
              </div>

              {/* Card 3: Visit Us */}
              <div className="p-6 rounded-2xl border-2 border-[#236B28] bg-white flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#236B28] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-gray-950">Visit Us</h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium mt-0.5 leading-relaxed">
                    No. 343, 2nd Stage, Gayathripuram,<br />
                    Udayagiri Post, Mysuru, Karnataka, India – 570019
                  </p>
                </div>
              </div>

              {/* Card 4: Working Hours */}
              <div className="p-6 rounded-2xl border-2 border-[#236B28] bg-white flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#236B28] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-gray-950">Working Hours</h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium mt-0.5 leading-relaxed">
                    Monday – Saturday<br />
                    09:30 AM – 05:30 PM
                  </p>
                </div>
              </div>

              {/* Card 5: Connect on Social Media */}
              <div className="p-6 rounded-2xl border-2 border-[#236B28] bg-gradient-to-r from-emerald-50/60 to-white flex items-center justify-between shadow-xs">
                <div>
                  <h4 className="font-extrabold text-base text-gray-950">Follow Our Updates</h4>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">Stay connected on our social channels</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={orgDetails.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-[#236B28] text-white hover:bg-emerald-800 flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={orgDetails.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white hover:opacity-90 flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={orgDetails.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-11 h-11 rounded-full bg-red-600 text-white hover:bg-red-700 flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 3. EMBEDDED LOCATION MAP ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm p-3">
          <div className="w-full h-80 sm:h-96 bg-gray-100 rounded-2xl overflow-hidden relative">
            <iframe
              title="RLHP Mysore Location Map"
              src="https://maps.google.com/maps?q=Rural%20Literacy%20%26%20Health%20Programme%2C%20No.%20343%2C%202nd%20Stage%2C%20Gayathripuram%2C%20Mysuru%2C%20Karnataka%20570019&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
