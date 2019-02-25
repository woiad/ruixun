$(document).ready(function () {
    $('.nav-container').load('../../template/public_nav.html', function () {
        var script1 = document.createElement("script");
        var script2 = document.createElement('script');
        script1.type = "text/javascript";
        script1.src = "../../js/dropdown.js";
        script2.type= "text/javascript";
        script2.src = '../../js/menuzord.js';
        document.body.appendChild(script2);
        document.body.appendChild(script1);

    })
    $('.footer-container').load('../../template/public_footer.html')
    $('.float-container').load('../../template/public_float.html')

    $(".account-nav li").on('click', function(){
        var ind = $(this).index()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        if (ind == 0) {
            $('.other-account').css({'display':'block'})
            $('.company-account').css({'display': 'none'})
        } else if (ind == 1) {
            $('.other-account').css({'display':'none'})
            $('.company-account').css({'display': 'block'})
        }
    })
})
