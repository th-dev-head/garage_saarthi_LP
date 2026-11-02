"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import PageLayout from "@/src/components/common/PageLayout";

const scopeOfProcessingList = [
  "GarageSaarthi website and web application.",
  "GarageSaarthi mobile applications.",
  "Workshop management modules.",
  "Customer management modules.",
  "Vehicle and service management modules.",
  "Finance and billing modules.",
  "Employee and attendance management modules.",
  "Inventory and vendor management modules.",
  "Document and media storage features.",
  "Communication and notification features.",
  "AI-powered and automated features, where enabled.",
  "Associated APIs, integrations, and technical infrastructure.",
];

const personalDataCategories = [
  {
    title: "4.1 Customer and Vehicle Owner Information",
    items: [
      "Full name.",
      "Mobile number.",
      "Email address.",
      "Residential or business address.",
      "Customer identification information where provided.",
      "Communication history.",
      "Service history.",
      "Appointment information.",
      "Customer feedback and complaints.",
      "Other customer-related information entered by the Customer.",
    ],
  },
  {
    title: "4.2 Vehicle-Related Information",
    items: [
      "Vehicle registration number.",
      "Vehicle make and model.",
      "Vehicle identification number (VIN).",
      "Chassis number.",
      "Engine number.",
      "Vehicle photographs.",
      "Vehicle inspection information.",
      "Repair and maintenance history.",
      "Service records.",
      "Insurance-related information where provided.",
      "Other vehicle-related documents.",
    ],
    note: "Vehicle information may constitute Personal Data where it can be linked to an identifiable individual.",
  },
  {
    title: "4.3 Employee and Authorized User Information",
    items: [
      "Employee name.",
      "Mobile number.",
      "Email address.",
      "Designation.",
      "Department or assigned role.",
      "Attendance records.",
      "Working hours.",
      "Leave records.",
      "Mechanic clocking information.",
      "Payroll-related information where entered.",
      "User activity and access records.",
    ],
  },
  {
    title: "4.4 Financial and Transaction Information",
    items: [
      "Invoice details.",
      "Payment records.",
      "Transaction references.",
      "Outstanding balances.",
      "Customer billing information.",
      "Vendor payment records.",
      "Expense records.",
      "Loan and finance information where entered.",
      "Tax-related billing information.",
    ],
  },
  {
    title: "4.5 Documents and Uploaded Files",
    items: [
      "Vehicle photographs.",
      "Inspection reports.",
      "Insurance documents.",
      "Invoices and receipts.",
      "Job cards.",
      "Business documents.",
      "Other uploaded files.",
    ],
    note: "Such documents may contain personal, financial, business, or vehicle-related information.",
  },
  {
    title: "4.6 Technical and Usage Information",
    items: [
      "User account identifiers.",
      "Login records.",
      "IP addresses.",
      "Device and browser information.",
      "Application activity.",
      "Session information.",
      "Error logs.",
      "Security logs.",
      "Other technical information necessary to provide and secure the platform.",
    ],
  },
];

const purposesOfProcessing = [
  "Creating and maintaining customer records.",
  "Managing vehicles and service histories.",
  "Generating job cards and work orders.",
  "Managing appointments.",
  "Managing vehicle inspections.",
  "Maintaining invoices and payment records.",
  "Managing employee and workshop records.",
  "Managing vendors and suppliers.",
  "Generating operational reports.",
  "Storing uploaded documents and photographs.",
  "Facilitating customer notifications and reminders.",
  "Providing enabled AI-powered or automated features.",
  "Providing customer support.",
  "Maintaining account security and system integrity.",
  "Providing backup, recovery, and technical maintenance.",
  "Other purposes necessary to deliver the subscribed services.",
];

