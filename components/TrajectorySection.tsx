import React, { useState } from 'react';
import { TrajectoryData } from '../types';
import { X, Check } from 'lucide-react';

interface TrajectorySectionProps {
    data: TrajectoryData;
}

const TrajectorySection: React.FC<TrajectorySectionProps> = ({ data }) => {
    const [hoveredQuarter, setHoveredQuarter] = useState<string | null>(null);

    return (
        <section className="border-b border-charcoal px-5 md:px-8 lg:px-12 py-12 lg:py-24 max-w-[1600px] mx-auto bg-off-white scroll-mt-20 overflow-hidden" id={data.sectionId}>
            <div className="mb-10 lg:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
                <div>
                    <span className="text-technical-red font-mono text-[10px] uppercase tracking-widest font-bold mb-3 md:mb-4 block border-l-2 border-technical-red pl-3">
                        {data.tagline}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-light tracking-tighter text-charcoal leading-[1.15] lg:leading-[1.1]">
                        {data.title.split(' ').slice(0, 2).join(' ')}<br />
                        {data.title.split(' ').slice(2).join(' ')}
                    </h2>
                </div>
                <div className="lg:text-right max-w-md">
                    <p className="font-mono text-xs text-charcoal-muted leading-relaxed text-justify lg:text-right">
                        {data.description}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8 lg:mb-16">
                {/* Decision Card */}
                <div className="col-span-1 border border-charcoal bg-paper p-6 relative h-fit shadow-sm">
                    <div className="absolute -top-3 left-4 bg-paper px-2">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-technical-red font-bold">Behind The Decision</span>
                    </div>
                    <h4 className="font-serif text-lg italic text-charcoal mb-4">Why This Roadmap?</h4>
                    <div className="space-y-4">
                        <div className="border-l border-charcoal-light pl-3 opacity-80 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-2 mb-1">
                                <X className="size-3 text-charcoal-muted flex-shrink-0" />
                                <span className="font-mono text-[10px] uppercase text-charcoal-muted line-through decoration-technical-red">
                                    {data.decision.rejected.title}
                                </span>
                            </div>
                            <p className="font-sans text-[11px] text-charcoal-muted leading-tight">
                                {data.decision.rejected.reason}
                            </p>
                        </div>
                        <div className="border-l-2 border-technical-red pl-3">
                            <div className="flex items-center gap-2 mb-1">
                                <Check className="size-3 text-technical-red flex-shrink-0" />
                                <span className="font-mono text-[10px] uppercase text-charcoal font-bold">
                                    {data.decision.adopted.title}
                                </span>
                            </div>
                            <p className="font-sans text-[11px] text-charcoal leading-tight">
                                {data.decision.adopted.reason}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline Visualization */}
                <div className="col-span-1 lg:col-span-3 relative w-full h-auto lg:h-48 select-none pt-4 lg:pt-0">
                    <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-charcoal z-0"></div>
                    <div className="w-full flex lg:grid lg:grid-cols-3 relative h-56 lg:h-full z-10 gap-0 overflow-x-auto snap-x snap-mandatory lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0">
                        {data.timeline.map((quarter, index) => (
                            <div 
                                key={quarter.id}
                                onMouseEnter={() => setHoveredQuarter(quarter.id)}
                                onMouseLeave={() => setHoveredQuarter(null)}
                                className={`
                                    min-w-[85vw] sm:min-w-[60vw] lg:min-w-0 snap-center relative h-full flex flex-col justify-between py-4 pl-4 pr-8 lg:pr-0 lg:mr-0
                                    border-l border-charcoal
                                    bg-off-white/50 lg:bg-transparent
                                    transition-colors duration-300
                                    ${hoveredQuarter === quarter.id ? 'bg-white/50' : ''}
                                    ${index === data.timeline.length - 1 ? 'border-r border-charcoal lg:border-r-0 lg:border-none' : 'border-r lg:border-r-0 border-charcoal lg:border-none'}
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`font-mono text-sm font-bold px-2 py-1 ${quarter.id === 'q1' ? 'bg-charcoal text-white' : 'bg-white border border-charcoal text-charcoal'}`}>
                                        {quarter.name}
                                    </span>
                                    <span className="font-serif italic text-charcoal-muted text-sm">{quarter.theme}</span>
                                </div>

                                <div className="absolute bottom-1/2 translate-y-1/2 left-0 w-full flex justify-around px-2 lg:px-4">
                                    {quarter.events.map((event, idx) => {
                                        const isMilestone = event.type === 'milestone';
                                        const isLaunch = event.type === 'launch';
                                        
                                        return (
                                            <div key={idx} className="relative group cursor-pointer z-20 flex flex-col items-center">
                                                <div className={`h-3 w-px absolute -top-1.5 left-1/2 -translate-x-1/2 ${event.status === 'pending' ? 'bg-charcoal-light' : 'bg-charcoal'}`}></div>
                                                
                                                {/* Node rendering based on type */}
                                                {isLaunch ? (
                                                     <div className="size-3 border border-charcoal bg-white rounded-full mt-2.5 flex items-center justify-center transition-transform group-hover:scale-125 shadow-sm">
                                                        <div className="size-1 bg-technical-red rounded-full"></div>
                                                    </div>
                                                ) : (
                                                    <div className={`
                                                        size-1.5 rounded-full mt-3 transition-transform group-hover:scale-150
                                                        ${isMilestone ? 'bg-technical-red' : ''}
                                                        ${!isMilestone && event.status === 'pending' ? 'bg-charcoal-light' : ''}
                                                        ${!isMilestone && event.status !== 'pending' ? 'bg-charcoal' : ''}
                                                    `}></div>
                                                )}

                                                <span className={`
                                                    absolute top-8 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-wider whitespace-nowrap
                                                    ${isMilestone || isLaunch ? 'opacity-100 font-bold' : 'opacity-60 group-hover:opacity-100'}
                                                    ${isMilestone ? 'text-technical-red' : ''}
                                                    ${!isMilestone && event.status === 'pending' ? 'text-charcoal-muted opacity-40' : 'text-charcoal'}
                                                `}>
                                                    {event.month}: {event.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        {/* Spacer for horizontal scroll padding on mobile */}
                        <div className="min-w-[5vw] lg:hidden"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrajectorySection;