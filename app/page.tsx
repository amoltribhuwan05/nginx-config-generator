"use client"; // Mark this as a client-side component

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConfigGenerator } from "@/components/config-generator";
import TermsOfService from "./terms/page"; // Import Terms page
import PrivacyPolicy from "@/app/privacy/page"; // Import Privacy Policy page
import Contact from "@/app/contact/page"; // Import Contact page

export default function Home() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const openTermsModal = () => {
    setShowTerms(true);
    setShowPrivacy(false);
    setShowContact(false);
  };

  const openPrivacyModal = () => {
    setShowPrivacy(true);
    setShowTerms(false);
    setShowContact(false);
  };

  const openContactModal = () => {
    setShowContact(true);
    setShowTerms(false);
    setShowPrivacy(false);
  };

  const closeModal = () => {
    setShowTerms(false);
    setShowPrivacy(false);
    setShowContact(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className={`flex-1 container py-10 ${showTerms || showPrivacy || showContact ? 'blur-sm' : ''}`}>
        <ConfigGenerator />
      </main>

      {/* Pass openPrivacyModal, openTermsModal, and openContactModal to SiteFooter */}
      <SiteFooter
        openTermsModal={openTermsModal}
        openPrivacyModal={openPrivacyModal}
        openContactModal={openContactModal}
      />

      {/* Modal for Terms of Service, Privacy Policy, or Contact */}
      {(showTerms || showPrivacy || showContact) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full relative overflow-hidden">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="h-96 overflow-auto">
              {showTerms && <TermsOfService />}
              {showPrivacy && <PrivacyPolicy />}
              {showContact && <Contact />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
