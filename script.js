function Contar() {
    var inicio = document.getElementById('txtstart')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
        alert('Preencha os campos abaixo!')
    }else{
        res.innerHTML='Contando: '
        var i =Number(inicio.value)
        var f =Number(fim.value)
        var p =Number(passo.value)

        if(p<=0){
            alert('Passo invalido,considerando 1')
            p=1
        }

        if(i<f){
            for(var x=i;x<=f;x+=p){
                res.innerHTML += `${x} \u{1F449}`
            }
        }else{
            for(var x=i;x>=f;x-=p){
                res.innerHTML += `${x} \u{1F449}`
            }
        }
        res.innerHTML+=' FIM'
    }


}