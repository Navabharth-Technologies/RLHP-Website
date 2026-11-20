import React, { useState } from 'react';
import { orgDetails } from '../data/rlhpData';
import AnimatedWaveUnderline from '../components/AnimatedWaveUnderline';
import ScrollReveal from '../components/ScrollReveal';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Facebook, Instagram, Youtube } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isHuman, setIsHuman] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // Standard field validators
  const validateField = (field, value) => {
    let error = '';
    const trimmed = (value || '').trim();

    if (field === 'name') {
      if (!trimmed) {
        error = 'Full name is required';
      } else if (trimmed.length < 2) {
        error = 'Name must be at least 2 characters';
      } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
        error = 'Name can only contain letters, spaces, and hyphens';
      }
    }

    if (field === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!trimmed) {
        error = 'Email address is required';
      } else if (!emailRegex.test(trimmed)) {
        error = 'Please enter a valid email address (e.g. name@example.com)';
      }
    }

    if (field === 'phone') {
      // Clean non-digits
      const digitsOnly = (value || '').replace(/\D/g, '');
      if (trimmed && digitsOnly.length < 10) {
        error = 'Please enter a valid 10-digit mobile or phone number';
      } else if (trimmed && digitsOnly.length > 13) {
        error = 'Phone number is too long';
      }
    }

    if (field === 'subject') {
      if (!trimmed) {
        error = 'Subject is required';
      } else if (trimmed.length < 3) {
        error = 'Subject must be at least 3 characters';
      }
    }

    if (field === 'message') {
      if (trimmed && trimmed.length < 5) {
        error = 'Message should be at least 5 characters';
      }
    }

    return error;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    if (hasErrors) {
      return;
    }

    if (!isHuman) {
      alert('Please check the verification box.');
      return;
    }
    setSubmitted(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/rlhpintervita@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _cc: 'mysore@rlhp.org',
          _subject: `New RLHP Contact Inquiry from ${formData.name.trim()}: ${formData.subject.trim() || 'General Message'}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatusMessage({
          type: 'success',
          text: 'Thank you for contacting RLHP! Your message has been sent successfully to rlhpintervita@gmail.com and mysore@rlhp.org.'
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTouched({});
        setErrors({});
        setIsHuman(false);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      // Fallback: create mailto link so user can still directly send email
      const mailtoUrl = `mailto:rlhpintervita@gmail.com?cc=mysore@rlhp.org&subject=${encodeURIComponent(
        formData.subject || 'Contact Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatusMessage({
        type: 'info',
        text: 'Opening your email client to send your message directly to rlhpintervita@gmail.com & mysore@rlhp.org.'
      });
    } finally {
      setSubmitted(false);
    }
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

            {/* Right Card Image (5 Cols) - Distinct High-Resolution Community Forum Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-[460px] h-[300px] sm:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02] group">
                <img
                  src={`${import.meta.env.BASE_URL}images/contact_hero_hq.jpg`}
                  alt="Contact RLHP Community Forum"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Name <span className="text-red-500">*</span>
                  </label>
                  {touched.name && errors.name && (
                    <span className="text-[11px] font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors text-sm bg-white ${
                    touched.name && errors.name
                      ? 'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/40 bg-red-50/20'
                      : touched.name && !errors.name
                      ? 'border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40'
                      : 'border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40'
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Email <span className="text-red-500">*</span>
                  </label>
                  {touched.email && errors.email && (
                    <span className="text-[11px] font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors text-sm bg-white ${
                    touched.email && errors.email
                      ? 'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/40 bg-red-50/20'
                      : touched.email && !errors.email
                      ? 'border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40'
                      : 'border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40'
                  }`}
                />
              </div>

              {/* Phone */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Phone (10 digits)
                  </label>
                  {touched.phone && errors.phone && (
                    <span className="text-[11px] font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.phone}
                    </span>
                  )}
                </div>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors text-sm bg-white ${
                    touched.phone && errors.phone
                      ? 'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/40 bg-red-50/20'
                      : 'border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40'
                  }`}
                />
              </div>

              {/* Subject */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  {touched.subject && errors.subject && (
                    <span className="text-[11px] font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.subject}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onBlur={() => handleBlur('subject')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors text-sm bg-white ${
                    touched.subject && errors.subject
                      ? 'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/40 bg-red-50/20'
                      : 'border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40'
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Message (optional)
                  </label>
                  {touched.message && errors.message && (
                    <span className="text-[11px] font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors text-sm bg-white resize-y ${
                    touched.message && errors.message
                      ? 'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/40 bg-red-50/20'
                      : 'border-[#236B28] focus:outline-none focus:ring-2 focus:ring-[#236B28]/40'
                  }`}
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

              {/* Status feedback message */}
              {statusMessage.text && (
                <div
                  className={`p-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                    statusMessage.type === 'success'
                      ? 'bg-green-100 text-green-900 border border-green-300'
                      : 'bg-blue-100 text-blue-900 border border-blue-300'
                  }`}
                >
                  <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-600" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 px-6 rounded-xl bg-[#236B28] hover:bg-[#154219] text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60"
              >
                {submitted ? 'Sending Message...' : 'Submit'}
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
              <ScrollReveal delay={100} duration={800} className="p-6 rounded-2xl border-2 border-[#236B28] bg-white flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
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
              </ScrollReveal>

              {/* Card 2: Email Us */}
              <ScrollReveal delay={200} duration={800} className="p-6 rounded-2xl border-2 border-[#236B28] bg-white flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
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
              </ScrollReveal>

              {/* Card 3: Visit Us */}
              <ScrollReveal delay={300} duration={800} className="p-6 rounded-2xl border-2 border-[#236B28] bg-white flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
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
              </ScrollReveal>

              {/* Card 4: Working Hours */}
              <ScrollReveal delay={400} duration={800} className="p-6 rounded-2xl border-2 border-[#236B28] bg-white flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
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
              </ScrollReveal>

              {/* Card 5: Connect on Social Media */}
              <ScrollReveal delay={500} duration={800} className="p-6 rounded-2xl border-2 border-[#236B28] bg-gradient-to-r from-emerald-50/60 to-white flex items-center justify-between shadow-xs">
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
              </ScrollReveal>
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
