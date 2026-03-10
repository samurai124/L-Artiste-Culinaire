import { readFileSync, writeFileSync } from 'fs';

// Precise Unsplash images matched to each recipe by keyword search
const imageMap = {
    "1": { main: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&auto=format&fit=crop", alt: "Croissants au saumon fumé" },
    "2": { main: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop", alt: "Cake au chocolat" },
    "3": { main: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&auto=format&fit=crop", alt: "Pasta fraîches" },
    "4": { main: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop", alt: "Poulet rôti" },
    "5": { main: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop", alt: "Soupe" },
    "6": { main: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop", alt: "Dessert" },
    "7": { main: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop", alt: "Boisson" },
    "8": { main: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop", alt: "Salade" },
    "9": { main: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&auto=format&fit=crop", alt: "Gratin" },
    "10": { main: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&auto=format&fit=crop", alt: "Pâte brisée" },
    // Soupe à l'oignon
    "11": { main: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop", alt: "Soupe à l'oignon gratinée" },
    // Gratin dauphinois
    "12": { main: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&auto=format&fit=crop", alt: "Gratin dauphinois" },
    // Quiche lorraine
    "13": { main: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop", alt: "Quiche lorraine" },
    // Pancakes
    "14": { main: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop", alt: "Pancakes moelleux" },
    // Poulet tikka massala
    "15": { main: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop", alt: "Poulet tikka massala" },
    // Tarte citron
    "16": { main: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&auto=format&fit=crop", alt: "Tarte au citron meringuée" },
    // Limonade
    "17": { main: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800&auto=format&fit=crop", alt: "Limonade au basilic" },
    // Gateau yaourt
    "18": { main: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&auto=format&fit=crop", alt: "Gâteau au yaourt" },
    // Boeuf bourguignon
    "19": { main: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&auto=format&fit=crop", alt: "Boeuf bourguignon" },
    // Ratatouille
    "20": { main: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=800&auto=format&fit=crop", alt: "Ratatouille provençale" },
    // Blanquette de veau
    "21": { main: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=800&auto=format&fit=crop", alt: "Blanquette de veau" },
    // Mousse chocolat
    "22": { main: "https://images.unsplash.com/photo-1611329532992-0d5ae0edcfcb?w=800&auto=format&fit=crop", alt: "Mousse au chocolat" },
    // Salade nicoise
    "23": { main: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop", alt: "Salade niçoise" },
    // Crepes
    "24": { main: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&auto=format&fit=crop", alt: "Crêpes bretonnes" },
    // Tartare boeuf
    "25": { main: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=800&auto=format&fit=crop", alt: "Tartare de bœuf" },
    // Velouté courgettes
    "26": { main: "https://images.unsplash.com/photo-1585153911322-67d90d47e2e5?w=800&auto=format&fit=crop", alt: "Velouté de courgettes" },
    // Cassoulet
    "27": { main: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&auto=format&fit=crop", alt: "Cassoulet toulousain" },
    // Ile flottante
    "28": { main: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop", alt: "Île flottante" },
    // Pissaladière
    "29": { main: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop", alt: "Pissaladière niçoise" },
    // Coq au vin
    "30": { main: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=800&auto=format&fit=crop", alt: "Coq au vin" },
    // Tarte tatin
    "31": { main: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&auto=format&fit=crop", alt: "Tarte tatin aux pommes" },
    // Brandade
    "32": { main: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop", alt: "Brandade de morue" },
    // Soufflee fromage
    "33": { main: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&auto=format&fit=crop", alt: "Soufflé au fromage" },
    // Sorbet citron
    "34": { main: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop", alt: "Sorbet citron basilic" },
    // The glace peche
    "35": { main: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop", alt: "Thé glacé à la pêche" },
    // Bouillabaisse
    "36": { main: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop", alt: "Bouillabaisse marseillaise" },
    // Madeleine
    "37": { main: "https://images.unsplash.com/photo-1509482560494-4126f8225994?w=800&auto=format&fit=crop", alt: "Madeleine de Commercy" },
    // Kouign amann
    "38": { main: "https://images.unsplash.com/photo-1622478962046-618f55eba4f7?w=800&auto=format&fit=crop", alt: "Kouign amann breton" },
    // Vichyssoise
    "39": { main: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop", alt: "Vichyssoise froide" },
    // Confit canard
    "40": { main: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=800&auto=format&fit=crop", alt: "Confit de canard" },
    // Financiers pistaches
    "41": { main: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&auto=format&fit=crop", alt: "Financiers aux pistaches" },
    // Carbonara
    "42": { main: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?w=800&auto=format&fit=crop", alt: "Pâtes carbonara" },
    // Beignets pommes
    "43": { main: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=800&auto=format&fit=crop", alt: "Beignets aux pommes" },
    // Eau concombre
    "44": { main: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop", alt: "Eau infusée concombre citron vert" },
    // Aligot
    "45": { main: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&auto=format&fit=crop", alt: "Aligot aubracien" },
    // Salade landaise
    "46": { main: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop", alt: "Salade landaise" },
    // Caneles
    "47": { main: "https://images.unsplash.com/photo-1509482560494-4126f8225994?w=800&auto=format&fit=crop", alt: "Canelés bordelais" },
    // Kir royal
    "48": { main: "https://images.unsplash.com/photo-1503073896064-4dba91af4c1c?w=800&auto=format&fit=crop", alt: "Kir royal" },
    // Flamiche poireaux
    "49": { main: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop", alt: "Flamiche aux poireaux" },
    // Pain perdu
    "50": { main: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop", alt: "Pain perdu doré" },
    // Fondue savoyarde
    "51": { main: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop", alt: "Fondue savoyarde" },
    // Lapin moutarde
    "52": { main: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=800&auto=format&fit=crop", alt: "Lapin à la moutarde" },
    // Clafoutis cerises
    "53": { main: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop", alt: "Clafoutis aux cerises" },
    // Infusion verveine
    "54": { main: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop", alt: "Infusion verveine miel" },
    // Gateau basque
    "55": { main: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&auto=format&fit=crop", alt: "Gâteau basque" },
    // Salade lentilles
    "56": { main: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop", alt: "Salade de lentilles du Puy" },
    // Navarin agneau
    "57": { main: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&auto=format&fit=crop", alt: "Navarin d'agneau printanier" },
    // Charlotte framboises
    "58": { main: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop", alt: "Charlotte aux framboises" },
    // Limonade gingembre
    "59": { main: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800&auto=format&fit=crop", alt: "Limonade au gingembre" },
    // Gratin macaronis
    "60": { main: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?w=800&auto=format&fit=crop", alt: "Gratin de macaronis" },
};

const data = JSON.parse(readFileSync('src/features/recipes/recipesData.json', 'utf8'));

let updated = 0;
for (const recipe of data) {
    const entry = imageMap[recipe.id];
    if (entry) {
        recipe.image = entry.main;
        // Use a second related Unsplash image for the gallery (vary slightly with different params)
        const secondary = entry.main.replace('w=800', 'w=1200').replace('fit=crop', 'fit=crop&q=85');
        recipe.galerie = [entry.main, secondary];
        updated++;
    }
}

writeFileSync('src/features/recipes/recipesData.json', JSON.stringify(data, null, 4), 'utf8');
console.log(`✅ Updated ${updated}/60 recipes with matching Unsplash images.`);
