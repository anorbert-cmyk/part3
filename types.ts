// This file defines the shape of the "Raw Analysis" data.
// It ensures that any data fed into the system matches the expected structure for the UI.

export interface NavItem {
    id: string;
    label: string;
    href: string;
    isActive?: boolean;
}

export interface QuarterEvent {
    month: string;
    name: string;
    status: 'completed' | 'active' | 'pending';
    type: 'milestone' | 'standard' | 'launch';
}

export interface Quarter {
    id: string;
    name: string;
    theme: string;
    events: QuarterEvent[];
}

export interface TrajectoryData {
    sectionId: string;
    tagline: string;
    title: string;
    description: string;
    decision: {
        rejected: {
            title: string;
            reason: string;
        };
        adopted: {
            title: string;
            reason: string;
        };
    };
    timeline: Quarter[];
}

export interface Deliverable {
    title: string;
    description: string;
}

export interface PhaseData {
    id: string;
    phaseNumber: string;
    icon: 'architecture' | 'precision_manufacturing' | 'tune';
    title: string;
    executiveSummary: string;
    deepDive: {
        title: string;
        content: string[];
    };
    deliverables: Deliverable[];
    footer: {
        decisionPoint: string;
        dependencies: string;
        collaboration: string;
    };
}

export interface ResourcePath {
    title: string;
    tag: 'Lean' | 'Accelerated';
    monthlyBurn: number;
    roles: {
        roleId: string;
        roleTitle: string;
    }[];
    implication: string;
    progressPercentage: number; // 0-100 for visual bar
}

export interface ResourcesData {
    sectionId: string;
    title: string;
    soloPath: ResourcePath;
    optimalPath: ResourcePath;
}

export interface ErrorItem {
    id: string;
    icon: 'person_off' | 'monetization_on' | 'link_off' | 'psychology_alt' | 'hourglass_empty' | 'policy' | 'block';
    title: string;
    log: string;
    recovery: string;
}

export interface ErrorMappingData {
    sectionId: string;
    title: string;
    vulnerabilityCount: number;
    errors: ErrorItem[];
}

export interface StrategicDossierData {
    metadata: {
        title: string;
        part: string;
        partLabel: string;
        id: string;
        updateTime: string;
    };
    trajectory: TrajectoryData;
    phases: PhaseData[];
    resources: ResourcesData;
    errorMapping: ErrorMappingData;
}