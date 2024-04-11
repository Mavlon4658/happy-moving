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
    modal_bg = document.querySelectorAll('.modal__bg'),
    request_modal = document.querySelector('.request_modal'),
    feedback_modal = document.querySelector('.feedback_modal'),
    request_modal_open = document.querySelectorAll('.request_modal__open'),
    feedback_modal_open = document.querySelectorAll('.feedback_modal__open'),
    thanks_modal = document.querySelector('.thanks_modal'),
    thanks_modal_2 = document.querySelector('.thanks_modal_2'),
    thanks_modal_open = document.querySelectorAll('.thanks_modal__open'),
    thanks_modal_2_open = document.querySelectorAll('.thanks_modal_2__open'),
    services_card = document.querySelectorAll('.services_card'),
    fixed_bottom = document.querySelector('.fixed_bottom');

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

modal_bg.forEach(el => {
    el.onclick = () => {
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

thanks_modal_2_open.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        modalClose();
        thanks_modal_2.classList.add('active');
    }
})

request_modal_open.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        modalClose();
        request_modal.classList.add('active');
    }
})

feedback_modal_open.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        modalClose();
        feedback_modal.classList.add('active');
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
        let select = inp.querySelector('.select_list')
        let select_btn = inp.querySelectorAll('.select_list button');
        let icon = document.querySelector('.icon');

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
            inp.classList.add('active');
            
            if (select) {
                select.classList.add('active');
                icon.classList.add('active');
            }
        }
        
        i.onblur = () => {
            checkInputVal();
            inp.classList.remove('active');
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

        if (select_btn.length) {
            select_btn.forEach(btn => {
                btn.onclick = () => {
                    i.value = btn.textContent;
                    select.classList.remove('active');
                    icon.classList.remove('active');

                    select_btn.forEach(el => {
                        if (btn == el) {
                            el.classList.add('active');
                        } else {
                            el.classList.remove('active');
                        }
                    })
                }
            })
        }
    })
}

if (review_slider) {
    let reviwSlider = new Swiper(review_slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 2,
            },
            850: {
                slidesPerView: 1,
            }
        },
        pagination: {
            el: ".review__slider_pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".review__slider_btn__next",
        },
    })
}


if (review__item.length) {
    review__item.forEach((review, review_ID) => {
        let p = review.querySelector('.review__item_description p'),
            btn = review.querySelector('.review__item_show'),
            p_wrap = review.querySelector('.review__item_description');

        if (p) {
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

let init2 = false;
let offerSwiper2;
let chief_swiper = document.querySelector('.employee_home .chief .swiper')

function swiperCard2() {
    let w = this.window.innerWidth;
    if (w <= 992) {
        if (!init2) {
            init2 = true;
            offerSwiper2 = new Swiper(chief_swiper, {
                slidesPerView: 'auto',
                spaceBetween: 15,
            });
        }
    } else if (init2) {
        offerSwiper2.destroy();
        init2 = false;
    }
}

let init3 = false;
let offerSwiper3;
let manager_swiper = document.querySelector('.employee_home .manager .swiper')

function swiperCard3() {
    let w = this.window.innerWidth;
    if (w <= 992) {
        if (!init3) {
            init3 = true;
            offerSwiper3 = new Swiper(manager_swiper, {
                slidesPerView: 'auto',
                spaceBetween: 15,
            });
        }
    } else if (init3) {
        offerSwiper3.destroy();
        init3 = false;
    }
}

if (chief_swiper) {
    swiperCard2();
}

if (manager_swiper) {
    swiperCard3();
}

if (offer_swiper) {
    swiperCard1();
}

let articles_cards = document.querySelectorAll('.articles_home__card_item');
let articles_card_more = document.querySelector('.articles_card_more');
let articles_length = 9;

if (window.innerWidth <= 992) {
    articles_length = 3;
}

function sortArticlesCard () {
    articles_cards.forEach((el, idx) => {
        if (articles_length > idx) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
}

if (articles_card_more) {
    articles_card_more.onclick = () => {
        articles_length += 3;
        sortArticlesCard();
    }
}

if (articles_cards.length) {
    sortArticlesCard();
}

let review_card__descriptions = document.querySelectorAll('.review_card__descriptions');
let review_more_btn = document.querySelector('.review_card_more');
let reviewText = [];
let sortLength = 3;

function sortReviewCard () {
    document.querySelectorAll('.review_card').forEach((el, idx) => {
        if (sortLength <= idx) {
            el.classList.add('hidden');
        } else {
            el.classList.remove('hidden');
        }
    })
}

if (review_more_btn) {
    sortReviewCard();
    
    review_more_btn.onclick = () => {
        sortLength += 3;
        sortReviewCard();
    }
}

if (review_card__descriptions) {
    review_card__descriptions.forEach((el, idx) => {
        
        let p = el.querySelector('p'),
            btn = el.querySelector('button'),
            p_wrap = el.querySelector('.review__item_description');

        let str = p.textContent;
        let putMaxLength = (w) => {
            if (w <= 992) {
                let maxLength = 240;

                if (w >= 396 && w <= 431) {
                    maxLength = 270;
                } else if (w > 431 && w <= 487) {
                    maxLength = 310;
                } else if (w > 487 && w <= 538) {
                    maxLength = 350;
                } else if (w > 538 && w <= 582) {
                    maxLength = 400;
                } else if (w > 582 && w <= 660) {
                    maxLength = 450
                } else if (w > 660 && w <= 760) {
                    maxLength = 520;
                } else if (w > 760 && w <= 887) {
                    maxLength = 615;
                } else if (w > 887) {
                    maxLength = 710;
                }
    
                if (str.length > maxLength && !el.classList.contains('active')) {
                    p.textContent = str.slice(0, maxLength) + '... ';
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }

            } else {
                p.textContent = str;
            }
        }

        putMaxLength(window.innerWidth);

        window.addEventListener('resize', function () {
            putMaxLength(this.window.innerWidth);
        })

        btn.onclick = () => {
            el.classList.add('active');
            btn.classList.remove('active');
            p.textContent = str;
        }
    })
}

window.addEventListener('resize', function () {
    if (offer_swiper) {
        swiperCard1();
    }

    if (chief_swiper) {
        swiperCard2();
    }

    if (manager_swiper) {
        swiperCard3();
    }

    if (this.window.innerWidth <= 992) {
        articles_length = 3;
    } else {
        articles_length = 9;
    }

    if (articles_cards.length) {
        sortArticlesCard();
    }
})

headerPosition();

window.addEventListener('scroll', function () {
    headerPosition();
})

function headerPosition() {

    if (scrollY >= 620) {
        header.classList.add('active');
        fixed_bottom.classList.add('active')
    } else {
        fixed_bottom.classList.remove('active')
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

let price_more_btn = document.querySelector('.price_home__more_btn');
let price_more_data = document.querySelector('.price_home__more')

if (price_more_data) {
    price_more_btn.onclick = () => {
        price_more_data.classList.toggle('active');
        let t = price_more_btn.textContent;

        if (t == 'Читать далее') {
            price_more_btn.textContent = 'Скрыть';
        } else {
            price_more_btn.textContent = 'Читать далее';
        }
    }
}

let company = new Swiper('.company_employees .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: '.company_employees .swiper_btn_next',
        prevEl: '.company_employees .swiper_btn_prev',
    }
});