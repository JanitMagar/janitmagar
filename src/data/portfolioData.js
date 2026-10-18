export const navigationItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "EDUCATION" },
  { id: "certificates", label: "CERTIFICATES" },
  { id: "contact", label: "CONTACT" },
];

export const contactEmail = ["janit", "example.com"].join(String.fromCharCode(64));

export const contactLinks = [
  {
    name: "Email",
    value: "https://mail.google.com/",
    href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjGdPDmFQxtVDkVcjzzVjDlBrkprCJbLBpszKNcPbJgpTmgVMLQfbvDlgFshzPNkTqtL",
    symbol: "✉",
  },
  {
    name: "GitHub",
    value: "https://github.com/JanitMagar",
    href: "https://github.com/JanitMagar",
    symbol: "GH",
    external: true,
  },
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/janitsarumagar/",
    href: "https://www.linkedin.com/in/janitsarumagar/",
    symbol: "in",
    external: true,
  },
  {
    name: "TryHackMe",
    value: "https://tryhackme.com/p/JanitMagar",
    href: "https://tryhackme.com/p/JanitMagar",
    symbol: "TH",
    external: true,
  },
  {
    name: "Instagram",
    value: "https://www.instagram.com/_janitmagar_10/",
    href: "https://www.instagram.com/_janitmagar_10/",
    symbol: "IG",
    external: true,
  },
];

export const skillGroups = [
  {
    symbol: "</>",
    title: "WEB DEVELOPMENT",
    skills: [
      "Frontend Development",
      "HTML, CSS, JavaScript",
      "Basic Backend Development",
      "Website Management",
    ],
  },
  {
    symbol: "◎",
    title: "CYBERSECURITY",
    skills: [
      "Basic Vulnerability Scanning",
      "Web Application Security Fundamentals",
      "Beginner-Level Bug Bounty Research",
      "Penetration Testing Fundamentals",
      "Blue Team and Defensive Security Fundamentals",
    ],
  },
  {
    symbol: "✓",
    title: "QUALITY ASSURANCE",
    skills: [
      "Website Testing",
      "Bug Identification and Reporting",
      "Functional Testing",
      "Software Quality Assurance",
    ],
  },
  {
    symbol: "↗",
    title: "MARKETING AND COMMUNITY",
    skills: [
      "Digital Marketing Support",
      "Community Engagement",
      "Platform Operations",
      "Web Management",
    ],
  },
];

export const experiences = [
  {
    number: "01",
    title: "QA/QC Tester",
    organization: "Void Nepal Private Limited",
    description:
      "Test web projects, find and report bugs, and check that features work reliably for the people using them.",
    location: "Bishalnagar, Kathmandu",
    logo: "/assets/void-nepal-logo.png",
    logoDescription: "Void Nepal logo",
  },
  {
    number: "02",
    title: "Community Member",
    organization: "Ethical HCK Community",
    role: "Marketing, platform operations, and web management",
    description:
      "Support marketing and community engagement, help manage the website and online platforms, and take part in technology and cybersecurity initiatives.",
    location: "Herald College Kathmandu, Naxal, Kathmandu",
    logo: "/assets/ethical-hck-logo.png",
    logoDescription: "Ethical HCK logo",
    community: true,
  },
  {
    number: "03",
    title: "Personal Web Developer",
    organization: "Independent Web Development",
    description:
      "Build and maintain websites while learning more about responsive design, usability, frontend tools, and web security.",
  },
];

export const projects = [
  {
    number: "01",
    kind: "COMMUNITY CONTRIBUTION",
    label: "EVENT COLLABORATION",
    title: "Cybersecurity Event Collaboration",
    description:
      "Worked with Pentester Nepal and the Ethical HCK Community to help organize and support a cybersecurity event focused on awareness and collaboration.",
    tags: ["Ethical HCK Community", "Pentester Nepal", "Community"],
  },
  {
    number: "02",
    kind: "PRACTICE",
    label: "INDEPENDENT WORK",
    title: "Web development",
    description:
      "Build and maintain websites, practise responsive layouts, and learn how to make web applications easier to use and safer.",
    tags: ["Frontend", "Basic backend", "Web security"],
  },
];

export const education = [
  {
    school: "Herald College Kathmandu",
    qualification: "Bachelor's Degree in Cybersecurity — Second Year",
    location: "Naxal, Kathmandu, Nepal",
    current: true,
  },
  {
    school: "United Academy",
    qualification: "Higher Secondary Education (+2) — Completed",
    location: "Kumaripati, Lalitpur, Nepal",
  },
  {
    school: "Kavya School",
    qualification: "Secondary Education Examination (SEE) — Completed",
    location: "Buddhanagar, New Baneshwor, Kathmandu, Nepal",
  },
];

export const certificates = [
  {
    number: "01",
    title: "BugXsploit — Ethical Hacking and Penetration Testing",
    description:
      "Completed the 15-day ethical hacking and penetration testing workshop organized by BugXploit Technology Pvt. Ltd.",
    image: "/assets/certificates/bugxsploit-certificate.jpeg",
    imageDescription:
      "BugXsploit certificate of completion awarded to Janit Saru Magar",
  },
  {
    number: "02",
    title: "Web Security Essentials",
    description:
      "Completed the Web Security Essentials course through Herald College Kathmandu's Academic Summer Enrichment 2026.",
    image: "/assets/certificates/web-security-essentials.jpeg",
    imageDescription:
      "Web Security Essentials certificate awarded to Janit S. Magar",
  },
  {
    number: "03",
    title: "Pentester Nepal — 13th Anniversary Volunteer",
    description:
      "Recognized for valuable volunteer contributions to Pentester Nepal's 13th Anniversary Celebration.",
    image: "/assets/certificates/pentester-nepal-volunteer.png",
    imageDescription:
      "Certificate of appreciation for volunteering at Pentester Nepal's 13th Anniversary Celebration",
  },
];
