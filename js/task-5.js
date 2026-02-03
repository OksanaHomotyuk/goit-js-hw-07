const widgetEl = document.querySelector('.widget');

widgetEl.addEventListener('click', onWidgetClick);

function onWidgetClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `#${color}`;
  widgetEl.querySelector('.color').textContent = `#${color}`;
}

function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
