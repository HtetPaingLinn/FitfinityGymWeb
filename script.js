const Slider =document.querySelector('.ComSlider');
const leftArrow =document.querySelector('.left');
const rightArrow =document.querySelector('.right');

var sectionIndex =0;

leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex>0) ? sectionIndex - 1 :4 ;
    Slider.style.transform ='translate(' + (sectionIndex) * -20 + '%)';
});

rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex<4) ? sectionIndex + 1 :0 ;
    Slider.style.transform ='translate(' + (sectionIndex) * -20 + '%)';
});