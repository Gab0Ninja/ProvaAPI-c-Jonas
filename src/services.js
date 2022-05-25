export function dobro(n) {
    return n * 2;
    
}
export function somar(a,b) {
    return a + b;
    
 }

 export function cor(a) {
    let msg;
    if (a=="azul" || a=="vermelho" || a=="amarelo" ) {
        msg = true
     }
     else   {
        msg = false
     }
     return msg;
    
}


export function ingressocinema(inteira,meia,dia,nacionalidade){    
    let a = inteira * 28.50;
    let b = (meia *14.25) /2;
    let c= inteira * 5;
    let d= meia * 5;

    if (nacionalidade == 'brasileira')
    {
        return c+d;
    }
    else if(dia == 'quarta')
    {
        return b;
    }
    else
    {
        return a+b;
    }
}