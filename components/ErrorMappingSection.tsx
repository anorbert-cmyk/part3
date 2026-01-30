import React from 'react';
import { ErrorMappingData } from '../types';
import { AlertTriangle, UserX, DollarSign, Link2Off, Brain, Hourglass, ShieldAlert, Ban } from 'lucide-react';

interface ErrorMappingSectionProps {
    data: ErrorMappingData;
}

const IconMap: Record<string, React.FC<any>> = {
    'person_off': UserX,
    'monetization_on': DollarSign,
    'link_off': Link2Off,
    'psychology_alt': Brain,
    'hourglass_empty': Hourglass,
    'policy': ShieldAlert,
    'block': Ban
};

const ErrorMappingSection: React.FC<ErrorMappingSectionProps> = ({ data }) => {
    return (
        <section className="border-b border-charcoal bg-off-white py-12 md:py-16 px-5 md:px-8 lg:px-12 scroll-mt-20" id={data.sectionId}>
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 pb-6 border-b-2 border-charcoal gap-4 md:gap-0">
                    <div className="flex items-center gap-4">
                        <div className="size-10 bg-technical-red flex items-center justify-center text-white flex-shrink-0">
                            <AlertTriangle className="size-6" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-charcoal">{data.title}</h2>
                            <p className="font-mono text-xs text-technical-red mt-1 uppercase">/// System Vulnerability Matrix</p>
                        </div>
                    </div>
                    <div className="self-start md:self-auto">
                        <span className="font-mono text-[10px] md:text-xs font-bold text-charcoal bg-white border border-charcoal px-3 py-1">
                            {data.vulnerabilityCount} VULNERABILITIES DETECTED
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.errors.map((error) => {
                        const Icon = IconMap[error.icon] || AlertTriangle;

                        return (
                            <div key={error.id} className="border border-charcoal bg-paper p-6 flex flex-col justify-between group hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] transition-shadow duration-200 min-h-[300px] md:min-h-[360px]">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-mono text-[10px] text-technical-red font-bold border border-technical-red px-1">
                                            {error.id}
                                        </span>
                                        <Icon strokeWidth={1.5} className="text-charcoal size-5" />
                                    </div>
                                    <h4 className="font-bold text-lg leading-tight mb-4 text-charcoal">
                                        {error.title}
                                    </h4>
                                    <div className="font-mono text-[10px] text-charcoal-muted bg-off-white p-3 border-l-2 border-technical-red mb-6">
                                        &gt; INCIDENT LOG:<br />
                                        {error.log}
                                    </div>
                                </div>
                                <div className="border-t border-dashed border-charcoal pt-4">
                                    <span className="block font-mono text-[9px] uppercase font-bold text-charcoal-muted mb-1">Recovery Pattern</span>
                                    <p className="text-xs font-bold text-charcoal">
                                        {error.recovery}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    <div className="border border-dashed border-charcoal/30 bg-transparent p-6 flex items-center justify-center min-h-[150px] md:min-h-[360px]">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal-muted">System Stable</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorMappingSection;