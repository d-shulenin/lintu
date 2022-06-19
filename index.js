const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: 'smooth',
        })
    })
})

burger.addEventListener('click', function() {
    menu.classList.toggle('active')
    }
)

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function toggleActive() {
    if(burger.classList.contains('opened')) {
        menu.classList.remove('active')
        burger.classList.toggle('opened')
    }
}

function onVisible(element, callback) {
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(!entry.intersectionRatio > 0) {
          callback();
        }
      });
    }).observe(element);
  }

onVisible(menu, toggleActive)

