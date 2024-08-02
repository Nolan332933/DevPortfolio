import React from "react";
import { FaShare } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import {
  FaTelegramPlane,
  FaInstagram,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa";

const SocialShare = () => {
  const url = window.location.href;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
    url
  )}`;
  const instagramShareUrl = `https://www.instagram.com/share?url=url=${encodeURIComponent(
    url
  )}`;
  const viberShareUrl = `viber://forward?text=${encodeURIComponent(
    "Check Out this link " + url
  )}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    "Check Out this link " + url
  )}`;

  const handleCopyUrl = () => {
    const textarea = document.createElement("textarea");
    textarea.value = url;
    document.body.appendChild(textarea);

    // Select the URL text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the URL to the clipboard
    document.execCommand("copy");

    // Remove the textarea
    document.body.removeChild(textarea);

    // Alert or notify the user
    alert("URL copied to clipboard!");
  };

  return (
    <div className="flex items-center justify-center mb-3">
      <div className="border border-slate-500 p-2" style={{ borderRadius: 50 }}>
        <div className="flex">
          <div className="border border-slate-50 rounded-full bg-slate-50 p-4 me-3">
            <FaShare className="text-violet-800" size={15} />
          </div>
          <div
            className="border border-slate-50 rounded-full bg-violet-700 p-4 me-3 cursor-pointer"
            onClick={handleCopyUrl}
          >
            <FaRegCopy className="text-slate-200" size={15} />
          </div>
          <a
            href={facebookShareUrl}
            target="_blank"
            className="border border-slate-50 rounded-full bg-violet-700 p-4 me-3"
          >
            <ImFacebook className="text-slate-200" size={15} />
          </a>
          <a
            href={whatsappShareUrl}
            target="_blank"
            className="border border-slate-50 rounded-full bg-violet-700 p-4 me-3"
          >
            <FaWhatsapp className="text-slate-200" size={15} />
          </a>
          <a
            href={viberShareUrl}
            target="_blank"
            className="border border-slate-50 rounded-full bg-violet-700 p-4 me-3"
          >
            <FaViber className="text-slate-200" size={15} />
          </a>
          <a
            href={telegramShareUrl}
            target="_blank"
            className="border border-slate-50 rounded-full bg-violet-700 p-4 me-3"
          >
            <FaTelegramPlane className="text-slate-200" size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
