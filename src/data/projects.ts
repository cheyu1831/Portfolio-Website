import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: "fedshield",
    title: "FedShield",
    tagline: "Privacy-Preserving Federated Fraud Detection System",
    category: "AI/ML & Privacy",
    featured: true,
    description:
      "A decentralized fraud detection architecture enabling financial institutions to train collaborative deep learning models without sharing sensitive customer transaction records.",
    problemStatement:
      "Financial institutions are bound by strict privacy regulations (GDPR, PCI-DSS) that prevent centralizing transaction data, while isolated fraud models suffer from limited training diversity.",
    solutionOverview:
      "Engineered a federated learning framework using Flower and TensorFlow/Keras where local banking nodes train locally with Differential Privacy noise injection, and the central server aggregates model updates via FedAvg without accessing raw customer records.",
    keyFeatures: [
      "Decentralized model training across simulated banking client nodes using Flower.",
      "Differential Privacy guarantees with calibrated noise injection against gradient reconstruction.",
      "Class imbalance mitigation using SMOTE on local edge partitions.",
      "Secure federated aggregation ensuring zero exposure of underlying financial records."
    ],
    architectureHighlights: [
      "Orchestration: Flower (flwr) simulation engine",
      "Model: Deep Neural Network in TensorFlow / Keras",
      "Privacy Engine: Epsilon-calibrated differential noise",
      "Evaluation: AUPRC & F1-score on highly skewed fraud datasets"
    ],
    technologies: [
      "Python",
      "Flower (flwr)",
      "TensorFlow",
      "Keras",
      "Differential Privacy",
      "SMOTE",
      "Scikit-learn",
      "NumPy"
    ],
    metrics: [
      { label: "Data Leakage", value: "0% Raw Shared" },
      { label: "Imbalance", value: "SMOTE Tuned" },
      { label: "Consensus", value: "FedAvg Strategy" }
    ],
    repoUrl: "https://github.com/",
    demoUrl: undefined
  },
  {
    id: "leafy",
    title: "Leafy",
    tagline: "AI Plant Disease Detection & Gardening Assistant",
    category: "AI & Web",
    featured: true,
    description:
      "An intelligent botanical diagnosis assistant pairing computer vision with generative AI to detect crop and plant pathologies from photographs and provide actionable treatment guidance.",
    problemStatement:
      "Gardeners and farmers often encounter delayed plant pathology diagnosis and suboptimal remedies without quick access to agronomic expertise.",
    solutionOverview:
      "Built a reactive web application powered by an asynchronous FastAPI backend and Google Gemini API for multimodal vision analysis, providing immediate pathology identification, symptom breakdowns, and organic remediation roadmaps.",
    keyFeatures: [
      "Visual plant disease diagnosis from leaf photographs.",
      "Multimodal analysis using Google Gemini API for agronomic recommendations.",
      "Asynchronous FastAPI backend with Pydantic payload validation.",
      "Responsive React client with direct camera capture and exportable treatment guides."
    ],
    architectureHighlights: [
      "API Layer: FastAPI async microservice with Pydantic schemas",
      "Vision Pipeline: Gemini Multimodal Vision API",
      "Client: React with Tailwind CSS for mobile and desktop",
      "Output: Structured diagnosis with severity grading and curative steps"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Gemini API",
      "React",
      "Tailwind CSS",
      "Pydantic",
      "REST APIs"
    ],
    metrics: [
      { label: "Inference", value: "< 2.0s" },
      { label: "Modality", value: "Multimodal Vision" },
      { label: "Guidance", value: "Curative + Organic" }
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
      "An assistive education platform supporting students with dyslexia in developing reading, spelling, and handwriting skills through interactive learning modules and multi-modal AI assistance.",
    problemStatement:
      "Conventional text-heavy educational tools often fail to support the multi-sensory learning needs of students with dyslexia.",
    solutionOverview:
      "Architected a full-stack platform combining React, Node.js, and Python AI microservices. Integrates CNN-based handwritten alphabet recognition (EMNIST), speech recognition for reading practice, and a Gemini-powered chatbot for vocabulary guidance.",
    keyFeatures: [
      "Handwritten alphabet recognition using a CNN trained on the EMNIST dataset.",
      "Speech-to-text reading assistant with real-time pronunciation feedback.",
      "Spell Bee AI with interactive voice-based spelling challenges.",
      "Gemini-powered conversational chatbot for contextual vocabulary learning.",
      "Dyslexia-friendly accessible UI with high-legibility typography and clear spacing."
    ],
    architectureHighlights: [
      "Frontend: React, Vite, TypeScript, and Tailwind CSS",
      "Backend: Node.js, Express.js REST APIs",
      "AI Service: Python microservice with TensorFlow/Keras CNN (EMNIST)",
      "Voice & NLP: SpeechRecognition & Google Gemini API"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "React",
      "Node.js",
      "Express.js",
      "Gemini API",
      "TypeScript"
    ],
    metrics: [
      { label: "Learning Tools", value: "5 AI Modules" },
      { label: "Vision Model", value: "EMNIST CNN" },
      { label: "Stack", value: "Python + React + Node" }
    ],
    repoUrl: "https://github.com/Shreya-1831/Smart_Learning",
    demoUrl: undefined
  },
  {
    id: "mil-evid",
    title: "MIL-EVID",
    tagline: "Evidence-Grounded Hybrid RAG for Military Situation Analysis",
    category: "AI & Web",
    featured: true,
    description:
      "A research-oriented intelligence analysis framework combining static knowledge, dynamic event streams, and multi-perspective LLM reasoning with claim-level verification.",
    problemStatement:
      "Complex strategic intelligence analysis requires verifiable evidence, multi-perspective interpretation, and rigorous traceability to prevent LLM hallucinations.",
    solutionOverview:
      "Developed a hybrid RAG pipeline integrating lexical (BM25) and dense semantic search (Sentence Transformers + FAISS), reciprocal rank fusion, cross-encoder reranking, and natural language inference for post-generation verification.",
    keyFeatures: [
      "Hybrid retrieval combining BM25 keyword matching with FAISS dense vector search.",
      "Reciprocal Rank Fusion (RRF) and Cross-Encoder reranking for evidence precision.",
      "Multi-perspective synthesis across military, legal, and historical dimensions.",
      "Claim-level verification and contradiction detection via Natural Language Inference (NLI).",
      "Full citation traceability linking generated findings to underlying source documents."
    ],
    architectureHighlights: [
      "Backend: FastAPI with PostgreSQL and SQLAlchemy",
      "Retrieval: Sentence Transformers, FAISS, and BM25",
      "Reranking: Reciprocal Rank Fusion & Cross-Encoder",
      "Verification: Natural Language Inference (NLI) pipeline",
      "Inference: Local LLM integration via Ollama"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "FAISS",
      "Sentence Transformers",
      "PostgreSQL",
      "BM25",
      "Ollama",
      "React.js"
    ],
    metrics: [
      { label: "Retrieval", value: "Hybrid Dense + Lexical" },
      { label: "Reranking", value: "Cross-Encoder + RRF" },
      { label: "Verification", value: "NLI Claim-Level" }
    ],
    repoUrl: "https://github.com/",
    demoUrl: undefined
  },
  {
    id: "queryshield",
    title: "QueryShield",
    tagline: "Offline Privacy-Preserving Natural Language to SQL Engine",
    category: "Systems & ML",
    featured: false,
    description:
      "An offline, enterprise-grade Text-to-SQL compiler enabling non-technical users to query relational databases in natural language without exposing schemas to external cloud APIs.",
    problemStatement:
      "Organizations managing sensitive internal data cannot use commercial cloud LLMs because sending proprietary schemas and query prompts violates regulatory policies.",
    solutionOverview:
      "Engineered an offline Text-to-SQL service running localized quantized language models, paired with schema-aware prompt builders and AST syntax validators to prevent destructive SQL operations.",
    keyFeatures: [
      "100% offline inference with zero external telemetry or cloud dependencies.",
      "Schema-aware prompt construction incorporating table foreign keys and relational constraints.",
      "AST query sanitizer enforcing read-only SELECT clauses and preventing SQL injection.",
      "Benchmarked query execution against MySQL and SQLite databases."
    ],
    architectureHighlights: [
      "Inference: Quantized local language models in Python",
      "Safety Layer: AST SQL syntax validator blocking destructive queries",
      "API: Lightweight FastAPI microservice with schema introspection"
    ],
    technologies: [
      "Python",
      "Local LLMs",
      "SQL",
      "FastAPI",
      "MySQL",
      "PyTorch",
      "AST Parsing"
    ],
    metrics: [
      { label: "Privacy", value: "100% Offline" },
      { label: "Safety", value: "AST Sanitized" },
      { label: "Database", value: "MySQL / SQLite" }
    ],
    repoUrl: "https://github.com/",
    demoUrl: undefined
  }
];
