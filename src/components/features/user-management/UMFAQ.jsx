import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqs = [
  {
    q: "How does role-based access protect my workshop from cash leakage?",
    a: "It prevents cash theft, spare parts leakage, and data theft by ensuring employees only see the features they need. For example, mechanics can only update repair progress, while cashier desks can handle billing, and financial reports are locked to the owner."
  },
  {
    q: "Can I create custom logins for all my mechanics?",
    a: "Yes, you can create unlimited staff profiles with customized access levels. Every technician has their own password to log into their assigned job card sheets on their own smartphones."
  },
  {
    q: "Does staff management track technician commission?",
    a: "Yes. When you assign a mechanic to a job card item, GarageSaarthi automatically calculates their commission based on the completed labor items, making monthly payroll calculations stress-free."
  },
  {
    q: "Can I restrict staff logins to my workshop's Wi-Fi network?",
    a: "Yes. Our secure location locking allows you to restrict staff dashboards to only connect while logged onto the workshop's physical Wi-Fi router network, preventing remote data access."
  },
  {
    q: "Can my staff see my total workshop monthly profit or net collection?",
    a: "No. Standard staff profiles do not have access to any business reports, cash summaries, or analytics metrics. Only the admin/owner can view overall finances."
  },
  {
    q: "What happens if a staff member tries to delete or modify a bill?",
    a: "Only the admin profile has deletion and revision rights. Standard staff profiles cannot delete estimates, bills, or payment logs once they are saved."
  }
];

export default function UMFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Staff Roles."
      subtitle="Everything you need to know about user roles, staff permissions, and security configurations in GarageSaarthi."
      faqs={faqs.map(item => ({ question: item.q, answer: item.a }))}
      className="bg-white"
    />
  );
}
