export const profile = {
  name: 'Maganti Praneeth Sri Satya Chowdary',
  shortName: 'Praneeth Maganti',
  initials: 'PM',
  headline:
    'Computer Science Engineering Student · Data Science with AI · ML Engineer · Python Developer · Research Enthusiast',
  roles: [
    'Data Science Engineer',
    'Python Developer',
    'Research Enthusiast',
    'AI & Machine Learning Engineer'
  ],
  summary:
    'I am a highly motivated Computer Science Engineering student specializing in Data Science Engineering with Artificial Intelligence at KL University. My passion lies in Artificial Intelligence, Machine Learning, Data Science, Software Engineering, and Cloud Computing. I enjoy solving real-world problems by building intelligent applications, designing scalable software solutions, and conducting research.',
  location: 'India',
  email: 'magantipraneeth3@gmail.com',
  github: 'https://github.com/magantipraneeth3',
  linkedin: 'https://www.linkedin.com/in/maganti-praneeth-sri-satya-chowdary-25811a353/',
}

export const stats = [
  { value: '9.52', suffix: '/10', label: 'CGPA' },
  { value: '5', suffix: '+', label: 'Featured Projects' },
  { value: '2', suffix: 'x', label: 'Certifications' },
  { value: '2028', suffix: '', label: 'Graduation' },
]

export type Project = {
  id: string
  index: string
  title: string
  category: string
  description: string
  highlights: string[]
  tech: string[]
  metric: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'disease-prediction',
    index: '01',
    title: 'ML Disease Prediction System',
    category: 'Healthcare · Machine Learning',
    description:
      'A healthcare prediction system using an ensemble of Machine Learning algorithms to forecast disease risk from clinical features, engineered for reliability and interpretability.',
    highlights: [
      'Logistic Regression, Random Forest & XGBoost ensemble',
      'Feature engineering pipeline for clinical signals',
      'Hyperparameter tuning with cross-validation',
    ],
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
    metric: [
      { label: 'Models', value: '3' },
      { label: 'Approach', value: 'Ensemble' },
      { label: 'Tuning', value: 'GridCV' },
    ],
  },
  {
    id: 'student-performance',
    index: '02',
    title: 'Student Performance Prediction',
    category: 'Predictive Analytics',
    description:
      'A predictive analytics system that forecasts academic performance using engineered features and optimized models, paired with insightful visualizations for educators.',
    highlights: [
      'Grid Search optimization for best estimators',
      'Feature engineering on behavioural + academic data',
      'Rich visual analytics for actionable insights',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'EDA'],
    metric: [
      { label: 'Optimization', value: 'GridSearch' },
      { label: 'Focus', value: 'Forecast' },
      { label: 'Output', value: 'Insights' },
    ],
  },
  {
    id: 'sales-dashboard',
    index: '03',
    title: 'Sales Data Analytics Dashboard',
    category: 'Business Intelligence',
    description:
      'An enterprise-grade Power BI dashboard integrated with SQL datasets for KPI monitoring, business intelligence and revenue forecasting across regions.',
    highlights: [
      'Live KPI monitoring across business units',
      'SQL-backed data model with relationships',
      'Forecasting views for revenue planning',
    ],
    tech: ['Power BI', 'SQL', 'MySQL', 'Excel', 'DAX'],
    metric: [
      { label: 'Type', value: 'Enterprise' },
      { label: 'Source', value: 'SQL' },
      { label: 'Use', value: 'Forecasting' },
    ],
  },
  {
    id: 'resume-screening',
    index: '04',
    title: 'AI Resume Screening System',
    category: 'Natural Language Processing',
    description:
      'An NLP-powered platform that ranks candidates against a job description using TF-IDF vectorization and cosine similarity, streamlining high-volume recruitment.',
    highlights: [
      'TF-IDF vectorization of resumes & job specs',
      'Cosine similarity ranking engine',
      'Efficient candidate shortlisting at scale',
    ],
    tech: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'Pandas'],
    metric: [
      { label: 'Method', value: 'TF-IDF' },
      { label: 'Ranking', value: 'Cosine' },
      { label: 'Domain', value: 'HR Tech' },
    ],
  },
  {
    id: 'churn-prediction',
    index: '05',
    title: 'Customer Churn Prediction',
    category: 'Machine Learning · Retention',
    description:
      'A Machine Learning framework leveraging Exploratory Data Analysis and classification models to identify at-risk customers and improve retention strategy.',
    highlights: [
      'Deep EDA to surface churn drivers',
      'Classification models for risk scoring',
      'Retention insights for business teams',
    ],
    tech: ['Python', 'Scikit-learn', 'EDA', 'Pandas', 'NumPy'],
    metric: [
      { label: 'Analysis', value: 'EDA' },
      { label: 'Task', value: 'Classify' },
      { label: 'Goal', value: 'Retention' },
    ],
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL'] },
  { category: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Spring Boot', 'Hibernate', 'REST APIs'] },
  {
    category: 'AI / ML',
    skills: ['Machine Learning', 'NLP', 'NumPy', 'Pandas', 'Scikit-learn', 'EDA'],
  },
  { category: 'Cloud', skills: ['AWS EC2', 'AWS S3', 'AWS RDS'] },
  { category: 'Databases', skills: ['MySQL'] },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Power BI', 'Excel', 'Jupyter', 'Maven', 'Eclipse'],
  },
]

