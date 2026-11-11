// Central Data Structure for Rural Literacy and Health Programme (RLHP)

export const orgDetails = {
  name: "Rural Literacy and Health Programme",
  acronym: "RLHP",
  tagline: "Empowering people through health, education and livelihood",
  bulletLine: "Transforming lives of children, women and community",
  location: "Mysuru, Karnataka, India",
  foundedYear: 1984,
  registeredYear: 1984,
  yearsOfService: "42+",
  address: "No. 343, 2nd Stage, Gayathripuram, Udayagiri Post, Mysuru, Karnataka, India – 570019.",
  phones: ["0821-2454686"],
  emails: ["rlhpintervita@gmail.com", "mysore@rlhp.org"],
  website: "www.rlhpmysore.com",
  social: {
    facebook: "https://www.facebook.com/share/1DWzFNxCvD/",
    twitter: "https://twitter.com/rlhpmysore",
    instagram: "https://www.instagram.com/rlhp_mysore?utm_source=qr&obrf=MWpycGVqMDg2MHZkMg==",
    youtube: "https://www.youtube.com/channel/UCwlQCuupud6ldOTS57PaYaA"
  },
  statutory: {
    registrationNo: "Registered Under Karnataka Societies Registration Act, 1960 in 1984",
    fcraNo: "094590059 (FCRA Validated)",
    taxExemption80G: "80G Certified (Tax Exemption under Sec 80G)",
    sec12A: "12A Approved",
    ngoDarpan: "KA/2017/0115894",
    csr1: "CSR00004523"
  },
  bankDetails: {
    localAccount: {
      bankName: "Indian Bank",
      branch: "Udayagiri Extension Branch, Mysore",
      accountName: "Rural Literacy and Health Programme",
      accountNo: "511560100",
      ifsc: "IDIB000U015",
      address: "47, SBM Colony, Mahadevapura Main Road, Udayagiri, Mysore – 570019"
    },
    fcraAccount: {
      bankName: "Indian Bank",
      branch: "Udayagiri Extension Branch (FCRA Cell), Mysore",
      accountName: "Rural Literacy and Health Programme",
      accountNo: "511530562",
      ifsc: "IDIB000U015",
      swiftCode: "IDIBINBBMSR",
      address: "47, SBM Colony, Mahadevapura Main Road, Udayagiri, Mysore – 570019"
    }
  },
  vision: "To create a just, free, equitable and sustainable society",
  mission: "To empower the marginalised poor in slums and villages, vulnerable children and others affected by natural calamities and climate changes to respond to the challenges of growing poverty and rights violations, through collective and affirmative action leading to sustainable development and self-reliance.",

  // Founders - Separate
  founders: [
    { name: "Mr. Joy Maliekal", designation: "Founder RLHP", image: "/images/team/joy_maliekal.jpg" },
    { name: "Mrs. Philomena Joy", designation: "Founder and Director, RLHP", image: "/images/team/philomena_joy.jpg" }
  ],

  // Board Members - Name with Designation no need any extra lines
  boardMembers: [
    { name: "Mrs. Gita Mitra", designation: "President", image: "/images/team/gita_mithra.jpg" },
    { name: "Mr. Jose V.K.", designation: "Secretary", image: "/images/team/jose_vk.jpg" },
    { name: "Mr. Santhosh Kumar", designation: "Treasurer", image: "/images/team/santhosh_kumar.jpg" },
    { name: "Mr. Prasanna N", designation: "Board Member", image: "/images/team/prasanna_n.jpg" },
    { name: "Ms. Elizabeth John", designation: "Board Member", image: "/images/team/elizabeth_john.jpg" },
    { name: "Ms. Rosy Sujatha K", designation: "Board Member", image: "/images/team/rosy_sujatha.jpg" },
    { name: "Mr. Johnson Joseph", designation: "Board Member", image: "/images/team/johnson_joseph.jpg" }
  ],

  // Executive Director
  executiveDirector: {
    name: "Saraswathi K",
    designation: "Executive Director",
    image: ""
  },

  // Inception Story
  inceptionStory: "Rural Literacy and Health Programme (RLHP) was registered under the Karnataka Societies Registration Act, 1960 in 1984. It marked the coming together of a group of dedicated and like-minded people who were motivated to make a difference to the lives of the underprivileged, disadvantaged and deprived sections of society. RLHP is governed by a Board of Management. Its area of operation is the slums and villages of Mysore, Mandya and Chamarajanagar districts of Karnataka, South India.",

  // Our Journey - Exact 9 Milestones matching Official Timeline Reference with Animated Illustrations
  journey: [
    {
      id: "1984",
      year: "1984",
      title: "Started in 1 Slum in Mysuru",
      subtitle: "Urban Settlement Programme",
      icon: "home",
      accent: "from-emerald-500/10 to-teal-500/20",
      hoverBorder: "hover:border-emerald-500",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600",
      description: "Began child-centred community work in 1 slum focusing on urban poor families."
    },
    {
      id: "1989",
      year: "1989",
      title: "Expanded to More Slums in Mysuru",
      subtitle: "Citywide Slum Outreach",
      icon: "pin",
      accent: "from-blue-500/10 to-cyan-500/20",
      hoverBorder: "hover:border-blue-500",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-600",
      description: "Rapid scaling across multiple slums of Mysuru city addressing child health, nutrition and literacy."
    },
    {
      id: "1990a",
      year: "1990",
      title: "Outreach to Street Children",
      subtitle: "Child Protection Drive",
      icon: "users",
      accent: "from-amber-500/10 to-yellow-500/20",
      hoverBorder: "hover:border-amber-500",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-600",
      description: "Direct protection and identification outreach program for street and runaway children."
    },
    {
      id: "1990b",
      year: "1990",
      title: "Rehabilitation Homes for Boys and Girls",
      subtitle: "Asha Bhavana & Asha Kirana",
      icon: "shelter",
      accent: "from-violet-500/10 to-purple-500/20",
      hoverBorder: "hover:border-purple-500",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200 group-hover:bg-purple-600",
      description: "Established residential rehabilitation and care shelters for vulnerable girls and boys."
    },
    {
      id: "1999",
      year: "1999",
      title: "Expanded to 3 Districts",
      subtitle: "Mysuru, Mandya & Chamarajanagar",
      icon: "map",
      accent: "from-green-500/10 to-lime-500/20",
      hoverBorder: "hover:border-green-600",
      badgeColor: "bg-green-50 text-green-700 border-green-200 group-hover:bg-green-600",
      description: "Expanded integrated community development operations across 3 southern districts of Karnataka."
    },
    {
      id: "2004",
      year: "2004",
      title: "Tsunami Relief",
      subtitle: "Tamil Nadu, Nagapattinam District",
      icon: "boat",
      accent: "from-cyan-500/10 to-blue-500/20",
      hoverBorder: "hover:border-cyan-500",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200 group-hover:bg-cyan-600",
      description: "Emergency humanitarian relief, child psycho-social rehabilitation and community rebuilding in tsunami-affected coastal areas of Nagapattinam District, Tamil Nadu."
    },
    {
      id: "2014",
      year: "2014",
      title: "Expanded to North Karnataka, 5 Districts",
      subtitle: "Regional Expansion",
      icon: "arrow-up",
      accent: "from-indigo-500/10 to-sky-500/20",
      hoverBorder: "hover:border-indigo-500",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200 group-hover:bg-indigo-600",
      description: "Extended interventions to Bidar, Kalaburagi, Raichur, Davangere, and Chitradurga."
    },
    {
      id: "2018",
      year: "2018",
      title: "Flood Relief, Kerala",
      subtitle: "Emergency Humanitarian Mission",
      icon: "boat",
      accent: "from-sky-500/10 to-blue-500/20",
      hoverBorder: "hover:border-sky-500",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200 group-hover:bg-sky-600",
      description: "Emergency humanitarian aid, medical rescue support, and rehabilitation kits during Kerala floods."
    },
    {
      id: "2020",
      year: "2020",
      title: "COVID-19",
      subtitle: "Pandemic Emergency Response",
      icon: "mask",
      accent: "from-rose-500/10 to-red-500/20",
      hoverBorder: "hover:border-rose-500",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200 group-hover:bg-rose-600",
      description: "Emergency food rations, medical equipment, and community sanitization across vulnerable zones."
    },
    {
      id: "2026",
      year: "2026",
      title: "Expanded to Coastal Districts",
      subtitle: "Uttara Kannada (Karwar) & Dakshina Kannada (Mangalore)",
      icon: "palm",
      accent: "from-teal-500/10 to-emerald-500/20",
      hoverBorder: "hover:border-teal-500",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200 group-hover:bg-teal-600",
      description: "Strengthening community child protection & educational empowerment across Uttara Kannada (Karwar) & Dakshina Kannada (Mangalore)."
    }
  ],

  // 6 Core Values
  coreValues: [
    { title: "Compassion", description: "Understanding the needs of vulnerable communities and responding with care and empathy." },
    { title: "Integrity", description: "Upholding honesty, transparency and accountability in all our actions." },
    { title: "Inclusiveness", description: "Ensuring equal opportunities, dignity and participation for everyone." },
    { title: "Sustainability", description: "Promoting lasting positive change through community-led development." },
    { title: "Excellence", description: "Striving for quality, continuous learning and effectiveness in all our work." },
    { title: "Equality", description: "Promoting equal rights, justice and opportunities for all." }
  ],

  // 10 Principles
  principles: [
    { title: "Child-Centred Approach", description: "Placing children's rights, needs and well-being at the centre of our work." },
    { title: "Equality and Inclusion", description: "Ensuring equal opportunities and dignity for all." },
    { title: "Gender Equality", description: "Promoting equal rights and opportunities for girls and boys." },
    { title: "Community Participation", description: "Encouraging active community involvement and collective action." },
    { title: "Empowerment", description: "Strengthening the capacities of children, women and communities." },
    { title: "Transparency and Accountability", description: "Maintaining openness, responsibility and integrity." },
    { title: "Sustainability", description: "Promoting long-term and community-led development." },
    { title: "Human Dignity", description: "Respecting the rights, identity and dignity of every individual." },
    { title: "Government Collaboration", description: "Building partnerships with government, institutions and communities." }
  ],

  // What We Do
  whatWeDo: "RLHP works towards child-focused, integrated development in rural and urban communities across South India.",

  // 14 Programs
  ourPrograms: [
    { title: "Street Children’s Rehabilitation", description: "Providing care, protection, education and rehabilitation support to children living in vulnerable situations." },
    { title: "Child Rights Clubs", description: "Promoting child rights, protection and participation through Child Rights Clubs." },
    { title: "Library Programme", description: "Promoting reading habits, improving literacy and encouraging lifelong learning among the government school childrens through access to books, reading spaces and educational resources." },
    { title: "Eradication of Child Labour and Quality Education", description: "Rescuing and rehabilitating children from hazardous labour to reintegrate them into mainstream schooling, ensuring access to inclusive, safe, and quality education for lifelong self-reliance." },
    { title: "Women’s Empowerment and SHG Promotion", description: "Strengthening women through Self-Help Groups, leadership development and economic empowerment." },
    { title: "Vocational Training Programmes", description: "Providing skill development and vocational training to improve employment and livelihood opportunities." },
    { title: "Malnutrition Prevention", description: "Addressing malnutrition through nutrition awareness, monitoring and community-based interventions." },
    { title: "Health Camps and Health Awareness", description: "Organising health camps and promoting access to essential healthcare services." },
    { title: "Reproductive and Child Health (RCH)", description: "Promoting maternal, reproductive and child health awareness and services." },
    { title: "Community Development", description: "Strengthening community participation and improving access to essential services." },
    { title: "Awareness and Government Scheme Linkages", description: "Creating awareness and facilitating access to government schemes and welfare programmes." },
    { title: "Youth Engagement in Climate Change", description: "Encouraging young people to participate in environmental protection and climate action." },
    { title: "Adolescent Empowerment and Gender Justice", description: "Promoting gender equality, rights, leadership and equal opportunities for adolescents." }
  ],

  // With Whom We Work
  withWhomWeWork: {
    intro: "RLHP works with children, families and communities living in vulnerable and marginalised situations across urban, peri-urban and rural areas of South India. Our focus is on reaching those who face social, economic and geographical barriers to education, healthcare, protection and livelihood opportunities.\n\nWe work closely with children, adolescents, youth, women and families who experience different forms of vulnerability and exclusion:",
    groups: [
      { title: "Vulnerable situations", description: "Street-connected children, child labourers, school dropouts, children from disadvantaged families and those at risk of abuse and exploitation." },
      { title: "Adolescents", description: "Girls and boys facing challenges related to gender discrimination, child marriage, limited educational opportunities and lack of awareness about their rights and health." },
      { title: "Women", description: "Women from economically and socially disadvantaged communities, including members of Self-Help Groups, who seek greater social and economic empowerment." },
      { title: "Youth", description: "Young people requiring opportunities for education, skill development, employment, leadership and participation in community and environmental initiatives." },
      { title: "Marginalised communities", description: "Rural and urban families, sanitation workers and other vulnerable groups facing barriers to education, healthcare, livelihoods and access to government entitlements." },],
    collaborationsIntro: "To strengthen community development and create sustainable impact, we collaborate with:",
    collaborations: [
      { title: "Government Departments and Local Bodies", description: "Working together to strengthen the implementation of government programmes, policies and welfare schemes." },
      { title: "Educational and Health Institutions", description: "Promoting access to quality education, healthcare, nutrition and essential services." },
      { title: "CSR and Funding Partners", description: "Building partnerships and mobilising resources to support sustainable community development." },
      { title: "Civil Society Organisations and Networks", description: "Collaborating to address social issues and strengthen community-level interventions and engaging with Child Rights Clubs, Self-Help Groups, youth groups and other local institutions to promote community ownership and participation." },],
    conclusion: "Through these partnerships and collective efforts, RLHP works towards building inclusive, empowered and resilient communities where every child, woman and young person has the opportunity to live with dignity and build a better future."
  },

  approaches: [
    { title: "Child Centered", description: "The child is kept in focus when making decisions about their lives and working in partnership with them and their families." },
    { title: "Integrated Community Development", description: "The whole community is involved, respected and empowered with skills needed to effect lasting change and ensure local ownership." },
    { title: "Bottom Up Governance", description: "A bottom-up approach creating transparency and accountability from the village level to the district level for public scheme access." },
    { title: "Capacity Building", description: "Trainings for Panchayati Raj Institutions (PRIs) and local stakeholders to develop mutual and horizontal accountability." },
    { title: "People's Participation", description: "People are closely involved in the economic, social, cultural, and political processes affecting their communities." },
    { title: "Social Mobilisation", description: "Organizing communities to collectively think, advocate, and act upon their sustainable development goals." }
  ]
};

