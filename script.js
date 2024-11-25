function fazerAposta(){
    let assignedNumber = parseInt(prompt('Aposte um número de 1 a 100.'))
    let randomNumber = Math.floor(Math.random()* 100) + 1;

    if(assignedNumber > 1 || assignedNumber < 100){
        if(assignedNumber == randomNumber){
            alert(`Você venceu! O número sorteado foi ${randomNumber}`)
        }else{
            alert(`Você perdeu! O número sorteado foi ${randomNumber}`)
        }
    } else {
        alert('Opção inválida')
    }


}
fazerAposta()
