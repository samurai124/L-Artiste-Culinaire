import React from 'react';
import Hero from '../components/home/Hero';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedRecipes from '../components/home/FeaturedRecipes';
import InfoSection from '../components/home/InfoSection';
import KitchenMood from '../components/home/KitchenMood';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import CustomButton from '../components/ui/CustomButton';
import ScrollReveal from '../components/ui/ScrollReveal';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-10">
      <SEO 
        title="Accueil" 
        description="L'Artiste Culinaire : Explorez un univers de saveurs authentiques, de recettes créatives et de bien-être à travers notre passion pour la gastronomie."
        keywords="cuisine, recettes, gastronomie, artiste culinaire, bien-être, lifestyle"
      />
      
      <ScrollReveal yOffset={0} duration={1}>
        <Hero />
      </ScrollReveal>

      
      <ScrollReveal delay={0.2}>
        <span className="block mx-auto w-10 h-10 border border-vert-sauge rounded-full my-32 relative">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-vert-sauge rounded-full"></span>
        </span>
      </ScrollReveal>

      
      <ScrollReveal>
        <section className="mb-48">
          <CategoriesSection />
        </section>
      </ScrollReveal>

      
      <ScrollReveal>
        <section className="mb-40">
          <FeaturedRecipes />
        </section>
      </ScrollReveal>

      
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      
      <ScrollReveal>
        <KitchenMood />
      </ScrollReveal>

      
      <ScrollReveal>
        <InfoSection />
      </ScrollReveal>

      
      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>
      
      
      <ScrollReveal>
        <section className="my-48 text-center max-w-2xl mx-auto px-4 bg-vert-sauge/5 p-20 rounded-[4rem] border border-vert-sauge/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vert-sauge/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-[2s]"></div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-vert-profond mb-6 relative z-10">Un Projet Épicurien ?</h2>
          <p className="text-vert-profond/70 mb-12 text-lg font-light leading-relaxed relative z-10">
            Que ce soit pour une collaboration gastronomique, un événement privé, ou simplement pour échanger autour de la dolce vita...
          </p>
          <div className="relative z-10">
            <CustomButton variant="outline" onClick={() => navigate('/contact')} className="px-14 py-6 text-lg tracking-widest uppercase text-xs">
              Nous Écrire
            </CustomButton>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;

