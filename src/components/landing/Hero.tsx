import type { CtaLink } from "@/data/site";
import { site } from "@/data/site";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";
import Image from "next/image";

type HeroProps = {
  availabilityLabel: string;
  headline: string;
  highlight: string;
  headlineSuffix: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export default function Hero({
  availabilityLabel,
  headline,
  highlight,
  headlineSuffix,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <div className="relative w-full flex flex-col gap-0 pb-0 lg:min-h-[72vh] lg:flex-row lg:items-stretch xl:min-h-[76vh] overflow-visible">
      {/* Left Column - Content (Mobile First) */}
      <div className="flex flex-col justify-start lg:justify-center gap-3 sm:gap-5 w-full lg:w-2/5 lg:pr-8 pb-0 lg:pb-0 relative z-10 pt-6 sm:pt-0 ">
        <Badge
          label={availabilityLabel}
          icon={<Icon name="code" className="text-xs text-[#b8860b]" />}
          className="border-[#b8860b]/30 text-[#b8860b] bg-[#b8860b]/10 uppercase tracking-widest text-xs font-semibold px-3 py-1 w-fit gap-2"
        />

        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {headline} <br />
          <span className="text-[#b8860b]">{highlight}</span>
          {headlineSuffix && <span> {headlineSuffix}</span>}
        </h1>

        <p className="max-w-xl text-sm sm:text-base leading-relaxed text-gray-400">
          {description}
        </p>

        <div className="mt-2 flex flex-wrap gap-3">
          <ButtonLink
            href={primaryCta.href}
            label={primaryCta.label}
            variant="primary"
            icon={<Icon name={primaryCta.icon ?? "arrow_right_alt"} className="text-xl" />}
            className="bg-[#b8860b] text-[#141313] hover:bg-[#d4a835] border-none font-bold px-6 py-3"
          />
          <ButtonLink
            href={secondaryCta.href}
            label={secondaryCta.label}
            variant="outline"
            icon={<Icon name={secondaryCta.icon ?? "download"} className="text-xl" />}
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 font-semibold"
          />
        </div>
      </div>

      {/* Right Column - Visual (Desktop Only Portrait) */}
      <div className="hidden lg:flex relative flex-1 items-stretch justify-end pb-0 overflow-hidden">
        {/* Ambient gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-[#b8860b]/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8860b]/10 blur-3xl" />

        {/* Portrait Stage - full height, bottom-aligned */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-30">
          <div className="relative h-full w-full max-w-3xl">
            <Image
              src="/images/rayan.png"
              alt="Profile Picture"
              fill
              className="object-contain object-bottom drop-shadow-2xl lg:scale-100 xl:scale-140"
              sizes="42vw"
              priority
            />
          </div>
        </div>
        
        {/* Stats Card - Positioned absolutely within desktop container */}
        <div className="absolute right-6 top-100 -translate-y-1/2 z-20 w-56 rounded-xl border border-yellow-600 bg-[#111111]/85 p-4 shadow-2xl backdrop-blur-md xl:right-0">
          {site.hero.stats?.map((stat, idx) => (
            <div key={idx} className={idx === 0 ? "flex items-center gap-4" : "mt-5 flex items-center gap-4"}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-700 bg-[#1c1a17] text-[#dc9b28]">
                <Icon name={stat.icon} className="text-base" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-100 leading-tight">{stat.value}</span>
                <span className="text-[8px] font-medium uppercase tracking-wide text-gray-500 leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Portrait Image + Stats Overlay */}
      <div className="relative w-full lg:hidden -mt-40 sm:mt-4 ">
        <div className="relative mx-auto w-full max-w-7xl sm:max-w-md aspect-4/5">
          <Image
            src="/images/rayan.png"
            alt="Profile Picture"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(100vw - 6rem), 0px"
          />

          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 w-[70%] max-w-40 rounded-xl border border-yellow-600 bg-[#111111]/90 p-3 shadow-2xl backdrop-blur-md">
            {site.hero.stats?.map((stat, idx) => (
              <div key={idx} className={idx === 0 ? "flex items-center gap-3" : "mt-3 flex items-center gap-3"}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-700 bg-[#1c1a17] text-[#dc9b28]">
                  <Icon name={stat.icon} className="text-xs" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-100 leading-tight">{stat.value}</span>
                  <span className="text-[7px] font-medium uppercase tracking-wide text-gray-500 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
