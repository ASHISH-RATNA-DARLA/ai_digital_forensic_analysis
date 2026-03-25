// Mock data for AI-Powered Digital Forensic Analysis & Reporting System

export const FORENSIC_TOOLS = ["UFED", "XRY", "Oxygen", "FTK", "Magnet AXIOM", "Belkasoft"] as const;
export const FORENSIC_FORMATS = [".E01", ".XML", ".CSV", ".JSON"] as const;

export const CASES = [
  { id: "CASE-2024-001", name: "Operation Alpha", status: "Active", analyst: "Det. Sarah Malik", riskScore: 87, artifacts: 1240, created: "2024-01-10" },
  { id: "CASE-2024-002", name: "Device Analysis — Unit 7", status: "In Review", analyst: "Foren. Omar Hassan", riskScore: 62, artifacts: 840, created: "2024-02-03" },
  { id: "CASE-2024-003", name: "Network Breach Investigation", status: "Closed", analyst: "Det. Sarah Malik", riskScore: 45, artifacts: 510, created: "2024-03-15" },
  { id: "CASE-2024-004", name: "Mobile Device Extraction #4", status: "Active", analyst: "Analyst Reem Nour", riskScore: 91, artifacts: 2100, created: "2024-04-08" },
  { id: "CASE-2024-005", name: "Social Media Artifact Review", status: "Pending", analyst: "Foren. Omar Hassan", riskScore: 33, artifacts: 390, created: "2024-05-22" },
];

export const EVIDENCE_ITEMS = [
  { id: "EV-001", type: "Message", description: "Encrypted chat thread — 47 messages", source: "UFED", riskLevel: "High", flagged: true, case: "CASE-2024-001", timestamp: "2024-01-12 09:14" },
  { id: "EV-002", type: "Call Log", description: "78 outgoing calls to flagged numbers", source: "XRY", riskLevel: "High", flagged: true, case: "CASE-2024-001", timestamp: "2024-01-12 09:22" },
  { id: "EV-003", type: "Image", description: "12 images — content analysis pending", source: "Oxygen", riskLevel: "Medium", flagged: false, case: "CASE-2024-002", timestamp: "2024-02-05 14:07" },
  { id: "EV-004", type: "Browsing History", description: "1,200 URL entries — 34 flagged domains", source: "FTK", riskLevel: "Medium", flagged: true, case: "CASE-2024-002", timestamp: "2024-02-05 14:33" },
  { id: "EV-005", type: "Social Media", description: "Instagram account — 290 posts extracted", source: "Magnet AXIOM", riskLevel: "Low", flagged: false, case: "CASE-2024-003", timestamp: "2024-03-17 11:02" },
  { id: "EV-006", type: "Video", description: "3 video files — 1.4 GB total", source: "Belkasoft", riskLevel: "High", flagged: true, case: "CASE-2024-004", timestamp: "2024-04-10 08:55" },
  { id: "EV-007", type: "Metadata", description: "Device metadata — IMEI, serial, GPS tags", source: "UFED", riskLevel: "Low", flagged: false, case: "CASE-2024-004", timestamp: "2024-04-10 09:01" },
  { id: "EV-008", type: "Contact List", description: "340 contacts extracted", source: "XRY", riskLevel: "Medium", flagged: false, case: "CASE-2024-005", timestamp: "2024-05-24 16:45" },
];

