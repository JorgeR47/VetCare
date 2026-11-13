const params = new URLSearchParams(location.search);
const mascota = document.querySelector('#mascota');
if (mascota && params.get('mascota') === '1') mascota.value = '1';
if (document.querySelector('#confirmacion') && ['mascota','servicio','veterinario','fecha','hora'].every(k => params.get(k))) document.querySelector('#confirmacion').hidden = false;
const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
document.querySelectorAll('[data-past]').forEach(input => input.max = today);
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
document.querySelectorAll('[data-search]').forEach(search => {
  const table = document.getElementById(search.dataset.search);
  const filter = () => {
    let visible = 0;
    table.querySelectorAll('tbody tr').forEach(row => {
      const matches = normalize(row.textContent).includes(normalize(search.value)) && [['especie-filtro','especie'],['filtro-fecha','fecha'],['filtro-estado','estado'],['filtro-veterinario','veterinario']].every(([id,key]) => { const el = document.getElementById(id); return !el || !el.value || row.dataset[key] === el.value; });
      row.hidden = !matches; if(matches) visible++;
    });
    document.querySelector('#sin-resultados').hidden = visible > 0;
  };
  search.addEventListener('input',filter);
  document.querySelectorAll('select, input[type="date"]').forEach(el => el.addEventListener('change',filter));
});
const deletion = document.querySelector('[data-delete]');
if(deletion && (+deletion.dataset.citas > 0 || +deletion.dataset.atenciones > 0)) { deletion.querySelector('button').disabled = true; deletion.querySelector('[data-blocked]').hidden = false; deletion.addEventListener('submit', e => e.preventDefault()); }