export const bankDetails = orgDetails.bankDetails;

// Home Page Key Stats
export const homeKeyStats = [
  { id: 1, count: "2M+", label: "Reached", sub: "Lives Reached Across South India" },
  { id: 2, count: "80K", label: "Children Helped", sub: "Rescued, Educated & Protected" },
  { id: 3, count: "42+", label: "Years Impact", sub: "Working for Children's Rights Since 1984" }
];

// Home Page Impact Section
export const homeImpactSummary = [
  { id: 1, count: "9.5 Lakh+", label: "Lives Transformed", desc: "Empowered through health, education, rights & livelihood" },
  { id: 2, count: "3 Lakh+", label: "Children Mainstreamed", desc: "Re-enrolled into formal schools and protected from labour" },
  { id: 3, count: "42+ Years", label: "Years of Impact", desc: "Pioneering grassroots child-centred community movement" }
];

// Who We Are Home Section
export const whoWeAreHome = {
  subtitle: "42+ years working for children’s rights",
  description: "Since 1984, RLHP has been working towards holistic, child-centred development. What began with a focus on the health and education of scavengers (Pourakarmikas) and their children has grown into a wider community development movement, reaching over 2 million lives across 10 districts in Karnataka and four states in South India.",
  bullets: [
    "Registered Under Society Act Under 1960",
    "Operation across 10 districts in Karnataka and four states in South India.",
    "7 Offices with Mysuru as HQ"
  ],
  quote: "“Our commitment is to ensure that every child has access to education and opportunities that uplift their families from poverty. We believe education is not just about transforming one life; it is about creating lasting change across generations.”"
};

// Home Page 5 Core Focus Areas
export const homeFocusAreas = [
  {
    id: "child-rights",
    num: "1",
    title: "Child Rights and Protection",
    desc: "Promoting child rights and protection by preventing child marriage, child labour and abuse, while ensuring children's safety, participation and development.",
    icon: "ShieldAlert",
    tag: "Asha Kirana & Asha Bhavana"
  },
  {
    id: "youth-empowerment",
    num: "2",
    title: "Adolescent and Youth Empowerment",
    desc: "Empowering adolescents and youth through life skills, leadership development, gender equality, health awareness and opportunities for personal and social growth.",
    icon: "GraduationCap",
    tag: "Life Skills & Leadership"
  },
  {
    id: "education-learning",
    num: "3",
    title: "Education and Learning",
    desc: "Ensuring access to quality education and improved learning opportunities through school enrolment, learning support, remedial education and academic development.",
    icon: "BookOpen",
    tag: "IEP & School Enrolment"
  },
  {
    id: "community-schemes",
    num: "4",
    title: "Community Development through Government Schemes",
    desc: "Strengthening communities by creating awareness and facilitating access to government welfare schemes, entitlements and essential services to improve livelihoods and quality of life.",
    icon: "Building2",
    tag: "Entitlements & Welfare"
  },
  {
    id: "livelihood-promotion",
    num: "5",
    title: "Livelihood Promotion and Economic Empowerment",
    desc: "Promoting sustainable livelihoods through skill development, vocational training, self-employment opportunities and income-generating activities to strengthen the economic independence of individuals and families.",
    icon: "Handshake",
    tag: "Vocational Skills & SHGs"
  }
];

// Official Partners with Extracted Logos
export const officialPartners = [
  {
    name: "Wipro Foundation",
    logoImage: "/images/partners/Wipro Foundation.png",
    description: "Community development through health & education"
  },
  {
    name: "Mission Inde",
    logoImage: "/images/partners/Mission Inde.png",
    description: "Rural literacy & education initiatives"
  },
  {
    name: "Azim Premji Philanthropic Initiatives",
    logoImage: "/images/partners/APPI.jpg",
    description: "Early childhood development & rights"
  },
  {
    name: "ChildFund International",
    logoImage: "/images/partners/CHILDFUND.jpeg",
    description: "Child protection & youth sponsorship"
  },
  {
    name: "Kluber Lubrications",
    logoImage: "/images/partners/Kluber Lubrications.webp",
    description: "Education support for underprivileged children"
  },
  {
    name: "Federal Ministry for Economic Cooperation and Development",
    logoImage: "/images/partners/federal-ministry-logo.png",
    description: "International sustainable cooperation and child protection"
  },
  {
    name: "Childline 1098",
    logoImage: "/images/partners/childline-1098-logo.png",
    description: "Emergency 24/7 child rescue & protection helpline"
  },
  {
    name: "terre des hommes",
    logoImage: "/images/partners/terre-des-hommes-logo.png",
    description: "Help for Children in Need"
  }
];

