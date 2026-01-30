import { StrategicDossierData } from './types';

// This is the SINGLE SOURCE OF TRUTH. 
// All content in the UI is derived from this object.
export const analysisData: StrategicDossierData = {
    metadata: {
        title: "Syndicate",
        part: "Part 3",
        partLabel: "Part 03 / 06",
        id: "#SYN-STRAT-03",
        updateTime: "14:02 PM"
    },
    trajectory: {
        sectionId: "trajectory",
        tagline: "/// Fiscal Timeline",
        title: "The Strategic Trajectory",
        description: "Visualizing the 9-month execution path from foundational architecture to market optimization. Critical velocity required in Q2.",
        decision: {
            rejected: {
                title: "Accepted: Linear Growth",
                reason: "Rejected due to high churn risk in saturating markets. Linear scaling proved inefficient for compounding AI models."
            },
            adopted: {
                title: "Adopted: Exponential Velocity",
                reason: "Prioritizes heavy upfront architectural load (Phase 1) to enable rapid, frictionless scaling in Phase 3. Validated by cohort retention data."
            }
        },
        timeline: [
            {
                id: "q1",
                name: "Q1",
                theme: "Foundation",
                events: [
                    { month: "Jan", name: "Arch", status: "completed", type: "standard" },
                    { month: "Feb", name: "Ingest", status: "completed", type: "standard" },
                    { month: "Mar", name: "Alpha", status: "active", type: "milestone" }
                ]
            },
            {
                id: "q2",
                name: "Q2",
                theme: "Productization",
                events: [
                    { month: "Apr", name: "Beta", status: "pending", type: "standard" },
                    { month: "May", name: "Audit", status: "pending", type: "standard" },
                    { month: "Jun", name: "Launch", status: "pending", type: "launch" }
                ]
            },
            {
                id: "q3",
                name: "Q3",
                theme: "Optimization",
                events: [
                    { month: "Jul", name: "Scale", status: "pending", type: "standard" },
                    { month: "Aug", name: "Ser A", status: "pending", type: "standard" },
                    { month: "Sep", name: "Glob", status: "pending", type: "standard" }
                ]
            }
        ]
    },
    phases: [
        {
            id: "p1",
            phaseNumber: "Phase 01",
            icon: "architecture",
            title: "The Foundation",
            executiveSummary: "The initial 90-day sprint focuses exclusively on establishing core infrastructure resilience and completing initial model training on proprietary behavioral datasets. We deliberately deprioritize frontend polish to ensure the backend architecture can sustain high-throughput inference loads. The primary goal is achieving statistical significance in our predictive models.",
            deepDive: {
                title: "Deep Dive: Infrastructure",
                content: [
                    "We are deploying a Kubernetes-native environment on AWS, leveraging EKS for orchestration. The data ingestion pipeline utilizes Apache Kafka for real-time event streaming, feeding into a Snowflake data lakehouse. This decoupled architecture allows us to iterate on model versions without disrupting the ingestion layer.",
                    "Security is paramount. We are implementing a zero-trust network architecture with strict IAM policies. All data at rest is encrypted using AES-256, and transit is secured via TLS 1.3."
                ]
            },
            deliverables: [
                { title: "Model Weights v1.0", description: "Validated on 50TB dataset with < 12% hallucination rate." },
                { title: "SOC2 Type I Report", description: "Initial audit completion by external firm." },
                { title: "Alpha Client Onboarding", description: "5 strategic partners integrated manually." }
            ],
            footer: {
                decisionPoint: "\"Go/No-Go\" based on data ingestion fidelity > 99.9% and model convergence.",
                dependencies: "AWS Spot availability; 3rd party Data Agreements.",
                collaboration: "DevOps + Data Science daily standups. Weekly Architect Review."
            }
        },
        {
            id: "p2",
            phaseNumber: "Phase 02",
            icon: "precision_manufacturing",
            title: "System Productization",
            executiveSummary: "With the core stable, Phase 2 shifts to productizing the system for broader consumption. This involves transitioning from manual intervention (\"Wizard of Oz\" ops) to fully automated pipelines. We introduce strict rate limiting, user-tiering logic, and a comprehensive billing engine.",
            deepDive: {
                title: "Deep Dive: API & Monetization",
                content: [
                    "The public API will be exposed via a GraphQL gateway, allowing clients to query specific data subsets efficiently. We are integrating Stripe specifically for usage-based billing (metered), which aligns revenue directly with system value.",
                    "A React-based Self-Service Portal will launch, enabling users to manage API keys, view usage analytics, and configure webhooks. This interface is critical for reducing support ticket volume during the Beta loop."
                ]
            },
            deliverables: [
                { title: "Public API Beta", description: "Released to waitlist with 99.5% uptime SLA." },
                { title: "Billing Integration", description: "Automated invoicing based on token usage." },
                { title: "Self-Service Portal", description: "Full dashboard for non-technical stakeholders." }
            ],
            footer: {
                decisionPoint: "Assess burn rate vs. user acquisition cost (CAC). Requires LTV:CAC > 3.",
                dependencies: "Stripe Connect approval; Frontend resource allocation.",
                collaboration: "Product + Engineering sprint alignment. Design QA loops."
            }
        },
        {
            id: "p3",
            phaseNumber: "Phase 03",
            icon: "tune",
            title: "Global Optimization",
            executiveSummary: "Phase 3 is characterized by aggressive optimization and scaling. We move from proving value to maximizing margin. This requires deep technical work on inference costs (unit economics) and geographical expansion to serve global enterprise contracts.",
            deepDive: {
                title: "Deep Dive: Scale Engineering",
                content: [
                    "We will implement model quantization (int8) to reduce memory footprint by 4x without significant accuracy loss. Edge caching layers will be deployed via Cloudflare Workers to handle inference requests closer to the user, targeting sub-100ms latency globally.",
                    "Multi-region support (EU-West, APAC-Northeast) ensures data sovereignty compliance (GDPR) and redundancy. This infrastructure readiness is a prerequisite for Series A due diligence."
                ]
            },
            deliverables: [
                { title: "Multi-Region Support", description: "Active-active replication across 3 continents." },
                { title: "Enterprise SLA Tiers", description: "Gold/Platinum support packages defined." },
                { title: "Series A Funding Round", description: "Closing $15M+ to fuel GTM teams." }
            ],
            footer: {
                decisionPoint: "Pivot to Enterprise Sales motion if PLG (Product-Led Growth) stalls.",
                dependencies: "Legal counsel for EU/APAC compliance; Sales leadership hire.",
                collaboration: "Sales + Product feedback loops. Legal + Engineering audits."
            }
        }
    ],
    resources: {
        sectionId: "resources",
        title: "Resource Requirements",
        soloPath: {
            title: "Solo Path",
            tag: "Lean",
            monthlyBurn: 8000,
            roles: [
                { roleId: "Role 01", roleTitle: "Full Stack Eng" },
                { roleId: "Role 02", roleTitle: "Fractional Designer" }
            ],
            implication: "Slower velocity. Phase 1 extends to 6 months. High risk of burnout. Focus solely on backend integrity.",
            progressPercentage: 20
        },
        optimalPath: {
            title: "Optimal Team",
            tag: "Accelerated",
            monthlyBurn: 45000,
            roles: [
                { roleId: "Core", roleTitle: "Lead Eng + ML Eng" },
                { roleId: "Support", roleTitle: "Product Des + Mktg" }
            ],
            implication: "Maximum velocity. Parallel execution of Phases 1 & 2. Critical for hitting the Q2 Launch window to capture market share.",
            progressPercentage: 85
        }
    },
    errorMapping: {
        sectionId: "errors",
        title: "Error Path Mapping",
        vulnerabilityCount: 7,
        errors: [
            {
                id: "ERR-01",
                icon: "person_off",
                title: "Client Onboarding Confusion",
                log: "User drop-off at step 3/5 due to API key generation complexity and opaque documentation.",
                recovery: "Concierge Service Trigger & Inline Video Guides"
            },
            {
                id: "ERR-02",
                icon: "monetization_on",
                title: "ROI Attribution Failure",
                log: "Inability to correlate model usage with direct revenue lift in client's Q2 cohort analysis.",
                recovery: "Manual Ledger Reconciliation & Impact Report"
            },
            {
                id: "ERR-03",
                icon: "link_off",
                title: "Data Integration Failure",
                log: "Schema mismatch during batch CSV ingestion pipeline resulting in partial data loss.",
                recovery: "Manual CSV Fallback & Schema Validator"
            },
            {
                id: "ERR-04",
                icon: "psychology_alt",
                title: "Model Hallucination",
                log: "Output confidence score < 40% on factual query regarding historical financial data.",
                recovery: "Human-in-loop Review & RAG Pipeline Tune"
            },
            {
                id: "ERR-05",
                icon: "hourglass_empty",
                title: "Latency Spike",
                log: "Inference response time exceeded 2500ms threshold during peak load (12:00 UTC).",
                recovery: "Aggressive Edge Caching & Pod Autoscaling"
            },
            {
                id: "ERR-06",
                icon: "policy",
                title: "Compliance Violation",
                log: "Potential PII (SSN pattern) detected in unstructured text input field from Enterprise client.",
                recovery: "Auto-Redaction Protocol & Legal Flag"
            },
            {
                id: "ERR-07",
                icon: "block",
                title: "API Rate Limit",
                log: "Downstream vendor API returned 429 Too Many Requests, stalling pipeline processing.",
                recovery: "Exponential Backoff & Circuit Breaker"
            }
        ]
    }
};