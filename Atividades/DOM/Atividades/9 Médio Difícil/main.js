const thumbnails = document.querySelectorAll('.thumbnail')
const mainImage = document.querySelector('.main-image')

function changeMainImage(newSrc){
    mainImage.style.opacity = '0';

    setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.style.opacity = '1'
    }, 200)
}

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){

        thumbnails.forEach(t => t.classList.remove('active'))

        this.classList.add('active')

        const newSrc = this.getAttribute('data-src')

        changeMainImage(newSrc);
    })
});