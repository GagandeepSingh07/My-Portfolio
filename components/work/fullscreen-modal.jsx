"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function FullscreenModal({ isOpen, imageSrc, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm flex justify-center items-center transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className="relative max-w-[90%] max-h-[80vh] glass rounded-2xl overflow-hidden p-2"
        data-modal-image
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-8 right-8 text-white text-4xl glass rounded-full w-14 h-14 flex items-center justify-center cursor-pointer z-[100001] hover:bg-white/20 transition-all duration-300 hover:rotate-90"
          data-cursor="prohibited"
          onClick={onClose}
          aria-label="Close viewer"
        >
          <X size={28} />
        </button>
        <Image
          src={imageSrc}
          alt="Fullscreen view"
          width={1920}
          height={1080}
          className="max-w-full max-h-[80vh] object-contain rounded-xl cursor-zoom-out pb-4.5"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
