import { getCreature } from '../fetch-utils.js';
import { renderCreatureDetail } from '../render-utils.js';

const creatureDetailContainer = document.getElementById('beast-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const creature = await getCreature(id);
    const creatureDetail = renderCreatureDetail(creature);

    creatureDetailContainer.append(creatureDetail);
});