const customerResponsibilities = [
  "Establish a valid legal basis for collecting and processing Personal Data.",
  "Provide appropriate privacy notices to affected individuals.",
  "Obtain consent where required by applicable law.",
  "Ensure that Personal Data is accurate and reasonably up to date.",
  "Avoid uploading information obtained unlawfully.",
  "Ensure that employees and other Authorized Users are appropriately informed.",
  "Configure account permissions according to business requirements.",
  "Remove access for individuals who are no longer authorized.",
  "Avoid sharing Personal Data with unauthorized persons.",
  "Respond to privacy requests from individuals where the Customer is responsible for doing so.",
  "Comply with applicable data protection, employment, consumer protection, and record-retention laws.",
  "Provide lawful and documented instructions to GarageSaarthi for processing activities.",
];

const companyProcessingObligations = [
  "Process Customer Personal Data only for the purposes of providing and supporting the services, in accordance with documented instructions and applicable law.",
  "Maintain appropriate confidentiality obligations for personnel authorized to access Customer Personal Data.",
  "Implement reasonable technical and organizational security measures.",
  "Restrict access to authorized personnel and service providers.",
  "Provide reasonable assistance with applicable data protection requests.",
  "Assist the Customer with relevant security and compliance obligations, as reasonably practicable.",
  "Notify the Customer of qualifying Personal Data Breaches in accordance with this DPA and applicable law.",
  "Engage Sub-processors subject to the requirements of this DPA.",
  "Delete, return, or otherwise handle Customer Personal Data upon termination in accordance with the applicable agreement and legal requirements.",
];

const confidentialityAccessPurposes = [
  "Platform maintenance.",
  "Technical support.",
  "Security monitoring.",
  "Troubleshooting.",
  "Service delivery.",
  "Legal compliance.",
  "Other authorized operational purposes.",
];

const securityMeasuresCategories = [
  {
    title: "9.1 Access Control",
    items: [
      "User authentication.",
      "Role-based access controls.",
      "Permission management.",
      "Administrative access restrictions.",
      "Account access monitoring.",
    ],
  },
  {
    title: "9.2 Data Transmission",
    items: [
      "Secure communication protocols such as HTTPS/TLS.",
      "Protected API communication.",
      "Secure authentication mechanisms.",
      "Appropriate access controls for data transmission.",
    ],
  },
  {
    title: "9.3 Infrastructure Security",
    items: [
      "Controlled server and database access.",
      "Security configurations.",
      "Infrastructure monitoring.",
      "Access restrictions for administrative systems.",
      "Security updates and maintenance.",
    ],
  },
  {
    title: "9.4 Monitoring and Incident Management",
    items: [
      "Application error monitoring.",
      "Security event logging where available.",
      "Investigation of reported security incidents.",
      "Reasonable incident response procedures.",
    ],
  },
  {
    title: "9.5 Backup and Recovery",
    items: [
      "Backup procedures where configured.",
      "Appropriate restrictions on backup access.",
      "Recovery procedures where available.",
      "Reasonable steps to protect stored backup information.",
    ],
  },
  {
    title: "9.6 Employee and Administrative Security",
    items: [
      "Limiting internal access based on operational requirements.",
      "Confidentiality obligations.",
      "Appropriate administrative access practices.",
      "Reasonable security awareness measures.",
    ],
  },
];

const subprocessorTypes = [
  "Cloud hosting providers.",
  "Database and storage providers.",
  "Backup and recovery providers.",
  "SMS and OTP service providers.",
  "WhatsApp and communication providers.",
  "Email delivery providers.",
  "Payment and billing providers, where relevant.",
  "Analytics and diagnostic providers.",
  "AI and automation service providers.",
  "Other infrastructure and technical service providers.",
];

const individualRightsList = [
  "Access to personal information.",
  "Correction of inaccurate information.",
  "Completion or updating of information.",
  "Erasure of Personal Data.",
  "Withdrawal of consent.",
  "Objection to certain processing activities.",
  "Restriction of processing.",
  "Other statutory rights.",
];

const incidentInfoItems = [
  "Description of the incident.",
  "Approximate date and time of discovery.",
  "Categories of affected information.",
  "Approximate number of affected records or individuals.",
  "Potential consequences.",
  "Measures taken to contain or mitigate the incident.",
  "Recommended protective actions.",
  "Contact details for further communication.",
];

