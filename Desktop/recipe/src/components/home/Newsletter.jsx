import React, { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <section className="py-40 bg-blanc-casse px-8 relative overflow-hidden">
            
            <div className="absolute top-20 right-20 w-96 h-96 bg-vert-sauge/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-vert-profond/5 rounded-full blur-[100px] pointer-events-none opacity-50"></div>

            <div className="max-w-[1400px] mx-auto text-center relative z-10">
                <ScrollReveal>
                    <span className="text-vert-sauge font-medium uppercase tracking-[0.4em] mb-4 block text-xs md:text-sm">Le Cercle Privé</span>
                    <h2 className="text-4xl md:text-6xl text-vert-profond font-serif mb-12">Recevez l'Inspiration</h2>
                    <p className="text-vert-profond/60 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                        Inscrivez-vous à notre lettre d’information pour recevoir, chaque mois, une recette exclusive, nos découvertes de terroir et l’actualité de notre cuisine.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    {!subscribed ? (
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-xl mx-auto">
                            <input 
                                type="email" 
                                placeholder="Votre adresse email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full md:flex-1 bg-transparent border-b border-vert-profond/20 py-4 px-2 text-lg text-vert-profond placeholder:text-vert-profond/30 focus:outline-none focus:border-vert-sauge transition-colors font-light"
                                required 
                            />
                            <button 
                                type="submit"
                                className="w-full md:w-auto px-12 py-5 bg-vert-profond text-blanc-casse rounded-full hover:bg-vert-sauge hover:shadow-2xl transition-all duration-500 font-medium tracking-wide uppercase text-xs"
                            >
                                S'Inscrire
                            </button>
                        </form>
                    ) : (
                        <div className="bg-vert-sauge/10 p-12 rounded-[3rem] border border-vert-sauge/20 inline-block">
                            <h3 className="text-3xl font-serif text-vert-profond mb-2">Bienvenue parmi nous.</h3>
                            <p className="text-vert-profond/60 font-light">Un message de bienvenue vient d'être envoyé dans votre boîte aux lettres.</p>
                        </div>
                    )}
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Newsletter;
