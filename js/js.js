let wrapper = document.querySelector('.block-wrapper')
let slides = document.querySelectorAll('.block-wrapper__elem-slide');
let wrapperWidth = document.querySelector('.block-wrapper').getBoundingClientRect().width;

let temp = []
slides.forEach((slide) => {
    temp.push(slide.getBoundingClientRect().left)
})

document.body.querySelectorAll('[for]').forEach((element, index) => {
    element.addEventListener('click', (e) => {
        wrapper.scrollTo(temp[index]-wrapperWidth/4,0);
    })
});

document.getElementById('showAll').addEventListener('click', (e)=>{
    if (e.currentTarget.querySelector('.block-icon__mod-expandRotate05')) {
        e.currentTarget.querySelector('.block-icon__mod-expandRotate05').classList.remove('block-icon__mod-expandRotate05')
        e.currentTarget.querySelector('.block-buttonShow__elem-text').textContent = 'Показать все';
        slides.forEach(element => {
            element.classList.remove('block-wrapper__elem-slide__mod_visible');
        });
        return;
    }
    e.currentTarget.querySelector('.block-icon__mod-expand').classList.add('block-icon__mod-expandRotate05');
    e.currentTarget.querySelector('.block-buttonShow__elem-text').textContent = 'Скрыть';
    slides.forEach(element => {
        element.classList.add('block-wrapper__elem-slide__mod_visible');
    });
})