// Home Page Testimonials & Case Studies (Names changed to protect privacy as requested)
export const testimonialsData = [
  {
    id: "nagaveni",
    name: "Nagaveni",
    role: "Advocate, Bengaluru",
    designation: "Advocate, Magistrate Court Bengaluru",
    nameChanged: true,
    image: "/images/testimonials/nagarathna.jpg",
    tag: "Street to High Court Advocate",
    programme: "Asha Bhavana Girls’ Home",
    quote: "“I spent my childhood on the streets, struggling to meet my basic needs while continuing my education through hardships. RLHP identified me and provided care, education and support at Asha Bhavana Girls’ Home. With these opportunities, I was able to transform my life. Today, I am proud to be an advocate practising at the Magistrate Court in Bengaluru. I am grateful to RLHP for helping me build a life of dignity, confidence and independence.”",
    fullStory: `“I always dreamed of wearing a school uniform, tie, belt and shoes, and carrying a lunchbox like other schoolchildren. Unfortunately, I was not fortunate enough to experience that childhood. I spent many years on the streets, struggling to earn my daily bread and facing numerous hardships. I was often chased by the police and spent many sleepless nights. Despite these challenges, I managed to pay my school fees from Grade 2 to Grade 7 by begging on the streets.

RLHP identified me and brought me to Asha Bhavana Girls’ Home, where I received the care, education and support I needed. With the guidance and opportunities provided by RLHP, I was able to continue my education and build a better future.

Today, I am an advocate practising at the Magistrate Court in Bengaluru. The support I received from RLHP transformed my life and enabled me to live with dignity and independence. I am deeply grateful to RLHP for believing in me and giving me the opportunity to build a meaningful future. Today, I am proud to serve and support people in need.”`
  },
  {
    id: "prasanna",
    name: "Prasanna",
    role: "Mysuru",
    designation: "TVS Showroom Mechanic, Mysuru",
    nameChanged: true,
    image: "/images/testimonials/prashanth.jpg",
    tag: "Orphaned Child to TVS Mechanic",
    programme: "Asha Kirana Boys’ Shelter Home",
    quote: "“After losing both my parents at a young age, I found a safe home, care and guidance at Asha Kirana Boys’ Shelter Home. With RLHP’s support, I completed my 10th standard with 437 marks and received vocational training in two-wheeler repair. Today, I work as a mechanic at a reputed TVS showroom in Mysuru, earning ₹14,000 per month and living independently. I am grateful to RLHP and Asha Kirana for helping me become self-reliant and build a better future.”",
    fullStory: `“I was born in Kalyanagiri, Mysuru, and lost both my parents at a very young age. My life changed when I joined Asha Kirana Boys’ Shelter Home at the age of seven. Asha Kirana gave me a safe place to live, along with care, guidance and the confidence to dream about my future.

Growing up at Asha Kirana taught me discipline, responsibility and good values. I enjoyed playing kabaddi and developed a strong interest in agriculture and animal husbandry. Although I was a slow learner, I never gave up. I worked hard in my studies, particularly in mathematics, and successfully completed my 10th standard with 437 marks.

With the support of RLHP, I later completed a two-year vocational training course in two-wheeler repair in Hunsur. The training gave me valuable technical skills and helped me become financially independent.

Today, I work as a mechanic at a reputed TVS showroom in Mysuru and earn ₹14,000 per month. I live independently in a rented house and look forward to opening my own garage, building a home and starting a family.

I am deeply grateful to RLHP and Asha Kirana for the care, education and guidance they provided throughout my journey. Their support helped me build a safe, stable and dignified life. I hope my journey inspires other children at Asha Kirana to work hard, believe in themselves and never give up on their dreams.”`
  },
  {
    id: "narasimha",
    name: "Narasimha",
    role: "Bengaluru",
    designation: "Skilled Carpenter, Bengaluru",
    nameChanged: true,
    image: "/images/gallery/migrant_worker_rehabilitation.jpg",
    tag: "From Rag Picker to Skilled Carpenter",
    programme: "Asha Kirana & Seva Sadhana",
    quote: "“After losing my parents at the age of three, I spent my childhood collecting rags and struggling for basic needs. RLHP identified me and brought me to Asha Kirana Boys’ Shelter Home, where I received care, education and a safe environment. With RLHP’s support, I completed my SSLC and received vocational training in carpentry at Seva Sadhana, Bengaluru. Today, I am a skilled carpenter, earning ₹15,000 per month and living independently. My dream is to start my own carpentry business and support children from disadvantaged backgrounds. I am forever grateful to RLHP and Asha Kirana for giving me the opportunity to build a dignified life.”",
    fullStory: `“We were four children in our family. My parents worked at the City Bus Stand in Mysuru, and we did not own a house. The streets were our home. When I was only three years old, my parents passed away after suffering from severe health problems. I do not know exactly what happened to them, but their loss changed our lives completely.

After my parents’ death, my aunt took care of us. She worked as a rag picker, and I often accompanied her along with my siblings. We wandered around the city collecting waste to earn money. Sometimes, I had to beg for a single meal, and many times we went to sleep on an empty stomach. Those were extremely difficult days, and I would never want any child to experience such a life.

One day, while I was collecting rags with my aunt and siblings at Boti Bazaar, members of RLHP noticed us. They spoke to my aunt and me about education, childhood and the importance of giving children a safe and secure environment. They visited us regularly and eventually invited us to Asha Kirana Boys’ Shelter Home. We agreed to go with them, and that decision changed our lives.

At Asha Kirana, I was welcomed with warmth and care. I was provided with new clothes, nutritious food and a safe place to live. Initially, I joined the non-formal education programme and was later admitted to a government school. For the first time, I experienced the care and affection of people who treated me like family.

I successfully completed my SSLC. Later, I developed a strong interest in carpentry and decided to pursue it as a career. With RLHP’s support, I was sent to Seva Sadhana, a vocational training centre in Bengaluru, where I received training in woodwork and carpentry.

Today, I am a skilled carpenter and earn around ₹15,000 per month. I am self-reliant and no longer depend on anyone to meet my basic needs. Asha Kirana not only transformed my life but also gave my brother a better future, while my sister received support through Asha Bhavana. I am proud to have grown up under the care and guidance of RLHP.

My dream is to start my own carpentry business and create opportunities for children who come from difficult backgrounds like mine. I want to support other children and contribute to society, especially those from deprived communities. I will always be grateful to RLHP and Asha Kirana for giving me a safe home, education, skills and, most importantly, a dignified life.”`
  },
  {
    id: "shwetha",
    name: "Shwetha",
    role: "Kumbrallimata Village",
    designation: "Mother of Manoj (recovered from malnutrition)",
    nameChanged: true,
    image: "/images/gallery/maternal_health_awareness.jpg",
    tag: "Child Malnutrition Recovery",
    programme: "Maternal & Child Nutrition",
    quote: "“My three-year-old son Manoj was underweight, weighing just 10.5 kg, and was not attending the Anganwadi regularly. With the guidance and support of RLHP, he was enrolled in the Anganwadi and began receiving nutritious food and supplements. Gradually, his health improved, and today he weighs 13.1 kg, is active and happy. I am grateful to RLHP and the Anganwadi worker for helping my child move towards a healthier future and educating me about the importance of child nutrition.”",
    fullStory: `“My name is Shwetha, and I am the mother of my three-year-old son, Manoj. There was a time when I felt deeply worried and helpless seeing my child so weak. At an age when he should have been active and healthy, he weighed only 10.5 kg. As a mother, it was painful to see him that way, but I did not know what to do or how to help him.

Manoj was not attending the Anganwadi and spent most of his time playing outside. He was not receiving proper food at regular intervals, and I was not aware of how important good nutrition is for a child’s growth and development.

Everything began to change when the Rural Literacy and Health Programme (RLHP) visited our village. The RLHP team identified my child’s condition and guided me with care and patience. They did not simply give us advice; they supported us throughout the process. With their guidance, we enrolled Manoj in the Anganwadi, where he began receiving regular nutritious meals, eggs and supplements such as ragi mixture and Spirulina.

Slowly, I began to notice a positive change in my child. He became more active, started eating better and gradually regained his happiness and energy. As a mother, seeing these changes brought me immense relief and joy.

Today, Manoj weighs 13.1 kg. He is healthy, happy and enjoys playing with other children. Seeing him grow and play with confidence fills my heart with happiness.

I am deeply thankful to RLHP and the Anganwadi worker for their care and support. RLHP not only helped my child move towards a healthier life but also helped me understand the importance of nutrition and better childcare. Their support has truly made a meaningful difference in our lives.”`
  },
  {
    id: "sahana",
    name: "Sahana",
    role: "Channarayapatna",
    designation: "Paramedical Professional",
    nameChanged: true,
    image: "/images/testimonials/sneha.jpg",
    tag: "Asha Bhavana to Paramedic",
    programme: "Asha Bhavana Girls’ Home",
    quote: "“I came to Asha Bhavana in 2009 at the age of five, having lost my parents’ care and support. At Asha Bhavana, I received a safe home, education, counselling and guidance that helped me grow in confidence. With RLHP’s continued support, I completed my schooling and pursued paramedical studies in Channarayapatna. Today, I am independent and able to support myself. I am deeply grateful to Asha Bhavana and RLHP for helping me build a life of dignity and self-reliance.”",
    fullStory: `“I came to Asha Bhavana in 2009 when I was only five years old. At such a young age, I had lost my parents’ care and had no one who could take responsibility for me. I was brought to Asha Bhavana by members of a women’s organization in Kurimandi, Mysuru, who understood my situation and wanted me to have a safe and secure future.

When I first arrived, I was very small and weak and found it difficult to adjust to my new surroundings. I needed support in many ways, including maintaining personal hygiene and developing discipline. At Asha Bhavana, I received love, care, counselling and guidance. I was enrolled in school and encouraged to attend regularly. The support and encouragement I received helped me grow in confidence and improve both in my studies and in my personal life.

With continued guidance, I completed my schooling and later pursued paramedical studies. I joined a paramedical course in Channarayapatna and successfully completed my studies. Today, I am working independently and am able to support myself.

I am grateful for the care, education and guidance I received at Asha Bhavana. The support I received during my childhood helped me become confident, independent and self-reliant. Asha Bhavana gave me the opportunity to build a better future and live my life with dignity.”`
  },
  {
    id: "giri",
    name: "Giri",
    role: "Bengaluru",
    designation: "Electrician, St. John’s Hospital, Bengaluru",
    nameChanged: true,
    image: "/images/gallery/youth_computer_training.jpg",
    tag: "From Vulnerability to Independence",
    programme: "Asha Kirana & Seva Sadhana",
    quote: "“My brother and I were brought to Asha Kirana Child Care Centre after RLHP identified our family’s vulnerable situation. At Asha Kirana, I received care, education and encouragement that helped me grow in confidence. I completed my SSLC with 501 marks and later pursued a two-year Electrician and Plumbing course at Seva Sadhana Institute, Bengaluru. Today, I work as an Electrician at St. John’s Hospital, Bengaluru, earning ₹18,000 per month. I am financially independent and dream of supporting my mother and giving back to Asha Kirana by helping other children build a better future. I am deeply grateful to RLHP for shaping my life.”",
    fullStory: `“I am Giri, a resident of Mysuru. My parents worked as sanitation workers. My father struggled with alcohol addiction and later passed away due to health complications. After his death, my mother, Bannamma, took complete responsibility for raising my elder brother Subramanya and me. Despite facing many difficulties, she worked hard to give us a better life.

About 12 years ago, RLHP staff identified our vulnerable situation and admitted both my brother and me to the Asha Kirana Child Care Centre. Coming to Asha Kirana brought a major change in my life. I received regular health care, nutritious food, proper hygiene and grooming, a safe environment and, most importantly, love and guidance.

When I was around six years old, I was enrolled in MC Hundi School in the first standard. Initially, I was slow in learning and often fell asleep in the classroom. The staff and senior children at Asha Kirana patiently supported me and encouraged me to improve. Gradually, I became more confident and started doing better in my studies.

Asha Kirana also gave me opportunities to participate in cultural activities such as folk dance, Kamsale, art and craft. These activities helped me develop confidence and discover my interests beyond academics.

In the 2019–20 academic year, I appeared for the SSLC examination. With the support of special classes, TV lessons and my own hard work, I secured 501 marks. This achievement gave me the confidence to think about my future and become independent.

I was always interested in vocational skills, so I joined a two-year Electrician and Plumbing course at Seva Sadhana Institute in Bengaluru. With the guidance of my mentors and support from Asha Kirana staff, I successfully completed the training and gained one year of practical work experience in Mysuru.

My skills and dedication helped me secure a job as an Electrician at St. John’s Hospital in Bengaluru. Today, I earn ₹18,000 per month and am proud to be financially independent.

I now have several dreams for my future. I want to build a house in Mysuru, support my mother, help arrange my brother’s marriage and, most importantly, support the children of Asha Kirana in the future.

I am grateful to Asha Kirana for giving me care, education, skills and the confidence to build my own life. The support I received has transformed my life and helped me become independent. I hope that one day I can give back by helping other children who are going through difficulties, just as I was helped.”`
  }
];

// Additional Community Case Studies
export const communityCaseStudies = [
  {
    id: "case-kashiram-thanda",
    title: "Construction of a CC Road in Kashiram Thanda",
    tag: "Infrastructure & Advocacy",
    programme: "Application Mela & Governance",
    image: "/images/gallery/gram_sabha_awareness.jpg",
    location: "Chincholi Taluk, Kalaburagi",
    summary: "For over 3 decades, 50 households in Kashiram Thanda lacked a motorable road. Through RLHP's Application Mela and community advocacy, government sanctioned and completed a permanent cement concrete (CC) road.",
    fullStory: `Kashiram Thanda, located under Ainoli Gram Panchayat in Chincholi Taluk, is home to around 50 households and more than 500 residents. For over three decades, the community struggled with a poorly maintained mud road that became muddy and waterlogged during the rainy season.

The poor road conditions created serious difficulties for the community. Children faced challenges in reaching school, while villagers struggled to access healthcare, markets, workplaces and other essential services. A tragic incident in which a pregnant woman reportedly lost her life after an ambulance or private vehicle could not reach the village in time further highlighted the urgent need for a permanent road.

During RLHP’s Mass Contact Programme (MCP) and Application Mela, the Youth and Women’s Groups came together and submitted a written request to the concerned government authorities for the construction of a cement concrete (CC) road.

RLHP staff facilitated community meetings, coordinated with the Gram Panchayat and relevant government officials, and ensured continuous follow-up until the request received attention. As a result of the community’s collective efforts and persistent advocacy, the government sanctioned and completed the CC road.

The new road has brought a significant change to everyday life in Kashiram Thanda. Villagers now have improved year-round access to schools, healthcare facilities, markets and workplaces. Children can travel to school more safely, attendance has improved, and parents have greater confidence in supporting their children’s education.

This case demonstrates how community mobilisation, collective action and sustained advocacy, supported by RLHP, can help rural communities address long-standing challenges and bring lasting improvements to their quality of life.`
  },
  {
    id: "case-mirzapur-liquor",
    title: "Community Action Against Illegal Liquor Sales",
    tag: "Women Leadership & Safety",
    programme: "Women’s Empowerment & Social Action",
    image: "/images/gallery/shg_leadership_training.jpg",
    location: "Basavakalyana Taluk, Kalaburagi",
    summary: "In Mirzapur village, widespread illegal liquor sales led to domestic violence and hardship. Guided by RLHP, women submitted a petition to the Excise Department, resulting in an immediate inspection and total shutdown of illegal sales.",
    fullStory: `Mirzapur village, under Sastapur Gram Panchayat in Basavakalyana Taluk, had been struggling with illegal liquor sales for several years. The widespread availability of alcohol contributed to addiction, domestic violence, financial hardship, child neglect and disturbances in the community.

During regular household visits and meetings with women and Adolescent Girls’ Groups, RLHP identified illegal liquor sales as a serious concern affecting the safety and well-being of families. RLHP conducted awareness programmes on the harmful effects of alcohol abuse and encouraged women and community members to come together and take collective action.

With guidance and support from RLHP, the women submitted a written petition to the Excise Department, requesting immediate action against the illegal liquor sellers. The very next day, Excise Department officials visited the village, conducted an inspection and stopped the illegal sale of liquor. The offenders were also warned of strict legal action.

The intervention brought positive changes to the community. Domestic violence, family disputes and public disturbances were reduced, creating a safer environment for women, children and elderly people. Families also experienced greater financial stability as household income was no longer being spent on alcohol. Young people became more focused on their education and livelihoods.

This case demonstrates how community mobilisation, women’s leadership and sustained support from RLHP, in coordination with government departments, can help address long-standing social issues and create safer, healthier and more peaceful communities.`
  },
  {
    id: "case-bannithalapura-kamsale",
    title: "Breaking Gender Barriers Through Folk Art",
    tag: "Gender Justice & Folk Culture",
    programme: "Adolescent Girls & Kamsale Art",
    image: "/images/gallery/child_rights_conference.jpg",
    location: "Bannithalapura, Chamarajanagar",
    summary: "Girls in Bannithalapura formed the Kiran Bedi Kishori Group and challenged ancient taboos by learning Kamsale folk dance, winning district honours and performing at Rangayana Theatre Mysuru.",
    fullStory: `Bannithalapura is located 12 km from Gundlupete and has 1,090 households with a population of around 4,080. The village has a school from Class 1 to 10, with more than 300 children enrolled, along with three Anganwadi centres, a milk dairy, Gram Panchayat office and Primary Health Centre. Agriculture is the main source of livelihood, while traditional beliefs and practices continue to influence community life.

For the past four years, RLHP has been working in Bannithalapura with women, children, adolescent girls and youth, promoting group formation and community participation. With the support of teachers, children have also been encouraged to participate in sports such as volleyball, kabaddi and kho-kho.

RLHP formed the Kiran Bedi Kishori Group and conducted weekly meetings to promote adolescent girls’ participation, rights, confidence and overall development, with a special focus on addressing gender discrimination. Sports, cultural activities and traditional folk arts were used as effective tools to develop leadership and self-confidence among the girls.

During one such meeting, the girls expressed their interest in learning Kamsale, a traditional folk-art form. However, a long-standing belief in the village held that girls should not touch or perform Kamsale. When the girls began learning the art, some community members discouraged them and warned them against participating. Despite these challenges, the girls remained determined and continued their practice with the encouragement and support of RLHP.

Their hard work soon brought recognition. The girls won first prize at both the Hobli and Taluk levels and secured third prize at the district level. They were later invited to perform at Rangayana Theatre, Mysuru, during a training programme for district-level officers, where their performance was highly appreciated.

The girls’ achievements gradually changed community attitudes. Villagers who had once questioned their participation began to take pride in their accomplishments and recognise their abilities.

This success story demonstrates how cultural activities can become powerful tools for challenging gender stereotypes and creating opportunities for girls. Through the Kiran Bedi Kishori Group, RLHP enabled adolescent girls to develop confidence, leadership and skills while gaining recognition within and beyond their community.`
  }
];

// Combine all success stories and case studies
export const successStoriesData = [
  ...testimonialsData.map(t => ({
    id: `story-${t.id}`,
    title: `Testimonial – ${t.name}`,
    programme: t.programme,
    image: t.image,
    summary: t.quote.replace(/^[“"]|[”"]$/g, ''),
    author: t.name,
    location: t.role,
    fullStory: t.fullStory,
    isPlaceholder: false
  })),
  ...communityCaseStudies.map(c => ({
    id: c.id,
    title: c.title,
    programme: c.programme,
    image: c.image,
    summary: c.summary,
    author: c.title,
    location: c.location,
    fullStory: c.fullStory,
    isPlaceholder: false
  }))
];

// Publications & Annual Reports
export const ourReportsList = [
  { title: "Annual Report 2024-2025", desc: "Comprehensive audit, operational review & audited balance sheet.", year: "2024-2025", type: "Annual Report" },
  { title: "Annual Report 2023-2024", desc: "Key milestones, impact metrics across 10 districts & community outreach.", year: "2023-2024", type: "Annual Report" },
  { title: "Annual Report 2022-2023", desc: "Post-pandemic community recovery, livelihood drives & financial statements.", year: "2022-2023", type: "Annual Report" },
  { title: "Baseline Survey Report", desc: "Socio-economic baseline assessment of Pourakarmika families & rural habitations.", year: "2024", type: "Baseline Survey" },
  { title: "Individualized Education Plan (IEP) Activity Report", desc: "Diagnostic evaluation & remediation methodologies for learning difficulties in rural schools.", year: "2024", type: "IEP Activity" },
  { title: "Parent Teacher Association (PTA) Report", desc: "Strengthening community school governance, monitoring & dropout prevention.", year: "2024", type: "PTA Report" }
];

export const focusAreas = homeFocusAreas.map(f => ({
  id: f.id,
  title: f.title,
  shortDesc: f.desc,
  icon: f.icon,
  link: `/programmes`
}));

export const impactStats = [
  { id: 1, count: "42+", label: "Years Impact", description: "Empowering children and marginalized communities since 1984", icon: "Clock" },
  { id: 2, count: "2M+", label: "People Reached", description: "Reaching over 2 million lives across South India", icon: "Users" },
  { id: 3, count: "80K", label: "Children Helped", description: "Rescued, protected, mainstreamed & educated", icon: "Heart" },
  { id: 4, count: "10", label: "Districts Active", description: "Covering 10 districts in Karnataka and 4 southern states", icon: "MapPin" }
];

