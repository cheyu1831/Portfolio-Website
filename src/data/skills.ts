import { SkillCategory } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, algorithms, and backend services.",
    skills: [
      { name: "Python", featured: true, categoryTag: "Primary" },
      { name: "Java", featured: true, categoryTag: "OOP & DSA" },
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems, privacy-preserving architectures, and modern LLM paradigms.",
    skills: [
      { name: "Federated Learning", featured: true, categoryTag: "Core Focus" },
      // { name: "Differential Privacy", featured: true, categoryTag: "Security" },
      { name: "Deep Learning", featured: true, categoryTag: "Neural Nets" },
      { name: "Machine Learning", featured: true, categoryTag: "Predictive" },
      // { name: "Natural Language Processing (NLP)", featured: true, categoryTag: "Text & Speech" },
      // { name: "Generative AI & LLMs", featured: true, categoryTag: "Modern AI" },
      // { name: "Retrieval-Augmented Gen (RAG)", featured: true, categoryTag: "Knowledge" },
      { name: "Computer Vision", featured: false, categoryTag: "Image AI" }
    ]
  },
  {
    title: "Data Science & Libraries",
    description: "Mathematical computing, model orchestration, and data transformation.",
    skills: [
      { name: "TensorFlow", featured: true, categoryTag: "Deep Learning" },
      { name: "PyTorch", featured: true, categoryTag: "Deep Learning" },
      // { name: "Flower (flwr)", featured: true, categoryTag: "Federated" },
      { name: "Scikit-learn", featured: true, categoryTag: "ML Classical" },
      { name: "NumPy", featured: true, categoryTag: "Math Vectors" },
      { name: "Pandas", featured: true, categoryTag: "Data Wrangling" },
      // { name: "SMOTE", featured: false, categoryTag: "Data Imbalance" }
    ]
  },
  {
    title: "Web Development",
    description: "Developing responsive web applications and backend services using modern web technologies.",
    skills: [
      { name: "HTML", featured: true, categoryTag: "Frontend" },
      { name: "CSS", featured: true, categoryTag: "Styling" },
      { name: "FastAPI", featured: true, categoryTag: "Backend" },
      { name: "Flask", featured: false, categoryTag: "Backend" },
      { name: "REST API", featured: true, categoryTag: "API Development" }
    ]
  },
  {
    title: "Databases",
    description: "Data modeling, relational indexing, and schema design.",
    skills: [
      { name: "PostgreSQL", featured: true, categoryTag: "RDBMS" },
      { name: "MongoDB", featured: true, categoryTag: "NoSQL" },
      { name: "MySQL", featured: true, categoryTag: "RDBMS" },
      { name: "SQLite", featured: false, categoryTag: "Embedded" }
    ]
  },
  {
    title: "Developer Tools",
    description: "Workflow tooling, source versioning, testing, and debugging.",
    skills: [
      { name: "Git", featured: true, categoryTag: "VCS" },
      { name: "GitHub", featured: true, categoryTag: "Collaboration" },
      { name: "VS Code", featured: false, categoryTag: "IDE" },
      { name: "Postman", featured: true, categoryTag: "API Testing" },
      { name: "Linux / Bash", featured: false, categoryTag: "Shell" },
      { name: "Jupyter Notebooks", featured: false, categoryTag: "Experimentation" }
    ]
  }
];

