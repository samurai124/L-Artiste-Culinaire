import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./src/features/recipes/recipesData.json', 'utf8'));

const imageMap = {};
data.forEach(r => {
    let imgId = r.image;
    if (r.image.includes('photo-')) {
        imgId = r.image.split('photo-')[1].split('?')[0];
    }
    if (!imageMap[imgId]) {
        imageMap[imgId] = [];
    }
    imageMap[imgId].push(`${r.id}: ${r.titre}`);
});

for (const [imgId, recipes] of Object.entries(imageMap)) {
    if (recipes.length > 1) {
        console.log(`Image ${imgId} is used by:`);
        recipes.forEach(r => console.log(`  - ${r}`));
    }
}
