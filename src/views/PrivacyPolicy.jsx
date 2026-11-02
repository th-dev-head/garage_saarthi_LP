"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import PageLayout from "@/src/components/common/PageLayout";

// --- Static Data for Clean .map() Rendering ---

const appliesToList = [
  "Website visitors.",
  "Individuals registering for a GarageSaarthi account.",
  "Garage owners and workshop administrators.",
  "Employees, mechanics, service advisors, accountants, and other authorized workshop users.",
  "Customers and vehicle owners whose information is entered into GarageSaarthi by a workshop.",
  "Vendors, suppliers, business partners, and other individuals whose information is stored through the platform.",
];

const customerInfoList = [
  "Customer name.",
  "Mobile number.",
  "Email address.",
  "Residential or business address.",
  "Customer communication history.",
  "Service history.",
  "Customer feedback and complaints.",
];

const vehicleInfoList = [
  "Vehicle registration number.",
  "Vehicle make and model.",
  "Vehicle type.",
  "Vehicle identification number (VIN), chassis number, or engine number, where provided.",
  "Vehicle photographs.",
  "Vehicle inspection information.",
  "Repair and maintenance history.",
  "Service records.",
  "Insurance-related information.",
  "Other vehicle-related documents uploaded by the workshop.",
];

const collectionCategories = [
  {
    title: "3.1 Account and Registration Information",
    intro: "When you register for GarageSaarthi, we may collect:",
    items: [
      "Full name.",
      "Email address.",
      "Mobile number.",
      "OTP verification status.",
      "Garage or workshop name.",
      "Business address.",
      "City, state, and country.",
      "Account credentials and authentication-related information.",
      "Account registration date and time.",
      "Account status and subscription information.",
    ],
    note: "We may also collect information about the account administrator and authorized users added to the workshop account.",
  },
  {
    title: "3.2 Business and Workshop Information",
    intro: "To provide workshop management functionality, we may collect and process:",
    items: [
      "Workshop business name and address.",
      "Business contact information.",
      "GSTIN and other applicable business registration details.",
      "Branch and workshop information.",
      "Business operating information.",
      "Service and repair details.",
      "Job cards and work orders.",
      "Vehicle inspection reports.",
      "Test drive records.",
      "Appointment and pickup/drop information.",
      "Vehicle exit passes and gate pass information.",
      "Inventory and spare parts records.",
      "Vendor and supplier information.",
      "Purchase and sales records.",
      "Business reports and operational records.",
    ],
  },
  {
    title: "3.4 Employee and Team Information",
    intro: "Where employee and team management features are used, we may process:",
    items: [
      "Employee and mechanic names.",
      "Mobile numbers and email addresses.",
      "Designations and assigned roles.",
      "Attendance records.",
      "Working hours and mechanic clocking records.",
      "Leave and holiday records.",
      "Payroll-related information.",
      "Salary and payment records, where entered.",
      "User activity and account access records.",
    ],
    note: "The workshop administrator is responsible for ensuring that employees are appropriately informed about the processing of their information.",
  },
  {
    title: "3.5 Financial, Billing and Transaction Information",
    intro: "Depending on the features used, GarageSaarthi may process:",
    items: [
      "Customer invoices and bills.",
      "GST-related billing information.",
      "Payment records.",
      "Outstanding balances.",
      "Credit and debit records.",
      "Loan and finance records.",
      "Expense information.",
      "Vendor payments.",
      "Customer payment history.",
      "Financial reports.",
      "Transaction references and subscription details.",
    ],
    note: "Where payments are processed through external payment gateways, payment credentials such as card details may be collected and processed directly by the relevant payment service provider. We do not claim to store complete payment card information unless a specific payment arrangement expressly requires and supports it.",
  },
  {
    title: "3.6 Documents, Images and Uploaded Files",
    intro: "Users may upload or generate content through GarageSaarthi, including:",
    items: [
      "Vehicle photographs.",
      "Before-and-after service photographs.",
      "Vehicle inspection images.",
      "Insurance documents.",
      "Job-related documents.",
      "Invoices and receipts.",
      "Business documents.",
      "Other files associated with workshop operations.",
    ],
    note: "Such files may contain personal, business, financial, or vehicle-related information. You are responsible for ensuring that uploaded information is accurate, lawful, and appropriate for the intended business purpose.",
  },
  {
    title: "3.7 Communication Information",
    intro: "When you communicate with us or use platform communication features, we may process:",
    items: [
      "Support requests.",
      "Emails and messages.",
      "Customer communication records.",
      "WhatsApp-related communication information.",
      "SMS-related communication information.",
      "Service reminders and notification records.",
      "Appointment notifications.",
      "Communication delivery status, where available.",
    ],
  },
  {
    title: "3.8 Technical and Usage Information",
    intro: "We may automatically collect technical information when you access our platform, including:",
    items: [
      "IP address.",
      "Device type and model.",
      "Operating system.",
      "Browser type and version.",
      "Application version.",
      "Login timestamps.",
      "Session information.",
      "Approximate location derived from technical information, where available.",
      "Pages and features accessed.",
      "Actions performed within the platform.",
      "Error logs and diagnostic information.",
      "Security and authentication logs.",
    ],
    note: "This information helps us maintain platform functionality, improve performance, troubleshoot technical problems, and detect unauthorized activity.",
  },
];

