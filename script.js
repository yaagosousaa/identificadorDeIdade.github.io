function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value == 0 || fano.value > ano) {
        window.alert('Erro: Verifique os Dados inseridos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var idade2 = ' '
        var genero = ' '
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'masculino'
            
            if (idade >= 2 && idade < 3) {
            img.setAttribute('src', 'imagens/homens/bebeM.png') 
            idade2 = 'bebê'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} anos.`
       
        }   else if (idade >= 4 && idade <= 13) {
            img.setAttribute('src', 'imagens/homens/criançaM.png')
            genero = 'masculina'
            idade2 = 'criança'
            res.innerHTML = `Detectamos uma ${idade2} ${genero} com ${idade} anos.` 
        
        }   else if (idade >= 14 && idade <= 18) {
            img.setAttribute('src', 'imagens/homens/adolescenteM.png')
            idade2 = 'adolescente'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} anos.` 
        
        }   else if (idade >= 19 && idade <= 59) {
            img.setAttribute('src', 'imagens/homens/adultoM.png')
            idade2 = 'adulto'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} anos.` 
        
        }   else if (idade >= 60) {
            img.setAttribute('src', 'imagens/homens/idosoM.png')
            idade2 = 'idoso'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} anos.` 
       
        }   else if (idade == 1) {
            img.setAttribute('src', 'imagens/homens/bebeM.png') 
            idade2 = 'bebê'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} ano.`

        }

        } else if (fsex[1].checked) {
            genero = 'feminina'

            if (idade >= 2 && idade < 3) {
            img.setAttribute('src', 'imagens/mulher/bebeF.png') 
            idade2 = 'bebê'
            res.innerHTML = `Detectamos uma ${idade2} ${genero} com ${idade} anos.`
        }   else if (idade >= 4 && idade <= 13) {
            img.setAttribute('src', 'imagens/mulher/criançaF.png')
            genero = 'feminina'
            idade2 = 'criança'
            res.innerHTML = `Detectamos uma ${idade2} ${genero} com ${idade} anos.`
    
        }   else if (idade >= 14 && idade <= 18) {
            img.setAttribute('src', 'imagens/mulher/adolescenteF.png')
            idade2 = 'adolescente'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} anos.` 
    
        }   else if (idade >= 19 && idade <= 59) {
            img.setAttribute('src', 'imagens/mulher/adultoF.png')
            idade2 = 'adulto'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} anos.` 
    
        }   else if (idade >= 60) {
            img.setAttribute('src', 'imagens/mulher/idosaF.png')
            idade2 = 'idoso'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} anos.` 
   
        }   else if (idade == 1) {
            img.setAttribute('src', 'imagens/mulher/bebeF.png') 
            idade2 = 'bebê'
            res.innerHTML = `Detectamos ${idade2} ${genero} com ${idade} ano.`

        }   
    }
        res.style.textAlign = 'center'
        res.appendChild(img)
}
}
