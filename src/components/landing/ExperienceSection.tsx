import { site } from "@/data/site";
import Link from "next/link";

export default function ExperienceSection() {
    return (
        <section id="experience" className="pt-8">
            <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
                <Link href="/#experience" className="text-sm font-medium text-gray-900 hover:text-blue-600 flex items-center gap-1 transition-colors">
                    View All Experience <span className="text-lg">→</span>
                </Link>
            </div>

            <div className="flex flex-col">
                {site.experience.map((exp, idx) => (
                    <div key={idx} className="group relative flex gap-8 py-6 border-b border-gray-100 last:border-0 hover:bg-white transition-colors">
                        
                        {/* Timeline Column */}
                        <div className="hidden sm:flex flex-col items-end w-32 shrink-0 pt-1">
                            <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                        </div>
                        
                        {/* Circle/Icon Divider */}
                        <div className="hidden sm:flex flex-col items-center relative">
                            {/* Line */}
                            {idx !== site.experience.length - 1 && (
                                <div className="absolute top-10 -bottom-10 w-px bg-gray-200 group-hover:bg-[#b8860b]/30 transition-colors"></div>
                            )}
                            <div className="h-4 w-4 rounded-full border-2 border-gray-200 bg-white group-hover:border-[#b8860b] mt-1 shrink-0 z-10 transition-colors"></div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 flex flex-col sm:flex-row gap-6 items-start">
                            {/* Logo */}
                            <div className="h-14 w-14 bg-white border border-gray-100 rounded-xl flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                {/* Ideally actual image logo, using text fallback/icon for now */}
                                <div className="text-xl font-bold text-[#141313]">
                                    {exp.company.charAt(0)}
                                </div>
                            </div>
                            
                            {/* Details */}
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                                    <div className="flex sm:hidden items-center gap-2 mb-1">
                                        <span className="text-sm text-gray-700 font-bold">{exp.company}</span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-xs text-gray-500">{exp.period}</span>
                                    </div>
                                    <div className="hidden sm:block text-sm text-[#b8860b] font-medium mb-2">{exp.company}</div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.techs.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-md font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}