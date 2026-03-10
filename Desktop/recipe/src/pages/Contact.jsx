import React, { useEffect, useState } from 'react';
import CustomButton from '../components/ui/CustomButton';
import ScrollReveal from '../components/ui/ScrollReveal';
import SEO from '../components/SEO';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formState, setFormState] = useState({ nom: '', email: '', sujet: '', message: '' });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Votre message a été envoyé avec élégance !');
    setFormState({ nom: '', email: '', sujet: '', message: '' });
  };

  return (
    <>
      <SEO 
        title="Contact" 
        description="Une question, une collaboration ou simplement envie de partager ? Contactez L'Artiste Culinaire via notre formulaire dédié."
        url="/contact"
      />
      <ScrollReveal className="flex flex-col md:flex-row gap-20 lg:gap-32 items-stretch py-20 pb-32 max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="uppercase tracking-[0.2em] text-vert-sauge font-medium text-sm mb-6">Des Mots & Des Mets</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-vert-profond mb-8 leading-tight text-balance">
            Prenons le temps d'échanger.
          </h1>
          <p className="text-xl font-light text-vert-profond/70 leading-relaxed mb-16 max-w-lg">
            Une question sur une recette, une proposition de collaboration ou juste une envie de partager votre amour pour la bonne table ? Nous sommes à votre écoute.
          </p>

          <div className="space-y-8 pl-6 border-l w-max border-vert-sauge/30 mb-16 hidden md:block">
              <div>
                 <h4 className="font-serif text-vert-profond text-xl mb-1">Notre Atelier</h4>
                 <p className="font-light text-vert-profond/60">12 Rue des Oliviers, 75000 Paris</p>
              </div>
              <div>
                 <h4 className="font-serif text-vert-profond text-xl mb-1">Correspondance</h4>
                 <p className="font-light text-vert-profond/60">bonjour@artisteculinaire.fr</p>
              </div>
          </div>

          <div className="hidden lg:block w-3/4 aspect-[4/3] rounded-[3rem] clip-organic overflow-hidden shadow-soft mt-auto relative group">
             <img src="/images/desert.jpg" alt="Atmosphère de l'atelier" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
             <div className="absolute inset-0 bg-vert-profond/10 mix-blend-overlay"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-blanc-casse p-10 md:p-14 rounded-[3rem] shadow-soft border border-gris-clair/60 h-full flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              <div className="relative group">
                <input 
                  type="text" 
                  name="nom" 
                  id="nom" 
                  value={formState.nom}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gris-clair pb-4 text-lg font-light text-vert-profond focus:outline-none focus:border-vert-sauge transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="nom" 
                  className="absolute left-0 top-0 text-vert-profond/50 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-vert-sauge peer-valid:-translate-y-6 peer-valid:text-xs"
                >
                  Nom complet
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gris-clair pb-4 text-lg font-light text-vert-profond focus:outline-none focus:border-vert-sauge transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-0 text-vert-profond/50 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-vert-sauge peer-valid:-translate-y-6 peer-valid:text-xs"
                >
                  Adresse email
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  name="sujet" 
                  id="sujet" 
                  value={formState.sujet}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gris-clair pb-4 text-lg font-light text-vert-profond focus:outline-none focus:border-vert-sauge transition-colors peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="sujet" 
                  className="absolute left-0 top-0 text-vert-profond/50 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-vert-sauge peer-valid:-translate-y-6 peer-valid:text-xs"
                >
                  Sujet
                </label>
              </div>

              <div className="relative group mt-4">
                <textarea 
                  name="message" 
                  id="message" 
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-transparent border border-gris-clair rounded-2xl p-6 text-lg font-light text-vert-profond focus:outline-none focus:border-vert-sauge focus:ring-1 focus:ring-vert-sauge transition-all resize-none peer"
                  placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-6 top-6 text-vert-profond/50 transition-all duration-300 peer-focus:-translate-y-9 peer-focus:-translate-x-2 peer-focus:bg-blanc-casse peer-focus:px-2 peer-focus:text-xs peer-focus:text-vert-sauge peer-valid:-translate-y-9 peer-valid:-translate-x-2 peer-valid:bg-blanc-casse peer-valid:px-2 peer-valid:text-xs pointer-events-none"
                >
                  Votre message
                </label>
              </div>

              <CustomButton type="submit" className="w-full py-5 text-lg mt-4">
                Envoyer avec soin
              </CustomButton>

            </form>
          </div>
        </div>
      </ScrollReveal>

      
      <ScrollReveal className="max-w-[1000px] mx-auto px-4 md:px-8 pb-32">
          <h2 className="text-4xl font-serif text-vert-profond mb-16 text-center">Questions Fréquentes</h2>
          <div className="space-y-8">
              <div className="bg-blanc-casse p-8 md:p-10 rounded-4xl shadow-sm border border-vert-sauge/10 hover:shadow-soft transition-shadow">
                  <h3 className="text-xl font-serif text-vert-profond mb-4 flex items-center gap-3">
                      <span className="text-vert-sauge">Q.</span> Proposez-vous des collaborations avec des marques ?
                  </h3>
                  <p className="text-vert-profond/70 font-light leading-relaxed pl-8">
                      Oui, nous sélectionnons méticuleusement nos partenaires. Si vos valeurs rejoignent notre manifeste pour une alimentation saine, esthétique et raisonnée, n'hésitez pas à nous détailler votre projet via le formulaire.
                  </p>
              </div>
              <div className="bg-blanc-casse p-8 md:p-10 rounded-4xl shadow-sm border border-vert-sauge/10 hover:shadow-soft transition-shadow">
                  <h3 className="text-xl font-serif text-vert-profond mb-4 flex items-center gap-3">
                      <span className="text-vert-sauge">Q.</span> Peut-on utiliser vos photographies ?
                  </h3>
                  <p className="text-vert-profond/70 font-light leading-relaxed pl-8">
                      Toutes nos images sont protégées par le droit d'auteur. Cependant, pour un usage éditorial (presse, blogs culinaires), nous pouvons fournir des licences d'utilisation. Veuillez faire une demande spécifique avec l'objet "Presse/Média".
                  </p>
              </div>
              <div className="bg-blanc-casse p-8 md:p-10 rounded-4xl shadow-sm border border-vert-sauge/10 hover:shadow-soft transition-shadow">
                  <h3 className="text-xl font-serif text-vert-profond mb-4 flex items-center gap-3">
                      <span className="text-vert-sauge">Q.</span> Le magazine existe-t-il au format papier ?
                  </h3>
                  <p className="text-vert-profond/70 font-light leading-relaxed pl-8">
                      Pas pour le moment, L'Artiste Culinaire est une expérience 100% digitale pensée pour interagir avec vous au quotidien. Cependant, une édition annuelle de collection est en cours de création.
                  </p>
              </div>
          </div>
      </ScrollReveal>
    </>
  );
};

export default Contact;
