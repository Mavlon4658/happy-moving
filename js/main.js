let checkbox = document.querySelectorAll('.checkbox'),
    inputs = document.querySelectorAll('.input'),
    review_slider = document.querySelector('.review__slider .swiper'),
    review__item = document.querySelectorAll('.review__item'),
    header = document.querySelector('.header'),
    nav_accordion = document.querySelectorAll('.nav_accordion'),
    header_bar = document.querySelector('.header__bars'),
    header_scroll_nav = document.querySelector('.header__scroll_nav'),
    mobile_menu_btn = document.querySelector('.mobile_menu_btn'),
    mobile_menu = document.querySelector('.mobile_menu'),
    offer_swiper = document.querySelector('.offer .swiper'),
    footer__navs_item = document.querySelectorAll('.footer__navs_item'),
    open_city_modal = document.querySelectorAll('.city_modal__open'),
    modals = document.querySelectorAll('.modal'),
    city_modal = document.querySelector('.city_modal'),
    modal_close = document.querySelectorAll('.modal__close'),
    request_modal = document.querySelector('.request_modal'),
    request_modal_open = document.querySelectorAll('.request_modal__open'),
    thanks_modal = document.querySelector('.thanks_modal'),
    thanks_modal_open = document.querySelectorAll('.thanks_modal__open'),
    services_card = document.querySelectorAll('.services_card');

if (services_card.length) {
    services_card.forEach(el => {
        let servicesCard = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 20,
            breakpoints: {
                992: {
                    slidesPerView: 3
                }
            },
            navigation: {
                nextEl: el.querySelector('.services_card__btn_next'),
                prevEl: el.querySelector('.services_card__btn_prev'),
            }
        })
    })
}

function modalClose () {
    modals.forEach(modal => {
        modal.classList.remove('active');
    })
}

modal_close.forEach(btn => {
    btn.onclick = () => {
        modalClose();
    }
})



thanks_modal_open.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        modalClose();
        thanks_modal.classList.add('active');
    }
})

request_modal_open.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        modalClose();
        request_modal.classList.add('active');
    }
})

open_city_modal.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        modalClose();
        city_modal.classList.add('active');
    }
})

footer__navs_item.forEach(el => {
    let btn = el.querySelector('h5');
    btn.onclick = () => {
        footer__navs_item.forEach(nav => {
            if (el != nav) {
                nav.classList.remove('active');
            }
        })
        el.classList.toggle('active');
    }
})

if (checkbox.length) {
    checkbox.forEach((el, idx) => {
        let inp = el.querySelector('input[type="checkbox"]');
        if (inp && inp.checked) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }

        el.onclick = () => {
            inp.click();
            if (inp && inp.checked) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    })
}

if (inputs.length) {
    inputs.forEach(inp => {
        let i = inp.querySelector('input');
        let l = inp.querySelector('label');

        const checkInputVal = () => {
            if (i.value.length) {
                l.classList.add('active');
            } else {
                l.classList.remove('active');
            }
        }

        checkInputVal()

        l.onclick = () => {
            i.focus();
        }

        i.onfocus = () => {
            l.classList.add('active');
        }

        i.onblur = () => {
            checkInputVal();
        }

        if (inp.classList.contains('phone')) {
            IMask(i, { mask: '+{7} (000) 000-00-00' });
            t = true;
            i.oninput = e => {
                let inp_text = e.target.value;
                if (t) {
                    if (inp_text.length == 4) {
                        inp.value = inp_text.slice(0, -2);
                    }
                    t = false;
                }

                if (!inp_text.length) {
                    t = true;
                }
            }
        }
    })
}

if (review_slider) {
    let reviwSlider = new Swiper(review_slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            850: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: ".review__slider_pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".review__slider_btn__next",
            prevEl: ".review__slider_btn__prev",
        },
    })
}

