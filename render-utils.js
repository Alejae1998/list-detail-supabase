export function renderCreature(creature) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');
    div.classList.add('creature-card');
    p.textContent = creature.name;
    img.src = `./assets/${creature.name}.jpeg`;
    a.href = ''; //link to creatures detail page

    div.append(p, img);
    a.append(div);
    return a;
}
export function renderCreatureDetail(creature) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');

    div.classList.add('creature-detail');
    nameEl.textContent = creature.name;
    nameEl.classList.add('name');
    descriptionEl.textContent = creature.description;
    descriptionEl.classList.add('description');

    img.src = `./assets/${creature.name}.jpeg`;

    div.append(nameEl, img, descriptionEl);

    return div;
}
