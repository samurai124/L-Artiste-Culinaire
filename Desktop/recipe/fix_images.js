import fs from 'fs';
import https from 'https';
import { URL } from 'url';

const data = JSON.parse(fs.readFileSync('./src/features/recipes/recipesData.json', 'utf8'));

// Identify duplicates
const imageMap = {};
data.forEach(r => {
    let imgId = r.image;
    if (r.image.includes('photo-')) {
        imgId = r.image.split('photo-')[1].split('?')[0];
    }
    if (!imageMap[imgId]) {
        imageMap[imgId] = [];
    }
    imageMap[imgId].push(r);
});

const needsFixing = [];
for (const [imgId, recipes] of Object.entries(imageMap)) {
    if (recipes.length > 1) {
        // Keep the first one, fix the rest
        for (let i = 1; i < recipes.length; i++) {
            needsFixing.push(recipes[i]);
        }
    }
}

console.log(`Found ${needsFixing.length} recipes to fix.`);

const fetchUnsplashId = (query) => {
    return new Promise((resolve, reject) => {
        const q = encodeURIComponent(`site:unsplash.com photo ${query} food`);
        https.get({
            hostname: 'html.duckduckgo.com',
            path: `/html/?q=${q}`,
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        }, (res) => {
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => {
                const matchs = body.match(/unsplash\.com%2Fphotos%2F[a-zA-Z0-9-]+-([a-zA-Z0-9]{11})/);
                if (matchs && matchs[1]) {
                    resolve(matchs[1]);
                } else {
                    const altMatch = body.match(/unsplash\.com\/photos\/[a-zA-Z0-9-]+-([a-zA-Z0-9]{11})/);
                    if (altMatch && altMatch[1]) {
                        resolve(altMatch[1]);
                    } else {
                        resolve(null);
                    }
                }
            });
        }).on('error', reject);
    });
};

const delay = ms => new Promise(r => setTimeout(r, ms));

async function run() {
    let updated = 0;
    for (const recipe of needsFixing) {
        let query = recipe.titre.replace(/[^a-zA-Z0-9 ]/g, ' ');
        // Translate to english roughly for better unsplash results
        const translations = {
            "Soupe à l'Oignon": "onion soup",
            "Vichyssoise": "potato leek soup",
            "Salade Niçoise": "nicoise salad",
            "Salade Landaise": "french salad",
            "Salade de Lentilles du Puy": "lentil salad",
            "Gratin Dauphinois": "potato gratin",
            "Aligot Aubracien": "mashed potatoes cheese",
            "Pissaladière": "onion tart",
            "Flamiche aux Poireaux": "leek tart",
            "Gâteau Basque": "cherry cake",
            "Limonade au Gingembre": "ginger lemonade",
            "Financiers aux Pistaches": "pistachio cake",
            "Cassoulet Toulousain": "bean stew",
            "Navarin d'Agneau": "lamb stew",
            "Sorbet Citron": "lemon sorbet",
            "Clafoutis aux Cerises": "cherry pie",
            "Charlotte aux Framboises": "raspberry cake",
            "Confit de Canard": "duck leg",
            "Lapin à la Moutarde": "mustard meat",
            "Eau de Concombre": "cucumber water",
            "Infusion Verveine": "herbal tea",
            "Canelés Bordelais": "canele pastry",
            "Gratin de Macaronis": "macaroni cheese"
        };

        for (const [fr, en] of Object.entries(translations)) {
            if (recipe.titre.includes(fr)) {
                query = en;
                break;
            }
        }

        console.log(`Fetching image for: ${recipe.titre} (query: ${query})...`);
        const id = await fetchUnsplashId(query);
        if (id) {
            console.log(`  -> Found ID: ${id}`);
            recipe.image = `https://images.unsplash.com/photo-${id}?w=800&auto=format&fit=crop`;
            if (recipe.galerie) {
                recipe.galerie = [
                    recipe.image,
                    `https://images.unsplash.com/photo-${id}?w=1200&auto=format&fit=crop&q=85`
                ];
            }
            updated++;
        } else {
            console.log(`  -> Could not find ID for ${recipe.titre}`);
            // Fallback to loremflickr
            const cleanQuery = query.replace(/\s+/g, ',');
            recipe.image = `https://loremflickr.com/800/800/food,${cleanQuery}`;
            if (recipe.galerie) {
                recipe.galerie = [
                    recipe.image,
                    `https://loremflickr.com/1200/1200/food,${cleanQuery}`
                ];
            }
            updated++;
        }
        await delay(1000); // 1s delay to prevent rate limit
    }

    if (updated > 0) {
        fs.writeFileSync('./src/features/recipes/recipesData.json', JSON.stringify(data, null, 4), 'utf8');
        console.log('Saved recipesData.json');
    }
}

run().catch(console.error);
