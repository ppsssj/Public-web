export const pageNavigation = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Publication", href: "/publication" },
  { label: "Research", href: "/research" },
  { label: "Lecture", href: "/lecture" },
  { label: "Members", href: "/members" },
  { label: "Events", href: "/events" },
];

export const pages = {
  profile: {
    type: "profile",
    eyebrow: "Profile",
    title: "Professor Profile",
    nav: [
      { label: "About", href: "#about" },
      { label: "Career", href: "#career" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    name: "Prof. AICS Name",
    role: "Director, Artificial Intelligence Convergence Software Lab",
    summary:
      "Researcher in artificial intelligence software, data-driven prediction, visual information processing, and explainable AI.",
    contact: [
      { label: "Office", value: "Multimedia Building 5F 509" },
      { label: "Email", value: "professor@example.ac.kr" },
      { label: "Lab", value: "AICS Lab, Soonchunhyang University" },
    ],
    career: [
      { period: "2024 - Present", title: "Director, AICS Lab", text: "Leads applied AI software research and student projects." },
      { period: "2021 - 2024", title: "Assistant Professor", text: "Taught AI programming, machine learning, and data analysis courses." },
      { period: "2018 - 2021", title: "Research Fellow", text: "Worked on explainable AI and intelligent software systems." },
    ],
    education: [
      { period: "Ph.D.", title: "Computer Science / Artificial Intelligence", text: "Dummy University" },
      { period: "M.S.", title: "Software Engineering", text: "Dummy University" },
      { period: "B.S.", title: "Computer Engineering", text: "Dummy University" },
    ],
  },
  publication: {
    type: "publication",
    eyebrow: "Publication",
    title: "Publications",
    nav: [
      { label: "Summary", href: "#summary" },
      { label: "Journals", href: "#publications" },
      { label: "Conferences", href: "#publications" },
      { label: "Records", href: "#publications" },
    ],
    summary: "Selected journal and conference publications. Replace the dummy records with final professor publication data.",
    stats: [
      { value: "24", label: "Journal Papers" },
      { value: "18", label: "Conference Papers" },
      { value: "7", label: "Projects" },
    ],
    publications: [
      {
        year: "2026",
        title: "Dummy Paper Title on Explainable Artificial Intelligence Systems",
        venue: "International Journal of AI Software",
        authors: "AICS Name, Student A, Student B",
      },
      {
        year: "2025",
        title: "Dummy Paper Title on Financial Time-Series Prediction",
        venue: "Conference on Applied Machine Learning",
        authors: "AICS Name, Researcher C",
      },
      {
        year: "2024",
        title: "Dummy Paper Title on Visual Information Processing",
        venue: "Journal of Intelligent Computing",
        authors: "AICS Name, Student D",
      },
      {
        year: "2024",
        title: "Dummy Paper Title on Accessibility-Oriented AI Interfaces",
        venue: "Human-Centered AI Symposium",
        authors: "AICS Name, Student E, Collaborator F",
      },
    ],
  },
  research: {
    type: "research",
    eyebrow: "Research",
    title: "Research",
    nav: [
      { label: "Topics", href: "#topics" },
      { label: "Projects", href: "#projects" },
      { label: "Methods", href: "#topics" },
      { label: "Records", href: "#projects" },
    ],
    summary: "Research themes led by the professor and developed with AICS Lab members.",
    topics: [
      {
        title: "Financial Time-Series Analysis",
        text: "Prediction, anomaly detection, and interpretable modeling for financial and sequential data.",
      },
      {
        title: "Visual Information Processing",
        text: "Computer vision and multimodal AI applications for understanding visual information.",
      },
      {
        title: "Accessibility & Explainable AI",
        text: "AI systems that are understandable, usable, and accessible to diverse users.",
      },
      {
        title: "Neuro-Symbolic Reasoning",
        text: "Research connecting neural representations with symbolic reasoning and interpretable structures.",
      },
    ],
    projects: [
      { title: "Dummy Research Project A", period: "2025 - 2026", text: "AI-based decision support system prototype." },
      { title: "Dummy Research Project B", period: "2024 - 2025", text: "Accessible chart explanation and visual data interface." },
      { title: "Dummy Research Project C", period: "2023 - 2024", text: "Explainable representation analysis for intelligent software." },
    ],
  },
  lecture: {
    type: "lecture",
    eyebrow: "Lecture",
    title: "Lecture Schedule",
    nav: [
      { label: "Schedule", href: "#schedule" },
      { label: "Courses", href: "#schedule" },
      { label: "Office Hour", href: "#notes" },
      { label: "Seminar", href: "#notes" },
    ],
    summary: "Professor teaching schedule and course information. Replace with final semester data.",
    semester: "2026 Spring Semester",
    courses: [
      { day: "Mon", time: "10:00 - 12:00", title: "Artificial Intelligence Programming", room: "Room 501" },
      { day: "Tue", time: "13:00 - 15:00", title: "Data Analysis and Machine Learning", room: "Room 302" },
      { day: "Wed", time: "15:00 - 17:00", title: "Computer Vision Applications", room: "Room 509" },
      { day: "Thu", time: "10:00 - 12:00", title: "Capstone Design Seminar", room: "Project Lab" },
      { day: "Fri", time: "14:00 - 16:00", title: "Graduate Research Meeting", room: "AICS Lab" },
    ],
    notes: [
      "Office hour: Wed 13:00 - 15:00",
      "Lab seminar: Fri 16:00 - 17:30",
      "Schedule may change after semester registration.",
    ],
  },
  members: {
    type: "members",
    eyebrow: "Members",
    title: "Lab Members",
    nav: [
      { label: "Professor", href: "#professor" },
      { label: "Graduate", href: "#graduate-students" },
      { label: "Undergrad", href: "#undergraduate-researchers" },
      { label: "People", href: "#professor" },
    ],
    summary: "AICS Lab people. Photo areas are placeholders for final profile images.",
    groups: [
      {
        title: "Professor",
        people: [{ name: "Prof. AICS Name", role: "Principal Investigator", interest: "AI Software, Explainable AI" }],
      },
      {
        title: "Graduate Students",
        people: [
          { name: "Kim Minjun", role: "M.S. Student", interest: "Financial AI" },
          { name: "Lee Seoyeon", role: "M.S. Student", interest: "Computer Vision" },
          { name: "Park Jiwon", role: "M.S. Student", interest: "Explainable AI" },
        ],
      },
      {
        title: "Undergraduate Researchers",
        people: [
          { name: "Choi Harin", role: "Undergraduate Researcher", interest: "AI Application" },
          { name: "Jung Doyun", role: "Undergraduate Researcher", interest: "Data Analysis" },
          { name: "Han Yujin", role: "Undergraduate Researcher", interest: "Software Prototype" },
        ],
      },
    ],
  },
  events: {
    type: "events",
    eyebrow: "Events",
    title: "Lab Events",
    nav: [
      { label: "Seminar", href: "#events" },
      { label: "Workshop", href: "#events" },
      { label: "Conference", href: "#events" },
      { label: "Gallery", href: "#events" },
    ],
    summary: "Research activities, seminars, presentations, and collaboration records. Image areas are placeholders.",
    events: [
      { date: "2026.03", title: "Spring Research Seminar", text: "Paper reading and project planning session for new semester." },
      { date: "2026.02", title: "Graduate Project Presentation", text: "Members shared prototype results and experiment findings." },
      { date: "2025.12", title: "AICS Lab Workshop", text: "End-of-year research discussion and collaboration planning." },
      { date: "2025.10", title: "Conference Presentation", text: "Dummy presentation record for AI software research." },
      { date: "2025.08", title: "Partner Lab Meeting", text: "Joint meeting with external collaborators and student researchers." },
      { date: "2025.05", title: "Open Lab Day", text: "Introduction session for students interested in AICS Lab research." },
    ],
  },
};
