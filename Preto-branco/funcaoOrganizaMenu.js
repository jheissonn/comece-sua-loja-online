funcaoOrganizaMenu = function() {
	var cor_tema = $('meta[name=theme-color]').attr('content');

    if(typeof timer_produtos !== 'undefined' && timer_produtos !== null && timer_produtos.length > 0){
        $(timer_produtos).each(function(k, item){
            var { produto, data, frase, cor_fundo, cor_texto } = item;
            if(typeof produto == 'undefined' || produto == null || produto == ''){ return; }
            if(typeof data == 'undefined' || data == null || data == ''){ return; }
            if(typeof cor_fundo == 'undefined' || cor_fundo == null || cor_fundo == ''){ cor_fundo = cor_tema; }
            if(typeof cor_texto == 'undefined' || cor_texto == null || cor_texto == ''){ cor_texto = '#ffffff'; }
            
            $('.prod-id-'+produto+' .info-produto').append('<div class="timer timer-'+produto+'" style="background-color: '+cor_fundo+' !important; color: '+cor_texto+' !important;"> </div>');
            var data_final = new Date(data).getTime(); 
            var x = setInterval(function() {
                var agora = new Date().getTime();
                var t = data_final - agora; 
                var dias = Math.floor(t / (1000 * 60 * 60 * 24)); 
                var horas = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
                var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
                var segundos = Math.floor((t % (1000 * 60)) / 1000); 
                
                $('.prod-id-'+produto+' .timer-'+produto).html(frase + '<div> <strong>' + dias + '</strong> dias <strong>' + horas + '</strong>h <strong>' + minutos + '</strong>m <strong>' + segundos+'</strong>s </div>');
                
                if (t < 0) { 
                    clearInterval(x); 
                    $('.prod-id-'+produto+' .timer-'+produto).html('Promoção Expirada.'); 
                }
            }, 1000);
        });
    }

    // Altera a cor dos ícones do topo
    $('#cabecalho .carrinho > a i').removeClass('fundo-principal').css('color', cor_tema+' !important');
    $('#rodape .institucional').removeClass('fundo-secundario').addClass('fundo-primario');
    
    // Altera Cor Estrelas Depoimento
    $('.depoimento-star').css('color', cor_tema);
    if($(window).width() > 768){
        if(typeof url_youtube !== 'undefined' && url_youtube !== null && url_youtube.length > 0){
            var youtube_arr = url_youtube.split('/');
            if(youtube_arr.length > 0){
                url_youtube = youtube_arr[youtube_arr.length - 1];
                url_youtube = 'https://www.youtube.com/embed/'+url_youtube;
                $('#corpo').append('<div class="container text-center"><iframe width="996px" height="560px" src="'+url_youtube+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 5px;" ></iframe> <br /> <br /> </div>');               
            }
        }

        var item_pedido = '<div class="span1 item-menu-opcoes fundo-secundario"> <a href="/conta/pedido/listar"> <i class="icon-list"></i> Pedidos </a> </span>';
        var item_minha_conta = '<div class="span1 item-menu-opcoes fundo-secundario"> <a href="/conta/index"> <i class="icon-user"></i> Conta </a> </span>';

        $('#cabecalho .conteudo-topo .inferior .span4').before(item_minha_conta);
        $('#cabecalho .conteudo-topo .inferior .span4').before(item_pedido);
        $('#cabecalho .conteudo-topo .inferior .span4 .carrinho a').find('span').remove();
        $('#barraTopo .carrinho a').find('span').remove();
        $('#cabecalho .conteudo-topo .inferior .span4 .carrinho').append('Carrinho');
        $('#cabecalho .conteudo-topo .inferior .span4').removeClass('span4').addClass('span1');
		$('#cabecalho .conteudo-topo .inferior .span1').removeClass('fundo-secundario');
        $('#cabecalho .conteudo-topo .acoes-conta').remove();

        $('#cabecalho .menu').css('background-color', cor_tema+' !important');

        $('#cabecalho .conteudo-topo .inferior .span1 .icon-user').css({'color': cor_tema+' !important'});
        $('#cabecalho .conteudo-topo .inferior .span1 .icon-list').css({'color': cor_tema+' !important'});
        $('#cabecalho .conteudo-topo .inferior .span1 .icon-shopping-cart').css({'color': cor_tema+' !important'});

        var h_social = $('#rodape .institucional').height() - 60;
        $('#rodape .redes-sociais').css('height', h_social);
        // Alteração Rodapé
        var redes_sociais_rodape = $('.barra-inicial').find('.lista-redes').html();
        var canais_contato_rodape = $('.barra-inicial').find('.canais-contato').html();
        $('#rodape .institucional .span9').removeClass('span9').addClass('span12');
        $('#rodape .institucional .span12 .links-rodape-categorias').removeClass('span4').addClass('span3');
        $('#rodape .institucional .span12 .links-rodape-paginas').removeClass('span4').addClass('span3');
        $('#rodape .institucional .span12 .sobre-loja-rodape').removeClass('span4').addClass('span6');
        $('.sobre-loja-rodape').append('<div class="lista-redes" style="text-align: left;">'+redes_sociais_rodape+'</div>');
        $('.sobre-loja-rodape').append('<div class="canais-contato" style="text-align: left;">'+canais_contato_rodape+'</div>');
        if(typeof barra_topo === 'undefined' || barra_topo === null || barra_topo !== true){ $('.barra-inicial').remove(); } // Remove a barra no topo da loja
    }else{
        
		$('#cabecalho .atalhos-mobile').removeClass('fundo-secundario');
		
        $('#cabecalho .atalhos-mobile .icon-home').css({'color': cor_tema+' !important'});
        $('#cabecalho .atalhos-mobile .icon-user').css({'color': cor_tema+' !important'});
        $('#cabecalho .superior').css('background-color', cor_tema+' !important');
        $('.menu > .nivel-um > .com-filho > a').each(function(k, item){
            $(item).attr('href', 'javascript: void(0);');
        });

        $(document).on('click', '.menu .nivel-um .com-filho', function(e){
            $(this).find('.nivel-dois').toggle();
            $(this).find('.nivel-dois').find('a').find('i').remove();
        });
    }

    $('#cabecalho .conteudo-topo .inferior .item-menu-opcoes a').each(function(){
        $(this).addClass('cor-primaria');
    });

    $('#rodape .lista-redes ul li a i').each(function(){
        $(this).addClass('cor-primaria');
    });

    $('.bandeiras-produto span.bandeira-promocao').each(function(){
        var desconto = $(this).text().replace(" Desconto", "");
        $(this).text("-"+desconto);

    });

    $('.listagem-item').each(function(){
        var produto_id = $(this).find('.trustvox-stars').attr('data-trustvox-product-code');
        $(this).prepend('<a href="/conta/favorito/'+produto_id+'/adicionar" class="adicionar-produto-favorito"></a>');
    });
        
    $('#barraTopo .hidden-phone').each(function(k, i){
        if(k == 1){
            $(this).remove();
        }
    });
    
    $('#barraTopo .span6').each(function(k, i){
        if(k == 0){
            $(this).removeClass('span6');
            $(this).addClass('span9');
        }
        if(k == 1){
            $(this).removeClass('span6');
            $(this).addClass('span8');
        }
        
        if(k == 2){
            $(this).removeClass('span6');
            $(this).addClass('span4');
        }
        
    });
    
    var logo = $('.logo a').clone();
    
    $('#barraTopo .span3 .titulo').eq(0).html(logo);
    
    $('#barraTopo .span3 .titulo a img').eq(0).css({'height': '52px'});
    
    $('.busca-mobile .superior .nivel-um').before('MENU');
    
    var menu_superior = $('.busca-mobile .superior').clone();
    $('.busca-mobile .superior').remove();
    $('.busca-mobile .busca').before(menu_superior);

    $('#rodape > div').eq(2).find('.conteiner > div > div').eq(1).append('<a href="https://devrocket.com.br/" target="_blank"><img src="https://devrocket.com.br/assets/img/logos/logo-devrocket-pequena-min.png" alt="DevRocket" style="height: 18px; margin-top: -2px; padding-left: 10px; padding-right: 10px;" /></a>');
    
    var icone_home = '<svg class="svg-icon" viewBox="0 0 20 20" style="height: 36px; margin-bottom: -2px;"><path fill="auto" d="M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z"></path></svg>';
    var icone_carrinho = '<svg class="svg-icon" viewBox="0 0 20 20" style="height: 36px; margin-bottom: -2px;"><path fill="auto" d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"></path></svg>';
    var icone_conta = '<svg class="svg-icon" viewBox="0 0 20 20" style="height: 34px;"><path fill="auto" d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path></svg>';
    var icone_pedidos = '<svg class="svg-icon" viewBox="0 0 20 20" style="height: 34px;"><path fill="auto" d="M10,1.529c-4.679,0-8.471,3.792-8.471,8.471c0,4.68,3.792,8.471,8.471,8.471c4.68,0,8.471-3.791,8.471-8.471C18.471,5.321,14.68,1.529,10,1.529 M10,17.579c-4.18,0-7.579-3.399-7.579-7.579S5.82,2.421,10,2.421S17.579,5.82,17.579,10S14.18,17.579,10,17.579 M14.348,10c0,0.245-0.201,0.446-0.446,0.446h-5c-0.246,0-0.446-0.201-0.446-0.446s0.2-0.446,0.446-0.446h5C14.146,9.554,14.348,9.755,14.348,10 M14.348,12.675c0,0.245-0.201,0.446-0.446,0.446h-5c-0.246,0-0.446-0.201-0.446-0.446s0.2-0.445,0.446-0.445h5C14.146,12.229,14.348,12.43,14.348,12.675 M7.394,10c0,0.245-0.2,0.446-0.446,0.446H6.099c-0.245,0-0.446-0.201-0.446-0.446s0.201-0.446,0.446-0.446h0.849C7.194,9.554,7.394,9.755,7.394,10 M7.394,12.675c0,0.245-0.2,0.446-0.446,0.446H6.099c-0.245,0-0.446-0.201-0.446-0.446s0.201-0.445,0.446-0.445h0.849C7.194,12.229,7.394,12.43,7.394,12.675 M14.348,7.325c0,0.246-0.201,0.446-0.446,0.446h-5c-0.246,0-0.446-0.2-0.446-0.446c0-0.245,0.2-0.446,0.446-0.446h5C14.146,6.879,14.348,7.08,14.348,7.325 M7.394,7.325c0,0.246-0.2,0.446-0.446,0.446H6.099c-0.245,0-0.446-0.2-0.446-0.446c0-0.245,0.201-0.446,0.446-0.446h0.849C7.194,6.879,7.394,7.08,7.394,7.325"></path></svg>';
    var icone_sair = '<svg class="svg-icon" viewBox="0 0 20 20" style="height: 34px;"><path fill="auto" d="M16.76,7.51l-5.199-5.196c-0.234-0.239-0.633-0.066-0.633,0.261v2.534c-0.267-0.035-0.575-0.063-0.881-0.063c-3.813,0-6.915,3.042-6.915,6.783c0,2.516,1.394,4.729,3.729,5.924c0.367,0.189,0.71-0.266,0.451-0.572c-0.678-0.793-1.008-1.645-1.008-2.602c0-2.348,1.93-4.258,4.303-4.258c0.108,0,0.215,0.003,0.321,0.011v2.634c0,0.326,0.398,0.5,0.633,0.262l5.199-5.193C16.906,7.891,16.906,7.652,16.76,7.51 M11.672,12.068V9.995c0-0.185-0.137-0.341-0.318-0.367c-0.219-0.032-0.49-0.05-0.747-0.05c-2.78,0-5.046,2.241-5.046,5c0,0.557,0.099,1.092,0.292,1.602c-1.261-1.111-1.979-2.656-1.979-4.352c0-3.331,2.77-6.041,6.172-6.041c0.438,0,0.886,0.067,1.184,0.123c0.231,0.043,0.441-0.134,0.441-0.366V3.472l4.301,4.3L11.672,12.068z"></path></svg>';

    $('#cabecalho .item-menu-opcoes a').eq(0).html(icone_conta+" Conta");
    $('#cabecalho .item-menu-opcoes a').eq(1).html(icone_pedidos+" Pedidos");

    $('#cabecalho .carrinho a').prepend(icone_carrinho);
    $('#barraTopo .carrinho a').append(icone_carrinho);
    $('#cabecalho .carrinho .icon-shopping-cart').hide();
    $('#barraTopo .carrinho .icon-shopping-cart').hide();

    /* Mobile */
    $('#cabecalho .atalhos-mobile .icon-user').html(icone_pedidos);
    $('#cabecalho .atalhos-mobile .icon-user').removeClass('icon-user');

    $('#cabecalho .atalhos-mobile .icon-home').html(icone_home);
    $('#cabecalho .atalhos-mobile .icon-home').removeClass('icon-home');

    $('#cabecalho .atalhos-mobile .icon-signout').html(icone_sair);
    $('#cabecalho .atalhos-mobile .icon-signout').removeClass('icon-signout');

    $('#cabecalho .atalhos-mobile .icon-shopping-cart').html(icone_carrinho);
    $('#cabecalho .atalhos-mobile .icon-shopping-cart').removeClass('icon-shopping-cart');
   
    setTimeout(function(){
       
        var h = 0;
       
        $('.listagem-item').each(function(k, v){
            if(parseInt($(this).height()) > h){
                h = parseInt($(this).height());
            }
        });
        h += 1;
        
        $('.listagem-item').each(function(k, v){
            $(this).css({'height' : h+'px'});
        });
    }, 1500);
}
	
$(function() {
  funcaoOrganizaMenu()
});