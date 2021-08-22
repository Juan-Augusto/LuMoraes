function calcp(){
    var forma = document.getElementById('sforma')
    var massa = document.getElementById('smassa')
    var tam = document.getElementById('stamanho')
    var cob = document.getElementById('scobertura')
    var prec = document.querySelector('div#prec')
    
    if(massa.value.length=='0' || tam.value.length=='0' || forma.value.length=='0' || cob.value.length=='0'){
        window.alert (`[ERRO] ESCOLHA AS SUAS PREFERÊNCIAS, POR FAVOR.`)
    }else{
        var t = String(tam.value)
        var m = String(massa.value)
        if(m=='Chocolate' && t=='pequeno'){
            pm=25
        }else if(m=='Chocolate' && t=='medio'){
            pm=35
        }else if(m=='Chocolate' && t=='grande'){
            pm=45
        }else if(m!='Chocolate' && t=='pequeno'){
            pm=15
        }else if(m!='Chocolate' && t=='medio'){
            pm=25
        }else if(m!='Chocolate' && t=='grande'){
            pm=35
        }   
    }prec.innerHTML = `Valor do pedido: R$ ${pm},00 `
     
} 