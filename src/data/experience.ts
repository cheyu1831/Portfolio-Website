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
      "Developed Python-based assessment and communication modules for an enterprise Learning Management System (LMS) using FastAPI.",
    achievements: [
      "Developed MCQ assessment modules with automated grading, response validation, and performance tracking.",
      "Implemented trainer-trainee chat messaging modules to support communication and interaction within the LMS.",
      "Built REST API endpoints using FastAPI and Pydantic for request validation and backend functionality."
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
      "Developed a machine learning-based stock price prediction model using Python, applying data preprocessing and feature engineering techniques in a real-world development environment.",
    achievements: [
      "Developed a machine learning-based stock price prediction model using Python.",
      "Applied data preprocessing techniques to prepare data for model development.",
      "Performed feature engineering to support stock price prediction."
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "Feature Engineering",
      "Stock Price Prediction"
    ]
  }
];

