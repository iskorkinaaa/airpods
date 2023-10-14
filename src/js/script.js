//смена цвета
const chooseColor = document.querySelectorAll('.choose__btn'),
      contentItem = document.querySelectorAll('.content_item');

chooseColor.forEach(function(element){
  element.addEventListener('click', open)
})

function open(event){
  const target = event.currentTarget; //поиск того, на кого нажали
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function(item){
    item.classList.remove('choose__btn--active')
  })

  target.classList.add('choose__btn--active')

  contentItem.forEach(function(item){
    item.classList.remove('content_item--active')
  });

  contentActive.forEach(function(item){
    item.classList.add('content_item--active')
  })
}