export const AI_ANALYSIS_RESULTS = {
  suspiciousKeywords: [
    { keyword: "delivery confirmed", count: 23, severity: "High" },
    { keyword: "package ready", count: 17, severity: "High" },
    { keyword: "new number", count: 9, severity: "Medium" },
    { keyword: "meeting point", count: 14, severity: "Medium" },
    { keyword: "transfer complete", count: 6, severity: "Low" },
  ],
  drugCommunications: [
    { id: "DC-001", summary: "3 message threads contain coded language consistent with drug-related communication.", confidence: 94 },
    { id: "DC-002", summary: "Call pattern analysis reveals 12 contacts associated with known flagged profiles.", confidence: 88 },
  ],
  multimediaAnalysis: [
    { file: "IMG_0042.jpg", finding: "Object detection: packaging materials detected", confidence: 79 },
    { file: "VID_0003.mp4", finding: "Face recognition: 2 individuals identified", confidence: 85 },
    { file: "IMG_0089.jpg", finding: "Text extraction: partial address visible", confidence: 91 },
  ],
  behavioralPatterns: [
    { pattern: "Frequent late-night communications (23:00–03:00)", frequency: "38 occurrences" },
    { pattern: "Multiple SIM card changes detected within 7-day period", frequency: "4 changes" },
    { pattern: "Rapid deletion of messages following calls", frequency: "22 instances" },
  ],
  relationships: [
    { from: "Subject A", to: "Contact #14", type: "Frequent calls", strength: "High" },
    { from: "Subject A", to: "Contact #7", type: "Shared media", strength: "Medium" },
    { from: "Contact #14", to: "Contact #22", type: "Mutual messages", strength: "High" },
    { from: "Subject A", to: "Contact #22", type: "Indirect link", strength: "Low" },
  ],
};

export const AUDIT_LOG = [
  { id: "AL-001", timestamp: "2024-05-24 16:45:02", user: "Det. Sarah Malik", role: "Forensic Analyst", action: "Accessed case CASE-2024-001", ip: "192.168.1.42" },
  { id: "AL-002", timestamp: "2024-05-24 16:50:19", user: "Det. Sarah Malik", role: "Forensic Analyst", action: "Ran AI Analysis on EV-001", ip: "192.168.1.42" },
  { id: "AL-003", timestamp: "2024-05-24 17:03:44", user: "Admin Tariq Nabil", role: "Administrator", action: "Added user Analyst Reem Nour", ip: "192.168.1.10" },
  { id: "AL-004", timestamp: "2024-05-24 17:10:31", user: "Analyst Reem Nour", role: "Forensic Analyst", action: "Exported report for CASE-2024-004", ip: "192.168.1.55" },
  { id: "AL-005", timestamp: "2024-05-24 17:22:00", user: "Foren. Omar Hassan", role: "Investigator", action: "Searched evidence repository", ip: "192.168.1.30" },
  { id: "AL-006", timestamp: "2024-05-24 18:05:12", user: "SuperAdmin System", role: "Super Administrator", action: "System configuration updated", ip: "192.168.1.1" },
];

export const CHAIN_OF_CUSTODY = [
  { step: 1, timestamp: "2024-04-08 07:30", action: "Evidence seized from device", officer: "Det. Sarah Malik", hash: "SHA256: a3f1c9..." },
  { step: 2, timestamp: "2024-04-08 08:15", action: "Evidence transferred to forensic lab", officer: "Det. Sarah Malik", hash: "SHA256: a3f1c9..." },
  { step: 3, timestamp: "2024-04-08 09:00", action: "Forensic image created (.E01)", officer: "Foren. Omar Hassan", hash: "SHA256: b7e2d4..." },
  { step: 4, timestamp: "2024-04-08 10:30", action: "Data ingestion into platform", officer: "System", hash: "SHA256: c9a3f1..." },
  { step: 5, timestamp: "2024-04-09 11:00", action: "AI analysis completed", officer: "System", hash: "SHA256: d5b2e8..." },
  { step: 6, timestamp: "2024-04-10 14:00", action: "Report generated by analyst", officer: "Analyst Reem Nour", hash: "SHA256: e1c7a3..." },
];