if (review__item.length) {
    review__item.forEach((review, review_ID) => {
        let p = review.querySelector('.review__item_description p'),
            btn = review.querySelector('.review__item_show'),
            p_wrap = review.querySelector('.review__item_description');

        let str = p.textContent;
        let putMaxLength = () => {
            let maxLength = 560;

            if (window.innerWidth > 1240 && window.innerWidth < 1300) {
                maxLength = 540;
            } else if (window.innerWidth > 1200 &&  window.innerWidth < 1240) {
                maxLength = 520;
            } else if (window.innerWidth > 1090 &&  window.innerWidth <= 1200) {
                maxLength = 750;
            } else if (window.innerWidth > 960 &&  window.innerWidth <= 1090) {
                maxLength = 650;
            } else if (window.innerWidth > 930 &&  window.innerWidth <= 960) {
                maxLength = 610;
            } else if (window.innerWidth > 850 &&  window.innerWidth <= 930) {
                maxLength = 570;
            } else if (window.innerWidth <= 850) {
                maxLength = 550;
            }

            if (str.length > maxLength && !p_wrap.classList.contains('active')) {
                let strLeft = str.substring(0, maxLength / 2);
                let strWithEllipsis = strLeft + '... ';
                p.textContent = strWithEllipsis;
            }
        }

        putMaxLength();

        window.addEventListener('resize', function () {
            putMaxLength();
        })

        btn.onclick = () => {
            p_wrap.classList.add('active');
            p.textContent = str;
        }

        review.onclick = e => {
            if (e.target != btn) {

                review__item.forEach((rev, rev_ID) => {
                    yandex = rev.querySelector('.review__item_yandex');

                    if (rev_ID == review_ID) {
                        yandex.classList.add('active')
                    } else {
                        yandex.classList.remove('active')
                    }
                })
            }
        }
    })
}

let init = false;
let offerSwiper;

function swiperCard1() {
    let w = this.window.innerWidth;
    if (w <= 992) {
        if (!init) {
            init = true;
            offerSwiper = new Swiper(offer_swiper, {
                slidesPerView: 'auto',
                spaceBetween: 15,
            });
        }
    } else if (init) {
        offerSwiper.destroy();
        init = false;
    }
}

if (offer_swiper) {
    swiperCard1();
}

window.addEventListener('resize', function () {
    if (offer_swiper) {
        swiperCard1();
    }
})

headerPosition();

window.addEventListener('scroll', function () {
    headerPosition();
})

function headerPosition() {

    if (scrollY >= 620) {
        header.classList.add('active');
    } else {
        if (header.classList.contains('active')) {
            header.classList.remove('active');
            header.classList.add('end-active');
            setTimeout(() => {
                header.classList.remove('end-active');
            }, 300);
        }
    }
}

if (nav_accordion.length) {
    nav_accordion.forEach(el => {
        let btn = el.querySelector('.nav_btn')
        let list = el.querySelector('.accordion_list')
        btn.onclick = e => {
            e.preventDefault();
            list.style.maxHeight = list.style.maxHeight ? null : list.scrollHeight + 'px';
            list.classList.toggle('active');
            btn.classList.toggle('active');

            header_scroll_nav.style.maxHeight = header_scroll_nav.scrollHeight + 'px'

            nav_accordion.forEach(acr => {
                if (acr != el) {
                    let l = acr.querySelector('.accordion_list');
                    let b = acr.querySelector('.nav_btn');
                    b.classList.remove('active');
                    l.classList.remove('active');
                    l.style.maxHeight = null;
                }
            })
        }
    })
}

header_bar.onclick = () => {
    header_scroll_nav.classList.toggle('active');
    header_scroll_nav.style.maxHeight = header_scroll_nav.style.maxHeight ? null : header_scroll_nav.scrollHeight + 'px'
}

mobile_menu_btn.onclick = e => {
    e.preventDefault();
    mobile_menu.classList.toggle('active')
    mobile_menu_btn.classList.toggle('active');
}

document.addEventListener('click', event => {
    const isHeaderScrollNav = event.composedPath().includes(header_scroll_nav)
    const isHeaderBar = event.composedPath().includes(header_bar)

    if (!isHeaderScrollNav && !isHeaderBar) {
        header_scroll_nav.classList.remove('active');
        header_scroll_nav.style.maxHeight = null
    }
})