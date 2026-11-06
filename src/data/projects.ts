import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: "leafy",
    title: "Leafy",
    tagline: "AI Plant Disease Detection & Gardening Assistant",
    category: "AI & Web",
    featured: true,
    description:
      "An intelligent botanical diagnosis assistant combining computer vision and generative AI to detect crop and plant pathologies from leaf images and provide actionable organic treatment roadmaps.",
    problemStatement:
      "Farmers and home gardeners frequently lose crops due to delayed pathology detection and inaccurate remedies, lacking quick access to specialized agronomic expertise.",
    solutionOverview:
      "Engineered a reactive web client powered by a FastAPI inference backend integrated with Google Gemini API for deep multimodal diagnosis, providing instant pathology identification, symptom breakdowns, and environmental care advice.",
    keyFeatures: [
      "High-accuracy visual diagnosis from user-uploaded leaf photographs.",
      "Multimodal analysis leveraging Gemini API for synthesized agronomic explanations.",
      "Custom FastAPI asynchronous pipeline handling image validation and prompt engineering.",
      "Responsive React interface with dynamic camera capture and treatment guide exporter."
    ],
    architectureHighlights: [
      "API Layer: FastAPI async microservice with Pydantic validation",
      "Vision & LLM: Multimodal Gemini Pro Vision pipeline",
      "Client: React with Tailwind CSS for mobile-first in-field utilization",
      "Output: Structured JSON with severity grading and curative steps"
    ],
    technologies: [
      "React",
      "FastAPI",
      "Gemini API",
      "Python",
      "Tailwind CSS",
      "Pydantic",
      "Uvicorn",
      "REST APIs"
    ],
    metrics: [
      { label: "Response Time", value: "< 2.0s" },
      { label: "Diagnosis Modality", value: "Multimodal Vision" },
      { label: "Guidance Scope", value: "Curative + Organic" }
    ],
    repoUrl: "https://github.com/",
    demoUrl: undefined
  },
  {
    id: "smart-learning",
    title: "Smart Learning",
    tagline: "AI-Powered Dyslexia-Friendly Learning Platform",
    category: "AI & Web",
    featured: true,
    description:
      "An AI-powered assistive education platform designed to support students with dyslexia in developing reading, spelling, and writing skills through interactive learning modules, handwriting recognition, speech-based practice, and conversational AI assistance.",
    problemStatement:
      "Traditional learning platforms often rely on conventional text-based teaching methods that may not accommodate the diverse learning needs of students with dyslexia. Reading difficulties, spelling challenges, and handwriting recognition can make conventional educational experiences less accessible and engaging.",
    solutionOverview:
      "Developed an integrated learning platform combining a React frontend, Node.js backend, and Python-based AI services. The platform incorporates CNN-based handwritten alphabet recognition using the EMNIST dataset, speech recognition for reading and spelling practice, handwriting assistance, and a Gemini-powered conversational chatbot for vocabulary learning.",
    keyFeatures: [
      "Alphabet Recognition: CNN-based handwritten alphabet classification trained using the EMNIST dataset.",
      "Reading Assistant: Speech recognition-based reading practice with pronunciation feedback.",
      "Spell Bee AI: Interactive spelling challenges with speech-to-text validation.",
      "Writing Assistance: Handwriting recognition and alphabet practice evaluation.",
      "WordBot AI: Gemini-powered conversational chatbot for vocabulary learning, word meanings, and usage.",
      "Dyslexia-Friendly UI: Accessible interface with clear typography, minimal distractions, and learner-focused design."
    ],
    architectureHighlights: [
      "Frontend: React, Vite, TypeScript, and Tailwind CSS for an interactive learning interface.",
      "Backend: Node.js and Express.js for application APIs and service integration.",
      "AI Services: Python-based modules for alphabet recognition, reading assistance, spelling, and handwriting evaluation.",
      "ML Pipeline: TensorFlow/Keras CNN model trained on the EMNIST dataset for handwritten alphabet recognition.",
      "Conversational AI: Google Gemini API integration for interactive vocabulary assistance.",
      "Authentication: Firebase Authentication for user authentication."
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Python",
      "TensorFlow",
      "Keras",
      "EMNIST",
      "SpeechRecognition",
      "Google Gemini API",
      "Firebase Authentication"
    ],
    metrics: [
      { label: "AI Modules", value: "5 Learning Tools" },
      { label: "ML Model", value: "EMNIST CNN" },
      { label: "Architecture", value: "React + Node + Python" }
    ],
    repoUrl: "https://github.com/Shreya-1831/Smart_Learning",
    demoUrl: undefined
  },
  {
    id: "queryshield",
    title: "QueryShield",
    tagline: "Offline Privacy-Preserving Natural Language to SQL Engine",
    category: "Systems & ML",
    featured: false,
    description:
      "An offline, enterprise-grade Text-to-SQL compiler enabling non-technical stakeholders to query internal relational databases in plain English without leaking database schemas to cloud providers.",
    problemStatement:
      "Organizations with sensitive proprietary data or strict compliance boundaries cannot use public LLM APIs (OpenAI, Anthropic) because sending database schemas and prompts violates confidentiality policies.",
    solutionOverview:
      "Architected a strictly localized Text-to-SQL parsing service running lightweight quantized local open-source models, paired with schema-aware SQL validator and AST syntax sanitizers to prevent injection vulnerabilities.",
    keyFeatures: [
      "Complete offline inference: Zero telemetry, zero external API dependencies.",
      "Schema-aware prompt construction dynamically reflecting table definitions and foreign keys.",
      "AST-based query parser that blocks destructive operations (DROP, ALTER, DELETE) before execution.",
      "Benchmarked execution against PostgreSQL and SQLite databases."
    ],
    architectureHighlights: [
      "Inference: Local quantized language model via Python runtime",
      "Safety Layer: SQLglot / AST syntax analyzer enforcing read-only SELECT clauses",
      "Interface: Minimalist developer CLI and FastAPI web dashboard"
    ],
    technologies: [
      "Python",
      "Local LLMs",
      "SQL",
      "FastAPI",
      "MySQL",
      "PyTorch",
      "LangChain Local"
    ],
    metrics: [
      { label: "Cloud Dependency", value: "0% Offline" },
      { label: "Safety Verification", value: "AST Sanitized" },
      { label: "Target Dialects", value: "MySQL" }
    ],
    repoUrl: "https://github.com/",
    demoUrl: undefined
  },
  {
    id: "fedshield",
    title: "FedShield",
    tagline: "Privacy-Preserving Federated Fraud Detection System",
    category: "AI/ML & Privacy",
    featured: true,
    description:
      "A decentralized fraud detection architecture enabling financial institutions to train collaborative deep learning models without sharing sensitive customer transaction records.",
    problemStatement:
      "Financial institutions are bound by strict data governance and privacy mandates (GDPR, PCI-DSS) preventing centralized pooling of sensitive transactional data, while single-institution fraud models suffer from limited variance and zero-day attack blindness.",
    solutionOverview:
      "Built a federated learning framework using Flower and TensorFlow/Keras where local banks compute local gradient updates with Differential Privacy noise injection. Server aggregates weights securely using FedAvg without ever accessing raw customer records.",
    keyFeatures: [
      "Decentralized model training across simulated independent client banking nodes with Flower framework.",
      "Strict Differential Privacy guarantees with calibrated noise injection to prevent gradient reconstruction attacks.",
      "Imbalanced class remediation using SMOTE (Synthetic Minority Over-sampling Technique) on local edge splits.",
      "Secure federated aggregation ensuring zero exposure of underlying financial transactions."
    ],
    architectureHighlights: [
      "Client-Server Orchestration: Flower (flwr) simulation engine",
      "Model Architecture: Multi-layer Perceptron / Dense Neural Network in Keras",
      "Privacy Budget: Epsilon-calibrated differential noise generator",
      "Evaluation: Area Under Precision-Recall Curve (AUPRC) & F1-Score on highly skewed data"
    ],
    technologies: [
      "Python",
      "Flower (flwr)",
      "TensorFlow/Keras",
      "Scikit-learn",
      "Differential Privacy",
      "SMOTE",
      "NumPy",
      "Pandas"
    ],
    metrics: [
      { label: "Data Leakage Risk", value: "0% Raw Exchanged" },
      { label: "Imbalance Handling", value: "SMOTE Enhanced" },
      { label: "Consensus Strategy", value: "Federated Averaging" }
    ],
    repoUrl: "https://github.com/",
    demoUrl: undefined // Left as undefined to avoid fabricating live demo URLs
  },
  {
    id: "mil-evid",
    title: "MIL-EVID",
    tagline: "An Evidence-Grounded Hybrid RAG Framework for Multi-Perspective Military Situation Analysis",
    category: "AI & Web",
    featured: true,

    description:
      "A research-oriented framework for analyzing complex military and geopolitical situations by combining static knowledge sources, dynamic conflict-event data, and multi-perspective LLM analysis.",

    problemStatement:
      "Analyzing complex situations requires reliable evidence, multiple perspectives, and traceability of generated claims.",

    solutionOverview:
      "Developed a hybrid RAG pipeline that integrates lexical and semantic retrieval, evidence reranking, multi-perspective analysis, and post-generation verification.",

    keyFeatures: [
      "Hybrid retrieval using BM25 and semantic search",
      "Static and dynamic evidence integration",
      "Reciprocal Rank Fusion and cross-encoder reranking",
      "Military, legal, and historical perspectives",
      "Claim-level verification and contradiction detection",
      "Evidence citations and source traceability",
      "Confidence indicators and persistent analysis history"
    ],

    architectureHighlights: [
      "Frontend: React.js",
      "Backend: FastAPI",
      "Database: PostgreSQL and SQLAlchemy",
      "Dense Retrieval: Sentence Transformers and FAISS",
      "Lexical Retrieval: BM25",
      "Reranking: Reciprocal Rank Fusion and Cross-Encoder",
      "LLM Inference: Ollama",
      "Verification: Natural Language Inference (NLI)"
    ],

    technologies: [
      "Python",
      "React.js",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pandas",
      "NumPy",
      "Sentence Transformers",
      "FAISS",
      "BM25",
      "Ollama",
      "pytest"
    ],

    metrics: [],

    repoUrl: "https://github.com/",
    demoUrl: undefined
  }
];

