import React, { useState, useEffect } from 'react';
import { Menu, Layers, Printer, X as XIcon } from 'lucide-react';
import { StrategicDossierData } from '../types';

interface LayoutProps {
    children: React.ReactNode;
    metadata: StrategicDossierData['metadata'];
}

const Layout: React.FC<LayoutProps> = ({ children, metadata }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <div className="flex min-h-screen bg-off-white">
            {/* Sidebar (Desktop) */}
            <aside className="w-16 lg:w-20 fixed h-screen top-0 left-0 border-r border-border-hairline bg-paper z-50 flex flex-col items-center py-6 justify-between hidden md:flex">
                <div className="size-8 text-charcoal flex items-center justify-center font-black text-xl tracking-tighter cursor-pointer hover:bg-off-white transition-colors">
                    X
                </div>

                <nav className="flex flex-col gap-6 w-full items-center">
                    {/* View Module Selector */}
                    <div className="relative group w-full flex justify-center py-2">
                        <button className="flex flex-col items-center gap-1 text-charcoal hover:text-technical-red transition-colors">
                            <Layers strokeWidth={1.5} className="size-6" />
                            <span className="text-[9px] font-mono font-bold uppercase">View</span>
                        </button>
                        
                        {/* Hover Menu */}
                        <div className="absolute left-full top-0 ml-4 w-64 bg-paper border border-border-hairline shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2 transform translate-x-[-10px] group-hover:translate-x-0">
                            <div className="text-[10px] font-mono text-charcoal-muted uppercase tracking-widest px-3 py-2 border-b border-border-hairline mb-2">Select Module</div>
                            <a href="#" className="block px-3 py-2 text-xs font-medium hover:bg-off-white text-charcoal-muted hover:text-charcoal flex justify-between items-center group/item">
                                <span>01. Market Thesis</span>
                            </a>
                            <a href="#" className="block px-3 py-2 text-xs font-medium hover:bg-off-white text-charcoal-muted hover:text-charcoal flex justify-between items-center group/item">
                                <span>02. Technical Core</span>
                            </a>
                            <a href="#" className="block px-3 py-2 text-xs font-bold bg-off-white text-charcoal flex justify-between items-center border-l-2 border-technical-red pl-2.5">
                                <span>03. Strategic Map</span>
                                <span className="text-[9px] font-mono text-technical-red">ACTIVE</span>
                            </a>
                             <a href="#" className="block px-3 py-2 text-xs font-medium hover:bg-off-white text-charcoal-muted hover:text-charcoal flex justify-between items-center group/item">
                                <span>04. Financial Models</span>
                            </a>
                        </div>
                    </div>
                    
                    <div className="h-px w-8 bg-border-hairline"></div>

                    {/* Navigation Dots */}
                    {[
                        { id: 'trajectory', label: 'Trajectory' },
                        { id: 'phases', label: 'Phases' },
                        { id: 'resources', label: 'Resources' },
                        { id: 'errors', label: 'Error Map' }
                    ].map((item) => (
                        <a key={item.id} href={`#${item.id}`} className="text-charcoal-muted hover:text-charcoal transition-colors group relative flex items-center justify-center w-full h-10">
                            <span className="text-[10px] font-mono font-medium opacity-0 group-hover:opacity-100 absolute left-full ml-4 whitespace-nowrap bg-charcoal text-white px-2 py-1 z-50 pointer-events-none group-hover:pointer-events-auto shadow-sm border border-border-hairline">
                                {item.label}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-border-hairline group-hover:bg-charcoal transition-colors"></span>
                        </a>
                    ))}
                </nav>

                <div className="text-vertical text-[9px] font-mono uppercase tracking-widest text-charcoal-muted opacity-60">
                    {metadata.partLabel}
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 md:ml-16 lg:ml-20 bg-off-white min-h-screen flex flex-col w-full overflow-x-hidden">
                
                {/* Mobile Header */}
                <div className="md:hidden h-16 border-b border-charcoal bg-paper/95 backdrop-blur flex items-center justify-between px-5 sticky top-0 z-50 shadow-sm">
                    <span className="font-bold text-charcoal text-lg tracking-tight truncate max-w-[60%]">{metadata.title}</span>
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-technical-red uppercase tracking-wider font-medium">{metadata.part}</span>
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                            className="text-charcoal p-1 active:scale-95 transition-transform"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <XIcon className="size-6"/> : <Menu className="size-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                 {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-paper z-40 pt-20 px-6 md:hidden overflow-y-auto">
                        <nav className="flex flex-col gap-6">
                            <div className="text-xs font-mono text-charcoal-muted uppercase tracking-widest border-b border-border-hairline pb-2">Navigation</div>
                             {[
                                { id: 'trajectory', label: 'Trajectory' },
                                { id: 'phases', label: 'Phases' },
                                { id: 'resources', label: 'Resources' },
                                { id: 'errors', label: 'Error Map' }
                            ].map((item, idx) => (
                                <a 
                                    key={item.id} 
                                    href={`#${item.id}`} 
                                    className="text-3xl font-serif italic text-charcoal"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{ animation: `fadeIn 0.3s ease-out ${idx * 0.05}s backwards` }}
                                >
                                    {item.label}
                                </a>
                            ))}
                            
                            <div className="mt-8 pt-8 border-t border-border-hairline">
                                <div className="text-xs font-mono text-charcoal-muted uppercase tracking-widest mb-4">Meta Data</div>
                                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-charcoal">
                                    <div>ID: {metadata.id}</div>
                                    <div>UPDATED: {metadata.updateTime}</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                 )}


                {/* Desktop Header */}
                <header className="hidden md:flex h-20 border-b border-charcoal bg-paper/90 backdrop-blur sticky top-0 z-40 items-center justify-between px-8 lg:px-12">
                    <div className="flex items-center gap-6">
                        <h1 className="text-lg font-bold tracking-tight text-charcoal uppercase font-mono">
                            {metadata.title} <span className="text-charcoal-muted font-normal">//</span> {metadata.part}
                        </h1>
                        <div className="h-4 w-px bg-border-hairline"></div>
                        <span className="text-xs font-mono text-charcoal-muted uppercase tracking-wider">
                            Strategic Roadmap & Error Mapping
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 border border-charcoal bg-white rounded-sm shadow-sm">
                            <div className="size-2 rounded-full bg-technical-red animate-pulse"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal font-mono">Live Session</span>
                        </div>
                        <button className="text-charcoal-muted hover:text-charcoal transition-colors hover:bg-off-white p-2 rounded-full">
                            <Printer className="size-5" />
                        </button>
                    </div>
                </header>

                <div className="w-full bg-paper flex-1">
                    {children}
                </div>

                <footer className="border-t border-border-hairline bg-paper px-6 md:px-8 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] font-mono uppercase tracking-widest text-charcoal-muted gap-4 md:gap-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className="font-bold text-charcoal">Project {metadata.title}</span>
                        <span className="hidden md:block h-3 w-px bg-border-hairline"></span>
                        <span>Confidential // {metadata.partLabel}</span>
                    </div>
                    <div className="flex gap-6 w-full md:w-auto justify-between md:justify-start">
                        <span>Updated: {metadata.updateTime}</span>
                        <span>ID: {metadata.id}</span>
                    </div>
                </footer>
            </main>
            
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Layout;