// Weighted set for the interactive skill cloud
export const skillCloud: { name: string; weight: number }[] = [
  { name: 'Python', weight: 3 },
  { name: 'Machine Learning', weight: 3 },
  { name: 'NLP', weight: 2 },
  { name: 'Scikit-learn', weight: 2 },
  { name: 'Java', weight: 2 },
  { name: 'Spring Boot', weight: 2 },
  { name: 'AWS', weight: 2 },
  { name: 'SQL', weight: 2 },
  { name: 'Pandas', weight: 2 },
  { name: 'NumPy', weight: 1 },
  { name: 'Power BI', weight: 1 },
  { name: 'Hibernate', weight: 1 },
  { name: 'REST APIs', weight: 1 },
  { name: 'EDA', weight: 1 },
  { name: 'JavaScript', weight: 1 },
  { name: 'Tailwind CSS', weight: 1 },
  { name: 'MySQL', weight: 1 },
  { name: 'Git', weight: 1 },
  { name: 'C', weight: 1 },
  { name: 'Jupyter', weight: 1 },
]

export type TimelineItem = {
  period: string
  title: string
  org: string
  detail: string
  meta?: string
}

export const timeline: TimelineItem[] = [
  {
    period: '2024 — 2028',
    title: 'B.Tech, Computer Science Engineering',
    org: 'KL University',
    detail:
      'Honors Through Research · Specialization in Data Science Engineering with Artificial Intelligence.',
    meta: 'CGPA 9.52 / 10',
  },
  {
    period: 'Intermediate',
    title: 'Higher Secondary — MPC',
    org: 'Narayana Junior College',
    detail: 'Foundation in Mathematics, Physics and Chemistry.',
    meta: '94%',
  },
  {
    period: 'SSC',
    title: 'Secondary School',
    org: 'Dr. KKR Gowtham School',
    detail: 'Secondary education with a strong academic record.',
    meta: '80%',
  },
]

export const coreSubjects = [
  'Artificial Intelligence',
  'Machine Learning',
  'Data Engineering',
  'Probability & Statistics',
  'Mathematical Optimization',
  'Exploratory Data Analysis',
  'Object Oriented Programming',
  'Data Structures',
  'Algorithms',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'REST API Development',
  'Spring Boot',
]

export type Certification = {
  title: string
  issuer: string
  code?: string
  kind: string
}

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    code: 'CLF-C02',
    kind: 'Cloud',
  },
  {
    title: 'GitHub Copilot Certification',
    issuer: 'Microsoft',
    kind: 'AI Tooling',
  },
  {
    title: 'Campus Recruitment Training',
    issuer: 'KL University',
    code: '100+ Hours',
    kind: 'Training',
  },
  {
    title: 'GlobalLogic Building Contest',
    issuer: 'GlobalLogic',
    kind: 'Practicum',
  },
  {
    title: 'Social Immersive Learning',
    issuer: 'Internship Program',
    kind: 'Internship',
  },
]

export const achievements = [
  'Selected for Honors Through Research at KL University',
  'Maintaining a CGPA of 9.52 / 10',
  'AWS Certified Cloud Practitioner',
  'Microsoft GitHub Copilot Certified',
  'Competitive Chess Player — strategic & analytical thinking',
  'Passionate AI & Machine Learning Researcher',
]

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Telugu', level: 'Native' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Japanese', level: 'Elementary' },
]

export const interests = [
  'Artificial Intelligence',
  'Machine Learning Research',
  'Software Development',
  'Cloud Computing',
  'Competitive Programming',
  'Chess',
  'Technology Blogs',
  'Problem Solving',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]
