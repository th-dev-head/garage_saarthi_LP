"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import PageLayout from "@/src/components/common/PageLayout";

// --- Static Data for Clean .map() Rendering ---

const trialExpiryPoints = [
  "Trial access may expire automatically.",
  "Paid features may become restricted.",
  "The customer may be asked to select a subscription plan.",
  "The account may continue to exist in a limited or inactive state, subject to platform functionality.",
  "Access to stored information may be subject to the applicable account and data-retention policies.",
];

const trialAbuseExamples = [
  "Creating multiple accounts to repeatedly obtain trial access.",
  "Using false business or registration information.",
  "Circumventing trial eligibility restrictions.",
  "Engaging in fraudulent or abusive activity.",
];

const subscriptionDurations = [
  "Monthly.",
  "Three-month.",
  "Six-month.",
  "Twelve-month.",
  "Twenty-four-month.",
  "Other durations introduced by the Company.",
];

const expiryNotifications = [
  "Upcoming subscription expiry.",
  "Current subscription status.",
  "Available renewal options.",
  "Expired subscription access.",
  "Applicable promotional offers.",
];

const refundConsideredCircumstances = [
  "Duplicate subscription payments for the same purchase.",
  "A verified payment deduction where no corresponding subscription or service activation occurred.",
  "A technical issue attributable to GarageSaarthi that prevented the purchased service from being activated.",
  "An incorrect amount charged due to a verified billing or payment-processing error.",
  "A purchase made in error where the circumstances justify a refund under applicable law or the Company's review.",
  "A service-related issue where the Company determines that a refund is an appropriate resolution.",
  "Any other circumstance where a refund is required under applicable law.",
];

const refundNotApprovedCircumstances = [
  "A customer changes their mind after purchasing a subscription.",
  "The customer no longer requires the software.",
  "The customer purchases an incorrect subscription plan after reviewing the displayed purchase details.",
  "The customer does not use the platform during the purchased subscription period.",
  "The customer fails to renew before the subscription expiry date.",
  "The customer does not use all available subscription benefits.",
  "The customer experiences difficulty using a feature due to insufficient familiarity or lack of training where reasonable support is available.",
  "The account is suspended or terminated due to a material violation of the Terms & Conditions.",
  "The customer fails to maintain their own internet connectivity or compatible devices.",
  "The customer does not use purchased messaging or other consumable credits.",
];

