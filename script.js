var n;
var k = 1;

window.onload = function () {
    history.pushState(k, null, "page"
            + k + ".html");
}

function F1() {
    k = 1;
    var a = '';
    n = document.getElementById('n').value;
    for (var i = 1; i <= n; i++) {
        a = a + '<div id="s' + i + '" class="c1">' + i + ' HELLO WORLD!</div>';


    }


    document.getElementById('main').innerHTML = a;

}



function F() {
    n = document.getElementById('n').value;
    if (k < n) {
        document.getElementById('s' + k).style.display = 'none';
        k = k + 1;
        document.getElementById('s' + k).style.display = 'block';
        history.pushState(k, null, "page"
            + k + ".html");
    }
    // else {
    //     document.getElementById('s' + k).style.display = '#6a1b9a';
    //     k = 1;
    //     document.getElementById('s' + k).style.display = '#ba68c8';
    // }
}
function B() {
    n = document.getElementById('n').value;
    if (k > 1) {
        document.getElementById('s' + k).style.display = 'none';
        k = k - 1;
        document.getElementById('s' + k).style.display = 'block';
        history.pushState(k, null, "page"
            + k + ".html");
    }
    // else {
    //     document.getElementById('s' + k).style.display = '#6a1b9a';
    //     k = n;
    //     document.getElementById('s' + k).style.display = '#ba68c8';
    // }


}

window.onpopstate = function(e) {
    if (e.state != null) {

      document.getElementById('s' + k).style.display = 'none';
      k = e.state;
      
      // Запрашиваем этот слайд у веб-сервера

        if (k!=1)
        {
      goToNewSlide();
        }
        else
        {
            alert('Вы собираетесь покинуть нас');
        }
    }
  }

function goToNewSlide() {

    document.getElementById('s' + k).style.display = 'block';
    // history.pushState(k, null, "page"+ k + ".html");

}





