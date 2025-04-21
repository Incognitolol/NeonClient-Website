import { FC } from 'react';

interface TOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const TOSModal: FC<TOSModalProps> = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-[800px] max-h-[600px] bg-[#1a2332] rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 bg-[#1f2937] border-b border-[#2d3748]">
          <h2 className="text-xl font-medium text-[#06b6d4]">Neon - Disclosure agreement</h2>
          <button 
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-[#06b6d4] transition-colors"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-4 overflow-y-auto max-h-[480px] text-gray-300 space-y-6">
          <p>
            <strong className="text-[#06b6d4]">Last Updated:</strong> Monday, December 16, 2024 at 8:00pm GMT+1
          </p>
          <p>
            Please pay attention when reading the Terms of Service ("TOS", "Terms") before you continue to the use of our Software ("Service", "Product", "Copy") operated by Neon Client ("us", "we", "our", "i"). By accessing or using our Service, you agree to be bound by the TOS; if you do not agree with our TOS you are not permitted to use our Service and/or interact with our service abilities ("detections", "support", "licensing").
          </p>
          <h4 className="font-semibold">Terms legally defined:</h4>
          <p>
            <strong className="text-[#06b6d4]">Term 1).</strong> You ("the customer", "the affiliate", "the reader") must be of legal age (18+) in your country or state region or have permission from your parent/guardian to purchase and/or use this Service.
          </p>
          <p>
            <strong className="text-[#06b6d4]">Term 2).</strong> Attempting to receive your money in a form called "Chargeback" will result in an immediate termination of your access to Neon. We do not offer "refunds" for this product unless told otherwise.
          </p>
          <p>
            <strong className="text-[#06b6d4]">Term 3).</strong> Re-distributing ("leaking", "sharing", "re-posting", "re-publishing", "spreading") the service will result in a termination of your access to the Service.
          </p>
          <p>
            <strong className="text-[#06b6d4]">Term 4).</strong> De-obfuscating ("un-hiding", "un-protecting", "dumping", "cracking") the service will result in a termination of your access to the Service.
          </p>
          <p>
            <strong className="text-[#06b6d4]">Term 5).</strong> We are not liable for any damage caused by the act of attempting to re-distribute ("leak", "share", "post") your access to the service or access the obfuscated ("hidden", "protected", "private") code of the service, nor are we liable for the repercussions that may happen due to you leaking your access to the service.
          </p>
          <p>
            <strong className="text-[#06b6d4]">Term 6).</strong> We are not liable for any damage caused by the attempted use of a re-distributed ("leaked", "shared", "posted") access to the service or de-obfuscated ("un-hidden", "un-protected", "dumped") code and/or jar(s) ("loader", "dumped jar") nor are we liable for the repercussions that may happen due to you using a leaked version of the service.
          </p>
          <p>
            <strong className="text-[#06b6d4]">Term 7).</strong> We reserve the right to modify these Terms of Service indefinitely without announcement and without re-agreement; you ("the customer", "the affiliate", "the reader") are held liable for keeping up-to-date with our terms/rules.
          </p>
          <p>
            <strong className="text-[#06b6d4]">Term 8).</strong> No refunds once you have passed the allotted time given to you by the "5.A Refund Policy".
          </p>
          <p>
            <strong className="text-[#06b6d4]">Term 9).</strong> You agree to this by starting ("launching", "loading", "enabling", "running", "downloading") a copy of any of our digital products ("Neon") or by posting a message inside our private ("buyer only", "customer only", "affiliate only") discord server.
          </p>
          <h4 className="font-semibold">Specific(s):</h4>
          <p>
            <strong className="text-[#06b6d4]">1.A Termination</strong> - We reserve the right to terminate ("kill", "end", "suspend") your access to our service immediately, without prior notice or liability, for any reason, including without limitation if you breach the TOS.
          </p>
          <p>
            <strong className="text-[#06b6d4]">1.B Indemnity Clause</strong> - You ("the customer", "the affiliate", "the reader") agree that you will be responsible for your use of the software, website, discord, and any other product/project you might obtain that is related to or affiliated with Neon, and you agree to defend, indemnify, and hold harmless Neon Client and its directors, affiliates, and agents from and against any and all claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to, use of, or alleged use of the software, website, discord, and any other product/project you might obtain that is related to or affiliated with Neon.
          </p>
          <p>
            <strong className="text-[#06b6d4]">2.A Ownership</strong> - You ("the paying customer", "the customer") are held accountable as the legal owner ("the legal administrator") of your access to Neon and, due to that, if any malicious actions occur to your copy of the service you will be held accountable and punished based on the actions that occurred. Redistributing the service is not allowed and you must contact an official Neon Client admin to verify that you are allowed to redistribute to any person(s).
          </p>
          <p>
            <strong className="text-[#06b6d4]">2.B Privacy</strong> - We reserve the right to keep our intellectual property ("design(s)", "code", "service") hidden behind Java Obfuscation and will take action upon any interaction with the obfuscated code that we ("the administration") view as malicious. If such an incident occurs, the administration that holds rights to Neon will decide the outcome of the punishment for the user.
          </p>
          <p>
            <strong className="text-[#06b6d4]">3.A User protection agreement</strong> - You ("the customer", "the affiliate", "the reader") are not allowed to release ("post", "share", "leak", "give out", "publish", "spread") any information posted into the official Neon Client discord and/or any user ("customer", "reader", "affiliate") that is in this discord. All users ("customers", "readers", "affiliates") in this discord must keep their information private. If you decide to leak information like this, we will terminate your access to the service.
          </p>
          <p>
            <strong className="text-[#06b6d4]">4.A Data Collection</strong> - We collect information such as startup events, IP addresses, verifications, and any error logs related to our software, along with any actions taken during interactions with our Software. We collect logs and connection times of specific users ("persons", "players") due to their tendencies. We also collect any attempts to dump ("De-obfuscate") our service or failure to load the plugin ("service") without a valid key ("License") and the attempted use of a disabled ("killed", "terminated", "ended", "suspended") copy ("service").
          </p>
          <p>
            <strong className="text-[#06b6d4]">5.A Refund Policy</strong> - We have a 2-day refund policy for any issues that might make Neon incompatible with your system.
          </p>
        </div>

        <div className="px-6 py-4 bg-[#1f2937] border-t border-[#2d3748] flex justify-end">
          <button
            onClick={onAccept}
            className="bg-[#06b6d4] text-white px-6 py-2 text-sm font-medium rounded hover:bg-[#0891b2] transition-colors"
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};
