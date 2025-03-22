"use client"; // Mark this as a client-side component

export default function PrivacyPolicy() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
      <p className="text-sm">
        Your privacy is important to us. This privacy policy outlines how we collect, use, and protect your information when you use our services.
      </p>
      
      <h3 className="text-lg font-semibold mt-4">1. Information We Collect</h3>
      <p className="text-sm">
        We collect information to provide better services to our users. The types of information we may collect include:
        <ul className="list-disc pl-6 mt-2">
          <li>Personal information you provide (name, email, etc.)</li>
          <li>Data collected through your interactions with our website</li>
          <li>Information about your device and its usage</li>
        </ul>
      </p>

      <h3 className="text-lg font-semibold mt-4">2. How We Use Your Information</h3>
      <p className="text-sm">
        We use the information we collect to:
        <ul className="list-disc pl-6 mt-2">
          <li>Provide and improve our services</li>
          <li>Respond to inquiries and support requests</li>
          <li>Monitor and analyze usage to improve user experience</li>
        </ul>
      </p>

      <h3 className="text-lg font-semibold mt-4">3. Data Security</h3>
      <p className="text-sm">
        We implement appropriate security measures to protect your information from unauthorized access, alteration, or destruction. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your data.
      </p>

      <h3 className="text-lg font-semibold mt-4">4. Sharing Your Information</h3>
      <p className="text-sm">
        We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted partners who help us provide our services.
      </p>

      <h3 className="text-lg font-semibold mt-4">5. Your Rights</h3>
      <p className="text-sm">
        You have the right to access, correct, or delete your personal information. You can also request a copy of the information we have about you.
      </p>

      <h3 className="text-lg font-semibold mt-4">6. Changes to This Privacy Policy</h3>
      <p className="text-sm">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant updates.
      </p>

      <h3 className="text-lg font-semibold mt-4">7. Contact Us</h3>
      <p className="text-sm">
        If you have any questions about this Privacy Policy, please contact us at [contact@example.com].
      </p>
    </div>
  );
}
