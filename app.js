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
    arrItem.classList.add('test');
    arrItem.addEventListener('click', () => {
      arrItem.style.color = 'green';
    });
    arrItem.textContent += element;
    return list.append(arrItem);
  });
};
fillArray(arrayOfColors);

const findColor = (e) => {
  let finput = e.target.value.toLowerCase();

  let testArr = document.querySelectorAll('.test');
  for (let i = 0; i < testArr.length; i++) {
    const element = testArr[i].textContent.toLowerCase();
    if (element.includes(finput)) {
      testArr[i].style.display = 'block';
      document.title = finput;
    } else {
      testArr[i].style.display = 'none';
    }
  }
};

inp.addEventListener('keyup', findColor);
clearInput.addEventListener('click', () => {
  inp.value = '';
});
