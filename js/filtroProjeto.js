const filtroDeProjeto = document.querySelector('#categoria-produto');

filtroDeProjeto.addEventListener('change', (event) => {
  const categoria = Number(event.target.value);
  const projeto1 = document.querySelector('.projeto-card[data-id="1"]');
  const projeto2 = document.querySelector('.projeto-card[data-id="2"]');
  const projeto3 = document.querySelector('.projeto-card[data-id="3"]');

  switch (categoria) {
    case 1:
      projeto1.style.display = 'block';
      projeto2.style.display = 'none';
      projeto3.style.display = 'none';
      break;

    case 2:
      projeto1.style.display = 'none';
      projeto2.style.display = 'block';
      projeto3.style.display = 'none';
      break;

    case 3:
      projeto1.style.display = 'none';
      projeto2.style.display = 'none';
      projeto3.style.display = 'block';
      break;

    default:
      projeto1.style.display = 'block';
      projeto2.style.display = 'block';
      break;
  }
});