export const fundingPartners = officialPartners.map(p => ({
  name: p.name,
  logoText: p.name,
  logoImage: p.logoImage,
  project: p.description
}));

export const governmentDepartments = [
  "Department of Health & Family Welfare",
  "Department of School Education & Literacy",
  "Department of Women & Child Development",
  "Department of Labour",
  "Karnataka State Police Department",
  "Department of Rural Development & Panchayat Raj",
  "Department of Youth Affairs & Sports",
  "Skill Development, Entrepreneurship & Livelihood"
];

// District Operations
export const districtsData = [
  {
    id: "mysuru",
    name: "Mysuru (HQ)",
    subDistrict: null,
    coordinates: { x: 46, y: 77 },
    isHq: true,
    projectsCount: 4,
    description: "State Headquarters (Gayathripuram). Home to Asha Kirana Boys Shelter, Asha Bhavana Girls Shelter, DWANI Women Federation, and Child Rights Clubs.",
    projects: ["Asha Kirana Boys Shelter Home", "Asha Bhavana Girls Shelter Home", "DWANI Women Federation", "Child Rights Clubs Network"]
  },
  {
    id: "chamarajanagar",
    name: "Chamarajanagar",
    subDistrict: "Gundlupete",
    coordinates: { x: 52, y: 84 },
    projectsCount: 2,
    description: "South Karnataka (Gundlupete): Tribal community empowerment, adolescent girls folk art (Kamsale), maternal nutrition, and health camps.",
    projects: ["Gundlupete Community Center", "Kiran Bedi Kishori Group Folk Art", "Maternal & Child Health Care"]
  },
  {
    id: "mandya",
    name: "Mandya",
    subDistrict: "Srirangapatna",
    coordinates: { x: 50, y: 72 },
    projectsCount: 2,
    description: "South Karnataka (Srirangapatna): Women SHG sangha federations, maternal nutrition, and rural health drives.",
    projects: ["Srirangapatna Field Operations", "Women Sangha Empowerment Initiative", "Rural Health & Sanitation Campaign"]
  },
  {
    id: "kalaburagi",
    name: "Kalaburagi / Gulbarga",
    subDistrict: "Chincholi",
    coordinates: { x: 58, y: 20 },
    projectsCount: 3,
    description: "North Karnataka (Chincholi): Government schemes facilitation, infrastructure advocacy (CC Road in Kashiram Thanda), and anti-liquor action.",
    projects: ["Chincholi Regional Project", "North Karnataka Scheme Access Project", "Application Mela & Advocacy", "Community Health Drive"]
  },
  {
    id: "bidar",
    name: "Bidar",
    subDistrict: "Basavakalyana",
    coordinates: { x: 62, y: 11 },
    projectsCount: 2,
    description: "Northernmost district (Basavakalyana): Rural literacy programs, SDMC strengthening, and last-mile welfare delivery.",
    projects: ["Basavakalyana Educational Outreach", "Bidar Rural Literacy & IEP Program", "Gram Panchayat Linkage Project"]
  },
  {
    id: "raichur",
    name: "Raichur",
    subDistrict: "Lingasugur",
    coordinates: { x: 56, y: 31 },
    projectsCount: 2,
    description: "North Karnataka (Lingasugur): Child rights clubs, anti-child labor rehabilitation, and water conservation.",
    projects: ["Lingasugur Outreach Unit", "Raichur Child Protection Unit", "Sanitation & Water Rights"]
  },
  {
    id: "chitradurga",
    name: "Chitradurga",
    subDistrict: "Holalkere",
    coordinates: { x: 51, y: 50 },
    projectsCount: 2,
    description: "Central/North Karnataka (Holalkere): Women self-help group federations and learning disability remediation.",
    projects: ["Holalkere Sangha Hub", "BELAKU Women Sangha Project", "IEP Learning Disability Remediation"]
  },
  {
    id: "davanagere",
    name: "Davanagere",
    subDistrict: "Honnali",
    coordinates: { x: 44, y: 46 },
    projectsCount: 1,
    description: "Central Karnataka (Honnali): Youth vocational training, life skills, and government scheme awareness.",
    projects: ["Honnali Skill & Governance Center"]
  },
  {
    id: "uttara-kannada",
    name: "Uttara Kannada",
    subDistrict: "Karwar",
    coordinates: { x: 30, y: 45 },
    projectsCount: 2,
    description: "Coastal Region (Karwar): Child protection networks, educational strengthening, and coastal community support.",
    projects: ["Karwar Coastal Community Project", "Child Protection & Education Drive"]
  },
  {
    id: "dakshina-kannada",
    name: "Dakshina Kannada",
    subDistrict: "Mangalore",
    coordinates: { x: 36, y: 70 },
    projectsCount: 2,
    description: "Coastal Region (Mangalore): Educational empowerment, child rights advocacy, and youth development.",
    projects: ["Mangalore Urban Outreach Center", "Educational Empowerment Initiative"]
  }
];

// Programmes overview data
export const programmesData = [
  {
    id: "child-rights",
    title: "Child Rights and Protection",
    subtitle: "Protecting rights, preventing child marriage, child labour, and abuse",
    heroImage: "/images/gallery/ashabhavana_girls_learning.jpg",
    overview: "Promoting child rights and protection by preventing child marriage, child labour and abuse, while ensuring children's safety, participation and development.",
    keyInitiatives: [
      {
        name: "Asha Kirana Boys’ Shelter Home",
        year: 1990,
        description: "Residential care, nutrition, education, and vocational training for boys in vulnerable situations."
      },
      {
        name: "Asha Bhavana Girls’ Shelter Home",
        year: 1990,
        description: "Safe shelter, academic support, counselling, and vocational guidance for girls."
      },
      {
        name: "Child Rights Clubs (CRC)",
        year: 2005,
        description: "Democratically organized clubs empowering children to understand and advocate for their rights."
      }
    ],
    highlights: [
      "Over 2M+ lives reached and 80K+ children directly supported",
      "Street Children Rehabilitation and prevention of child marriage across 10 districts",
      "Safe foster care, counselling and academic mainstreaming"
    ]
  },
  {
    id: "youth-empowerment",
    title: "Adolescent and Youth Empowerment",
    subtitle: "Life skills, leadership development, gender equality, and growth",
    heroImage: "/images/gallery/adolescent_skill_training.jpg",
    overview: "Empowering adolescents and youth through life skills, leadership development, gender equality, health awareness and opportunities for personal and social growth.",
    keyInitiatives: [
      {
        name: "Life Skills & Leadership Programs",
        description: "Interactive workshops on decision making, communication, self-confidence, and teamwork."
      },
      {
        name: "Gender Justice & Folk Culture",
        description: "Encouraging adolescent girls to break barriers through traditional arts like Kamsale and sports."
      }
    ],
    highlights: [
      "Kiran Bedi Kishori Groups empowering hundreds of young girls",
      "Youth meetings fostering communication and leadership skills"
    ]
  },
  {
    id: "education-learning",
    title: "Education and Learning",
    subtitle: "Access to quality education, enrolment, and learning support",
    heroImage: "/images/gallery/child_rights_workshop.jpg",
    overview: "Ensuring access to quality education and improved learning opportunities through school enrolment, learning support, remedial education and academic development.",
    keyInitiatives: [
      {
        name: "Individualized Education Plan (IEP)",
        description: "Targeted remedial support for children with learning difficulties."
      },
      {
        name: "Library Programme",
        description: "Promoting reading habits, improving literacy and encouraging lifelong learning through books."
      }
    ],
    highlights: [
      "Enrolling dropouts back into formal government schools",
      "Regular PTA meetings and community-supported learning centers"
    ]
  },
  {
    id: "community-schemes",
    title: "Community Development through Government Schemes",
    subtitle: "Awareness and access to welfare schemes and public entitlements",
    heroImage: "/images/gallery/community_leadership_felicitation.jpg",
    overview: "Strengthening communities by creating awareness and facilitating access to government welfare schemes, entitlements and essential services to improve livelihoods and quality of life.",
    keyInitiatives: [
      {
        name: "Application Mela & Mass Contact Programmes",
        description: "On-the-spot entitlement facilitation for pensions, housing, ration, and basic infrastructure."
      },
      {
        name: "Grassroots Advocacy",
        description: "Securing basic village amenities such as the CC Road in Kashiram Thanda and halting illegal liquor sales."
      }
    ],
    highlights: [
      "Thousands of families linked to life-changing government benefits",
      "Sustained collaboration with local Gram Panchayats and district officials"
    ]
  },
  {
    id: "livelihood-promotion",
    title: "Livelihood Promotion and Economic Empowerment",
    subtitle: "Skill development, vocational training, and self-employment",
    heroImage: "/images/gallery/shg_leadership_training.jpg",
    overview: "Promoting sustainable livelihoods through skill development, vocational training, self-employment opportunities and income-generating activities to strengthen the economic independence of individuals and families.",
    keyInitiatives: [
      {
        name: "Vocational Training Courses",
        description: "Carpentry, electrical work, two-wheeler repair, paramedical courses, and computer education."
      },
      {
        name: "Women Self-Help Groups (SHGs) & Seed Grants",
        description: "EDP training, savings, and ₹20,000 seed grants empowering mothers to start small enterprises."
      }
    ],
    highlights: [
      "Youth employed at reputed institutions like St. John's Hospital and TVS Showrooms",
      "Women entrepreneurs running profitable home-based flower and retail businesses"
    ]
  }
];

