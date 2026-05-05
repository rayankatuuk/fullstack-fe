import { site } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";

export default function CTASection() {
    return (
        <section id="contact" className="my-18 rounded-4xl bg-[#111111] text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative">
            <div className="absolute inset-0 pointer-events-none"></div>

            <div className="relative z-10 flex-1 max-w-xl">
                <h2 className="text-2xl md:text-5xl font-bold mb-2 leading-tight">
                    {site.cta.headlinePrefix}
                    <span className="text-[#b8860b]">{site.cta.highlight}</span>
                    {site.cta.headlineSuffix}
                </h2>
                <div className="flex flex-col gap-6">
                    <p className="text-gray-400 text-lg">
                        {site.cta.description}
                    </p>
                    <div className="mt-4">
                        <ButtonLink 
                            href={site.cta.button.href} 
                            label={site.cta.button.label} 
                            icon={<Icon name={site.cta.button.icon ?? "arrow_right_alt"} className="text-xl" />}
                            className="bg-gray-200 text-gray-900 hover:bg-white border-none font-bold px-8 py-3 rounded-lg inline-flex"
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col gap-4 bg-[#1a1a1a] p-10 rounded-3xl min-w-75 border-none">
                {site.cta.contacts.map((contact, idx) => (
                    <div key={idx} className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors">
                        <div className="bg-[#b8860b]/10 p-3 rounded-full text-[#b8860b] flex items-center justify-center w-12 h-12">
                            <Icon name={contact.icon} className="text-xl" />
                        </div>
                        <span className="font-medium text-sm md:text-base tracking-wide">{contact.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}