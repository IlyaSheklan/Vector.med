'use strict';

// Slider main
(function(){
    	
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

    });

})();

// Modal Validation
(function(){
    if(!!window.OrderModal){
        return;
    }

    window.OrderModal = function(formId, formData = {}){
        this.formId = formId;

        this.init();
        this._send();
    }

    window.OrderModal.prototype = {
        _send: function(e) {
            // e.preventDefault();

            this.form.classList.remove('was-validated');
            if(!this.form.checkValidity()){
                this.form.classList.add('was-validated');
                return false;
            }
        },

        init: function() {
            this.form = document.querySelector('#' + this.formId);
            console.log(this.form);

            if(!this.form){
                return false;
            }
        }
    }
})();