export const USER_ROLES = [
  {
    role: "Super Administrator",
    permissions: [
      "System configuration",
      "Access control management",
      "All Administrator permissions",
      "All Analyst permissions",
      "All Investigator permissions",
    ],
    users: ["SuperAdmin System"],
  },
  {
    role: "Administrator",
    permissions: [
      "Manage users",
      "Configure reports",
      "View all cases",
      "Manage integrations",
    ],
    users: ["Admin Tariq Nabil"],
  },
  {
    role: "Forensic Analyst",
    permissions: [
      "Analyze evidence",
      "Review AI insights",
      "Run AI analysis",
      "Generate reports",
    ],
    users: ["Det. Sarah Malik", "Analyst Reem Nour"],
  },
  {
    role: "Investigator",
    permissions: [
      "Search case evidence",
      "Review reports",
      "View assigned cases",
    ],
    users: ["Foren. Omar Hassan"],
  },
];

export const TECH_STACK = [
  { layer: "Backend", technologies: ["Python (FastAPI)", "Node.js"] },
  { layer: "Frontend", technologies: ["React", "Next.js"] },
  { layer: "Database", technologies: ["PostgreSQL"] },
  { layer: "Search Engine", technologies: ["Elasticsearch"] },
  { layer: "Data Lake", technologies: ["MinIO / Object Storage"] },
  { layer: "ETL Processing", technologies: ["Apache Airflow"] },
  { layer: "AI/ML Framework", technologies: ["PyTorch", "TensorFlow"] },
  { layer: "NLP", technologies: ["Transformers", "BERT models"] },
  { layer: "Graph Analysis", technologies: ["Neo4j"] },
  { layer: "Messaging Queue", technologies: ["Apache Kafka"] },
  { layer: "Containerization", technologies: ["Docker"] },
  { layer: "Orchestration", technologies: ["Kubernetes"] },
  { layer: "Monitoring", technologies: ["Prometheus", "Grafana"] },
];

export const MICROSERVICES = [
  { name: "Ingestion Service", description: "Imports forensic outputs from UFED, XRY, Oxygen, FTK, Magnet AXIOM, and Belkasoft. Parses and validates forensic formats (.E01, .XML, .CSV, .JSON).", status: "Running" },
  { name: "AI Analysis Service", description: "Performs NLP analysis on messages, image and video recognition, and behavioral pattern detection using PyTorch/TensorFlow and BERT-based models.", status: "Running" },
  { name: "Evidence Service", description: "Stores and retrieves forensic artifacts from the Evidence Intelligence Repository. Manages structured and unstructured evidence data.", status: "Running" },
  { name: "Case Management Service", description: "Links evidence to cases, manages case status, and synchronizes with the Investigation Dashboard.", status: "Running" },
  { name: "Reporting Service", description: "Generates standardized, court-ready forensic reports in PDF and DOCX formats based on case evidence and AI findings.", status: "Running" },
  { name: "Integration Service", description: "Connects with the DOPAMS case management system. Handles secure case data synchronization via API gateway.", status: "Running" },
];

export const SYSTEM_LAYERS = [
  {
    layer: "Data Sources",
    description: "Forensic tools and evidence extraction systems",
    items: ["UFED", "XRY", "Oxygen", "FTK", "Magnet AXIOM", "Belkasoft"],
  },
  {
    layer: "Ingestion Layer",
    description: "Parsing tool outputs and standardizing formats",
    items: ["Format parser (.E01, .XML, .CSV, .JSON)", "Schema enforcer", "Duplicate detector", "Metadata verifier"],
  },
  {
    layer: "Processing Layer",
    description: "AI-based evidence analysis and data transformation",
    items: ["NLP keyword analysis", "Multimedia content analysis", "Behavioral pattern detection", "Relationship graph analysis"],
  },
  {
    layer: "Storage Layer",
    description: "Structured evidence storage and multimedia storage",
    items: ["PostgreSQL (structured data)", "MinIO / Object Storage (multimedia)", "Elasticsearch (full-text search)", "Neo4j (relationship graph)"],
  },
  {
    layer: "Backend Layer",
    description: "Case management APIs and AI inference services",
    items: ["FastAPI case management", "AI inference endpoints", "OAuth2 + API gateway", "Apache Kafka message queue"],
  },
  {
    layer: "Application Layer",
    description: "Analyst dashboard and investigation interface",
    items: ["Investigation dashboard", "Evidence search & filter", "Role-based access control", "Chain of custody viewer"],
  },
  {
    layer: "Analytics Layer",
    description: "Visualization and reporting",
    items: ["Evidence correlation view", "Risk score indicators", "Relationship graph visualization", "Automated report generation"],
  },
];

