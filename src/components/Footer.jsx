import React from 'react';
import { Mail, MapPin, ArrowUp, ShieldCheck, Phone, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-reliant-950 text-slate-300 pt-16 pb-12 border-t border-reliant-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-reliant-900">
          
          {/* Col 1: Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Reliant Living Solutions LLC" 
                className="h-10 w-auto bg-white/95 p-1 rounded-xl shadow-sm"
              />
              <span className="font-black text-lg tracking-tight">
                <span className="text-white">RELIANT </span>
                <span className="text-crimsonpro-400">LIVING SOLUTIONS</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Dedicated to speed, compliance, and quality for property managers, asset directors, and homeowners in Atlanta, GA & Greater Metro Area. Specialized landscaping & grounds maintenance.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-crimsonpro-400 shrink-0" />
                <a href="tel:6783792916" className="hover:text-white font-bold text-crimsonpro-400 transition-colors">
                  (678) 379-2916 (Direct Line)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-crimsonpro-400 shrink-0" />
                <a href="mailto:info@yourreliantllc.com" className="hover:text-white transition-colors">
                  info@yourreliantllc.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-crimsonpro-400 shrink-0" />
                <span>8735 Dunwoody Place, Ste N, Atlanta, GA 30350</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-magnolia-400 font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Licensed, Insured & Georgia State Compliant</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-crimsonpro-400 transition-colors">Landscaping Services</a></li>
              <li><a href="#why-us" className="hover:text-crimsonpro-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-crimsonpro-400 transition-colors">Our 4-Step Process</a></li>
              <li><a href="#showcase" className="hover:text-crimsonpro-400 transition-colors">Project Showcase</a></li>
              <li><a href="#service-area" className="hover:text-crimsonpro-400 transition-colors">Atlanta Service Area</a></li>
              <li><a href="#contact" className="hover:text-crimsonpro-400 transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Specialties</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Bermuda & Zoysia Turf Mowing</li>
              <li>• Georgia Native & Perennial Bed Design</li>
              <li>• Long-Needle Pine Straw Mulching</li>
              <li>• Storm Debris & Seasonal Cleanups</li>
              <li>• Shrub, Camellia & Privacy Hedge Pruning</li>
              <li>• Commercial & HOA Grounds Maintenance</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RELIANT LIVING SOLUTIONS LLC. All rights reserved. Atlanta, GA.</p>
          <div className="flex items-center gap-6">
            <span>Specialized Georgia Landscaping & Grounds Preservation</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-crimsonpro-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
