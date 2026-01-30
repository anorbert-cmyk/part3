import React from 'react';
import { ResourcesData } from '../types';
import { Gauge } from 'lucide-react';

interface ResourcesSectionProps {
    data: ResourcesData;
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ data }) => {
    return (
        <section className="border-b border-charcoal bg-off-white py-12 md:py-16 px-5 md:px-8 lg:px-12 scroll-mt-20" id={data.sectionId}>
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-8 lg:mb-12">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-technical-red font-bold mb-2 block">/// Capacity Planning</span>
                    <h2 className="text-2xl md:text-3xl font-light tracking-tighter text-charcoal">{data.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                    {/* Solo Path Card */}
                    <div className="bg-paper border border-charcoal p-6 md:p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-6 border-b border-charcoal pb-4">
                            <h3 className="font-serif text-xl md:text-2xl italic text-charcoal">{data.soloPath.title}</h3>
                            <span className="font-mono text-[9px] md:text-[10px] bg-charcoal-muted text-white px-2 py-1 uppercase">{data.soloPath.tag}</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="font-mono text-xs uppercase text-charcoal-muted">Monthly Burn</span>
                                <span className="font-mono text-lg font-bold text-charcoal">
                                    ${data.soloPath.monthlyBurn.toLocaleString()}
                                </span>
                            </div>
                            <div className="w-full bg-off-white h-1.5 mb-6">
                                <div 
                                    className="bg-charcoal-muted h-1.5" 
                                    style={{ width: `${data.soloPath.progressPercentage}%` }}
                                ></div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                                {data.soloPath.roles.map((role, idx) => (
                                    <div key={idx} className="p-3 bg-off-white border border-border-hairline">
                                        <span className="block font-mono text-[9px] uppercase text-charcoal-muted mb-1 truncate">{role.roleId}</span>
                                        <span className="text-xs font-bold text-charcoal line-clamp-2">{role.roleTitle}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="font-sans text-xs text-charcoal-muted mt-4 leading-relaxed">
                                <strong>Implication:</strong> {data.soloPath.implication}
                            </p>
                        </div>
                    </div>

                    {/* Optimal Team Card */}
                    <div className="bg-charcoal text-white border border-charcoal p-6 md:p-8 relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 p-2 pointer-events-none">
                             <Gauge className="text-technical-red opacity-50 size-20 md:size-24 rotate-12 transform translate-x-6 -translate-y-4 md:translate-x-4 md:-translate-y-2" strokeWidth={1} />
                        </div>
                        <div className="flex items-center justify-between mb-6 border-b border-charcoal-muted pb-4 relative z-10">
                            <h3 className="font-serif text-xl md:text-2xl italic text-white max-w-[70%]">{data.optimalPath.title}</h3>
                            <span className="font-mono text-[9px] md:text-[10px] bg-technical-red text-white px-2 py-1 uppercase">{data.optimalPath.tag}</span>
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-end">
                                <span className="font-mono text-xs uppercase text-charcoal-light">Monthly Burn</span>
                                <span className="font-mono text-lg font-bold text-white">
                                    ${data.optimalPath.monthlyBurn.toLocaleString()}
                                </span>
                            </div>
                            <div className="w-full bg-charcoal-muted h-1.5 mb-6">
                                <div 
                                    className="bg-technical-red h-1.5" 
                                    style={{ width: `${data.optimalPath.progressPercentage}%` }}
                                ></div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                                {data.optimalPath.roles.map((role, idx) => (
                                    <div key={idx} className="p-3 bg-charcoal-muted/30 border border-charcoal-muted">
                                        <span className="block font-mono text-[9px] uppercase text-charcoal-light mb-1 truncate">{role.roleId}</span>
                                        <span className="text-xs font-bold text-white line-clamp-2">{role.roleTitle}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="font-sans text-xs text-charcoal-light mt-4 leading-relaxed">
                                <strong>Implication:</strong> {data.optimalPath.implication}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;