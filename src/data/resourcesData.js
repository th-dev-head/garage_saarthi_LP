// src/data/resourcesData.js
// Centralized Data Registry for GarageSaarthi Resources (Blogs, Tools, Templates, Guides)

export const RESOURCE_CATEGORIES = [
  { id: "all", name: "All Resources", count: 7 },
  { id: "blogs", name: "Blogs & Articles", count: 3 },
  { id: "tools", name: "Free Calculators", count: 2 },
  { id: "templates", name: "Templates & Downloads", count: 2 },
];

export const BLOGS_DATA = [
  {
    id: "how-to-calculate-garage-profit-margin",
    slug: "how-to-calculate-garage-profit-margin",
    title: "How to Calculate Workshop Profit Margins: The Complete Auto Repair Guide",
    shortTitle: "Calculating Workshop Profit Margins",
    category: "Profitability & Finance",
    readTime: "8 min read",
    publishedDate: "November 2026",
    isoDate: "2026-11-06T00:00:00.000Z",
    author: {
      name: "GarageSaarthi Editorial Team",
      role: "Automotive Business Advisory",
      avatar: "GS",
    },
    excerpt:
      "Master the math behind auto repair shop profitability. Learn how to calculate parts markup, technician effective labour rate, overhead absorption, and target 25%+ net margins.",
    seoTitle: "How to Calculate Auto Repair Workshop Profit Margins | GarageSaarthi",
    seoDescription:
      "Practical guide for car garage and auto repair workshop owners to calculate gross profit margin, parts markup percentage, technician labour efficiency, and net profit.",
    keywords: [
      "garage profit margin",
      "auto repair shop markup",
      "workshop labour rate calculation",
      "car garage profitability formula",
      "mechanic shop gross margin",
    ],
    coverBadge: "Finance & Growth",
    tableOfContents: [
      { id: "why-margins-matter", title: "1. Why Most Workshops Underestimate True Costs" },
      { id: "gross-vs-net", title: "2. Gross Profit vs. Net Profit in Auto Repair" },
      { id: "parts-margin-formula", title: "3. The Parts Margin & Markup Formula" },
      { id: "labour-rate-efficiency", title: "4. Calculating Effective Labour Rates" },
      { id: "overhead-absorption", title: "5. Overhead Absorption Rate" },
      { id: "actionable-benchmarks", title: "6. Industry Benchmarks & Target Margins" },
      { id: "faqs", title: "7. Frequently Asked Questions" },
    ],
    contentSections: [
      {
        id: "why-margins-matter",
        heading: "1. Why Most Workshops Underestimate True Costs",
        paragraphs: [
          "Operating an automotive workshop involves high fixed overheads, volatile spare parts pricing, and direct mechanic payroll. A garage owner who looks only at total monthly revenue often discovers at tax time that cash flow does not translate into real net profit.",
          "According to automotive aftermarket benchmarks, independent workshops typically generate healthy gross turnover but average only 5% to 9% net margin due to unbilled mechanic hours, unrecovered shop consumables, and slow inventory turns.",
        ],
        highlight:
          "Rule of Thumb: Top-quartile automotive workshops aim for 55% to 65% Gross Profit Margin and a minimum of 20% to 25% Net Operating Margin before taxes.",
      },
      {
        id: "gross-vs-net",
        heading: "2. Gross Profit vs. Net Profit in Auto Repair",
        paragraphs: [
          "Understanding the exact boundary between Gross and Net profit is the cornerstone of workshop pricing strategy:",
          "• Gross Profit = Total Revenue - Cost of Goods Sold (COGS). COGS includes the purchase cost of spare parts, engine oils, consumables, and direct technician wages assigned to jobs.",
          "• Net Profit = Gross Profit - Operating Expenses (Fixed Overhead). Operating expenses include workshop rent, electricity, diagnostic software subscriptions, marketing, insurance, and administrative salaries.",
        ],
      },
      {
        id: "parts-margin-formula",
        heading: "3. The Parts Margin & Markup Formula",
        paragraphs: [
          "A common mistake is confusing 'Markup' with 'Margin'. When you buy a brake pad set for ₹1,000 / $50 and sell it for ₹1,500 / $75:",
          "• Markup Percentage = (Profit / Cost) × 100 = (500 / 1000) × 100 = 50% Markup.",
          "• Gross Margin Percentage = (Profit / Selling Price) × 100 = (500 / 1500) × 100 = 33.33% Margin.",
          "For routine maintenance items (filters, brake pads, fluids), target a minimum of 35% to 45% parts margin. For specialized OEM components with lower turnover, adjust matrix pricing to account for shipping and warranty holding costs.",
        ],
      },
      {
        id: "labour-rate-efficiency",
        heading: "4. Calculating Effective Labour Rates",
        paragraphs: [
          "Technicians are paid for 8 to 9 clock hours per day, but only a fraction of those hours are billed on customer job cards. This is technician utilization.",
          "• Billed Hours / Clocked Hours = Technician Productivity Ratio.",
          "If a technician clocks 45 hours a week but only bills 30 hours due to part delays or idle bay time, your effective hourly cost rises by 50%. Digital job cards and clocking systems help workshops track actual vs billed hours to eliminate this leak.",
        ],
      },
      {
        id: "overhead-absorption",
        heading: "5. Overhead Absorption Rate",
        paragraphs: [
          "Every service bay has a cost to keep the lights on even when empty. To calculate your hourly bay overhead absorption:",
          "• Hourly Overhead = Total Monthly Fixed Expenses / (Number of Active Bays × Working Days × 8 Hours).",
          "If your monthly rent and utilities are ₹2,00,000 across 4 bays working 25 days, each bay costs ₹250 per hour just standing open. Every quote and job card must absorb this baseline before profit begins.",
        ],
      },
      {
        id: "actionable-benchmarks",
        heading: "6. Industry Benchmarks & Target Margins",
        paragraphs: [
          "Here is how successful auto service centres structure their margin targets across different service categories:",
        ],
        table: {
          headers: ["Service Stream", "Target Gross Margin", "Key Optimization Tactic"],
          rows: [
            ["Routine Service & Oil Change", "45% – 55%", "Fast-turn bay turnaround, premium synthetic upgrades"],
            ["Brake & Suspension Repairs", "55% – 65%", "Matrix parts markup, standardized job book times"],
            ["Diagnostic & Electrical", "75% – 85%", "Dedicated diagnostic line item, specialized tooling fee"],
            ["Body Shop & Detailing", "50% – 60%", "Strict paint mixing inventory control, prep-time tracking"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "What is a healthy net profit margin for an independent garage?",
        a: "A healthy net profit margin for an independent car repair shop is 20% to 25% after all operating expenses, owner compensation, and bay overheads are accounted for. Anything below 10% indicates unbilled labour leakage or insufficient parts markup.",
      },
      {
        q: "How often should I review my workshop labour rates?",
        a: "Review your posted and effective labour rates at least every 6 months to adjust for technician wage inflation, local market competition, and increasing diagnostic equipment licensing costs.",
      },
      {
        q: "How can software help increase workshop margins?",
        a: "Workshop software like GarageSaarthi prevents parts leakage through real-time inventory tracking, enforces standardized matrix markups on estimates, and tracks technician clocking hours against billed job-card times.",
      },
    ],
    relatedTool: {
      title: "Workshop Profit Margin & Labour Rate Calculator",
      slug: "garage-profit-margin-calculator",
      href: "/resources/tools/garage-profit-margin-calculator/",
    },
    relatedFeature: {
      title: "GarageSaarthi GST & Matrix Billing Software",
      href: "/features/billing/",
      badge: "Feature",
    },
  },
  {
    id: "complete-guide-to-workshop-job-cards",
    slug: "complete-guide-to-workshop-job-cards",
    title: "The Complete Guide to Workshop Job Cards: Paper vs Digital Work Orders",
    shortTitle: "Workshop Job Card Best Practices",
    category: "Operations & Workflow",
    readTime: "7 min read",
    publishedDate: "November 2026",
    isoDate: "2026-11-06T00:00:00.000Z",
    author: {
      name: "GarageSaarthi Editorial Team",
      role: "Automotive Business Advisory",
      avatar: "GS",
    },
    excerpt:
      "Discover how modern car workshops eliminate repair disputes, capture pre-existing vehicle scratches with photos, and speed up customer approvals using digital job cards.",
    seoTitle: "Complete Guide to Automotive Workshop Job Cards | GarageSaarthi",
    seoDescription:
      "A comprehensive guide on creating effective garage job cards. Learn essential fields, pre-inspection checklist workflows, technician allocation, and digital approval methods.",
    keywords: [
      "workshop job card format",
      "garage work order template",
      "digital job card car repair",
      "vehicle intake checklist",
      "auto repair customer estimate approval",
    ],
    coverBadge: "Workshop Ops",
    tableOfContents: [
      { id: "what-is-job-card", title: "1. What is an Auto Repair Job Card?" },
      { id: "essential-fields", title: "2. Seven Non-Negotiable Fields Every Job Card Needs" },
      { id: "paper-vs-digital", title: "3. Paper Clipboards vs Digital Mobile Work Orders" },
      { id: "customer-disputes", title: "4. Eliminating Vehicle Damage Disputes with Photos" },
      { id: "workflow-stages", title: "5. The 5 Stages of a High-Efficiency Job Card Workflow" },
      { id: "faqs", title: "6. Frequently Asked Questions" },
    ],
    contentSections: [
      {
        id: "what-is-job-card",
        heading: "1. What is an Auto Repair Job Card?",
        paragraphs: [
          "A Job Card (also known as a Work Order or Repair Order) is the operational and legal contract between your workshop and the vehicle owner. It captures customer voice, diagnosis, agreed work, replacement parts, labor charges, and completion approvals.",
          "When executed accurately, a job card protects your business against damage claims, ensures accurate invoicing, and keeps service advisors and mechanics completely synchronized.",
        ],
      },
      {
        id: "essential-fields",
        heading: "2. Seven Non-Negotiable Fields Every Job Card Needs",
        paragraphs: [
          "1. Vehicle Identification: Registration number, VIN/Chassis, make/model/variant, current odometer reading, and fuel tank gauge level.",
          "2. Customer Demographics: Full name, mobile number for WhatsApp alerts, and preferred contact time.",
          "3. Customer Complaints (Voice of Customer): Exact symptoms described by the driver (e.g. 'squeal from front right wheel above 50 km/h') rather than premature diagnoses.",
          "4. 40-Point Pre-Inspection: Tyre tread wear, existing body dents/scratches, windshield chips, and personal belongings inventory.",
          "5. Technician Bay Assignment: Lead mechanic tag and estimated completion time.",
          "6. Itemized Spares & Consumables: Part numbers, unit prices, quantity, and warranty tier.",
          "7. Customer Sign-off & Terms: Agreed estimate threshold and consent for test driving.",
        ],
      },
      {
        id: "paper-vs-digital",
        heading: "3. Paper Clipboards vs Digital Mobile Work Orders",
        paragraphs: [
          "Many workshops still use carbon-copy paper slips. While familiar, paper slips cause significant revenue loss:",
          "• Illegible handwriting leads to wrong parts being pulled from the stockroom.",
          "• Greasy, lost paper slips cause forgotten labour items at invoice generation.",
          "• Zero real-time status visibility for customers waiting at home.",
          "Digital job cards created on a tablet or smartphone can be updated instantly from the service bay, attaching diagnostic photos and sending instant WhatsApp estimates with 1-click approvals.",
        ],
      },
      {
        id: "customer-disputes",
        heading: "4. Eliminating Vehicle Damage Disputes with Photos",
        paragraphs: [
          "The most contentious dispute in any garage is the dreaded: 'That scratch on the bumper wasn't there when I dropped the car off.'",
          "Digital intake inspections allow service advisors to snap 4 walk-around photos and mark dents on a 3D vehicle silhouette in under 90 seconds. Stamping this into the job card and WhatsApping a copy to the customer before work starts provides 100% legal protection.",
        ],
      },
      {
        id: "workflow-stages",
        heading: "5. The 5 Stages of a High-Efficiency Job Card Workflow",
        paragraphs: [
          "Stage 1: Vehicle Intake & Pre-Inspection (Advisor & Customer)",
          "Stage 2: Estimation & Customer Approval (WhatsApp link with clear line items)",
          "Stage 3: Parts Requisition & Technician Execution (Inventory allocation)",
          "Stage 4: Quality Check & Road Test (Supervisor sign-off)",
          "Stage 5: Settlement & Digital Gate Pass (Invoice payment and vehicle exit)",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a customer legally approve a job card via WhatsApp?",
        a: "Yes, modern digital work orders generate a secure web link where customers review itemized parts and labour, clicking 'Approve Estimate' with timestamped IP recording. This serves as valid digital consent.",
      },
      {
        q: "What should I do if additional repairs are discovered mid-service?",
        a: "Never perform unauthorized additional work. Create a supplementary estimate line on the digital job card, take a photo or short video showing the worn component, and request digital customer authorization before ordering parts.",
      },
      {
        q: "What is a Digital Gate Pass?",
        a: "A Gate Pass is a security authorization barcode or OTP generated only after the job card status reaches 'Paid/Settled'. It ensures vehicles cannot exit workshop premises without billing clearance.",
      },
    ],
    relatedTemplate: {
      title: "Free Workshop Job Card Template (PDF & Excel)",
      slug: "garage-job-card-template",
      href: "/resources/templates/garage-job-card-template/",
    },
    relatedFeature: {
      title: "GarageSaarthi Digital Job Card & Gate Pass",
      href: "/features/job-card-management/",
      badge: "Feature",
    },
  },
  {
    id: "auto-repair-inventory-management-guide",
    slug: "auto-repair-inventory-management-guide",
    title: "Auto Repair Inventory Management: How to Cut Dead Stock & Prevent Spares Leakage",
    shortTitle: "Auto Repair Inventory Management",
    category: "Inventory & Spares",
    readTime: "6 min read",
    publishedDate: "November 2026",
    isoDate: "2026-11-06T00:00:00.000Z",
    author: {
      name: "GarageSaarthi Editorial Team",
      role: "Automotive Business Advisory",
      avatar: "GS",
    },
    excerpt:
      "Stop tying up operating capital in dusty shelves. Learn how to categorize fast-moving spares, set reorder points, handle core deposits, and manage oil drum dispensing.",
    seoTitle: "Auto Repair Parts & Spares Inventory Management Guide | GarageSaarthi",
    seoDescription:
      "A hands-on guide for garage owners to control parts inventory. Learn ABC analysis for spare parts, barcode tracking, safety stock levels, and vendor purchase management.",
    keywords: [
      "garage spare parts inventory",
      "workshop stock management",
      "auto repair dead stock reduction",
      "mechanic shop parts tracking",
      "automotive spares reorder level",
    ],
    coverBadge: "Inventory Control",
    tableOfContents: [
      { id: "cost-of-dead-stock", title: "1. The True Cost of Dead Stock" },
      { id: "abc-analysis", title: "2. ABC Categorization for Auto Spares" },
      { id: "reorder-formula", title: "3. Minimum Reorder Point Formula" },
      { id: "oil-bulk-fluids", title: "4. Controlling Bulk Fluids & Consumables" },
      { id: "supplier-management", title: "5. Multi-Vendor Credit & Return Policies" },
      { id: "faqs", title: "6. Frequently Asked Questions" },
    ],
    contentSections: [
      {
        id: "cost-of-dead-stock",
        heading: "1. The True Cost of Dead Stock",
        paragraphs: [
          "Money sitting on your workshop shelves in the form of unsold brake pads, discontinued oil filters, or aged timing belts cannot pay mechanic salaries or workshop rent.",
          "Car repair shops commonly tie up 15% to 25% of their working capital in dead inventory. Beyond capital lockup, parts suffer from packaging deterioration, obsolescence when car models upgrade, and pilferage.",
        ],
      },
      {
        id: "abc-analysis",
        heading: "2. ABC Categorization for Auto Spares",
        paragraphs: [
          "Organize every part number in your storeroom into three distinct velocity tiers:",
          "• Category A (Fast-Moving - 70% of Turnover): Engine oils, oil filters, common brake pads, wiper blades, spark plugs. Stock 7 to 14 days of supply with automated reorder alerts.",
          "• Category B (Medium-Moving - 20% of Turnover): Suspension links, clutch plates, coolant pumps, belts. Maintain 2 to 4 units based on historical 60-day repair trends.",
          "• Category C (Slow-Moving / On-Demand - 10% of Turnover): Electronic control modules, AC compressors, steering racks, body panels. Order strictly on-demand against active customer job card advance deposits.",
        ],
      },
      {
        id: "reorder-formula",
        heading: "3. Minimum Reorder Point Formula",
        paragraphs: [
          "Never guess when to reorder standard service items. Use the standard inventory formula:",
          "• Reorder Point = (Average Daily Usage × Vendor Lead Time in Days) + Safety Buffer Stock.",
          "If your workshop uses 6 oil filters per day and your distributor takes 2 days to deliver, with a 3-unit safety buffer: Reorder Point = (6 × 2) + 3 = 15 units. When stock reaches 15, an automatic purchase requisition is generated.",
        ],
      },
      {
        id: "oil-bulk-fluids",
        heading: "4. Controlling Bulk Fluids & Consumables",
        paragraphs: [
          "Bulk engine oil (200L drums) and transmission fluids are where garages lose the most margin through unmetered overfills and unaccounted top-offs.",
          "Enforce a strict policy: No oil dispenser tap opens without an active Job Card number. Track drum levels digitally to ensure every liter dispensed matches an invoiced customer charge.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is an acceptable inventory turnover ratio for an auto garage?",
        a: "A healthy workshop turns its parts inventory 8 to 12 times a year. A turnover ratio below 4 indicates excessive cash locked in slow-moving stock.",
      },
      {
        q: "How should workshops handle parts returns to vendors?",
        a: "Establish clear 14-day return agreements with your local parts distributors for uninstalled components in intact original packaging. Track all pending credit notes digitally to avoid lost refunds.",
      },
    ],
    relatedTool: {
      title: "Workshop Profit Margin Calculator",
      slug: "garage-profit-margin-calculator",
      href: "/resources/tools/garage-profit-margin-calculator/",
    },
    relatedFeature: {
      title: "GarageSaarthi Spares Inventory & Barcode Tracking",
      href: "/features/inventory/",
      badge: "Feature",
    },
  },
];

export const TOOLS_DATA = [
  {
    id: "garage-profit-margin-calculator",
    slug: "garage-profit-margin-calculator",
    title: "Workshop Profit Margin & Markup Calculator",
    shortTitle: "Profit Margin Calculator",
    description:
      "Interactive financial calculator for garage owners. Compute gross profit, technician labour margin, parts markup, and net profit percentage in real-time.",
    category: "Financial Tools",
    badge: "Interactive Calculator",
    readTime: "Instant Computation",
    seoTitle: "Free Workshop Profit Margin & Markup Calculator | GarageSaarthi",
    seoDescription:
      "Calculate your auto garage profit margin, parts markup percentage, and technician efficiency. Free interactive tool for automotive repair workshop owners.",
    features: [
      "Real-time Gross & Net Margin calculation",
      "Parts markup vs margin percentage converter",
      "Technician utilization & unbilled hour cost leakage",
      "Comparison against industry benchmark targets",
    ],
    formulaExplained: [
      { name: "Gross Profit", formula: "Total Revenue - (Parts Cost + Direct Mechanic Wages)" },
      { name: "Gross Margin %", formula: "(Gross Profit / Total Revenue) × 100" },
      { name: "Net Profit", formula: "Gross Profit - Fixed Monthly Operating Expenses" },
      { name: "Net Margin %", formula: "(Net Profit / Total Revenue) × 100" },
    ],
  },
  {
    id: "workshop-labour-rate-calculator",
    slug: "workshop-labour-rate-calculator",
    title: "Auto Repair Hourly Labour Rate Calculator",
    shortTitle: "Labour Rate Calculator",
    description:
      "Calculate your shop's true cost per billable hour to set profitable mechanic billing rates that cover overheads and technician payroll.",
    category: "Operations & Pricing",
    badge: "Interactive Calculator",
    readTime: "Instant Computation",
    seoTitle: "Auto Repair Shop Hourly Labour Rate Calculator | GarageSaarthi",
    seoDescription:
      "Determine the ideal hourly billing rate for mechanics and technicians based on shop overhead, technician salaries, and target profit margins.",
    features: [
      "Calculates overhead absorption per active repair bay",
      "Accounts for technician non-billable idle time",
      "Recommends competitive retail hourly billing rate",
    ],
  },
];

export const TEMPLATES_DATA = [
  {
    id: "vehicle-inspection-checklist",
    slug: "vehicle-inspection-checklist",
    title: "40-Point Digital Vehicle Inspection Checklist",
    shortTitle: "40-Point Inspection Sheet",
    description:
      "Comprehensive multi-point vehicle inspection format covering brakes, suspension, battery, tyres, fluids, and exterior condition.",
    category: "Checklists & Quality",
    badge: "Free Download",
    format: "PDF & Printable Format",
    fileSize: "245 KB",
    downloadsCount: "2,400+",
    seoTitle: "40-Point Vehicle Inspection Checklist PDF Free Download | GarageSaarthi",
    seoDescription:
      "Download free 40-point car inspection checklist for auto repair garages. Professional vehicle intake format covering brakes, tyres, engine bay, and underbody.",
    keyCheckpoints: [
      "Under Hood: Engine oil level & viscosity, coolant condition, brake fluid moisture, battery CCA test",
      "Brakes & Tyres: Brake pad thickness (mm), rotor surface, tyre tread depth (32nds/mm), PSI pressure",
      "Underbody & Suspension: Shocks/struts leak check, ball joints, CV boots, exhaust hangers",
      "Exterior & Cabin: Wiper blades, horn, all exterior lights, cabin AC airflow & pollen filter",
      "Body Condition: 360-degree scratch & dent walk-around diagram with pre-existing damage notes",
    ],
  },
  {
    id: "garage-job-card-template",
    slug: "garage-job-card-template",
    title: "Professional Workshop Job Card Template",
    shortTitle: "Job Card Work Order Template",
    description:
      "Standardized vehicle work order format with customer details, symptom documentation, itemized parts, mechanic bay assignment, and customer sign-off.",
    category: "Operations Templates",
    badge: "Free Download",
    format: "Printable PDF & Excel Sheet",
    fileSize: "310 KB",
    downloadsCount: "3,800+",
    seoTitle: "Automotive Workshop Job Card Template (PDF & Excel) | GarageSaarthi",
    seoDescription:
      "Download free professional car repair job card template. Comprehensive vehicle work order format with damage diagram, parts list, and customer estimate consent.",
    keyCheckpoints: [
      "Customer Demographics & Communication Preference",
      "Vehicle VIN, Odometer, Fuel Level Gauge Indicator",
      "Customer Stated Complaints vs Diagnostic Findings",
      "Itemized Spare Parts & Labour Estimation with Tax Calculation",
      "Customer Signature & Estimate Terms Authorization",
    ],
  },
];

export const ALL_RESOURCES = [
  ...BLOGS_DATA.map((b) => ({ ...b, resourceType: "blog", link: `/resources/blogs/${b.slug}/` })),
  ...TOOLS_DATA.map((t) => ({ ...t, resourceType: "tool", link: `/resources/tools/${t.slug}/` })),
  ...TEMPLATES_DATA.map((tm) => ({ ...tm, resourceType: "template", link: `/resources/templates/${tm.slug}/` })),
];

