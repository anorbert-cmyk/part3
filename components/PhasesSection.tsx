import React from 'react';
import { PhaseData } from '../types';
import { DraftingCompass, Factory, Sliders, Shield, Network, Users } from 'lucide-react';

interface PhasesSectionProps {
    phases: PhaseData[];
}

// Map string icon names to Lucide components
const IconMap: Record<string, React.FC<any>> = {
    'architecture': DraftingCompass,
    'precision_manufacturing': Factory,
    'tune': Sliders
};

const PhasesSection: React.FC<PhasesSectionProps> = ({ phases }) => {
    return (
        <section className="border-b border-charcoal bg-white scroll-mt-20" id="phases">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-charcoal">
                {phases.map((phase) => {
                    const Icon = IconMap[phase.icon] || DraftingCompass;
                    
                    return (
                        <article key={phase.id} className="p-6 md:p-8 lg:p-12 hover:bg-off-white transition-colors duration-500 group flex flex-col h-full relative">
                            <div className="flex justify-between items-start mb-6 lg:mb-8">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted border border-border-hairline px-2 py-1 bg-white">
                                    {phase.phaseNumber}
                                </span>
                                <Icon strokeWidth={1.5} className="text-charcoal opacity-40 group-hover:opacity-100 transition-opacity size-6" />
                            </div>

                            <h3 className="font-serif text-2xl lg:text-3xl text-charcoal mb-6 lg:mb-8 italic leading-tight">
                                {phase.title.split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                        {word}<br />
                                    </React.Fragment>
                                ))}
                            </h3>

                            <div className="space-y-8 lg:space-y-10 mb-8 flex-grow">
                                <div>
                                    <h4 className="font-mono text-[10px] font-bold uppercase mb-3 text-charcoal tracking-widest">Executive Summary</h4>
                                    <p className="font-serif text-sm leading-7 text-charcoal-muted text-justify">
                                        {phase.executiveSummary}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-mono text-[10px] font-bold uppercase mb-3 text-charcoal tracking-widest">{phase.deepDive.title}</h4>
                                    {phase.deepDive.content.map((paragraph, idx) => (
                                        <p key={idx} className="font-serif text-sm leading-7 text-charcoal-muted mb-4 text-justify last:mb-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div>
                                    <h4 className="font-mono text-[10px] font-bold uppercase mb-3 text-charcoal tracking-widest">Key Deliverables</h4>
                                    <ul className="space-y-3">
                                        {phase.deliverables.map((item, idx) => (
                                            <li key={idx} className="font-mono text-xs text-charcoal flex items-start gap-3">
                                                <span className="h-px w-3 bg-technical-red mt-2 flex-shrink-0"></span>
                                                <span className="leading-relaxed"><strong>{item.title}:</strong> {item.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 border-t border-dashed border-charcoal/30 pt-6 gap-6 mt-auto">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Shield className="size-3.5 text-charcoal" />
                                        <span className="font-mono text-[9px] uppercase text-charcoal-muted font-bold">Critical Decision Point</span>
                                    </div>
                                    <p className="font-serif text-xs italic text-charcoal border-l-2 border-charcoal pl-3 leading-relaxed">
                                        {phase.footer.decisionPoint}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Network className="size-3.5 text-charcoal" />
                                            <span className="font-mono text-[9px] uppercase text-charcoal-muted font-bold">Dependencies</span>
                                        </div>
                                        <p className="font-mono text-[10px] text-charcoal-muted leading-tight">
                                            {phase.footer.dependencies}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Users className="size-3.5 text-charcoal" />
                                            <span className="font-mono text-[9px] uppercase text-charcoal-muted font-bold">Collaboration</span>
                                        </div>
                                        <p className="font-mono text-[10px] text-charcoal-muted leading-tight">
                                            {phase.footer.collaboration}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default PhasesSection;