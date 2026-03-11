const card = document.getElementById('.song');
const artist = document.getElementById('.artist')
const playBtn = document.getElementById('.play');

card.addEventListener('mouseenter', () => { // Quando o mouse estiver sobre o botão...
  playBtn.classList.add('visible');
});

card.addEventListener('mouseleave', () => { // Quando o mouse estiver fora do botão...
  playBtn.classList.remove('visible');
});

artist.addEventListener('mouseenter', () => {
  playBtn.classList.add('visible');
});

artist.addEventListener('mouseleave', () => {
  playBtn.classList.remove('visible');
});