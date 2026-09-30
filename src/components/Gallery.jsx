import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const galleryItems = [
  {
    category: 'lawn',
    categoryName: 'Turf Care & Striping',
    title: 'Precision Bermuda Turf & Clean Walkway Edging',
    location: 'Buckhead, Atlanta Residential',
    image: '/images/gallery_lawn1.jpg',
    details: 'Weekly Bermuda mowing, laser-straight edge trimming, and turf health preservation.'
  },
  {
    category: 'mulch',
    categoryName: 'Pine Straw & Mulch',
    title: 'Deep Trench Bed with Long-Needle Pine Straw',
    location: 'Dunwoody, GA Property',
    image: '/images/gallery_mulch.jpg',
    details: 'Georgia perennial plantings, river stone borders, and clean pine straw mulch beds.'
  },
  {
    category: 'commercial',
    categoryName: 'Commercial Grounds',
    title: 'Corporate Park Perimeter Groundskeeping',
    location: 'Sandy Springs Commercial',
    image: '/images/gallery_commercial.jpg',
    details: 'Full contract grounds maintenance, sidewalk blow-down, and Georgia code compliance.'
  },
  {
    category: 'shrub',
    categoryName: 'Camellia & Shrub Care',
    title: 'Sculpted Privacy Hedges & Camellias',
    location: 'Alpharetta, GA Estate',
    image: '/images/gallery_shrub.jpg',
    details: 'Precision level hedge pruning and ornamental Piedmont plant rejuvenation.'
  },
  {
    category: 'cleanup',
    categoryName: 'Seasonal Cleanup',
    title: 'Storm Debris Cleanup & Lawn Aeration',
    location: 'Roswell, GA Property',
    image: '/images/gallery_cleanup.jpg',
    details: 'Complete foliage vacuuming, root aeration, and seasonal lawn prep.'
  },
  {
    category: 'lawn',
    categoryName: 'Turf Care & Striping',
    title: 'Vibrant Green Zoysia Turf Restoration',
    location: 'Brookhaven, GA Residential',
    image: '/images/gallery_lawn2.jpg',
    details: 'Overseeding, custom aeration, and scheduled Georgia soil nourishment.'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-slate-50 bg-pattern-dots-reliant relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimsonpro-100 text-crimsonpro-950 text-xs font-bold tracking-wider uppercase">
            Work Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Recent Landscaping Projects in Atlanta
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A glimpse into the residential estates, HOA parks, and commercial properties we maintain across the Greater Atlanta Metroplex.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'lawn', label: 'Turf & Edging' },
            { id: 'mulch', label: 'Pine Straw & Mulch' },
            { id: 'shrub', label: 'Camellia & Shrub' },
            { id: 'cleanup', label: 'Seasonal & Storm Cleanup' },
            { id: 'commercial', label: 'Commercial Grounds' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-crimsonpro-600 to-rose-600 text-white shadow-md shadow-crimsonpro-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft shadow-hover flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-reliant-900 shadow-sm">
                  {item.categoryName}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-crimsonpro-700 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-crimsonpro-600" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-crimsonpro-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.details}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-crimsonpro-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-magnolia-600" />
                    Reliant Quality Standard
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