const usagePurposes = [
  {
    title: "4.1 Account Creation and Management",
    items: [
      "Registering new users.",
      "Verifying email addresses and mobile numbers.",
      "Managing account authentication.",
      "Maintaining user profiles.",
      "Managing workshop accounts.",
      "Managing additional users and access permissions.",
      "Providing account-related notifications.",
    ],
  },
  {
    title: "4.2 Providing GarageSaarthi Services",
    items: [
      "Enabling workshop management functionality.",
      "Creating and managing job cards.",
      "Managing vehicles and customer records.",
      "Generating invoices and reports.",
      "Managing inventory and vendor information.",
      "Managing attendance and payroll records.",
      "Providing appointment and service reminder functionality.",
      "Supporting multi-user and multi-branch operations.",
      "Enabling other available platform features.",
    ],
  },
  {
    title: "4.3 Customer Communication and Notifications",
    items: [
      "Sending OTP verification messages.",
      "Sending account-related notifications.",
      "Sending service reminders.",
      "Facilitating workshop-to-customer communications.",
      "Sending billing and transaction notifications.",
      "Sending operational and security alerts.",
      "Providing important service announcements.",
    ],
    note: "Messages sent through WhatsApp, SMS, email, or other third-party communication services may be subject to the privacy policies and terms of those respective providers.",
  },
  {
    title: "4.4 Subscription and Payment Management",
    items: [
      "Managing subscription plans.",
      "Processing subscription payments through payment providers.",
      "Managing free trials.",
      "Recording payment status.",
      "Managing renewals and cancellations.",
      "Providing invoices and payment confirmations.",
      "Preventing payment-related misuse and fraud.",
    ],
  },
  {
    title: "4.5 Security and Fraud Prevention",
    items: [
      "Detecting suspicious login activity.",
      "Preventing unauthorized access.",
      "Investigating security incidents.",
      "Monitoring unusual platform activity.",
      "Enforcing our Terms & Conditions.",
      "Maintaining records necessary for security, compliance, and dispute resolution.",
    ],
  },
  {
    title: "4.6 Product Improvement and Analytics",
    items: [
      "Understanding how users interact with GarageSaarthi.",
      "Identifying technical errors.",
      "Improving existing features.",
      "Developing new functionality.",
      "Monitoring platform performance.",
      "Analyzing aggregated usage trends.",
      "Improving user experience.",
    ],
    note: "Where reasonably possible, analytics and product improvement activities will use aggregated or de-identified information.",
  },
  {
    title: "4.7 Legal and Regulatory Compliance",
    items: [
      "Complying with applicable laws.",
      "Responding to lawful government or regulatory requests.",
      "Maintaining legally required records.",
      "Establishing, exercising, or defending legal claims.",
      "Investigating suspected fraud or unlawful activity.",
      "Enforcing contractual obligations.",
    ],
  },
];

const sharingParties = [
  {
    title: "5.1 Technology and Infrastructure Providers",
    desc: "We may use third-party service providers for cloud hosting, database management, data storage, application performance monitoring, error tracking, security services, backup and recovery, and technical support. Such providers process information on our behalf under confidentiality terms.",
  },
  {
    title: "5.2 Communication Service Providers",
    desc: "We may use external providers to facilitate OTP delivery, SMS notifications, WhatsApp communication, email delivery, and push notifications.",
  },
  {
    title: "5.3 Payment Service Providers",
    desc: "Subscription and payment-related information may be shared with payment gateways, banks, and other financial service providers to process transactions, verify payment status, prevent fraud, and manage subscriptions.",
  },
  {
    title: "5.4 Analytics and Diagnostic Providers",
    desc: "We may use analytics and diagnostic services to understand platform performance, identify errors, and improve our services.",
  },
  {
    title: "5.5 Legal and Government Authorities",
    desc: "We may disclose information where required by applicable law, court orders, regulatory requirements, or lawful government requests.",
  },
  {
    title: "5.6 Business Transfers",
    desc: "If the Company undergoes a merger, acquisition, restructuring, financing, or sale of business assets, relevant information may be transferred as part of the transaction, subject to applicable legal requirements.",
  },
  {
    title: "5.7 With Your Authorization",
    desc: "We may share information with other parties when you specifically authorize or instruct us to do so.",
  },
];

