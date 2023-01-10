categ = function() {
	qtde_ver_mais = 8; // Padrão é 5
    horarioAtendimento = '<div class="box-horario-atendimento"><p> <i class="fa fa-clock-o"></i> Seg. à Sex. / 8H às 18H</i></div>';
    objetoWhatsApp = {
        numero: '554199999999',
        texto: 'Olá, tudo bem? Quero falar sobre os produtos da Geny Modas!
    };
    /* WhatsApp */
    if (typeof objetoWhatsApp !== 'undefined' && objetoWhatsApp !== null) {
        $('<div class="box-whatsapp"><a href="https://api.whatsapp.com/send?phone='+objetoWhatsApp.numero+'&text='+objetoWhatsApp.texto+'" class="link-whatsapp" target="_blank"> <i class="fa fa-whatsapp"></i> </a> </div>').insertAfter('body');
    }

    if(typeof horarioAtendimento !== 'undefined' && horarioAtendimento !== null){
        $('.sobre-loja-rodape').append(horarioAtendimento);   
    }
 var categorias = [];
        $('#cabecalho .superior ul li.borda-principal').each(function(k, item){
            var link = $(item).find('a').eq(0).attr('href');
            var texto = $(item).find('a').eq(0).text();
            var categoria_item = '<li class="categoria"> <a href="'+link+'" title="'+texto+'" > '+texto+' </a> </li>';
            
            if(k > qtde_ver_mais){
                categorias.push(categoria_item);
                $(this).remove();
            }
        });
           
		console.log(categorias.length)
        if(categorias.length > 0){

            var todas_categorias = '<li class="categoria-todas com-filho borda-principal">';
            todas_categorias += '<a href="#" title="Todas as Categorias">';
                todas_categorias += '<strong class="titulo cor-primaria">+ Categorias</strong>';
                todas_categorias += '<i class="icon-chevron-down fundo-secundario"></i>';
            todas_categorias += '</a>';
            todas_categorias += '<ul class="nivel-dois borda-alpha">';
            $.each(categorias, function(k, item){
                todas_categorias += item;
            });
            
            todas_categorias += '</ul>';
            todas_categorias += '</li>';
            
            $('#cabecalho .superior ul.nivel-um').prepend(todas_categorias);
        }
		/* Voltar do Topo */
    $('<a id="voltar-topo" class="voltar-topo fundo-principal"> <div> <i class="fa fa-chevron-up"></i> <br /> TOPO </div> </div> </a>').insertAfter('#corpo');

    $(window).scroll(function(){
        if($(this).scrollTop()!=0){
            $("#voltar-topo").fadeIn();
        }else{
            $("#voltar-topo").fadeOut();
        }
    });

    $("#voltar-topo").click(function(){
        $("body, html").animate({scrollTop:0}, 800);
        return false;
    });
}		
funcao1 =  function() {
rastreio_devrocket = true;
    // Rastreio
    if(typeof rastreio_devrocket !== 'undefined' && rastreio_devrocket !== null){
        if(rastreio_devrocket == true){
            $('#rodape .institucional .sobre-loja-rodape').append('<div class="rastreio"> <form melhod="GET" action="https://www.linkcorreios.com.br" target="_blank"> <input type="text" name="id" maxlength="30" placeholder="Insira o código de Rastreamento" required /> <button type="submit" class="fundo-principal">Rastrear</button> </div> </div>');
        }
    }

    // Menu - Ver Mais
    if($(window).width() > 768){
        if(typeof qtde_ver_mais == 'undefined' || qtde_ver_mais == null){
            qtde_ver_mais = 5;
        }
    }
}		
$(function() {
  categ()
  funcao1()
});