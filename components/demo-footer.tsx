"use client";
import React from "react";
import {
  Mail, Phone, MapPin, Facebook, Instagram, Twitter, Dribbble, Globe
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/Hover-Footer";

export default function Footer() {
  const footerLinks = [
    {
      title: "",
      links: [
        { label: "", href: "#" },
        { label: "", href: "#" },
        { label: "", href: "#" },
      ],
    },
    {
      title: "",
      links: [
        { label: "", href: "#" },
        { label: "", href: "#" },
        { label: "", href: "#", pulse: false},
      ],
    },
  ];

  const contactInfo = [
    { icon: <Mail size={18} className="text-[#3ca2fa]" />, text: "hello@MAWB.com", href: "mailto:hello@MAWB.com" },
    { icon: <Phone size={18} className="text-[#3ca2fa]" />, text: "+1 (555) 000-0000", href: "tel:+15550000000" },
    { icon: <MapPin size={18} className="text-[#3ca2fa]" />, text: "New York, USA" },
  ];

  return (
    <footer className="bg-[#0F0F11] relative h-fit rounded-3xl overflow-hidden m-8 text-neutral-300">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              {/* <span className="text-[#3ca2fa] text-3xl font-extrabold">&hearts;</span> */}
              <span className="text-white text-3xl font-bold">MAWB.</span>
            </div>
            <p className="text-sm leading-relaxed">
              Rest Easy And Explore Blogs Of Your Interest.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-0">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-0">
                    <a href={link.href} className="hover:text-[#3ca2fa] transition-colors">
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-1 -right-4 w-0 h-2 rounded-full bg-[#3ca2fa] animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="hover:text-[#3ca2fa] transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-neutral-800 my-8" />

        <div className="flex flex-col md:row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-neutral-500">
            <Facebook size={20} className="hover:text-[#3ca2fa] cursor-pointer" href="https://www.facebook.com/profile.php?id=61560140584366" />
            <Instagram size={20} className="hover:text-[#3ca2fa] cursor-pointer" href="https://www.instagram.com/wasaybaig617/"/>
            <Twitter size={20} className="hover:text-[#3ca2fa] cursor-pointer" href="https://x.com/WasayB80362" />
          </div>
          <p>&copy; {new Date().getFullYear()} ModernBlog. All rights reserved.</p>
        </div>
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Mdrn." className="z-50" />
      </div>
      <FooterBackgroundGradient />
    </footer>
  );
}