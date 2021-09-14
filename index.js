$('.carousel').carousel({
    interval: 5000
});

$('#enviar').on('click', function(e){
    var input_email = $('#email').val();

    if( input_email == ""){
        $('#email').addClass('border border-danger');
        $('#erro').removeClass('d-none');
        $('#enviado').addClass('d-none');
    }else{
        $('#enviar').addClass('d-none');
        $('#carregando').removeClass('d-none');

        setTimeout( function(){
            $('#enviar').removeClass('d-none');
            $('#carregando').addClass('d-none');
            $('#email').val("");
            $('#email').addClass('border border-success');
            $('#enviado').removeClass('d-none');
        }, 2000);
    }
});

$('#email').on('focus', function(e){
    $('#email').removeClass('border border-danger');
    $('#erro').addClass('d-none');
    $('#email').removeClass('border border-success');
    $('#enviado').addClass('d-none');
});

$('#botao_menu_md').on('click', function(e){
    $('#link_menu_md').removeClass('d-none');
});