const refundRequestInfo = [
  "Registered account email or mobile number.",
  "Garage or workshop name.",
  "Subscription plan purchased.",
  "Payment date.",
  "Payment amount.",
  "Transaction ID or payment reference.",
  "Reason for requesting the refund.",
  "Supporting screenshots, receipts, or payment proof where applicable.",
];

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout className="bg-gradient-to-b from-background to-background-cream">
      <main className="pt-32 sm:pt-36 pb-16 px-4 lg:px-15 2xl:px-25">
        <div className="mx-auto max-w-5xl">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12 border border-slate-200/60">
            {/* Header */}
            <div className="border-b border-slate-200 pb-6 mb-8">
              <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
                Billing &amp; Subscription
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                REFUND, CANCELLATION &amp; SUBSCRIPTION POLICY – GARAGESAARTHI
              </h1>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
                <span><strong>Last Updated:</strong> 31 October 2026</span>
                <span>•</span>
                <span><strong>Effective Date:</strong> 31 October 2026</span>
              </div>
            </div>

            {/* Content Container */}
            <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  1. Introduction
                </h2>
                <p>Welcome to <strong>GarageSaarthi</strong>.</p>
                <p>
                  This Refund, Cancellation &amp; Subscription Policy explains the rules governing free trials, paid subscriptions, renewals, cancellations, refunds, payment failures, and additional paid services offered through GarageSaarthi.
                </p>
                <p>
                  GarageSaarthi is a cloud-based garage and automobile workshop management platform designed to help garages, automobile repair shops, service centres, and related businesses manage their operations digitally.
                </p>
                <p>
                  This policy applies to purchases made through the GarageSaarthi website, web application, mobile applications, or other authorized sales and payment channels.
                </p>
                <p>
                  By purchasing a subscription, using a paid service, or making a payment to GarageSaarthi, you acknowledge that you have read and understood this policy. This policy forms part of the GarageSaarthi Terms &amp; Conditions. Nothing in this policy limits any mandatory rights available to customers under applicable consumer protection, payment, or other laws.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  2. Company Information
                </h2>
                <p>GarageSaarthi is owned, operated, and maintained by:</p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-2 text-sm">
                  <p><strong>Company Name:</strong> Techifyhouse</p>
                  <p><strong>Business Address:</strong> 241, Royal Square, VIP Circle, Uttran, Surat, Gujarat 394105, India.</p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <Link href="https://www.garagesaarthi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      https://www.garagesaarthi.com
                    </Link>
                  </p>
                  <p>
                    <strong>Support Email:</strong>{" "}
                    <Link href="mailto:contact@garagesaarthi.com" className="text-primary hover:underline font-semibold">
                      contact@garagesaarthi.com
                    </Link>
                  </p>
                </div>
                <p>
                  Throughout this policy, <em>"Company"</em>, <em>"We"</em>, <em>"Us"</em>, and <em>"Our"</em> refer to the legal entity operating GarageSaarthi.
                </p>
                <p>
                  <em>"Customer"</em>, <em>"User"</em>, and <em>"You"</em> refer to individuals, garage owners, workshops, businesses, and organizations purchasing or using GarageSaarthi services.
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  3. Free Trial Policy
                </h2>
                <p>
                  GarageSaarthi may offer eligible new customers a free trial to evaluate the platform before purchasing a subscription.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="font-bold text-slate-900">3.1 Trial Duration</h3>
                    <p className="text-sm">The standard free trial period advertised by GarageSaarthi is seven (7) days, unless a different duration is expressly communicated for a specific offer or promotion. The trial period begins when the eligible account is activated.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">3.2 Trial Access</h3>
                    <p className="text-sm">During the free trial, customers may access features included in the applicable trial configuration, such as workshop management, job cards, customer management, vehicle records, billing, inventory, staff management, and reports.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">3.3 No Automatic Paid Conversion</h3>
                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-emerald-950 font-semibold text-sm">
                      GarageSaarthi does not automatically convert a free trial into a paid subscription. Customers are not required to provide payment card details to start the standard free trial. No subscription amount will be automatically charged merely because the trial period has ended.
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">3.4 Trial Expiry</h3>
                    <p className="text-sm mb-1">At the end of the trial period:</p>
                    <ul className="list-disc pl-6 space-y-0.5 text-sm">
                      {trialExpiryPoints.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">3.5 Trial Abuse</h3>
                    <p className="text-sm mb-1">The Company may restrict repeated or fraudulent trial registrations where it reasonably believes a user is attempting to misuse promotional access, including:</p>
                    <ul className="list-disc pl-6 space-y-0.5 text-sm">
                      {trialAbuseExamples.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4. Subscription Plans and Pricing
                </h2>
                <p>GarageSaarthi offers different subscription durations and service packages, which may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {subscriptionDurations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="font-bold text-slate-900">4.1 Pricing Display</h3>
                    <p className="text-sm">The applicable subscription price will be displayed on the official GarageSaarthi pricing page or checkout interface before completing payment. For Indian customers, prices may exclude GST, which will be calculated and displayed at checkout.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">4.2 Purchase Confirmation</h3>
                    <p className="text-sm">A subscription will be considered purchased after payment has been successfully completed and verified. An electronic confirmation or invoice will be issued.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">4.3 Plan Benefits</h3>
                    <p className="text-sm">Features, access limits, duration, and included users will be determined by the plan selected at checkout.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5. Subscription Activation
                </h2>
                <p>
                  A paid subscription will generally be activated after successful payment confirmation. If payment has been successfully deducted but the subscription is not activated, customers should contact GarageSaarthi support with transaction details and payment proof. The Company will investigate verified payment discrepancies promptly.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6. Manual Subscription Renewal
                </h2>
                <p className="font-semibold text-slate-900">
                  GarageSaarthi follows a manual subscription renewal model. Subscriptions do NOT automatically renew.
                </p>
                <div className="space-y-3 pt-1">
                  <div>
                    <h3 className="font-bold text-slate-900">6.1 No Automatic Renewal</h3>
                    <p className="text-sm">The Company will not automatically charge customers for the next subscription period solely because they previously purchased a subscription.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">6.2 Customer-Initiated Renewal</h3>
                    <p className="text-sm">Customers who wish to continue using paid features must manually purchase a new subscription before or after their current subscription expires.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">6.3 Subscription Expiry Notifications</h3>
                    <p className="text-sm mb-1">GarageSaarthi may send notifications regarding:</p>
                    <ul className="list-disc pl-6 space-y-0.5 text-sm">
                      {expiryNotifications.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">6.4 Expiry Without Renewal</h3>
                    <p className="text-sm">If a customer does not renew, the subscription expires at the end of its purchased period and paid functionality becomes unavailable.</p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7. Subscription Cancellation
                </h2>
                <p>
                  Because GarageSaarthi subscriptions renew manually, customers are not required to cancel an automatic recurring payment to prevent charges. Customers may simply choose not to purchase another subscription.
                </p>
                <div className="space-y-3 pt-1">
                  <div>
                    <h3 className="font-bold text-slate-900">7.1 Cancellation During an Active Subscription</h3>
                    <p className="text-sm">A customer may request account closure during an active subscription. However, requesting cancellation does not automatically create an entitlement to a full or partial refund for unused days unless approved or required by law.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">7.2 Cancellation Before Subscription Activation</h3>
                    <p className="text-sm">If a customer has made a payment but the subscription has not yet been activated, they may contact support to request cancellation and review.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">7.3 Account Closure</h3>
                    <p className="text-sm">Customers may request account closure through platform settings or by contacting support. Outstanding dues and data export requests will be handled per platform policies.</p>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8. Refund Policy
                </h2>
                <p>
                  GarageSaarthi follows a case-by-case refund review process. Refunds are not automatically granted for every cancellation or unused subscription period.
                </p>

                <div className="space-y-4">
                  <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200 space-y-2">
                    <h3 className="font-bold text-emerald-950 text-base">
                      8.1 Circumstances Where a Refund May Be Considered:
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-emerald-900">
                      {refundConsideredCircumstances.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base">
                      8.2 Circumstances Where Refunds May Generally Not Be Approved:
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
                      {refundNotApprovedCircumstances.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">8.3 Partial Refunds</h3>
                    <p className="text-sm">Partial refunds may be evaluated in exceptional circumstances based on remaining subscription duration, activation and usage, the nature of the issue, and applicable processing charges.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">8.4 Refund Approval</h3>
                    <p className="text-sm">All discretionary refund requests are subject to review and approval by an authorized Company representative.</p>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  9. Refund Request Procedure
                </h2>
                <p>Customers requesting a refund should contact GarageSaarthi through official billing support, providing:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {refundRequestInfo.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="font-bold text-slate-900">9.1 Review Process</h3>
                    <p className="text-sm">The Company will verify account and transaction details, review activation records, and communicate a decision.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">9.2 Review Timeline</h3>
                    <p className="text-sm">The Company aims to acknowledge and review complete refund requests within <strong>seven (7) business days</strong>.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">9.3 Refund Processing Timeline</h3>
                    <p className="text-sm">Approved refunds are initiated through the original payment method. The time for the refund to reflect depends on the payment gateway, banking networks, and customer bank timelines.</p>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  10. Duplicate and Failed Payments
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900">10.1 Duplicate Payments</h3>
                    <p className="text-sm">If a customer is charged more than once for the same purchase, the excess payment will be refunded or credited upon verification.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">10.2 Payment Deducted but Subscription Not Activated</h3>
                    <p className="text-sm">If payment was deducted without activation, contact support with proof. The Company will either activate the subscription immediately or initiate a refund.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">10.3 Failed Transactions</h3>
                    <p className="text-sm">Transactions marked failed by payment gateways will automatically be reversed by the customer's bank according to banking timelines.</p>
                  </div>
                </div>
              </section>

              {/* Section 11 to 14 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  11. Subscription Upgrades and Downgrades
                </h2>
                <p>
                  Upgrades require paying the applicable price difference. Downgrades take effect according to purchase terms and do not automatically entitle the customer to a partial refund.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  12. Additional Users and Paid Add-ons
                </h2>
                <p>
                  Additional users, WhatsApp messaging credits, calculation credits, and storage add-ons are associated with the business account. Consumed credits are non-refundable. Verified technical errors resulting in incorrect credit deductions will be reviewed for credit restoration.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  13. GST, Taxes and Invoices
                </h2>
                <p>
                  Applicable GST in India will be calculated at checkout and valid tax invoices issued. Where a refund is approved, an appropriate credit note will be issued in compliance with Indian tax laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  14. Payment Gateway and Banking Charges
                </h2>
                <p>
                  Payments are processed through secure third-party payment gateways. Bank charges, currency conversion rates, and third-party fees are governed by the respective financial institutions.
                </p>
              </section>

              {/* Section 15 to 19 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  15. Account Suspension for Non-Payment
                </h2>
                <p>
                  If a subscription expires without manual renewal, the account moves into an expired or restricted state. Services obtained through fraudulent or unauthorized means may be suspended proportionately.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  16. Chargebacks and Payment Disputes
                </h2>
                <p>
                  Customers are encouraged to contact support before initiating chargebacks so payment discrepancies can be resolved smoothly without platform disruption.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  17. Promotional Offers and Discounts
                </h2>
                <p>
                  Promotional discounts apply to the specific purchase for which they are issued and do not create an entitlement to cash reimbursement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  18. Enterprise and Custom Commercial Agreements
                </h2>
                <p>
                  Individually negotiated agreements and multi-branch enterprise contracts may have specific cancellation and payment terms that govern where inconsistent with this policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  19. Changes to Subscription and Refund Policies
                </h2>
                <p>
                  The Company may update subscription plans, add-on pricing, or refund policies from time to time with a revised Last Updated date on our website.
                </p>
              </section>

              {/* Section 20 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  20. Customer Support and Refund Contact
                </h2>
                <p>For subscription-related questions, cancellations, or refund applications, contact:</p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-1.5 text-sm">
                  <p className="font-bold text-slate-900">GarageSaarthi – Billing &amp; Support Team</p>
                  <p><strong>Company:</strong> Techifyhouse</p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <Link href="https://www.garagesaarthi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      https://www.garagesaarthi.com
                    </Link>
                  </p>
                  <p>
                    <strong>Support Email:</strong>{" "}
                    <Link href="mailto:contact@garagesaarthi.com" className="text-primary hover:underline font-semibold">
                      contact@garagesaarthi.com
                    </Link>
                  </p>
                  <p><strong>Business Address:</strong> 241, Royal Square, VIP Circle, Uttran, Surat, Gujarat 394105, India.</p>
                </div>
              </section>

              {/* Section 21 & 22 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  21. Governing Law
                </h2>
                <p>
                  This policy is governed by the laws of India. Subject to mandatory jurisdictional provisions, disputes concerning this policy will be handled by the competent courts in <strong>Surat, Gujarat, India</strong>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  22. Relationship with Other GarageSaarthi Policies
                </h2>
                <p>
                  This policy should be read together with the GarageSaarthi Terms &amp; Conditions, Privacy Policy, and Data Processing Addendum.
                </p>
                <div className="bg-orange-50/60 p-5 rounded-xl border border-orange-200/60 mt-6 text-xs sm:text-sm text-slate-700">
                  By purchasing or using paid GarageSaarthi services, you acknowledge that you have been provided access to this policy and agree to the applicable provisions, subject to your statutory rights.
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}

