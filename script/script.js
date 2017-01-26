window.onload = function () {
   // открытие подпунктов меню
    var elems_subparagraph = document.getElementsByClassName('subparagraph');

    for (var i = 0; i < elems_subparagraph.length; i++) {

        elems_subparagraph[i].parentNode.firstChild.onclick = function(x) {

        return function (){

                elems_subparagraph[x].classList.toggle('hide_elem')

            };

        }(i);
    }
}

