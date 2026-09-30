import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Reliant Living Solutions manages the grounds for our 140-unit corporate office complex in Perimeter Center. Their Bermuda turf maintenance and seasonal pine straw mulching keep our curb appeal flawless.",
    author: "Anthony M.",
    role: "Commercial Portfolio Asset Director",
    location: "Atlanta, GA"
  },
  {
    quote: "Flawless edging and shrub pruning in Windward. Their crew is always on schedule, professional, and provides detailed job completion reports for our HOA management team.",
    author: "Claire D.",
    role: "HOA Landscape Committee Chair",
    location: "Alpharetta, GA"
  },
  {
    quote: "We needed emergency storm debris clearing and overgrown lot rejuvenation at our commercial property near Dunwoody. Reliant mobilized a heavy-duty crew within 24 hours.",
    author: "Kendrick S.",
    role: "Facility Operations Manager",
    location: "Dunwoody, GA"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 bg-pattern-dots-reliant relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimsonpro-100 text-crimsonpro-950 text-xs font-bold tracking-wider uppercase">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by Atlanta Property Managers & HOA Boards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-soft flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-crimsonpro-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{item.author}</div>
                <div className="text-xs text-crimsonpro-700 font-medium">{item.role}</div>
                <div className="text-[11px] text-slate-400">{item.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
