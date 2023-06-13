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

        this.$form;
        this.$phoneList = [];

        this.init();
    }

    window.OrderModal.prototype = {
        _phoneInit: function () {
            this.$phoneList = Array.from(this.$form.querySelectorAll('input[type="tel"]'));

            if (!this.$phoneList.length || typeof Inputmask === 'undefined') {
                return false;
            }

            var im = new Inputmask('+7 (999) 999-99-99');
            for (var idx in this.$phoneList) {
                im.mask(this.$phoneList[idx]);
            }
        },

        _send: function(e) {
            e.preventDefault();

            this.$form.classList.remove('was-validated');
            if(!this.$form.checkValidity()){
                this.$form.classList.add('was-validated');
                return false;
            }

            var body = new FormData(this.$form);
            console.log(body.get('name'));
        },

        init: function() {
            this.$form = document.querySelector('#' + this.formId);

            if(!this.$form){
                return false;
            }

            this._phoneInit();
            
            this.$form.addEventListener('submit', this._send.bind(this));
        }
    }
})();