const exportConditions = [
  "The type of information.",
  "The format in which information is stored.",
  "Technical availability.",
  "Account status.",
  "Applicable legal requirements.",
  "Reasonable verification of account ownership.",
];

const complianceAssistanceAreas = [
  "Security-related assessments.",
  "Personal Data Breach investigations.",
  "Data protection impact assessments where relevant.",
  "Regulatory inquiries concerning processing performed by GarageSaarthi.",
  "Requests from individuals.",
  "Information concerning Sub-processors.",
  "Other reasonable compliance requirements.",
];

const schedule1Details = [
  { label: "A. Subject Matter", text: "Provision of cloud-based garage and automobile workshop management software and related technical, operational, communication, and support services." },
  { label: "B. Duration", text: "For the duration of the Customer's active service agreement and any additional period necessary for lawful retention, backup management, account transition, or deletion." },
  { label: "C. Nature of Processing", text: "Collection, recording, organization, storage, retrieval, use, modification, transmission, display, backup, deletion, and other processing necessary to provide the subscribed services." },
  { label: "D. Purpose of Processing", text: "Workshop management, customer relationship management, vehicle service management, employee management, billing, reporting, document storage, communication, automation, technical support, and platform security." },
  { label: "E. Categories of Data Subjects", text: "Workshop customers, vehicle owners, workshop employees, mechanics, service advisors, workshop administrators, vendors, suppliers, and other individuals whose information is submitted by the Customer." },
  { label: "F. Categories of Personal Data", text: "Identity and contact information, vehicle-related information, workshop and service history, employee and attendance information, financial and billing information, documents and uploaded photographs, communication information, and technical/usage information." },
  { label: "G. Sensitive or Special-Category Data", text: "The platform is not intended for the routine processing of sensitive personal data or special-category data unless a relevant feature expressly supports such processing and the parties have established appropriate legal and technical safeguards." },
  { label: "H. Frequency of Processing", text: "Continuous or periodic processing during the use of the platform, depending on the Customer's activities and enabled features." },
  { label: "I. Processing Locations", text: "India and other countries where GarageSaarthi's authorized infrastructure and Sub-processors operate, subject to applicable legal requirements." },
];

const schedule3Items = [
  "Authentication and access management.",
  "Role-based access control.",
  "Secure transmission protocols.",
  "Database access restrictions.",
  "Infrastructure security configurations.",
  "Security monitoring and logging.",
  "Backup and recovery procedures.",
  "Software updates and vulnerability management.",
  "Incident response procedures.",
  "Confidentiality requirements for authorized personnel.",
  "Administrative access management.",
  "Data deletion and disposal procedures.",
];

