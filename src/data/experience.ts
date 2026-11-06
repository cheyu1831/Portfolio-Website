
import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "hexaware",
    role: "Python FastAPI Intern",
    company: "Hexaware Technologies",
    period: "Apr 2026 – Sep 2026",
    location: "Chennai, India",
    type: "Industry Internship",
    summary:
      "Developed backend modules for an enterprise Learning Management System using Python and FastAPI.",
    achievements: [
      "Developed MCQ modules with automated grading and score management.",
      "Built chat messaging APIs for trainer-trainee interactions.",
      "Implemented and tested REST APIs using FastAPI and Postman."
    ],
    technologies: [
      "Python", "FastAPI", "REST APIs", "Pydantic", "Postman", "Git"
    ]
  },
  {
    id: "intelizign",
    role: "Software Intern",
    company: "Intelizign Lifecycle Services Pvt. Ltd.",
    period: "Jun 2025 – Jul 2025",
    location: "Chennai, India",
    type: "Industry Internship",
    summary:
      "Developed machine learning workflows for financial time-series forecasting.",
    achievements: [
      "Built stock price prediction models using Python and Scikit-learn.",
      "Performed feature engineering using moving averages and volatility indicators.",
      "Implemented data preprocessing and outlier handling pipelines."
    ],
    technologies: [
      "Python", "Machine Learning", "Scikit-learn", "Pandas", "Git"
    ]
  },
  {
    id: "devdynasty",
    role: "Secretary",
    company: "DevDynasty Club",
    period: "Aug 2025 – Aug 2026",
    location: "Chennai, India",
    type: "Leadership Experience",
    summary:
      "Led club operations and supported technical community initiatives.",
    achievements: [
      "Organized 3+ technical events promoting innovation and collaboration.",
      "Coordinated club activities and facilitated team communication.",
      "Managed event planning and student engagement."
    ],
    technologies: [
      "Leadership", "Event Management", "Team Collaboration", "Communication"
    ]
  }
];
