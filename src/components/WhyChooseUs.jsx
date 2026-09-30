import React from 'react';
import { Zap, ShieldCheck, CheckCircle, Clock, Award, Users, PhoneCall } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Rapid Atlanta Dispatch',
    description: 'Lightning-fast estimation and prompt fleet deployment across Atlanta, Dunwoody, Sandy Springs, Buckhead, and the Metroplex.'
  },
  {
    icon: ShieldCheck,
    title: 'Georgia Code & Safety Compliance',
    description: 'Strict adherence to Atlanta municipal guidelines, HOA requirements, and safety regulations. Fully licensed & insured in GA.'
  },
  {
    icon: Award,
    title: 'Pristine Landscape Craftsmanship',
    description: 'Crisp pavement edging, precision turf cutting, clean pine straw mulching, and complete hardscape blow-off on every visit.'
  },
  {
    icon: Clock,
    title: 'Dependable Recurring Scheduling',
    description: 'Consistent weekly and bi-weekly grounds preservation for commercial complexes, multi-family communities, and residential estates.'
  },
  {
    icon: Users,
    title: 'Equipped Professional Grounds Crew',
    description: 'Experienced groundskeepers equipped with commercial-grade zero-turn mowers, precision edgers, and specialized hedge & shrub trimming gear.'
  },
  {
    icon: CheckCircle,
    title: 'Transparent Itemized Pricing',
    description: 'Clear upfront pricing with no hidden charges. Dedicated reporting and billing for asset managers, HOA boards, and owners.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 bg-pattern-dots-reliant relative border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimsonpro-100 text-crimsonpro-950 text-xs font-bold tracking-wider uppercase">
              Why Reliant Living Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Speed, Compliance, and Superior Georgia Grounds Quality
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              At <strong>RELIANT LIVING SOLUTIONS LLC</strong>, we are committed to delivering dependable, high-standard landscaping services throughout Atlanta, GA. We protect and enhance exterior property values with diligent grounds preservation.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-crimsonpro-50 text-crimsonpro-700 flex items-center justify-center shrink-0 font-black text-lg">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Commercial & Asset Manager Ready</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Equipped for high-volume commercial centers, HOA communities, and private estates.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 font-black text-lg">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Atlanta Phone Line</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Call (678) 379-2916 or email info@yourreliantllc.com for immediate quotes.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-crimsonpro-600 to-rose-600 hover:from-crimsonpro-700 hover:to-rose-700 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-md shadow-crimsonpro-600/20 transition-all"
              >
                Schedule Service in Atlanta
              </a>
            </div>

            {/* Crew Image Callout */}
            <div className="pt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-sm relative group">
              <img 
                src="/images/team-landscaping.jpg" 
                alt="Reliant Living Solutions Professional Grounds Crew" 
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-reliant-950/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs font-semibold text-white">
                  Experienced, insured, and certified grounds specialists in Atlanta, GA.
                </p>
              </div>
            </div>
          </div>

          {/* Right 2x3 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft shadow-hover space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-crimsonpro-50 text-crimsonpro-700 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
