"use client"; // Mark this as a client-side component

export default function TermsOfService() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#f39c12]">Terms of Service for NGINX Config Generator</h2>

      <section>
        <h3 className="text-lg font-semibold text-[#1f77b4]">1. Rules and Restrictions</h3>
        <p className="text-sm text-[#bfbfbf]">The following are the rules and restrictions for using the Service:</p>
        <ul className="list-disc pl-6 mt-2 text-[#bfbfbf]">
          <li>
            <strong className="text-[#bfbfbf]">Lawful Use:</strong> You may only use the Service for lawful purposes and in accordance with these Terms.
          </li>
          <li>
            <strong className="text-[#bfbfbf]">Illegal Content:</strong> You agree not to use the Service to create, transmit, or store illegal, harmful, or offensive content.
          </li>
          <li>
            <strong className="text-[#bfbfbf]">Service Disruption:</strong> You may not use the Service for any activities that could disrupt or harm the functionality of the Service or interfere with other users’ access to the Service.
          </li>
          <li>
            <strong className="text-[#bfbfbf]">Unauthorized Access:</strong> You may not attempt unauthorized access to any part of the Service or the systems that host it.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-[#1f77b4]">2. Account and Registration</h3>
        <p className="text-sm text-[#bfbfbf]">
          You are responsible for maintaining the confidentiality of your account and login credentials. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date. You are solely responsible for all activity on your account.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-[#1f77b4]">3. Intellectual Property</h3>
        <p className="text-sm text-[#bfbfbf]">All content and materials provided through the Service are protected by copyright, trademark, and other intellectual property laws. You may not:</p>
        <ul className="list-disc pl-6 mt-2 text-[#bfbfbf]">
          <li>Copy, modify, distribute, or create derivative works based on any part of the Service, unless expressly authorized by us.</li>
          <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-[#1f77b4]">4. Data Privacy and Security</h3>
        <p className="text-sm text-[#bfbfbf]">
          By using the Service, you agree that we may collect, process, and store your data as described in our <a href="/privacy-policy" className="text-[#2980b9]">Privacy Policy</a>. You must ensure that any data you input complies with all applicable laws and privacy regulations.
        </p>
        <p className="text-sm text-[#bfbfbf]">
          We take reasonable measures to protect your data, but we cannot guarantee complete security.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-[#1f77b4]">5. Limitations of Liability</h3>
        <p className="text-sm text-[#bfbfbf]">
          We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability will not exceed the amount you paid for access to the Service during the 12 months preceding the claim.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-[#1f77b4]">6. Termination</h3>
        <p className="text-sm text-[#bfbfbf]">
          We may suspend or terminate your access to the Service at any time, with or without notice, and you must immediately cease using the Service and delete any generated configurations upon termination.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-[#1f77b4]">7. Changes to the Terms</h3>
        <p className="text-sm text-[#bfbfbf]">
          We reserve the right to modify these Terms at any time. Any changes will be effective upon posting the updated Terms. Continued use of the Service after changes signifies your acceptance of the updated Terms.
        </p>
      </section>
    </div>
  );
}