export const newsArticlesData = [
  {
    id: "news-1",
    title: "RLHP Celebrates 42+ Years of Service for Children’s Rights",
    date: "2026-01-15",
    category: "Milestone Celebration",
    image: "/images/gallery/annual_stakeholder_convention.jpg",
    summary: "Reflecting on four decades of child-centred development, reaching 2M+ lives across 10 districts in Karnataka and South India.",
    content: "Since 1984, RLHP has been a trusted pioneer in grassroots development, advocating for child rights, operating shelter homes, and promoting sustainable livelihoods."
  },
  {
    id: "news-2",
    title: "Empowering Rural Youth with Market-Ready Technical Skills",
    date: "2025-11-20",
    category: "Livelihood Promotion",
    image: "/images/gallery/adolescent_skill_training.jpg",
    summary: "Vocational courses in electrician, automobile repair, and paramedical studies help underprivileged youth gain financial independence.",
    content: "Youth trained through RLHP partnerships are now successfully working as electricians, TVS mechanics, carpenters, and paramedical staff."
  },
  {
    id: "news-3",
    title: "Combating Malnutrition in Rural Villages Through Anganwadi Linkages",
    date: "2025-09-10",
    category: "Health & Nutrition",
    image: "/images/gallery/maternal_health_awareness.jpg",
    summary: "RLHP nutrition drives and Anganwadi enrolment help underweight children regain health and vitality.",
    content: "With regular nutritious supplements, eggs, and maternal counseling, scores of children like Manoj have successfully transitioned into healthy, active growth."
  }
];

export const awardsData = [
  {
    id: "award-1",
    title: "State Best Child Welfare Service Award",
    organization: "Government of Karnataka",
    year: "2018",
    image: "/images/about/best_service_award.jpg",
    description: "Honoured for exemplary contribution towards rescue, rehabilitation, and protection of vulnerable children."
  },
  {
    id: "award-2",
    title: "Nalwadi Krishnaraja Wadiyar Social Excellence Award",
    organization: "Mysuru District Administration",
    year: "2020",
    image: "/images/about/nalwadi_award.jpg",
    description: "Recognised for four decades of dedicated service to underprivileged Pourakarmikas, women, and rural families."
  },
  {
    id: "award-3",
    title: "Chaitanya Shri Award",
    organization: "Social Welfare Federation",
    year: "2022",
    image: "/images/about/chaitanya_shri_award.jpg",
    description: "Conferred in recognition of community mobilization, women empowerment, and child rights awareness."
  }
];

export const publicationsData = ourReportsList.map((r, i) => ({
  id: `pub-${i + 1}`,
  title: r.title,
  year: r.year,
  category: r.type,
  fileUrl: "#",
  description: r.desc,
  coverImage: "/images/gallery/annual_stakeholder_convention.jpg"
}));

export const galleryData = [
  {
    "id": "gallery-1",
    "image": "/images/gallery/gallery_01.jpg",
    "remoteImage": "/images/gallery/gallery_01.jpg"
  },
  {
    "id": "gallery-2",
    "image": "/images/gallery/gallery_02.jpg",
    "remoteImage": "/images/gallery/gallery_02.jpg"
  },
  {
    "id": "gallery-3",
    "image": "/images/gallery/gallery_03.jpg",
    "remoteImage": "/images/gallery/gallery_03.jpg"
  },
  {
    "id": "gallery-4",
    "image": "/images/gallery/gallery_04.jpg",
    "remoteImage": "/images/gallery/gallery_04.jpg"
  },
  {
    "id": "gallery-5",
    "image": "/images/gallery/gallery_05.jpg",
    "remoteImage": "/images/gallery/gallery_05.jpg"
  },
  {
    "id": "gallery-6",
    "image": "/images/gallery/gallery_06.jpg",
    "remoteImage": "/images/gallery/gallery_06.jpg"
  },
  {
    "id": "gallery-7",
    "image": "/images/gallery/gallery_07.jpg",
    "remoteImage": "/images/gallery/gallery_07.jpg"
  },
  {
    "id": "gallery-8",
    "image": "/images/gallery/gallery_08.jpg",
    "remoteImage": "/images/gallery/gallery_08.jpg"
  },
  {
    "id": "gallery-9",
    "image": "/images/gallery/gallery_09.jpg",
    "remoteImage": "/images/gallery/gallery_09.jpg"
  },
  {
    "id": "gallery-10",
    "image": "/images/gallery/gallery_10.jpg",
    "remoteImage": "/images/gallery/gallery_10.jpg"
  },
  {
    "id": "gallery-11",
    "image": "/images/gallery/gallery_11.jpg",
    "remoteImage": "/images/gallery/gallery_11.jpg"
  },
  {
    "id": "gallery-12",
    "image": "/images/gallery/gallery_12.jpg",
    "remoteImage": "/images/gallery/gallery_12.jpg"
  },
  {
    "id": "gallery-13",
    "image": "/images/gallery/gallery_13.jpg",
    "remoteImage": "/images/gallery/gallery_13.jpg"
  },
  {
    "id": "gallery-14",
    "image": "/images/gallery/gallery_14.jpg",
    "remoteImage": "/images/gallery/gallery_14.jpg"
  },
  {
    "id": "gallery-15",
    "image": "/images/gallery/gallery_15.jpg",
    "remoteImage": "/images/gallery/gallery_15.jpg"
  },
  {
    "id": "gallery-16",
    "image": "/images/gallery/gallery_16.jpg",
    "remoteImage": "/images/gallery/gallery_16.jpg"
  },
  {
    "id": "gallery-17",
    "image": "/images/gallery/gallery_17.jpg",
    "remoteImage": "/images/gallery/gallery_17.jpg"
  },
  {
    "id": "gallery-18",
    "image": "/images/gallery/gallery_18.jpg",
    "remoteImage": "/images/gallery/gallery_18.jpg"
  },
  {
    "id": "gallery-19",
    "image": "/images/gallery/gallery_19.jpg",
    "remoteImage": "/images/gallery/gallery_19.jpg"
  },
  {
    "id": "gallery-20",
    "image": "/images/gallery/gallery_20.jpg",
    "remoteImage": "/images/gallery/gallery_20.jpg"
  },
  {
    "id": "gallery-21",
    "image": "/images/gallery/gallery_21.jpg",
    "remoteImage": "/images/gallery/gallery_21.jpg"
  },
  {
    "id": "gallery-22",
    "image": "/images/gallery/gallery_22.jpg",
    "remoteImage": "/images/gallery/gallery_22.jpg"
  },
  {
    "id": "gallery-23",
    "image": "/images/gallery/gallery_23.jpg",
    "remoteImage": "/images/gallery/gallery_23.jpg"
  },
  {
    "id": "gallery-24",
    "image": "/images/gallery/gallery_24.jpg",
    "remoteImage": "/images/gallery/gallery_24.jpg"
  },
  {
    "id": "gallery-26",
    "image": "/images/gallery/gallery_26.jpg",
    "remoteImage": "/images/gallery/gallery_26.jpg"
  },
  {
    "id": "gallery-28",
    "image": "/images/gallery/gallery_28.jpg",
    "remoteImage": "/images/gallery/gallery_28.jpg"
  },
  {
    "id": "gallery-29",
    "image": "/images/gallery/gallery_29.jpg",
    "remoteImage": "/images/gallery/gallery_29.jpg"
  },
  {
    "id": "gallery-30",
    "image": "/images/gallery/gallery_30.jpg",
    "remoteImage": "/images/gallery/gallery_30.jpg"
  },
  {
    "id": "gallery-31",
    "image": "/images/gallery/gallery_31.jpg",
    "remoteImage": "/images/gallery/gallery_31.jpg"
  },
  {
    "id": "gallery-32",
    "image": "/images/gallery/gallery_32.jpg",
    "remoteImage": "/images/gallery/gallery_32.jpg"
  },
  {
    "id": "gallery-33",
    "image": "/images/gallery/gallery_33.jpg",
    "remoteImage": "/images/gallery/gallery_33.jpg"
  },
  {
    "id": "gallery-34",
    "image": "/images/gallery/gallery_34.jpg",
    "remoteImage": "/images/gallery/gallery_34.jpg"
  },
  {
    "id": "gallery-35",
    "image": "/images/gallery/gallery_35.jpg",
    "remoteImage": "/images/gallery/gallery_35.jpg"
  },
  {
    "id": "gallery-36",
    "image": "/images/gallery/gallery_36.jpg",
    "remoteImage": "/images/gallery/gallery_36.jpg"
  },
  {
    "id": "gallery-37",
    "image": "/images/gallery/gallery_37.jpg",
    "remoteImage": "/images/gallery/gallery_37.jpg"
  },
  {
    "id": "gallery-38",
    "image": "/images/gallery/gallery_38.jpg",
    "remoteImage": "/images/gallery/gallery_38.jpg"
  },
  {
    "id": "gallery-39",
    "image": "/images/gallery/gallery_39.jpg",
    "remoteImage": "/images/gallery/gallery_39.jpg"
  },
  {
    "id": "gallery-40",
    "image": "/images/gallery/gallery_40.jpg",
    "remoteImage": "/images/gallery/gallery_40.jpg",
    "objectPosition": "center 20%"
  },
  {
    "id": "gallery-42",
    "image": "/images/gallery/gallery_42.jpg",
    "remoteImage": "/images/gallery/gallery_42.jpg",
    "objectPosition": "center 20%"
  },
  {
    "id": "gallery-43",
    "image": "/images/gallery/gallery_43.jpg",
    "remoteImage": "/images/gallery/gallery_43.jpg"
  },
  {
    "id": "gallery-44",
    "image": "/images/gallery/gallery_44.jpg",
    "remoteImage": "/images/gallery/gallery_44.jpg"
  },
  {
    "id": "gallery-45",
    "image": "/images/gallery/gallery_45.jpg",
    "remoteImage": "/images/gallery/gallery_45.jpg"
  },
  {
    "id": "gallery-46",
    "image": "/images/gallery/gallery_46.jpg",
    "remoteImage": "/images/gallery/gallery_46.jpg"
  },
  {
    "id": "gallery-47",
    "image": "/images/gallery/gallery_47.jpg",
    "remoteImage": "/images/gallery/gallery_47.jpg"
  },
  {
    "id": "gallery-48",
    "image": "/images/gallery/gallery_48.jpg",
    "remoteImage": "/images/gallery/gallery_48.jpg"
  },
  {
    "id": "gallery-49",
    "image": "/images/gallery/gallery_49.jpg",
    "remoteImage": "/images/gallery/gallery_49.jpg"
  },
  {
    "id": "gallery-50",
    "image": "/images/gallery/gallery_50.jpg",
    "remoteImage": "/images/gallery/gallery_50.jpg"
  },
  {
    "id": "gallery-51",
    "image": "/images/gallery/gallery_51.jpg",
    "remoteImage": "/images/gallery/gallery_51.jpg"
  },
  {
    "id": "gallery-52",
    "image": "/images/gallery/gallery_52.jpg",
    "remoteImage": "/images/gallery/gallery_52.jpg"
  },
  {
    "id": "gallery-53",
    "image": "/images/gallery/gallery_53.jpg",
    "remoteImage": "/images/gallery/gallery_53.jpg"
  },
  {
    "id": "gallery-54",
    "image": "/images/gallery/gallery_54.jpg",
    "remoteImage": "/images/gallery/gallery_54.jpg"
  },
  {
    "id": "gallery-55",
    "image": "/images/gallery/gallery_55.jpg",
    "remoteImage": "/images/gallery/gallery_55.jpg"
  },
  {
    "id": "gallery-56",
    "image": "/images/gallery/gallery_56.jpg",
    "remoteImage": "/images/gallery/gallery_56.jpg"
  },
  {
    "id": "gallery-57",
    "image": "/images/gallery/gallery_57.jpg",
    "remoteImage": "/images/gallery/gallery_57.jpg"
  },
  {
    "id": "gallery-58",
    "image": "/images/gallery/gallery_58.jpg",
    "remoteImage": "/images/gallery/gallery_58.jpg"
  },
  {
    "id": "gallery-59",
    "image": "/images/gallery/gallery_59.jpg",
    "remoteImage": "/images/gallery/gallery_59.jpg"
  },
  {
    "id": "gallery-60",
    "image": "/images/gallery/gallery_60.jpg",
    "remoteImage": "/images/gallery/gallery_60.jpg"
  }
];


