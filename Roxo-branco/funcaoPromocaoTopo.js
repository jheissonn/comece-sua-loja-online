organizaTopo = function() {
corTopo = '#5d018f';
    // Marca no produto
    if(typeof marca_produto !== 'undefined' && marca_produto !== null && marca_produto == true){
        var marca = $('meta[itemprop="name"]').attr("content");
        var marca_span = $('span[itemprop="brand"]');
        marca_span.load(window.location.origin + "/ .marcas li a", function () {
            marca_span.find("img").each(function (k, item) {
                if ($(item).attr("alt") !== marca) {
                    $(item).remove();
                }
            });
        });
    }

    // Redimensionamento de imagens no mobile
    if($(window).width() < 800){
        var tam_tela = $(window).width();
        $('img').each(function(k, item){
            var tam_img = $(item).width();
            if(tam_tela <= tam_img){
                $(item).width('100%');
                $(item).height('auto');
            }
        });
    }

    // Título em Marcas
    marcas_frase = (typeof marcas_frase !== 'undefined' && marcas_frase !== null) ? marcas_frase : 'Nossas Marcas';
    $('.marcas').prepend('<div class="listagem"> <div class="titulo-categoria borda-principal cor-principal vitrine-destaque"> <strong>'+marcas_frase+'</strong> </div> </div>');

    // Marcas no rodapé
    if(typeof marcas_rodape !== 'undefined' && marcas_rodape !== null && marcas_rodape == true){
        setTimeout(function(){
            var marcas = $('#corpo .conteiner .secao-principal .conteudo .row-fluid .marcas').clone();
            $('#corpo .conteiner .secao-principal .conteudo .row-fluid .marcas').remove();
            $(marcas).insertAfter('#corpo .conteiner .secao-principal');
        }, 600);
    }
    // Banner Destaques
    if(typeof banner_destaques !== 'undefined' && banner_destaques !== null){
        var banner_link_inicio = (typeof banner_destaques_url !== 'undefined' && banner_destaques_url !== null && banner_destaques_url != '') ? '<a href="'+banner_destaques_url+'">' : '';
        var banner_link_fim = (banner_link_inicio != '') ? '</a>' : '';
        $(banner_link_inicio+'<img src="'+banner_destaques+'" style="max-width: 100%; border-radius: 4px; margin-top: 30px;" class="banner-destaques">'+banner_link_fim).insertBefore('#corpo #listagemProdutos .vitrine-destaque');
    }
    promocao_topo = '<span class="devrocket-barra-oferta"> Seja bem vindo a <strong>Loja!</strong> </span>';
    
    if(typeof promocao_topo !== 'undefined' && promocao_topo !== null && promocao_topo.length > 0){
        var div_promocao = ($(window).width() < 800) ? '.atalhos-mobile ul' : '.barra-inicial';
        $('<div class="promocao-topo" style="background-color: '+corTopo+';">'+promocao_topo+'</div>').insertBefore(div_promocao);
        if($(window).width() < 800 && $('#cabecalho .atalhos-mobile').length > 0){
            setTimeout(function(){
                $('#cabecalho .logo').attr('style', 'margin-top: '+($('#cabecalho .atalhos-mobile').height() - 40)+'px !important');
            }, 200);
        }
    }
    
}

$(function() {
        organizaTopo()
});