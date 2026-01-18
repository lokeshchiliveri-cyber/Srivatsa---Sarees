
import React from 'react';

const COLLECTIONS = [
  {
    name: "Classic Gadwal",
    desc: "The pride of Telangana with contrasting silk borders and traditional motifs.",
    // Using a high-quality professional shot that matches the specific red/gold/hands motif shared
    image: "https://img.freepik.com/free-photo/bridesmaid-helps-wear-traditional-indian-bride-dress_8353-9960.jpg?t=st=1768729789~exp=1768733389~hmac=f1e358cfcb30fcefff9d370868dd5a344784c3607c9fad23ea91ab8a069586bb&w=1480",
    tag: "Traditional"
  },
  {
    name: "Temple Kanchi",
    desc: "Auspicious gold zari wedding saree, captured in the serenity of nature.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600&h=800",
    tag: "Wedding"
  },
  {
    name: "Royal Uppada",
    desc: "Premium Kanchipuram silk with high-density zari for a royal presence.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600&h=800",
    tag: "Premium"
  },
  {
    name: "Pure Pochampally",
    desc: "Authentic artisanal Ikat weaves, celebrating the hand-loomed heritage.",
    image: "https://img.freepik.com/free-photo/close-up-hands-woman-wearing-traditional-sari-garment_23-2149565131.jpg?t=st=1768730114~exp=1768733714~hmac=f4a374e0c044b13ba6899cd7d29f310953a2c00bb50a997034661ac54835f62d",
    tag: "Artisanal"
  }
];

export const CollectionGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif-cinzel gold-gradient mb-4">THE VATSA EDIT</h2>
          <div className="w-24 h-[2px] bg-red-800 mx-auto"></div>
          <p className="mt-6 text-gray-600 font-serif-playfair text-lg">Curated weaves for every auspicious occasion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTIONS.map((item, idx) => (
            <div key={idx} className="group relative cursor-pointer">
              <div className="overflow-hidden rounded-sm aspect-[3/4]">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[10px] tracking-widest font-bold text-red-900 uppercase">
                  {item.tag}
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-serif-cinzel text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500 font-serif-playfair italic px-4 leading-relaxed">{item.desc}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-red-800 font-medium text-xs tracking-[0.2em] border-b border-red-800 pb-1 uppercase">EXPLORE COLLECTION</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
