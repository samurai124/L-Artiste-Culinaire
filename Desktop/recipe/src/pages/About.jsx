import React, { useEffect } from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SEO from '../components/SEO';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in pb-32">
      <SEO 
        title="À Propos" 
        description="Découvrez l'histoire et la philosophie de L'Artiste Culinaire : notre passion pour la gastronomie, l'artisanat et le partage."
        url="/a-propos"
      />
      <ScrollReveal yOffset={0} duration={1} className="relative min-h-[70vh] flex items-center justify-center text-center mt-12 mb-32 bg-vert-profond rounded-4xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
           <img src="/images/soup.jpg" alt="Atmosphère" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="relative z-10 px-4 max-w-[1400px] mx-auto text-blanc-casse">
          <span className="uppercase tracking-[0.3em] text-vert-sauge font-medium text-sm mb-6 block">Notre Manifeste</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-balance leading-tight">L'Artiste<br/>Culinaire</h1>
          <p className="text-xl md:text-2xl font-light text-gris-clair/90 leading-relaxed mb-0 text-balance mx-auto">
             Une quête perpétuelle du goût vrai, de l'élégance simple et du partage sincère.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-[1400px] mx-auto px-4 md:px-0">
        <ScrollReveal className="flex gap-16 md:gap-32 flex-col md:flex-row mb-32 items-center">
            <div className="w-full md:w-1/2">
                <span className="uppercase tracking-[0.3em] text-vert-sauge font-medium text-sm mb-4 block">Aux Origines</span>
                <h2 className="text-4xl md:text-5xl font-serif text-vert-profond mb-8">Les Racines du Projet</h2>
                <div className="text-lg md:text-xl font-light text-vert-profond/80 space-y-6 leading-relaxed">
                   <p>
                     L'Artiste Culinaire est né d'une passion inébranlable pour la haute gastronomie démocratisée. Nous croyons profondément que chaque repas peut être une oeuvre d'art, sublimant les ingrédients les plus nobles de notre terroir.
                   </p>
                   <p>
                     Refusant la précipitation du monde moderne, nous prônons un retour aux sources, où le temps passé en cuisine n'est pas une contrainte, mais une méditation créative. De la ferme à l'assiette, chaque étape est une célébration.
                   </p>
                </div>
            </div>
            <div className="w-full md:w-1/2 aspect-square clip-organic-2 bg-gris-clair overflow-hidden shadow-soft">
                <img src="/images/poulet.jpg" alt="Préparation en cuisine" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
        </ScrollReveal>
        
        
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-12 mg:gap-16 mb-32 pt-16 border-t border-vert-sauge/20">
            <div>
              <span className="text-5xl font-serif text-vert-sauge/30 mb-6 block">01</span>
              <h3 className="text-2xl font-serif text-vert-profond mb-4">L'Artisanat</h3>
              <p className="font-light text-vert-profond/70 leading-relaxed">
                Le travail manuel est au coeur de notre démarche. Nous valorisons les gestes précis, transmis de génération en génération, pour honorer la matière première.
              </p>
            </div>
            <div>
              <span className="text-5xl font-serif text-vert-sauge/30 mb-6 block">02</span>
              <h3 className="text-2xl font-serif text-vert-profond mb-4">L'Approvisionnement</h3>
              <p className="font-light text-vert-profond/70 leading-relaxed">
                Nous travaillons main dans la main avec de petits producteurs engagés dans l'agroécologie. Des produits vivants, de saison, au summum de leur goût.
              </p>
            </div>
            <div>
              <span className="text-5xl font-serif text-vert-sauge/30 mb-6 block">03</span>
              <h3 className="text-2xl font-serif text-vert-profond mb-4">La Transmission</h3>
              <p className="font-light text-vert-profond/70 leading-relaxed">
                Partager notre savoir-faire est une évidence. L'Artiste Culinaire est un livre ouvert, invitant chacun à expérimenter, rater, et réussir avec passion.
              </p>
            </div>
        </ScrollReveal>

        
        <ScrollReveal className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-vert-profond">L'Art de Vivre</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[70vh]">
            <div className="w-full h-96 md:h-full rounded-[3rem] overflow-hidden group">
              <img src="/images/desert.jpg" alt="Dessert élégant" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="w-full h-96 md:h-full rounded-[3rem] clip-organic overflow-hidden group">
              <img src="/images/drink.jpg" alt="Cocktail organique" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="bg-vert-sauge/10 p-16 md:p-32 rounded-[4rem] text-center max-w-[1400px] relative overflow-hidden mb-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-9xl text-vert-sauge/5 font-serif flex items-center justify-center pointer-events-none -rotate-12">Passion</div>
            <span className="text-vert-sauge text-6xl mb-8 block font-serif">"</span>
            <h3 className="text-3xl md:text-5xl font-serif text-vert-profond mb-12 leading-tight max-w-4xl mx-auto">
               Notre mission est de réenchanter votre quotidien par l'assiette, de faire vibrer vos sens et d'éveiller le chef qui sommeille en vous.
            </h3>
            <span className="block text-sm uppercase tracking-widest text-vert-profond/60 font-medium">L'Équipe Fondatrice</span>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
