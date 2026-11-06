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
      "Engineered backend microservices for an enterprise Learning Management System (LMS) using Python and FastAPI.",
    achievements: [
      "Built automated MCQ grading endpoints with strict Pydantic payload validation and score persistence.",
      "Engineered real-time trainer-trainee chat messaging APIs to facilitate instructional collaboration.",
      "Designed and documented RESTful endpoints in FastAPI, validated via Postman and automated test suites."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Pydantic",
      "Postman",
      "Git"
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
      "Engineered machine learning workflows for predictive financial modeling within an enterprise software lifecycle.",
    achievements: [
      "Developed a time-series stock price forecasting pipeline using Python, Scikit-learn, and historical market data.",
      "Engineered feature extraction routines, moving averages, and volatility indices to optimize model convergence.",
      "Implemented automated preprocessing pipelines for missing value imputation and outlier removal."
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "Feature Engineering",
      "Git"
    ]
  }
];
