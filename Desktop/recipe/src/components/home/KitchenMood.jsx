import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const KitchenMood = () => {
    return (
        <section className="py-40 bg-blanc-casse px-8 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                
                <header className="text-center mb-24 max-w-2xl mx-auto">
                    <ScrollReveal>
                        <span className="text-vert-sauge font-medium uppercase tracking-[0.4em] mb-4 block text-[10px] md:text-xs">L'Instant Culinaire</span>
                        <h2 className="text-4xl md:text-6xl text-vert-profond font-serif mb-8 leading-tight">L'Atmosphère de Notre Cuisine</h2>
                        <p className="text-vert-profond/60 font-light text-lg italic leading-relaxed">
                            "La cuisine est une affaire de silence et de gestes précis, où le temps s'arrête pour laisser place à l'harmonie des produits."
                        </p>
                    </ScrollReveal>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-end">
                    
                    <ScrollReveal delay={0.1}>
                        <div className="flex flex-col gap-6 group">
                            <div className="h-[50vh] overflow-hidden rounded-[3rem] shadow-soft relative">
                                <img src="/images/pate_brisee.png" alt="Moment suspendu" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-vert-profond/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                            <div className="px-4">
                                <h3 className="text-xl font-serif text-vert-profond mb-2 truncate">La Douceur de l'Aube</h3>
                                <p className="text-vert-profond/50 text-xs uppercase tracking-[0.2em] font-medium">Lumière & Sobriété</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    
                    <ScrollReveal delay={0.3}>
                        <div className="flex flex-col gap-6 group">
                            <div className="h-[65vh] overflow-hidden rounded-[4rem] shadow-soft relative scale-105 mb-8">
                                <img src="/images/croissants_saumon.png" alt="Richesse du produit" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-vert-sauge/5 mix-blend-overlay"></div>
                            </div>
                            <div className="px-8 text-center">
                                <h3 className="text-2xl font-serif text-vert-profond mb-2">L'Ingrédient Roi</h3>
                                <p className="text-vert-profond/50 text-xs uppercase tracking-[0.3em] font-medium">Fraîcheur & Couleur</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    
                    <ScrollReveal delay={0.5}>
                        <div className="flex flex-col gap-6 group">
                            <div className="h-[45vh] overflow-hidden rounded-[3rem] shadow-soft relative">
                                <img src="/images/cake_chocolat.png" alt="Artisanat culinaire" className="w-full h-full object-cover transition-transform duration-1000 group-hover:rotate-1 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-vert-profond/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                            <div className="px-4 text-right">
                                <h3 className="text-xl font-serif text-vert-profond mb-2">Le Geste Artisanal</h3>
                                <p className="text-vert-profond/50 text-xs uppercase tracking-[0.2em] font-medium">Texture & Tradition</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default KitchenMood;
