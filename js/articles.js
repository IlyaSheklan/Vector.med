'use strict';

// Articles cards
(function(){
    document.addEventListener('DOMContentLoaded', function(){
        var allArticles = document.querySelectorAll('.articles .category-cards__item');

        if(allArticles){
            for(var i = 0; i <= allArticles.length; i++){
                if((i + 1) % 10 === 0 || i === 0){
                    allArticles[i].classList.add('cards__item--wide');
                }
            }
        }
    })
})();