const workshopResponsibilities = [
  "The workshop is generally responsible for determining why that information is collected and how it is used for its business.",
  "The workshop must ensure that it has the necessary authority, permissions, notices, and lawful basis to provide that information to the platform.",
  "The workshop must not upload information obtained unlawfully or without appropriate authorization.",
  "The workshop must ensure that its authorized employees access information only for legitimate business purposes.",
];

const securityMeasures = [
  "Controlled access to systems.",
  "Authentication and authorization mechanisms.",
  "Role-based access permissions.",
  "Secure communication protocols (TLS/SSL encryption).",
  "Server and database security controls.",
  "Monitoring and diagnostic logs.",
  "Backup and recovery procedures.",
  "Protection against unauthorized access and internal access restrictions.",
];

const privacyRights = [
  "The right to request information about personal data being processed.",
  "The right to request correction of inaccurate information.",
  "The right to request completion or updating of information.",
  "The right to request erasure of personal information where applicable.",
  "The right to withdraw consent where processing is based on consent.",
  "The right to raise privacy-related complaints.",
  "The right to nominate another individual where provided under applicable law.",
];

export default function PrivacyPolicy() {
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
                Legal &amp; Compliance
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                PRIVACY POLICY - GARAGESAARTHI
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
                  GarageSaarthi is a cloud-based garage and automobile workshop management platform designed to help automobile repair shops, garages, service centres, and workshop businesses manage their daily business operations through a centralized digital system.
                </p>
                <p>
                  This Privacy Policy explains how we collect, receive, store, use, process, share, and protect personal information and other data when you access or use GarageSaarthi through our website, web application, mobile applications, or any associated services.
                </p>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">This Privacy Policy applies to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {appliesToList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  By creating an account and accepting this Privacy Policy, you acknowledge that you have read and understood how we process personal information as described in this document.
                </p>
                <p className="font-medium text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                  If you do not agree with this Privacy Policy, please do not register for or use the platform.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  2. About GarageSaarthi and the Company
                </h2>
                <p>GarageSaarthi is a software product owned, operated, and maintained by:</p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-2 text-sm">
                  <p><strong>Company Name:</strong> Techifyhouse</p>
                  <p><strong>Registered/Business Address:</strong> 241, Royal Square, VIP Circle, Uttran, Surat, Gujarat 394105, India.</p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <Link href="https://www.garagesaarthi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      https://www.garagesaarthi.com
                    </Link>
                  </p>
                  <p>
                    <strong>Privacy Contact:</strong>{" "}
                    <Link href="mailto:contact@garagesaarthi.com" className="text-primary hover:underline font-semibold">
                      contact@garagesaarthi.com
                    </Link>
                  </p>
                </div>
                <p>
                  Throughout this Privacy Policy, the terms <em>"Company"</em>, <em>"We"</em>, <em>"Us"</em>, and <em>"Our"</em> refer to the legal entity operating GarageSaarthi.
                </p>
                <p>
                  The terms <em>"You"</em>, <em>"Your"</em>, <em>"User"</em>, and <em>"Customer"</em> refer to individuals accessing or using the GarageSaarthi platform.
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  3. Information We Collect
                </h2>
                <p>
                  We collect different categories of information depending on how you interact with GarageSaarthi and which features you use.
                </p>

                {/* 3.1 & 3.2 */}
                {collectionCategories.slice(0, 2).map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                    <p>{cat.intro}</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                    {cat.note && <p className="text-sm text-slate-600">{cat.note}</p>}
                  </div>
                ))}

                {/* 3.3 Customer and Vehicle Information */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">3.3 Customer and Vehicle Information</h3>
                  <p>
                    GarageSaarthi allows workshop operators to maintain customer and vehicle records. Depending on the information entered by the workshop, this may include:
                  </p>
                  
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-3">
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Customer Information:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        {customerInfoList.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="font-semibold text-slate-900 mb-1">Vehicle Information:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        {vehicleInfoList.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    The workshop or business that enters this information is responsible for ensuring that it has an appropriate legal basis and the necessary permissions to collect and use such information.
                  </p>
                </div>

                {/* 3.4 to 3.8 */}
                {collectionCategories.slice(2).map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                    <p>{cat.intro}</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                    {cat.note && <p className="text-xs sm:text-sm text-slate-600">{cat.note}</p>}
                  </div>
                ))}
              </section>

              {/* Section 4 */}
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4. How We Use Your Information
                </h2>
                <p>We use collected information for legitimate and disclosed business purposes, including:</p>

                <div className="space-y-4">
                  {usagePurposes.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                      <ul className="list-disc pl-6 space-y-0.5">
                        {item.items.map((subItem, sIdx) => (
                          <li key={sIdx}>{subItem}</li>
                        ))}
                      </ul>
                      {item.note && (
                        <p className="text-xs text-slate-500 mt-1">{item.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5. How We Share Your Information
                </h2>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-emerald-950 font-semibold">
                  We do not sell personal information to third parties as a business model.
                </div>
                <p>
                  However, information may be shared in the following circumstances when necessary and legally permitted:
                </p>

                <div className="space-y-3">
                  {sharingParties.map((party, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-slate-900">{party.title}</h3>
                      <p className="text-sm">{party.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6. Workshop Data and Responsibility for Customer Information
                </h2>
                <p>
                  GarageSaarthi is designed to help garages and automobile workshops manage their own business operations and customer information.
                </p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-2">
                  <p className="font-semibold text-slate-900">When a garage or workshop enters personal information about its customers, employees, vendors, or other individuals into GarageSaarthi:</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-sm">
                    {workshopResponsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  For information processed on behalf of a workshop to provide the platform, GarageSaarthi generally acts as a service provider or processor, as applicable under relevant law.
                </p>
                <p>
                  For account registration, subscriptions, platform security, website analytics, and our own business administration, GarageSaarthi may independently determine the purposes and means of processing.
                </p>
                <p>
                  We will process workshop data according to the applicable service arrangements, this Privacy Policy, and applicable law.
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7. WhatsApp, SMS, Email and Third-Party Integrations
                </h2>
                <p>
                  GarageSaarthi may provide features that facilitate communications between workshops and their customers, including WhatsApp notifications, service reminders, appointment confirmations, customer updates, SMS notifications, and email alerts.
                </p>
                <p>
                  The delivery of such communications may depend on third-party service providers, their availability, applicable messaging rules, user permissions, and account configurations. GarageSaarthi does not control the independent privacy practices, service availability, or policies of third-party platforms.
                </p>
                <p>
                  Users are responsible for ensuring that they have the necessary permissions and lawful basis before sending marketing or service-related communications to their customers.
                </p>
              </section>

              {/* Section 8 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8. Artificial Intelligence and Automated Processing
                </h2>
                <p>
                  Certain GarageSaarthi features may include artificial intelligence, automation, or other automated processing capabilities. Where such features are enabled, relevant information may be processed to generate reports, assist with business calculations, automate workflows, provide recommendations, and improve operational efficiency.
                </p>
                <p>
                  Depending on the feature, relevant information may be transmitted to third-party AI or automation service providers. We will seek to limit information shared with such providers to what is reasonably necessary for the relevant functionality.
                </p>
                <p className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-900 text-sm">
                  <strong>Important Note:</strong> AI-generated outputs may contain errors, inaccuracies, or incomplete information. Users should independently verify important calculations, business decisions, financial information, and other consequential outputs. We do not represent AI-generated information as a substitute for professional legal, accounting, financial, or technical advice.
                </p>
              </section>

              {/* Section 9 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  9. Cookies and Similar Technologies
                </h2>
                <p>
                  Our website and platform may use cookies, tracking technologies, scripts, and similar technologies to maintain website functionality, manage user sessions, remember preferences, improve security, understand traffic, and measure campaign performance.
                </p>
                <p>
                  You may be able to control cookies through your browser settings. Disabling certain cookies may affect the availability or functionality of some website features. Where required by applicable law, we will obtain appropriate consent before using non-essential tracking technologies.
                </p>
              </section>

              {/* Section 10 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  10. Data Storage, Security and Protection
                </h2>
                <p>
                  We take reasonable technical and organizational measures to protect information processed through GarageSaarthi. Depending on the infrastructure and services used, these measures may include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  {securityMeasures.map((measure, idx) => (
                    <li key={idx}>{measure}</li>
                  ))}
                </ul>
                <p>
                  Access to information is intended to be limited to authorized personnel and service providers who require such access for legitimate operational purposes.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  However, no internet-based service or electronic storage system can be guaranteed to be completely secure. We cannot guarantee absolute protection against every possible cyberattack, unauthorized access incident, technical failure, or data loss event. Users are responsible for protecting their login credentials and ensuring unauthorized individuals do not access their accounts.
                </p>
              </section>

              {/* Section 11 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  11. Data Retention
                </h2>
                <p>
                  We retain information only for as long as reasonably necessary for the purposes described in this Privacy Policy, subject to applicable legal, accounting, tax, and contractual requirements.
                </p>
                <p>
                  After account termination or deletion, certain information may remain in backups, security logs, financial records, or legally required records for an appropriate period. Where information is no longer required, we will take reasonable steps to delete, anonymize, or otherwise dispose of it, subject to applicable law and technical limitations.
                </p>
              </section>

              {/* Section 12 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  12. Account Deletion and Data Deletion Requests
                </h2>
                <p>
                  Users may request account closure or deletion of their personal information by contacting us through official support or privacy contact details. Before processing a request, we may verify the identity and authority of the requester.
                </p>
                <p>
                  Deleting a user account does not automatically mean that all records created by a workshop, including invoices, job cards, financial records, and customer service history, must be deleted. Where a workshop administrator requests deletion of a workshop account or its records, the request may be subject to ownership verification, contractual obligations, applicable record-retention requirements, and the rights of other affected individuals.
                </p>
              </section>

              {/* Section 13 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  13. Your Privacy Rights
                </h2>
                <p>Subject to applicable law, you may have rights concerning your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {privacyRights.map((right, idx) => (
                    <li key={idx}>{right}</li>
                  ))}
                </ul>
                <p>
                  To exercise these rights, contact us at{" "}
                  <Link href="mailto:contact@garagesaarthi.com" className="text-primary hover:underline font-semibold">
                    contact@garagesaarthi.com
                  </Link>. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal.
                </p>
              </section>

              {/* Section 14 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  14. International Data Processing and Transfers
                </h2>
                <p>
                  GarageSaarthi may use technology infrastructure and service providers located in India or other countries. As a result, information may be processed or stored in jurisdictions different from the country in which you reside or operate your workshop.
                </p>
                <p>
                  We will take appropriate steps to ensure that such processing and transfers are carried out in accordance with applicable data protection requirements.
                </p>
              </section>

              {/* Section 15 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  15. Children's Privacy
                </h2>
                <p>
                  GarageSaarthi is a business-oriented platform and is not intended to be used independently by children. Individuals creating and administering business accounts must be legally capable of entering into the applicable agreement.
                </p>
                <p>
                  We do not knowingly seek to collect personal information directly from children for independent account registration.
                </p>
              </section>

              {/* Section 16 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  16. Third-Party Websites and Services
                </h2>
                <p>
                  GarageSaarthi may contain links to third-party websites, applications, payment gateways, communication platforms, and other external services. We do not own or control these third-party services. Their collection, use, and processing of information are governed by their own terms and privacy policies.
                </p>
              </section>

              {/* Section 17 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  17. Marketing and Promotional Communications
                </h2>
                <p>
                  We may use your contact information to send relevant product updates, promotional messages, offers, announcements, and information about GarageSaarthi.
                </p>
                <p>
                  You may opt out of promotional communications using the unsubscribe mechanism provided in the communication or by contacting us. Opting out will not prevent essential service-related, transactional, account security, or legally required communications.
                </p>
              </section>

              {/* Section 18 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  18. Changes to This Privacy Policy
                </h2>
                <p>
                  We reserve the right to modify, update, or replace this Privacy Policy when necessary due to changes in laws, features, technology infrastructure, or operational requirements. The updated version will be published on our official website with a revised Last Updated date.
                </p>
              </section>

              {/* Section 19 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  19. Grievance Redressal and Privacy Complaints
                </h2>
                <p>
                  If you have questions, concerns, or complaints regarding the collection, processing, storage, or use of your personal information, you may contact our Grievance Officer:
                </p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-1.5 text-sm">
                  <p><strong>Company:</strong> Techifyhouse</p>
                  <p><strong>Address:</strong> 241, Royal Square, VIP Circle, Uttran, Surat, Gujarat 394105, India.</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <Link href="mailto:contact@garagesaarthi.com" className="text-primary hover:underline font-semibold">
                      contact@garagesaarthi.com
                    </Link>
                  </p>
                </div>
              </section>

              {/* Section 20 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  20. Contact Us
                </h2>
                <p>
                  For questions about this Privacy Policy, requests relating to personal information, or concerns about data protection, please contact:
                </p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-1.5 text-sm">
                  <p className="font-bold text-slate-900">GarageSaarthi - Privacy Team</p>
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
                  By registering for or using GarageSaarthi, you acknowledge that you have been provided access to this Privacy Policy and understand the information described in it. Where consent is required by applicable law, such consent will be obtained through the appropriate consent mechanism.
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