export const eventsData = [
  {
    id: "event-1",
    title: "Annual Children’s Rights Convention",
    date: "2025-12-10",
    category: "Convention",
    image: "/images/gallery/annual_stakeholder_convention.jpg",
    location: "Mysuru",
    summary: "Over 500 children from Child Rights Clubs gathering to deliberate on protection, education, and social safety."
  },
  {
    id: "event-2",
    title: "Vocational Livelihood Graduation Day",
    date: "2025-10-15",
    category: "Livelihood",
    image: "/images/gallery/adolescent_skill_training.jpg",
    location: "Bengaluru / Mysuru",
    summary: "Felicitation of youth completing electrician, mechanic, carpentry, and paramedical vocational courses."
  }
];

export const videoGalleryData = [
  {
    id: "vid-1",
    title: "RLHP 42+ Years Impact Documentary",
    youtubeId: "VqEL0QYI3ms",
    category: "Organization Overview",
    year: "2024",
    duration: "12:45",
    image: "/images/gallery/ashakirana_activities.jpg",
    description: "Overview of RLHP's mission, shelter homes, community development, and child rights advocacy across South India."
  },
  {
    id: "vid-2",
    title: "Asha Kirana & Asha Bhavana Shelter Homes Story",
    youtubeId: "VqEL0QYI3ms",
    category: "Shelter Homes",
    year: "2023",
    duration: "08:30",
    image: "/images/gallery/ashabhavana_girls_learning.jpg",
    description: "How residential care, love, and education transform the lives of street-connected and vulnerable children."
  }
];


// ==========================================
// 2024-2025 AUDITED FINANCIAL STATEMENTS DATA
// ==========================================
export const auditReport2025 = {
  title: "Audited Financial Statements & Accounts (Foreign Contribution)",
  period: "For the year ended 31st March 2025",
  organization: "Rural Literacy and Health Programme (RLHP)",
  hqAddress: "No. 343, Gayathripuram 2nd Stage, Udayagiri Post, Mysuru – 570019, Karnataka",
  auditor: "Phillipos George & Co., Chartered Accountants",
  auditorRegnNo: "002650 S",
  auditorPartner: "Joe James (Partner, Mem No. 251076)",
  udin: "25251076BMIISA9978",
  signatories: [
    { name: "Mr. Jose V.K.", designation: "Secretary, RLHP" },
    { name: "Mr. Santhosh Kumar", designation: "Treasurer, RLHP" },
    { name: "Mr. Joe James", designation: "Partner, Phillipos George & Co. (CA)" }
  ],
  pdfUrl: "/documents/audit-report-2024-2025.pdf",
  pages: [
    {
      pageNumber: 1,
      title: "Receipts and Payments Account",
      subtitle: "Financial Report (2025-2026)",
      image: "/images/audit-report/audit_report_2024_2025_page_1.jpg",
      totalAmount: "₹3,46,71,219",
      keyHighlights: [
        { label: "Opening Cash in Hand & Bank", value: "₹64,91,699" },
        { label: "Opening Fixed Deposits", value: "₹35,00,000" },
        { label: "Total Grants Received", value: "₹2,43,25,260" },
        { label: "Bank & FD Interest", value: "₹2,34,260" },
        { label: "Rent Deposit", value: "₹1,20,000" },
        { label: "Program Expenses", value: "₹1,48,74,566" },
        { label: "Child Development Expenses", value: "₹97,02,092" },
        { label: "Administrative Expenses", value: "₹47,53,993" },
        { label: "Fixed Assets Acquired", value: "₹15,07,210" },
        { label: "Closing Cash & Bank", value: "₹17,72,821" },
        { label: "Closing Fixed Deposits", value: "₹15,00,000" }
      ]
    },
    {
      pageNumber: 2,
      title: "Income and Expenditure Statement",
      subtitle: "Financial Report (2024-2025)",
      image: "/images/audit-report/audit_report_2024_2025_page_2.jpg",
      totalAmount: "₹2,45,59,520",
      keyHighlights: [
        { label: "Total Grants Income", value: "₹2,43,25,260" },
        { label: "Interest Income", value: "₹2,34,260" },
        { label: "Total Gross Income", value: "₹2,45,59,520" },
        { label: "Program Expenses", value: "₹1,48,74,566" },
        { label: "Child Development Program", value: "₹97,02,092" },
        { label: "Administrative Expenses", value: "₹47,53,993" },
        { label: "Health Program Expenditure", value: "₹3,95,893" },
        { label: "Depreciation & Amortization", value: "₹5,33,783" },
        { label: "Total Operational Expenses", value: "₹3,03,15,241" },
        { label: "Excess of Expenditure over Income", value: "₹57,55,721" }
      ]
    },
    {
      pageNumber: 3,
      title: "Balance Sheet as at 31st March 2025",
      subtitle: "Foreign Contribution Balance Sheet as on 31-Mar-2025",
      image: "/images/audit-report/audit_report_2024_2025_page_3.jpg",
      totalAmount: "₹73,74,032",
      keyHighlights: [
        { label: "NPO Unrestricted Funds", value: "₹73,74,032" },
        { label: "Total Sources of Funds", value: "₹73,74,032" },
        { label: "Property, Plant & Equipment", value: "₹38,81,866" },
        { label: "Investments (FDs)", value: "₹15,00,000" },
        { label: "Other Non-Current Assets", value: "₹2,14,700" },
        { label: "Total Non-Current Assets", value: "₹55,96,566" },
        { label: "Cash and Bank Balances", value: "₹17,72,821" },
        { label: "Short Term Advances", value: "₹4,645" },
        { label: "Total Current Assets", value: "₹17,77,466" },
        { label: "Total Application of Funds", value: "₹73,74,032" }
      ]
    }
  ]
};