export const ROADMAP = [
  { phase: "Phase 1", title: "Infrastructure Setup", tasks: ["Environment setup", "Base architecture deployment"] },
  { phase: "Phase 2", title: "Data Ingestion", tasks: ["Forensic tool integration", "ETL pipelines"] },
  { phase: "Phase 3", title: "AI Analysis", tasks: ["NLP analysis engine", "Evidence prioritization"] },
  { phase: "Phase 4", title: "Dashboard & Reporting", tasks: ["Investigation dashboard", "Automated reporting"] },
  { phase: "Phase 5", title: "Integration", tasks: ["DOPAMS integration", "Security validation"] },
];

export const RISKS = [
  { risk: "Data inconsistency", mitigation: "Standardized ingestion pipelines" },
  { risk: "Large dataset processing", mitigation: "Distributed architecture" },
  { risk: "AI false positives", mitigation: "Human review workflows" },
  { risk: "Integration complexity", mitigation: "API-based integration" },
  { risk: "Security threats", mitigation: "Layered security architecture" },
];

export const BENEFITS = [
  { title: "Operational Efficiency", items: ["Automated evidence processing", "Faster investigation timelines"] },
  { title: "Centralized Intelligence", items: ["Unified forensic repository"] },
  { title: "Improved Investigations", items: ["AI-based suspicious activity detection"] },
  { title: "Standardized Reporting", items: ["Court-ready documentation"] },
  { title: "Scalable Infrastructure", items: ["Future expansion for national-level forensic investigations"] },
];

export const MONITORING_METRICS = [
  { name: "Active Cases", value: 42, unit: "" },
  { name: "Artifacts Processed", value: 187400, unit: "" },
  { name: "AI Analysis Jobs", value: 1204, unit: "" },
  { name: "System Uptime", value: 99.8, unit: "%" },
  { name: "Active Analysts", value: 18, unit: "" },
  { name: "Alerts", value: 3, unit: "" },
];

export const DEPLOYMENT_OPTIONS = [
  { type: "On-Premise", components: ["Kubernetes cluster", "Scalable storage", "Secure VPC network", "Internal data center"] },
  { type: "AWS", components: ["Kubernetes cluster", "Scalable storage", "Secure VPC network", "AWS GovCloud"] },
  { type: "Azure", components: ["Kubernetes cluster", "Scalable storage", "Secure VPC network", "Azure Government"] },
  { type: "Government Cloud", components: ["Kubernetes cluster", "Scalable storage", "Secure VPC network", "Classified infrastructure"] },
];

export const CORE_COMPONENTS = [
  { name: "Forensic Data Ingestion Engine", description: "Extracts data from forensic tools (UFED, XRY, Oxygen, FTK, Magnet AXIOM, Belkasoft) and standardizes formats (.E01, .XML, .CSV, .JSON) for downstream processing." },
  { name: "AI Evidence Analysis Engine", description: "Performs NLP analysis on messages, image and video analysis, behavioral pattern detection, and relationship graph analysis using Transformers and BERT models." },
  { name: "Evidence Intelligence Repository", description: "Central forensic data warehouse storing structured data (call logs, contacts, metadata) and unstructured data (messages, images, videos, browsing history, social media artifacts)." },
  { name: "Investigation Dashboard", description: "Centralized interface for evidence search, relationship visualization, and risk scoring. Enables analysts to search, filter, and correlate evidence across cases." },
  { name: "Automated Reporting Engine", description: "Generates standardized, court-ready forensic reports exportable in PDF and DOCX formats based on evidence and AI analysis results." },
  { name: "DOPAMS Integration Layer", description: "Secure case data synchronization layer connecting the platform with the DOPAMS case management system via API gateway." },
];
