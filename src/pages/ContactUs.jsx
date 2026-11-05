import React from 'react';
import { orgDetails } from '../data/rlhpData';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Get in touch with Rural Literacy & Health Programme (RLHP), Mysore
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Contact Details Card */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-rlhp-darkgreen">Head Office Address</h3>
            <p className="text-xs text-gray-500 mt-1">Rural Literacy and Health Programme (RLHP), Mysuru</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-700">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Postal Address</h4>
                <p className="mt-1 leading-relaxed">{orgDetails.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-rlhp-orange flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Telephone Lines</h4>
                <p className="mt-1 leading-relaxed">{orgDetails.phones.join(' / ')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Email Enquiries</h4>
                <p className="mt-1 leading-relaxed">{orgDetails.emails.join(' / ')}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Connect on Social Media</h4>
            <div className="flex space-x-3">
              <a href={orgDetails.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-rlhp-orange hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href={orgDetails.social.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-rlhp-orange hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href={orgDetails.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-rlhp-orange hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href={orgDetails.social.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-rlhp-orange hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-2">
          <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden relative">
            <iframe 
              title="RLHP Mysore Location Map"
              src="https://maps.google.com/maps?q=Rural%20Literacy%20%26%20Health%20Programme%2C%20No.%20343%2C%202nd%20Stage%2C%20Gayathripuram%2C%20Mysuru%2C%20Karnataka%20570019&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
