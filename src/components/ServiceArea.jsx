import React from 'react';
import { MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

const regions = [
  {
    name: 'Dunwoody & Sandy Springs',
    neighborhoods: 'Dunwoody Place, Perimeter Center, Spalding Lake, Riverside',
    time: 'Immediate Local Headquarters Route'
  },
  {
    name: 'Buckhead & North Atlanta',
    neighborhoods: 'Tuxedo Park, Chastain Park, Peachtree Heights, Brookhaven',
    time: 'Daily Commercial & Residential Crew'
  },
  {
    name: 'Alpharetta & Milton',
    neighborhoods: 'Windward, Avalon Corridor, Country Club of the South',
    time: 'High-Volume Scheduled Service'
  },
  {
    name: 'Roswell & Johns Creek',
    neighborhoods: 'Historic Roswell, River Falls, St. Ives, Medlock Bridge',
    time: 'Recurring Route Maintenance'
  },
  {
    name: 'Marietta & East Cobb',
    neighborhoods: 'Walton, Indian Hills, Atlanta Country Club, Powers Ferry',
    time: 'Weekly Dedicated HOA Route'
  },
  {
    name: 'Midtown & Downtown Atlanta',
    neighborhoods: 'Atlantic Station, Ansley Park, Inman Park, Old Fourth Ward',
    time: 'Fast Mobile Crew Dispatch'
  }
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimsonpro-100 text-crimsonpro-950 text-xs font-bold tracking-wider uppercase">
              Georgia Service Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Proudly Serving Atlanta & Greater North Georgia
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Headquartered at <strong>8735 Dunwoody Place, Ste N, Atlanta, GA 30350</strong>, Reliant Living Solutions LLC deploys modern maintenance fleets daily across Fulton County, Cobb County, Gwinnett County, and DeKalb County.
            </p>

            <div className="p-5 rounded-2xl bg-reliant-950 text-white space-y-3">
              <div className="flex items-center gap-2.5 text-crimsonpro-400 font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>Atlanta Headquarters</span>
              </div>
              <p className="text-xs text-slate-300">
                8735 Dunwoody Place, Ste N, Atlanta, GA 30350
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-reliant-800 text-xs text-slate-300">
                <span>Direct Client Line:</span>
                <a href="tel:6783792916" className="text-crimsonpro-400 font-black hover:text-white transition-colors">
                  (678) 379-2916
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-magnolia-600 shrink-0" />
              <span>Full compliance documentation for Atlanta commercial asset managers & HOAs.</span>
            </div>
          </div>

          {/* Right Region Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:border-crimsonpro-300 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-crimsonpro-600 shrink-0" />
                    <span>{region.name}</span>
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {region.neighborhoods}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-crimsonpro-700">
                  <CheckCircle2 className="w-3 h-3 text-magnolia-600" />
                  <span>{region.time}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
