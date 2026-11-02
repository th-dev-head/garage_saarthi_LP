"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import PageLayout from "@/src/components/common/PageLayout";

export default function TermsAndConditions() {
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
                Legal Agreement
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                TERMS &amp; CONDITIONS – GARAGESAARTHI
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
                  1. Introduction and Agreement
                </h2>
                <p>Welcome to <strong>GarageSaarthi</strong>.</p>
                <p>
                  These Terms &amp; Conditions (<em>"Terms"</em>, <em>"Agreement"</em>) govern your access to and use of GarageSaarthi, including its website, web application, mobile applications, software, features, tools, integrations, and associated services.
                </p>
                <p>
                  GarageSaarthi is a cloud-based garage and automobile workshop management platform designed to help garages, automobile repair shops, service centres, and related businesses manage their operations digitally.
                </p>
                <p>
                  By registering for an account, clicking the acceptance checkbox, accessing the platform, purchasing a subscription, or otherwise using our services, you acknowledge that you have read, understood, and agreed to these Terms.
                </p>
                <p className="font-medium text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                  If you do not agree to these Terms, you must not register for or use GarageSaarthi.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and the Company, subject to applicable law.
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
                    <strong>Contact Email:</strong>{" "}
                    <Link href="mailto:contact@garagesaarthi.com" className="text-primary hover:underline font-semibold">
                      contact@garagesaarthi.com
                    </Link>
                  </p>
                </div>
                <p>
                  In these Terms, <em>"Company"</em>, <em>"We"</em>, <em>"Us"</em>, and <em>"Our"</em> refer to the legal entity operating GarageSaarthi.
                </p>
                <p>
                  <em>"User"</em>, <em>"You"</em>, and <em>"Your"</em> refer to the individual, business, organization, garage owner, workshop operator, administrator, employee, or other authorized person accessing or using the platform.
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  3. Definitions
                </h2>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-3 text-sm">
                  <p><strong>Platform:</strong> Refers to GarageSaarthi, including its website, web application, mobile applications, software, APIs, and associated services.</p>
                  <p><strong>Account:</strong> Refers to a registered user or business account created to access GarageSaarthi.</p>
                  <p><strong>Workshop:</strong> Refers to a garage, automobile repair shop, service centre, or other business using GarageSaarthi.</p>
                  <p><strong>Account Owner:</strong> Refers to the individual or business authorized to create, administer, and control a workshop account.</p>
                  <p><strong>Authorized User:</strong> Refers to an employee, mechanic, accountant, service advisor, manager, or other individual granted access to a workshop account.</p>
                  <p><strong>Workshop Data:</strong> Refers to business information, customer records, vehicle records, invoices, job cards, documents, photographs, employee records, financial records, and other information entered, uploaded, or generated by users through the platform.</p>
                  <p><strong>Subscription:</strong> Refers to a paid plan or service package purchased to access specified GarageSaarthi features.</p>
                  <p><strong>Free Trial:</strong> Refers to a limited-duration trial period during which eligible users may access specified platform features without a subscription payment.</p>
                  <p><strong>Third-Party Services:</strong> Refers to external products, applications, APIs, payment gateways, cloud services, messaging providers, and other services integrated with or used alongside GarageSaarthi.</p>
                  <p><strong>DPA:</strong> Refers to the Data Processing Addendum governing applicable data processing responsibilities between the Company and business customers.</p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4. Eligibility and Account Registration
                </h2>
                <p>To create and operate a GarageSaarthi account, you must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Be at least 18 years of age.</li>
                  <li>Have the legal capacity to enter into a binding agreement.</li>
                  <li>Provide accurate, current, and complete registration information.</li>
                  <li>Have the authority to register and operate the account on behalf of the relevant business, where applicable.</li>
                  <li>Accept these Terms and the Privacy Policy.</li>
                  <li>Use the platform only for lawful purposes.</li>
                </ul>
                <p>
                  If you create an account on behalf of a business, company, partnership, or other organization, you represent that you have the necessary authority to bind that organization to these Terms.
                </p>
                <p>
                  You are responsible for ensuring that all information provided during registration and subsequent account usage remains accurate and updated. The Company reserves the right to verify account information and request additional information where reasonably necessary for security, compliance, or account administration.
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5. Account Security and Responsibilities
                </h2>
                <p>You are responsible for maintaining the confidentiality and security of your account credentials.</p>
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Keep login credentials confidential.</li>
                  <li>Avoid sharing account access with unauthorized individuals.</li>
                  <li>Ensure that authorized users access only the information and features permitted by their assigned roles.</li>
                  <li>Notify us promptly if you suspect unauthorized account access.</li>
                  <li>Maintain accurate user permissions.</li>
                  <li>Remove access for employees or other users who no longer require it.</li>
                  <li>Ensure that devices used to access the platform are reasonably protected.</li>
                </ul>
                <p>
                  The Account Owner is responsible for activities carried out through the workshop account by its authorized users, to the extent permitted by applicable law.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  The Company will not be responsible for losses arising from compromised credentials, unauthorized sharing of login details, or failure to maintain reasonable account security, except to the extent caused by the Company's breach of its own legal or contractual obligations.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6. Multi-User and Multi-Branch Accounts
                </h2>
                <p>
                  GarageSaarthi may allow Account Owners to create additional users, assign roles, and manage multiple workshop branches.
                </p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-2 text-sm">
                  <p className="font-semibold text-slate-900">The Account Owner is responsible for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Inviting authorized users.</li>
                    <li>Assigning appropriate access permissions.</li>
                    <li>Managing administrative privileges.</li>
                    <li>Monitoring user activity where relevant.</li>
                    <li>Ensuring that employees follow applicable business policies.</li>
                    <li>Removing access when an individual leaves the organization.</li>
                    <li>Ensuring that information belonging to one branch is accessed only by appropriately authorized users.</li>
                  </ul>
                </div>
                <p>
                  The Company is not responsible for internal business disputes concerning ownership, employment, employee termination, or disagreements between workshop partners or administrators.
                </p>
                <p>
                  Where competing individuals claim ownership or administrative control over an account, we may temporarily restrict administrative changes or access while requesting reasonable evidence of authority. We may take reasonable steps to protect the account and its information while such disputes are investigated.
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7. Description of Services
                </h2>
                <p>
                  GarageSaarthi provides software and digital tools to support automobile workshop and garage operations. Depending on the subscription plan, configuration, availability, and product updates, the platform may include:
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 mb-1">7.1 Workshop Management</h3>
                    <p className="text-sm">Job card management, vehicle management, vehicle inspections, test drive management, appointment management, vehicle exit passes, service and repair records, workshop operational dashboards.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 mb-1">7.2 Customer and Sales Management</h3>
                    <p className="text-sm">Customer management, CRM, customer history, customer communication, service reminders, customer engagement tools.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 mb-1">7.3 Finance and Accounting</h3>
                    <p className="text-sm">Billing and invoicing, payment records, financial reports, expense management, loan and finance management, outstanding balance tracking, GST-related billing functionality.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 mb-1">7.4 Inventory and Vendor Management</h3>
                    <p className="text-sm">Inventory management, spare parts records, vendor and supplier management, purchase and stock-related records.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 mb-1">7.5 Employee and Team Management</h3>
                    <p className="text-sm">Employee management, mechanic clocking, attendance, payroll-related records, leave management, role-based access, multi-user management.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 mb-1">7.6 Marketing, Media and Communication</h3>
                    <p className="text-sm">Media gallery, before-and-after photographs, offers and promotions, WhatsApp-related communication features, SMS and email notifications, service reminders.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 mb-1">7.7 Automation and Artificial Intelligence</h3>
                    <p className="text-sm">Where available: AI-assisted calculations, automated document or content generation, business summaries and reports, workflow automation, AI-assisted recommendations, and other intelligent features.</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  The availability of any particular feature may depend on the user's subscription, account configuration, usage limits, geographic availability, and third-party service availability. The Company reserves the right to introduce, modify, improve, restrict, or discontinue features in accordance with these Terms and applicable law.
                </p>
              </section>

              {/* Section 8 */}
              <section className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8. Free Trials and Subscription Plans
                </h2>
                <p>
                  GarageSaarthi may offer free trials and different subscription plans. The duration, features, pricing, usage limits, additional user allowances, and other commercial conditions of each plan will be displayed on the official website, pricing page, application, or applicable purchase interface.
                </p>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900">8.1 Free Trial</h3>
                    <p className="text-sm">Where a free trial is offered: the trial period begins when the eligible account is activated; trial features and usage limits may apply; repeated trial registrations may be restricted; and the trial may expire automatically. A free trial does not create an entitlement to continued free access.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">8.2 Subscription Plans</h3>
                    <p className="text-sm">Users may purchase available plans (monthly, quarterly, annual, etc.) according to the pricing and commercial terms displayed at purchase.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">8.3 Subscription Activation</h3>
                    <p className="text-sm">Paid subscription access is activated after successful payment confirmation. If a payment is unsuccessful or disputed, activation may be delayed or withheld.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">8.4 Subscription Renewal</h3>
                    <p className="text-sm">Subscriptions remain active for the purchased duration. Automatic renewal, if offered, will be disclosed before purchase and subject to applicable cancellation terms.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">8.5 Changes to Subscription Plans</h3>
                    <p className="text-sm">The Company may revise prices or plan allocations for future purchases and renewals. Existing paid subscriptions remain subject to terms applicable during their purchased period.</p>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  9. Payments, Taxes and Billing
                </h2>
                <p>All payments must be made using payment methods made available by GarageSaarthi. You agree that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>You will provide accurate billing information.</li>
                  <li>You will pay the applicable subscription amount.</li>
                  <li>Applicable taxes, including GST where required, may be charged separately or included as disclosed at checkout.</li>
                  <li>Payment gateway or banking charges may apply where disclosed.</li>
                  <li>You are responsible for maintaining valid payment details.</li>
                  <li>You will not use fraudulent, unauthorized, or unlawful payment methods.</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-600">
                  The Company may use third-party payment processors. The Company may temporarily restrict subscription features where payment remains unsuccessful, reversed, disputed, or overdue, subject to applicable law.
                </p>
              </section>

              {/* Section 10 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  10. Cancellation, Refunds and Payment Disputes
                </h2>
                <p>
                  Subscription cancellation and refund requests will be governed by the applicable Refund &amp; Cancellation Policy published by GarageSaarthi.
                </p>
                <p>Unless otherwise stated in the applicable purchase terms or required by law:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cancellation of a subscription does not automatically entitle the user to a refund.</li>
                  <li>Cancellation may prevent future renewal while allowing access until the end of the already-paid subscription period.</li>
                  <li>Refund eligibility may depend on the nature of the subscription, payment status, service activation, and applicable consumer protection laws.</li>
                  <li>Duplicate payments, verified technical payment failures, or incorrect charges will be reviewed on a case-by-case basis.</li>
                  <li>Refunds approved by the Company will generally be processed through the original payment method.</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-600">
                  Nothing in this section limits any non-waivable statutory rights available to users under applicable law.
                </p>
              </section>

              {/* Section 11 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  11. User Responsibilities and Acceptable Use
                </h2>
                <p>You agree to use GarageSaarthi only for lawful business and operational purposes. You must not:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Use the platform for fraudulent, illegal, or unauthorized activities.</li>
                  <li>Upload or distribute unlawful, misleading, harmful, or infringing content.</li>
                  <li>Access another user's account without authorization.</li>
                  <li>Attempt to bypass authentication or access restrictions.</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code except where expressly permitted by law.</li>
                  <li>Copy, reproduce, resell, sublicense, or commercially exploit the platform without written authorization.</li>
                  <li>Introduce malware, viruses, malicious scripts, or harmful code.</li>
                  <li>Attempt unauthorized access to servers, databases, APIs, or infrastructure.</li>
                  <li>Interfere with platform availability, security, or performance.</li>
                  <li>Scrape, extract, or harvest information through unauthorized automated methods.</li>
                  <li>Use GarageSaarthi to send unlawful spam, unsolicited communications, or fraudulent messages.</li>
                  <li>Misuse customer, employee, vendor, or other personal information.</li>
                  <li>Falsify invoices, financial records, workshop records, or business documents.</li>
                  <li>Use the platform in a manner that infringes the rights of another person or organization.</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-600">
                  The Company may investigate suspected violations and take appropriate action, including warnings, feature restrictions, account suspension, or termination.
                </p>
              </section>

              {/* Section 12 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  12. Customer Data and Workshop Data Ownership
                </h2>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-emerald-950 font-semibold">
                  GarageSaarthi does not claim ownership of your underlying business records merely because they are stored on the platform.
                </div>
                <p>
                  Users and businesses retain their respective rights in information they submit to or store through GarageSaarthi.
                </p>
                <p>
                  You grant the Company a limited, non-exclusive right to host, store, transmit, reproduce, process, and display Workshop Data only to the extent reasonably necessary to provide, secure, maintain, support, and improve the services, or as otherwise authorized by you or permitted by applicable law.
                </p>
                <p className="font-semibold text-slate-900">
                  The Company does not acquire ownership of your customer database, workshop records, or business information through your use of GarageSaarthi.
                </p>
              </section>

              {/* Section 13 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  13. Responsibility for Customer and Employee Information
                </h2>
                <p>
                  When you upload or enter information about your customers, employees, vendors, or other individuals, you are responsible for ensuring that such processing is lawful. You must:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Collect information only for legitimate business purposes.</li>
                  <li>Provide appropriate privacy notices where required.</li>
                  <li>Obtain consent or establish another lawful basis where required.</li>
                  <li>Respect requests and rights of individuals under applicable data protection laws.</li>
                  <li>Avoid collecting unnecessary or excessive information.</li>
                  <li>Restrict access to authorized employees.</li>
                  <li>Avoid sharing personal information with unauthorized parties.</li>
                </ul>
                <p className="text-sm">
                  GarageSaarthi acts as a software service provider and may act as a data processor when processing personal information on behalf of a workshop.
                </p>
              </section>

              {/* Section 14 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  14. Data Processing Addendum (DPA)
                </h2>
                <p>
                  For business customers whose use of GarageSaarthi involves processing personal information on their behalf, the Company may provide a separate Data Processing Addendum (DPA).
                </p>
                <p>
                  Where a DPA applies and is incorporated, it supplements these Terms. The DPA does not transfer ownership of workshop business records to GarageSaarthi.
                </p>
              </section>

              {/* Section 15 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  15. Data Storage, Backups and Data Loss
                </h2>
                <p>
                  GarageSaarthi uses cloud infrastructure and storage systems to maintain the platform and customer information. We implement backup and recovery procedures to reduce the risk of data loss.
                </p>
                <p>
                  However, no cloud-based system can guarantee that data will never be lost, corrupted, or delayed. Unless expressly agreed in a separate written SLA, we do not guarantee zero data loss or recovery of information deleted by an authorized user. Users are encouraged to maintain appropriate independent records and export important business information periodically.
                </p>
              </section>

              {/* Section 16 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  16. Account Suspension and Termination
                </h2>
                <p>
                  The Company may suspend, restrict, or terminate access to an account where reasonably necessary, including in circumstances involving material violation of Terms, fraudulent activity, unauthorized access attempts, security threats, non-payment, or legal requirements.
                </p>
                <p>
                  Where reasonably practicable, we will provide notice and an opportunity to address the issue before suspension or termination. Immediate action may be taken where necessary to protect security, prevent harm, or comply with law.
                </p>
              </section>

              {/* Section 17 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  17. Consequences of Account Termination
                </h2>
                <p>
                  Upon termination: access to features ceases; active subscriptions are handled under refund terms; Workshop Data may be retained, exported, or deleted according to Privacy Policy and law; outstanding payments remain payable.
                </p>
                <p>
                  The Company may provide a reasonable opportunity to request an export of eligible Workshop Data before permanent deletion, subject to technical availability, verification, and legal requirements.
                </p>
              </section>

              {/* Section 18 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  18. Platform Availability and Maintenance
                </h2>
                <p>
                  We aim to maintain reliable access to GarageSaarthi. However, access may occasionally be interrupted due to scheduled/emergency maintenance, software updates, server failures, internet problems, or events beyond our reasonable control. We do not guarantee uninterrupted or error-free operation unless expressly agreed through a separate written SLA.
                </p>
              </section>

              {/* Section 19 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  19. Third-Party Services and Integrations
                </h2>
                <p>
                  GarageSaarthi may integrate with third-party providers (payment gateways, cloud hosting, SMS/WhatsApp services, email delivery, AI providers). Your use of third-party services may be subject to separate terms, permissions, and fees. The Company does not control every aspect of third-party services and is not responsible for independent third-party failures.
                </p>
              </section>

              {/* Section 20 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  20. Artificial Intelligence and Automated Features
                </h2>
                <p>
                  GarageSaarthi may provide AI-powered calculations, recommendations, summaries, or document generation. You acknowledge that AI outputs may contain errors, automated calculations depend on user-entered data, and outputs should be reviewed before use. You remain responsible for verifying important business, financial, tax, legal, and operational decisions.
                </p>
              </section>

              {/* Section 21 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  21. Financial, Tax and Billing Disclaimer
                </h2>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-950 font-semibold text-sm">
                  GarageSaarthi is an operational software tool and is NOT a substitute for a qualified chartered accountant, tax professional, legal advisor, financial advisor, or statutory auditor.
                </div>
                <p>
                  Users are responsible for entering accurate transaction information, verifying tax rates (GST), reviewing invoices before issuing them, and ensuring statutory compliance.
                </p>
              </section>

              {/* Section 22 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  22. Intellectual Property Rights
                </h2>
                <p>
                  All rights, title, and interest in GarageSaarthi's software, source code, design, branding, logos, trademarks, documentation, and user interface remain with the Company or its licensors. You are granted a limited, non-exclusive, non-transferable, revocable license to use the platform for its intended business purposes during your subscription.
                </p>
              </section>

              {/* Section 23 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  23. Confidentiality
                </h2>
                <p>
                  Each party agrees to use reasonable measures to protect confidential information (business records, technical details, financial records) and not disclose it to unauthorized persons, except where required by law or necessary to provide the services through authorized service providers.
                </p>
              </section>

              {/* Section 24 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  24. Security Incidents and Unauthorized Access
                </h2>
                <p>
                  Users must promptly notify the Company if they become aware of unauthorized account access, suspected data exposure, compromised credentials, or security vulnerabilities affecting the platform.
                </p>
              </section>

              {/* Section 25 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  25. Indemnification
                </h2>
                <p>
                  To the extent permitted by law, you agree to indemnify and hold harmless the Company against third-party claims, liabilities, and legal expenses arising directly from your unlawful use of the platform, material violation of these Terms, infringement of third-party IP rights, or violation of applicable laws.
                </p>
              </section>

              {/* Section 26 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  26. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, the Company will not be liable for indirect, incidental, special, or consequential losses (loss of anticipated profits, business interruption, loss of goodwill). The Company's aggregate liability will not exceed subscription fees actually paid by the affected customer to the Company during the twelve (12) months immediately preceding the event giving rise to the claim.
                </p>
              </section>

              {/* Section 27 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  27. Disclaimer of Warranties
                </h2>
                <p>
                  GarageSaarthi is provided on an "as available" basis. To the maximum extent permitted by law, we do not guarantee uninterrupted access, complete error-free operation, or that every feature will work with every third-party system.
                </p>
              </section>

              {/* Section 28 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  28. Force Majeure
                </h2>
                <p>
                  The Company will not be responsible for delay or failure to perform obligations caused by circumstances beyond reasonable control, including natural disasters, war, major cloud infrastructure outages, widespread cyberattacks, public health emergencies, or government restrictions.
                </p>
              </section>

              {/* Section 29 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  29. Changes to the Services and These Terms
                </h2>
                <p>
                  We may update, modify, or replace these Terms from time to time. The updated Terms will be published on our official website with a revised Last Updated date. For material changes, reasonable advance notice will be provided where practicable.
                </p>
              </section>

              {/* Section 30 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  30. Electronic Acceptance and Agreement Records
                </h2>
                <p>
                  By selecting the acceptance checkbox and completing registration or purchasing a subscription, you confirm that you have reviewed and agreed to these Terms and the Privacy Policy. The Company may maintain electronic records of acceptance as evidence of the applicable agreement.
                </p>
              </section>

              {/* Section 31 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  31. Governing Law and Jurisdiction
                </h2>
                <p>
                  These Terms will be governed by and interpreted in accordance with the laws of India. Subject to mandatory legal requirements, the courts having competent jurisdiction in <strong>Surat, Gujarat, India</strong> will have jurisdiction over disputes.
                </p>
              </section>

              {/* Section 32 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  32. Dispute Resolution
                </h2>
                <p>
                  If a dispute arises, both parties agree to first attempt to resolve the matter through good-faith informal discussions before pursuing legal remedies before competent courts.
                </p>
              </section>

              {/* Section 33 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  33. International Users
                </h2>
                <p>
                  Users accessing the platform from outside India are responsible for ensuring compliance with applicable local laws.
                </p>
              </section>

              {/* Section 34 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  34. Severability
                </h2>
                <p>
                  If any provision of these Terms is held invalid or unenforceable, that provision will be limited or modified to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
                </p>
              </section>

              {/* Section 35 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  35. Waiver
                </h2>
                <p>
                  Failure by the Company to exercise or enforce any right under these Terms will not constitute a waiver of that right. Any waiver must be expressly made in writing.
                </p>
              </section>

              {/* Section 36 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  36. Assignment
                </h2>
                <p>
                  You may not assign your account or contractual rights without the Company's prior written consent. The Company may assign rights in connection with a merger, acquisition, or restructuring.
                </p>
              </section>

              {/* Section 37 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  37. Entire Agreement and Order of Precedence
                </h2>
                <p>
                  These Terms, together with the Privacy Policy, applicable DPA, and Refund Policy, form the entire agreement governing your use of GarageSaarthi. In case of conflict, a separately signed agreement or DPA prevails over general website terms to the extent of the conflict.
                </p>
              </section>

              {/* Section 38 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  38. Contact Information
                </h2>
                <p>
                  For questions, concerns, complaints, or requests regarding these Terms and Conditions, please contact:
                </p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-1.5 text-sm">
                  <p className="font-bold text-slate-900">GarageSaarthi – Legal &amp; Support Team</p>
                  <p><strong>Company:</strong> Techifyhouse</p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <Link href="https://www.garagesaarthi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      https://www.garagesaarthi.com
                    </Link>
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <Link href="mailto:contact@garagesaarthi.com" className="text-primary hover:underline font-semibold">
                      contact@garagesaarthi.com
                    </Link>
                  </p>
                  <p><strong>Address:</strong> 241, Royal Square, VIP Circle, Uttran, Surat, Gujarat 394105, India.</p>
                </div>

                <div className="bg-orange-50/60 p-5 rounded-xl border border-orange-200/60 mt-8 text-xs sm:text-sm text-slate-700">
                  By registering for or using GarageSaarthi, you acknowledge that you have been provided access to these Terms &amp; Conditions and agree to be bound by the applicable provisions.
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
