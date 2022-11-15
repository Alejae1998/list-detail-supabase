/* Imports */
import { renderCreature } from './render-utils.js';
import { getAllCreatures } from './fetch-utils.js';

const creatureListContainer = document.getElementById('beasts-list-container');

window.addEventListener('load', async () => {
    const creatures = await getAllCreatures();

    for (let creature of creatures) {
        const creatureEl = renderCreature(creature);
        creatureListContainer.append(creatureEl);
    }
});

// (don't forget to call any display functions you want to run on page load!)
