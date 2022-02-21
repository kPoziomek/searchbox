const arrayOfColors = [
  'aqua',
  'azure',
  'Brown',
  'CadetBlue',
  'Bisque',
  'Coral',
  'Cyan',
  'DarkOrchid',
  'DarkTurquoise',
  'DimGrey',
  'DodgerBlue',
];

const inp = document.getElementById('find-color');
const list = document.getElementById('color-list');
const clearInput = document.getElementById('clear-btn');

const fillArray = (arr) => {
  arr.map((element) => {
    const arrItem = document.createElement('li');
    arrItem.addEventListener('click', () => {
      arrItem.style.color = 'green';
    });
    arrItem.textContent += element;
    return list.append(arrItem);
  });
};
fillArray(arrayOfColors);

const findColor = (e) => {
  let finput = e.target.value;

  const pageTitle = arrayOfColors.find((el) => el === finput);
  if (pageTitle) {
    document.title = pageTitle;
  } else {
    document.title = 'Search Box';
  }
};

inp.addEventListener('keyup', findColor);
clearInput.addEventListener('click', () => {
  inp.value = '';
});
