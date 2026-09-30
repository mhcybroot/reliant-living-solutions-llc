import React from 'react';
import { ClipboardCheck, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Consultation & Atlanta Quote',
    description: 'Submit your property details or call (678) 379-2916. We deliver a clear, itemized quote customized for Georgia grounds.'
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Prompt Crew Deployment',
    description: 'We schedule service around your schedule. Our liveried crew arrives on time equipped with commercial-grade landscaping gear.'
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Precision Grounds Execution',
    description: 'We perform thorough turf mowing, edging, Georgia native planting, pine straw mulching, or storm cleanouts with extreme care.'
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Quality Verification & Final Walk',
    description: 'Complete blow-down of all driveways, walkways, and curbs. We conduct a final quality inspection to ensure 100% satisfaction.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimsonpro-100 text-crimsonpro-950 text-xs font-bold tracking-wider uppercase">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Streamlined 4-Step Landscaping Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From first estimate to pristine completed grounds, we make Atlanta property maintenance effortless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200/80 shadow-soft hover:shadow-hover transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-crimsonpro-200">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-reliant-950 text-crimsonpro-400 flex items-center justify-center shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-crimsonpro-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-magnolia-600" />
                  <span>Reliant Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
