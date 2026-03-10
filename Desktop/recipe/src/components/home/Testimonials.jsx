import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const Testimonials = () => {
    const praise = [
        {
            quote: "Une expérience sensorielle rare. Chaque recette est un voyage dans le temps et le goût.",
            author: "Madame Figaro",
            rank: "Gastronomie & Style"
        },
        {
            quote: "La perfection dans la simplicité. L'Artiste Culinaire redonne ses lettres de noblesse au produit brut.",
            author: "Le Fooding",
            rank: "Guide Urbain"
        },
        {
            quote: "Plus qu'un simple carnet de recettes, c'est un manifeste pour le bien-manger contemporain.",
            author: "Vogue Maison",
            rank: "Art de Vivre"
        }
    ];

    return (
        <section className="bg-vert-profond py-32 md:py-48 px-8 overflow-hidden relative">
            
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-vert-sauge/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40vh] h-[40vh] bg-blanc-casse/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto text-center mb-24 relative z-10">
                <ScrollReveal>
                    <span className="text-vert-sauge font-medium uppercase tracking-[0.4em] mb-4 block text-xs md:text-sm">Ils nous honorent</span>
                    <h2 className="text-4xl md:text-6xl text-blanc-casse font-serif">Regards sur la Cuisine</h2>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 max-w-[1400px] mx-auto relative z-10">
                {praise.map((item, i) => (
                    <ScrollReveal key={i} delay={0.2 * i}>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-6xl text-vert-sauge/30 font-serif mb-8 select-none">"</span>
                            <p className="text-gris-clair/90 text-xl font-light leading-relaxed italic mb-8">
                                {item.quote}
                            </p>
                            <div className="flex flex-col">
                                <span className="text-blanc-casse font-serif text-lg tracking-wide">{item.author}</span>
                                <span className="text-vert-sauge/60 text-[10px] uppercase tracking-[0.3em] mt-2 font-medium">{item.rank}</span>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