// ==========================================
// STRUCTURED PROJECTS DATA
// ==========================================
export const structuredProjects = {
  education: {
    id: "education",
    title: "Education Projects",
    badge: "Inclusive Learning & Literacy",
    desc: "Ensuring access to quality education, remedial teaching, and inclusive schooling for children from underprivileged backgrounds.",
    stats: [
      { label: "Children Mainstreamed", value: "3 Lakh+" },
      { label: "Active Intervention Schools", value: "120+" },
      { label: "Learning Deficiency Drop", value: "25% → 11.1%" }
    ],
    items: [
      {
        title: "Individualized Education Plan (IEP)",
        desc: "Structured diagnostic and remedial curriculum covering cognitive, communication, motor, and literacy development.",
        image: "/images/gallery/ashabhavana_girls_learning.jpg",
        tags: ["IEP Methodology", "Diagnostic Tools", "Remedial Coaching"]
      },
      {
        title: "School Enrolment & Retention Drives",
        desc: "Door-to-door identification of dropouts and child labourers, enrolling them into government schools with learning kits.",
        image: "/images/gallery/child_rights_workshop.jpg",
        tags: ["Anti-Dropout", "School Readiness", "Learning Kits"]
      },
      {
        title: "Library Programme & Mobile Reading Units",
        desc: "Promoting joyful reading habits through book corners, story sessions, and community library hubs.",
        image: "/images/gallery/children_sports_meet.jpg",
        tags: ["Reading Habit", "Open Libraries", "Children Literature"]
      },
      {
        title: "Parent-Teacher Association (PTA) & SDMC Strengthening",
        desc: "Empowering parents and local elders to actively monitor school quality, midday meals, and classroom infrastructure.",
        image: "/images/gallery/community_leadership_felicitation.jpg",
        tags: ["SDMC Training", "Community Governance", "Midday Meal Watch"]
      }
    ]
  },
  livelihood: {
    id: "livelihood",
    title: "Livelihood & Economic Empowerment",
    badge: "Sustainable Self-Reliance",
    desc: "Equipping young people and women with market-driven skills, vocational trades, and micro-enterprise capital.",
    stats: [
      { label: "Youth Trained in Trades", value: "3,500+" },
      { label: "Women in SHG Sanghas", value: "12,000+" },
      { label: "Enterprise Seed Grants", value: "₹20,000 / Grant" }
    ],
    items: [
      {
        title: "Vocational Technical Skills Training",
        desc: "Two-year certified training courses in two-wheeler automobile repair, electrical wiring, carpentry, and paramedical care.",
        image: "/images/gallery/adolescent_skill_training.jpg",
        tags: ["Mechanic Training", "Electrician Trades", "Carpentry Skills"]
      },
      {
        title: "Women’s SHG Federations (DWANI & BELAKU)",
        desc: "Federating 450+ grassroots self-help groups for financial literacy, bank linkages, micro-credit, and legal rights.",
        image: "/images/gallery/shg_leadership_training.jpg",
        tags: ["DWANI Federation", "BELAKU Network", "Financial Independence"]
      },
      {
        title: "Entrepreneurship Development Programme (EDP)",
        desc: "Seed grants of ₹20,000 and business incubation enabling mothers to start flower vending, tailoring, and retail units.",
        image: "/images/gallery/nutrition_kit_distribution.jpg",
        tags: ["Seed Capital", "Business Coaching", "Family Sustainability"]
      },
      {
        title: "Youth Career Guidance & Job Placements",
        desc: "Direct corporate and institutional tie-ups placing trained youth in hospitals (e.g. St. John's) and TVS service centers.",
        image: "/images/gallery/annual_stakeholder_convention.jpg",
        tags: ["Job Fairs", "Hospital Employment", "Showroom Placement"]
      }
    ]
  },
  childhoodCare: {
    id: "childhood-care",
    title: "Childhood and Alternative Care",
    badge: "Sanctuary, Protection & Rights",
    desc: "Providing safe residential shelters, psychological rehabilitation, and foster care for street-connected and vulnerable children.",
    stats: [
      { label: "Children Sheltered", value: "2,100+" },
      { label: "Emergency Rescues", value: "8,000+" },
      { label: "Child Rights Clubs", value: "78 Clubs" }
    ],
    items: [
      {
        title: "Asha Kirana — Boys Shelter Home (Est. 1993)",
        desc: "Safe residential sanctuary in Mysuru providing comprehensive healthcare, nutrition, schooling, and vocational trade mentorship.",
        image: "/images/gallery/ashakirana_activities.jpg",
        tags: ["Residential Shelter", "Vocational Linkage", "Mysuru HQ"]
      },
      {
        title: "Asha Bhavana — Girls Shelter Home (Est. 1999)",
        desc: "Caring residential home offering education, psychological counselling, personal hygiene guidance, and paramedical higher studies.",
        image: "/images/gallery/ashabhavana_girls_learning.jpg",
        tags: ["Girls Protection", "Paramedical Support", "Dignity & Care"]
      },
      {
        title: "Child Rights Clubs (CRC) & Children's Federations",
        desc: "78 democratically managed children's clubs educating boys and girls about their rights to survival, development, and participation.",
        image: "/images/gallery/child_rights_conference.jpg",
        tags: ["78 Clubs", "Child Rights", "Democratic Forums"]
      },
      {
        title: "Prevention of Child Marriage & Child Labour",
        desc: "Community vigilance squads, CHILDLINE coordination, and instant grassroots intervention preventing forced marriages and exploitation.",
        image: "/images/gallery/child_rights_workshop.jpg",
        tags: ["CHILDLINE 1098", "Marriage Prevention", "Child Protection"]
      }
    ]
  },
  pastProjects: {
    id: "past-projects",
    title: "Past Projects & Humanitarian Relief",
    badge: "Disaster Response & Heritage",
    desc: "Historic emergency interventions delivering lifesaving supplies, community reconstruction, and post-crisis rehabilitation.",
    stats: [
      { label: "Disaster Relief Families", value: "13,400+" },
      { label: "COVID-19 Rations Distributed", value: "5,000+ Kits" },
      { label: "Kerala Flood Families Assisted", value: "6,000+ Families" }
    ],
    items: [
      {
        title: "Tamil Nadu Tsunami Relief & Rehabilitation (2004)",
        desc: "Emergency field mission providing transitional shelter, educational restoration kits, and psycho-social trauma healing in coastal zones.",
        image: "/images/gallery/flood_relief_supply.jpg",
        tags: ["2004 Tsunami", "Coastal Tamil Nadu", "Emergency Shelter"]
      },
      {
        title: "Kerala Flood Relief & Rebuilding Initiative (2018)",
        desc: "Mobilized tons of dry food grains, potable water filters, sanitary kits, and building supplies for 6,000+ flood-devastated households.",
        image: "/images/gallery/emergency_ration_distribution.jpg",
        tags: ["2018 Floods", "Water Sanitation", "Home Rehabilitation"]
      },
      {
        title: "COVID-19 Migrant Worker Relief (2020-2022)",
        desc: "Distributed survival dry ration packages, face masks, sanitation supplies, and safe transit aid to over 5,000 displaced migrant families.",
        image: "/images/gallery/covid_hygiene_mask_distribution.jpg",
        tags: ["Pandemic Support", "Ration Supply", "Hygiene Packs"]
      },
      {
        title: "Community CC Road Advocacy — Kashiram Thanda",
        desc: "Advocated through Application Melas securing government sanction for a concrete CC road ending 30 years of village isolation.",
        image: "/images/gallery/gram_sabha_awareness.jpg",
        tags: ["Infrastructure", "Application Mela", "Kalaburagi"]
      }
    ]
  }
};

// ==========================================
// STRUCTURED PUBLICATIONS DATA
// ==========================================
export const structuredPublications = {
  magazines: [
    {
      id: "mag-1",
      title: "Makkala Belaku (Children's Light) — Annual Magazine",
      period: "2024 Edition",
      category: "Magazine",
      desc: "Compilation of essays, artwork, folk poetry, and rights reflections authored by children from Asha Kirana and Asha Bhavana.",
      pages: "48 Pages",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/gallery/annual_stakeholder_convention.jpg"
    },
    {
      id: "mag-2",
      title: "Sangha Dhwani (Voice of Sanghas) — Women's Periodic",
      period: "2023 Edition",
      category: "Magazine",
      desc: "Highlighting grassroot women leaders, self-help group success stories, micro-enterprises, and domestic violence prevention.",
      pages: "36 Pages",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/gallery/dwani_federation_meeting.jpg"
    }
  ],
  bulletins: [
    {
      id: "bul-1",
      title: "RLHP Child Rights Quarterly Digest",
      period: "Q4 2024",
      category: "Bulletin",
      desc: "Quarterly field digest tracking child protection interventions, legal outcomes, CRC meetings, and Anganwadi malnutrition surveys.",
      pages: "12 Pages",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/gallery/child_rights_conference.jpg"
    },
    {
      id: "bul-2",
      title: "Panchayat Welfare Entitlement Bulletin",
      period: "Q2 2024",
      category: "Bulletin",
      desc: "Guide to latest government schemes, pension entitlements, housing benefits, and application mela schedules for rural citizens.",
      pages: "8 Pages",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/gallery/community_leadership_felicitation.jpg"
    }
  ],
  photobooks: [
    {
      id: "photo-1",
      title: "Faces of Resilience — 42 Years Photobook",
      period: "1984 - 2026 Archive",
      category: "Photobook",
      desc: "High-resolution photographic chronicle of children, Pourakarmika families, shelter homes, and four decades of social transformation.",
      pages: "64 Pages HD",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/gallery/ashabhavana_girls_learning.jpg"
    },
    {
      id: "photo-2",
      title: "From Streets to Courts: Life Transformations",
      period: "Case Studies Edition",
      category: "Photobook",
      desc: "Visual photographic journey of Nagarathna (Advocate), Prashanth (TVS Mechanic), Sneha (Paramedic), and Neha Anjum (M.Com).",
      pages: "32 Pages HD",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/testimonials/nagarathna.jpg"
    }
  ],
  iecResources: [
    {
      id: "iec-1",
      title: "Child Protection & Safety Handbook (POCSO & CRC)",
      period: "Field Handbook",
      category: "IEC Resource",
      desc: "Pocket guidebook for educators, Anganwadi workers, and youth clubs explaining rights, child labour laws, and emergency protocols.",
      pages: "24 Pages",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/gallery/child_rights_workshop.jpg"
    },
    {
      id: "iec-2",
      title: "Maternal & Child Nutrition Chart (Spirulina & Ragi)",
      period: "Health Toolkit",
      category: "IEC Resource",
      desc: "Illustrated wall chart demonstrating nutritional foods, infant weight tracking milestones, and balanced indigenous diet plans.",
      pages: "Poster / Chart",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/gallery/maternal_health_awareness.jpg"
    },
    {
      id: "iec-3",
      title: "Individualized Education Plan (IEP) Diagnostic Kit",
      period: "Educator Manual",
      category: "IEC Resource",
      desc: "Step-by-step diagnostic toolkit helping rural teachers identify and remediate 7 distinct learning difficulties in classrooms.",
      pages: "40 Pages",
      fileUrl: "/documents/audit-report-2024-2025.pdf",
      image: "/images/gallery/adolescent_skill_training.jpg"
    }
  ]
};

// ==========================================
// TENDERS & PROCUREMENT DATA
// ==========================================
export const tendersData = {
  activeTenders: [
    {
      id: "TND-2026-001",
      title: "Procurement of Nutritional Food Supplements & Spirulina Kits",
      reference: "RLHP/NUT/2026/04",
      closingDate: "2026-12-15",
      estimatedValue: "₹8,50,000",
      status: "Open",
      desc: "Invitation of sealed quotations from certified manufacturers for supply of child nutritional supplements to Anganwadi centers in Mysuru and Chamarajanagar."
    },
    {
      id: "TND-2026-002",
      title: "Supply of Vocational Carpentry & Electrician Training Toolkits",
      reference: "RLHP/VOC/2026/08",
      closingDate: "2026-11-30",
      estimatedValue: "₹6,20,000",
      status: "Open",
      desc: "Quotations invited for supply of industrial-grade electrical test meters, plumbing equipment, and carpentry workbench tools for Asha Kirana vocational lab."
    },
    {
      id: "TND-2026-003",
      title: "Annual Printing of Educational IEP Books & Magazines",
      reference: "RLHP/PUB/2026/01",
      closingDate: "2026-12-05",
      estimatedValue: "₹3,75,000",
      status: "Open",
      desc: "Tender for offset and digital multi-colour printing of 5,000 copies of Individualized Education Plan (IEP) study workbooks and annual digest."
    }
  ],
  guidelines: [
    "All bids must be submitted in sealed envelopes or via encrypted email to rlhpintervita@gmail.com.",
    "Bidders must provide valid GST registration, PAN card, and audited statements for the past 2 financial years.",
    "RLHP enforces strict Child Protection and Anti-Fraud policies across all vendor agreements.",
    "The Board of Management reserves the right to accept or reject any quotation without assigning reasons."
  ]
};