export default function DataProcessingAddendum() {
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
                DATA PROCESSING ADDENDUM (DPA)
              </h1>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
                <span><strong>Document Version:</strong> 2026-10-31-v1</span>
                <span>•</span>
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
                  1. Introduction and Purpose
                </h2>
                <p>
                  This Data Processing Addendum (<strong>"DPA"</strong>) forms part of the Terms &amp; Conditions or other applicable service agreement between the operating entity of GarageSaarthi (<strong>"Company"</strong>) and the business customer using GarageSaarthi (<strong>"Customer"</strong>).
                </p>
                <p>
                  GarageSaarthi is a cloud-based garage and automobile workshop management platform that enables automobile workshops, garages, service centres, and related businesses to manage their operational activities digitally.
                </p>
                <p>
                  During the provision of these services, GarageSaarthi may process personal information relating to the Customer's employees, customers, vehicle owners, vendors, suppliers, and other individuals.
                </p>
                <p>
                  This DPA establishes the respective responsibilities of the parties concerning the processing, protection, storage, access, transfer, retention, and deletion of personal information processed through GarageSaarthi on behalf of the Customer.
                </p>
                <p>
                  This DPA is intended to supplement the GarageSaarthi Terms &amp; Conditions and Privacy Policy. Where applicable data protection legislation imposes mandatory obligations on either party, those obligations will prevail over any inconsistent provision of this DPA.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  2. Parties and Roles
                </h2>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-2 text-sm">
                  <p><strong>Company / GarageSaarthi:</strong> Refers to Techifyhouse, the legal entity operating GarageSaarthi.</p>
                  <p><strong>Customer:</strong> Refers to the garage owner, automobile workshop, service centre, business, company, or organization subscribing to or using GarageSaarthi.</p>
                  <p><strong>Authorized Users:</strong> Refers to individuals authorized by the Customer to access its GarageSaarthi account, including administrators, employees, mechanics, accountants, service advisors, and managers.</p>
                  <p><strong>Personal Data:</strong> Refers to information relating to an identified or identifiable individual, as defined under applicable data protection legislation.</p>
                  <p><strong>Customer Data:</strong> Refers to information submitted, uploaded, generated, stored, or otherwise processed through GarageSaarthi on behalf of the Customer.</p>
                  <p><strong>Processing:</strong> Refers to operations performed on Personal Data, including collection, recording, organization, storage, retrieval, use, transmission, disclosure, modification, restriction, deletion, or destruction.</p>
                  <p><strong>Sub-processor:</strong> Refers to a third-party service provider engaged by GarageSaarthi to process Personal Data on behalf of the Customer.</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">2.1 Data Protection Roles</h3>
                  <p>For processing activities undertaken by GarageSaarthi on the Customer's behalf:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The Customer generally acts as the <strong>Data Fiduciary</strong> under applicable Indian data protection law or <strong>Controller</strong> under applicable international data protection law.</li>
                    <li>GarageSaarthi generally acts as the <strong>Data Processor</strong> under applicable Indian data protection law or <strong>Processor</strong> under applicable international data protection law.</li>
                    <li>Third-party service providers engaged to process Personal Data on GarageSaarthi's behalf may act as <strong>Sub-processors</strong>.</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The actual legal classification of each party will depend on the relevant processing activity and applicable legislation.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">2.2 Independent Processing Activities</h3>
                  <p>
                    Not all information processed by GarageSaarthi is necessarily processed on behalf of the Customer. GarageSaarthi may independently determine the purposes and means of processing certain information relating to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Account registration.</li>
                    <li>Subscription management.</li>
                    <li>Payment administration.</li>
                    <li>Platform security.</li>
                    <li>Fraud prevention.</li>
                    <li>Customer support administration.</li>
                    <li>Legal and regulatory compliance.</li>
                    <li>GarageSaarthi's own website and marketing activities.</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-slate-600">
                    For these independent activities, GarageSaarthi may act as a separate Data Fiduciary or Controller, as applicable. Such processing is governed by the GarageSaarthi Privacy Policy and applicable law rather than being automatically treated as Customer-directed processing under this DPA.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  3. Scope of Processing
                </h2>
                <p>This DPA applies to Personal Data processed by GarageSaarthi on behalf of the Customer through:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {scopeOfProcessingList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-600">
                  The scope of processing will depend on the features enabled and the information submitted by the Customer.
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4. Categories of Personal Data
                </h2>
                <p>Depending on the Customer's use of GarageSaarthi, the following categories of Personal Data may be processed:</p>

                <div className="space-y-5">
                  {personalDataCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        {cat.items.map((item, iIdx) => (
                          <li key={iIdx}>{item}</li>
                        ))}
                      </ul>
                      {cat.note && <p className="text-xs sm:text-sm text-slate-600 italic">{cat.note}</p>}
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-900 text-sm">
                  The Customer must avoid submitting sensitive or special-category personal data unless the feature specifically supports it and the Customer has established the necessary legal basis and safeguards.
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5. Purposes of Processing
                </h2>
                <p>GarageSaarthi may process Customer Personal Data for the following purposes, as instructed or authorized by the Customer:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {purposesOfProcessing.map((purpose, idx) => (
                    <li key={idx}>{purpose}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-600">
                  GarageSaarthi will not intentionally use Customer Personal Data for unrelated purposes that are inconsistent with the Customer's lawful instructions, this DPA, or applicable law.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6. Customer Responsibilities
                </h2>
                <p>The Customer is responsible for ensuring that the information submitted to GarageSaarthi is collected, used, and processed lawfully. The Customer agrees to:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  {customerResponsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  The Customer is responsible for the legality of the information it submits and the purposes for which it uses GarageSaarthi.
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7. GarageSaarthi's Processing Obligations
                </h2>
                <p>When acting as a Data Processor or equivalent service provider, GarageSaarthi agrees to:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  {companyProcessingObligations.map((ob, idx) => (
                    <li key={idx}>{ob}</li>
                  ))}
                </ul>
                <p className="text-sm">
                  GarageSaarthi will not knowingly process Customer Personal Data in a manner that directly contradicts the Customer's documented and lawful instructions. If GarageSaarthi believes an instruction violates applicable data protection law, it may notify the Customer and request clarification or revised instructions.
                </p>
              </section>

              {/* Section 8 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8. Confidentiality
                </h2>
                <p>
                  GarageSaarthi will ensure that personnel authorized to process Customer Personal Data are subject to appropriate confidentiality obligations. Access to Customer Personal Data will be limited to individuals who reasonably require access for:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  {confidentialityAccessPurposes.map((purpose, idx) => (
                    <li key={idx}>{purpose}</li>
                  ))}
                </ul>
                <p className="text-sm">
                  GarageSaarthi will take reasonable steps to prevent unauthorized disclosure or use of Customer Personal Data by its personnel.
                </p>
              </section>

              {/* Section 9 */}
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  9. Technical and Organizational Security Measures
                </h2>
                <p>
                  GarageSaarthi will maintain reasonable security measures designed to protect Customer Personal Data against unauthorized access, accidental loss, destruction, alteration, or disclosure. Depending on the deployed infrastructure and applicable product configuration, security measures may include:
                </p>

                <div className="space-y-4">
                  {securityMeasuresCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <h3 className="font-bold text-slate-900">{cat.title}</h3>
                      <ul className="list-disc pl-6 space-y-0.5">
                        {cat.items.map((item, iIdx) => (
                          <li key={iIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-slate-600">
                  The Company may update its security measures over time, provided that such changes do not materially reduce the overall level of protection required under applicable law and this DPA. No security system can guarantee absolute protection against all possible attacks, unauthorized access, technical failures, or data loss events.
                </p>
              </section>

              {/* Section 10 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  10. Sub-processors and Third-Party Service Providers
                </h2>
                <p>
                  GarageSaarthi may engage third-party service providers to support the delivery, maintenance, and security of its services. Such providers may include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  {subprocessorTypes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="font-bold text-slate-900">10.1 Authorization to Engage Sub-processors</h3>
                    <p className="text-sm">The Customer authorizes GarageSaarthi to engage Sub-processors as reasonably necessary to provide the services. GarageSaarthi will seek to ensure that Sub-processors processing Customer Personal Data are subject to appropriate contractual data protection and confidentiality obligations.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">10.2 Sub-processor Responsibilities</h3>
                    <p className="text-sm">GarageSaarthi will remain responsible for its contractual obligations concerning the processing activities delegated to its Sub-processors, to the extent required under applicable law and this DPA.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">10.3 Changes to Sub-processors</h3>
                    <p className="text-sm">GarageSaarthi may add, replace, or remove Sub-processors as reasonably necessary. For material changes affecting the processing of Customer Personal Data, GarageSaarthi will provide notice through an appropriate communication channel where required by applicable law or agreed contractual arrangements. The Customer may raise a reasonable written objection on legitimate data protection grounds. The parties will work in good faith to address such objections.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">10.4 Sub-processor List</h3>
                    <p className="text-sm">GarageSaarthi may maintain a separate Sub-processor Register identifying relevant providers and their processing activities. The register will reflect actual service providers rather than illustrative or planned integrations.</p>
                  </div>
                </div>
              </section>

              {/* Section 11 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  11. Artificial Intelligence and Automated Processing
                </h2>
                <p>
                  Certain GarageSaarthi features may use artificial intelligence, machine learning, external AI models, or automated processing services. Where such features are enabled, Customer Personal Data may be processed to generate business calculations, summaries, reports, assist with document creation, provide recommendations, or automate selected workflows.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="font-bold text-slate-900">11.1 AI Processing Instructions</h3>
                    <p className="text-sm">The Customer authorizes the use of relevant AI service providers only where necessary to deliver an AI feature that the Customer has chosen to use or otherwise authorized. GarageSaarthi will seek to limit information transmitted to AI providers to what is reasonably necessary.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">11.2 Third-Party AI Providers</h3>
                    <p className="text-sm">Where an external AI provider is used, the processing of information may also be subject to that provider's contractual terms and privacy arrangements. GarageSaarthi will assess relevant provider arrangements and data protection requirements before using a provider to process Customer Personal Data.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">11.3 Model Training and Reuse</h3>
                    <p className="text-sm">GarageSaarthi will not knowingly authorize an AI provider to use Customer Personal Data submitted through a business feature to train general-purpose AI models where the applicable provider arrangement prohibits such use.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">11.4 AI Output Accuracy</h3>
                    <p className="text-sm">AI-generated information may contain errors or inaccuracies. The Customer remains responsible for reviewing important AI-generated calculations, reports, documents, recommendations, and other consequential outputs before relying on them.</p>
                  </div>
                </div>
              </section>

              {/* Section 12 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  12. Data Subject Requests and Individual Rights
                </h2>
                <p>Individuals whose Personal Data is processed through GarageSaarthi may have rights under applicable data protection legislation, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {individualRightsList.map((right, idx) => (
                    <li key={idx}>{right}</li>
                  ))}
                </ul>
                <p className="text-sm">
                  Where GarageSaarthi processes Personal Data on behalf of the Customer, the Customer is generally responsible for responding to requests from relevant individuals. GarageSaarthi will provide reasonable assistance where necessary to enable the Customer to fulfil its obligations.
                </p>
              </section>

              {/* Section 13 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  13. Personal Data Breaches and Security Incidents
                </h2>
                <p>
                  GarageSaarthi will maintain reasonable procedures for identifying, investigating, and responding to security incidents involving Customer Personal Data. If GarageSaarthi becomes aware of a Personal Data Breach affecting Customer Personal Data processed on behalf of the Customer, it will investigate the incident, take mitigation steps, notify the Customer without undue delay, and provide reasonably available details.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="font-bold text-slate-900">13.1 Target Notification Period</h3>
                    <p className="text-sm">Where practicable, GarageSaarthi will aim to notify the affected Customer within <strong>48 hours</strong> after becoming aware of a qualifying Personal Data Breach. This is a contractual notification target and does not replace any shorter statutory deadline applicable to either party.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">13.2 Incident Information</h3>
                    <p className="text-sm mb-1">Where available and appropriate, the notification may include:</p>
                    <ul className="list-disc pl-6 space-y-0.5 text-sm">
                      {incidentInfoItems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">13.3 Customer Responsibilities</h3>
                    <p className="text-sm">The Customer remains responsible for its own statutory notifications to affected individuals, regulators, or other authorities where required by applicable law.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">13.4 No Admission of Liability</h3>
                    <p className="text-sm">Notification of an incident does not automatically constitute an admission of fault or liability by either party.</p>
                  </div>
                </div>
              </section>

              {/* Section 14 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  14. Data Retention and Deletion
                </h2>
                <p>
                  GarageSaarthi will retain Customer Personal Data for as long as reasonably necessary to provide subscribed services and fulfil applicable contractual and legal obligations.
                </p>
                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="font-bold text-slate-900">14.1 During an Active Subscription</h3>
                    <p className="text-sm">During an active subscription, Customer Personal Data will be maintained according to applicable service configurations and operational requirements.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">14.2 After Account Termination</h3>
                    <p className="text-sm">After termination or expiry of the Customer's account, GarageSaarthi may disable account access, provide an available data export mechanism, retain information for a reasonable transition period, and delete Customer Personal Data after the applicable retention period, subject to statutory retention obligations.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">14.3 Backup Retention</h3>
                    <p className="text-sm">Information may remain in backups for a limited period after deletion from active systems, depending on the backup architecture and retention configuration, protected by appropriate security controls.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">14.4 Deletion Requests</h3>
                    <p className="text-sm">The Customer may request deletion of eligible Customer Personal Data by contacting GarageSaarthi through official support channels.</p>
                  </div>
                </div>
              </section>

              {/* Section 15 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  15. Data Export and Portability
                </h2>
                <p>Where available, GarageSaarthi may provide functionality for exporting certain Customer Data. Export availability may depend on:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {exportConditions.map((cond, idx) => (
                    <li key={idx}>{cond}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-600">
                  GarageSaarthi may provide exported information in commonly used electronic formats where technically feasible. The Company is not required to provide proprietary source code, internal software architecture, or confidential technical information as part of an export.
                </p>
              </section>

              {/* Section 16 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  16. International Data Transfers
                </h2>
                <p>
                  GarageSaarthi may use infrastructure and service providers located in India or other countries. As a result, Customer Personal Data may be transferred, stored, or processed outside the Customer's country of operation.
                </p>
                <p>
                  GarageSaarthi will take appropriate steps to ensure that relevant international processing and transfers comply with applicable data protection requirements. For customers subject to the GDPR, appropriate transfer mechanisms may include applicable adequacy decisions or approved contractual safeguards.
                </p>
              </section>

              {/* Section 17 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  17. Assistance with Regulatory Compliance
                </h2>
                <p>
                  Taking into account the nature of processing and information reasonably available to GarageSaarthi, the Company will provide reasonable assistance to the Customer in relation to applicable data protection obligations, including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  {complianceAssistanceAreas.map((area, idx) => (
                    <li key={idx}>{area}</li>
                  ))}
                </ul>
              </section>

              {/* Section 18 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  18. Audit and Compliance Verification
                </h2>
                <p>
                  The Customer may request reasonable information concerning GarageSaarthi's data protection practices to verify compliance with this DPA. Such requests should be in writing, clearly identify the compliance requirement, and respect Company security and confidential information. GarageSaarthi may respond through written security questionnaires, available compliance documentation, and audit reports.
                </p>
              </section>

              {/* Section 19 to 25 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  19. Customer Data Confidentiality
                </h2>
                <p>
                  GarageSaarthi will treat Customer Personal Data and non-public Customer information as confidential. The Company will not intentionally disclose such information to unauthorized third parties except to authorized Sub-processors, as instructed by the Customer, where necessary to deliver services, or where required by applicable law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  20. Customer Instructions
                </h2>
                <p>
                  The Customer authorizes GarageSaarthi to process Customer Personal Data in accordance with this DPA, Terms &amp; Conditions, feature configuration, and lawful documented instructions. GarageSaarthi may decline instructions that are unlawful, technically infeasible, or inconsistent with legal obligations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  21. Limitation of Processing Responsibilities
                </h2>
                <p>
                  GarageSaarthi's obligations under this DPA are limited to Personal Data processed by or on behalf of the Company in connection with providing GarageSaarthi services. The Company is not responsible for independent processing performed by the Customer, unauthorized use by Customer employees, unlawful data collection by the Customer, or external services directly selected and controlled by the Customer.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  22. Term and Termination
                </h2>
                <p>
                  This DPA will become effective when electronically accepted or incorporated into a signed agreement, and will remain effective for the duration of the relevant service agreement until Customer Personal Data has been returned, deleted, or otherwise lawfully retained. Provisions intended to survive (confidentiality, retention, deletion) will continue to apply.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  23. Liability and Indemnification
                </h2>
                <p>
                  The parties will be responsible for their respective obligations under this DPA and applicable data protection laws. The liability provisions in the GarageSaarthi Terms &amp; Conditions or separately signed agreement will apply to this DPA to the extent legally permissible.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  24. Relationship with Other Agreements
                </h2>
                <p>
                  This DPA supplements the GarageSaarthi Terms &amp; Conditions and Privacy Policy. In the event of a conflict, mandatory applicable data protection legislation will prevail, followed by this DPA concerning Customer Personal Data processing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  25. Governing Law and Jurisdiction
                </h2>
                <p>
                  This DPA will be governed by the laws of India. Subject to mandatory jurisdictional and consumer protection provisions, disputes relating to this DPA will be subject to the competent courts in <strong>Surat, Gujarat, India</strong>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  26. Amendments
                </h2>
                <p>
                  GarageSaarthi may update this DPA from time to time to reflect changes in applicable laws, practices, infrastructure, or features. Material amendments will be communicated through appropriate channels where required.
                </p>
              </section>

              {/* Section 27 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  27. Contact Information
                </h2>
                <p>For questions, complaints, data protection requests, or other matters concerning this DPA, contact:</p>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-1.5 text-sm">
                  <p className="font-bold text-slate-900">GarageSaarthi – Data Protection Team</p>
                  <p><strong>Company:</strong> Techifyhouse</p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <Link href="https://www.garagesaarthi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                      https://www.garagesaarthi.com
                    </Link>
                  </p>
                  <p>
                    <strong>Privacy / DPA Email:</strong>{" "}
                    <Link href="mailto:contact@garagesaarthi.com" className="text-primary hover:underline font-semibold">
                      contact@garagesaarthi.com
                    </Link>
                  </p>
                  <p><strong>Address:</strong> 241, Royal Square, VIP Circle, Uttran, Surat, Gujarat 394105, India.</p>
                </div>
              </section>

              {/* SCHEDULE 1 */}
              <section className="space-y-4 pt-2">
                <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    SCHEDULE 1 – DETAILS OF PROCESSING
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    This Schedule describes the general processing activities performed by GarageSaarthi on behalf of the Customer.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {schedule1Details.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80 text-sm">
                      <p className="font-bold text-slate-900 mb-1">{item.label}</p>
                      <p className="text-slate-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SCHEDULE 2 */}
              <section className="space-y-4 pt-2">
                <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    SCHEDULE 2 – SUB-PROCESSOR REGISTER
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    GarageSaarthi will maintain an up-to-date register of third-party providers that process Customer Personal Data on its behalf.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-sm space-y-2">
                  <p>The register identifies Sub-processor name, service provided, processing purpose, types of Personal Data processed, country of processing, and applicable data protection arrangements.</p>
                  <p className="text-slate-500 italic">The current register is published and maintained through official communication channels. Only actual and authorized providers are included.</p>
                </div>
              </section>

              {/* SCHEDULE 3 */}
              <section className="space-y-4 pt-2">
                <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    SCHEDULE 3 – SECURITY MEASURES
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The Company will maintain a documented record of its applicable security measures, including:
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  {schedule3Items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* ACCEPTANCE AND INCORPORATION */}
              <section className="space-y-4 pt-2">
                <div className="bg-orange-50/60 p-6 rounded-xl border border-orange-200/70 space-y-3">
                  <h2 className="text-lg font-bold text-slate-900">
                    ACCEPTANCE AND INCORPORATION
                  </h2>
                  <p className="text-sm">
                    This Data Processing Addendum may be accepted electronically by an authorized representative of the Customer or incorporated into a separately executed written agreement.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    By accepting this DPA, the Customer confirms that it has authority to enter into this DPA on behalf of the relevant business, has reviewed and understood the provisions, and authorizes GarageSaarthi to process relevant Personal Data subject to this DPA and applicable law.
                  </p>
                  <div className="pt-2 border-t border-orange-200/80 text-xs text-slate-600 space-y-1">
                    <p><strong>Document Version:</strong> 2026-10-31-v1</p>
                    <p><strong>Company:</strong> Techifyhouse</p>
                    <p><strong>Customer / Business Name:</strong> As identified in the relevant GarageSaarthi account or separate agreement.</p>
                    <p><strong>Acceptance Date:</strong> Recorded electronically or in the executed agreement.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}

