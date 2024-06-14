//console.log("Hello World");

document.getElementById('formulario').addEventListener('submit',function(event){
    
    event.preventDefault();

    
    const data = new Date(document.getElementById('data').value);
    const qtdCaoPequeno = parseInt(document.getElementById('caesPequenos').value);
    const qtdCaoGrande = parseInt(document.getElementById('caesGrandes').value);

    const diaSemanal = data.getUTCDay();
    
    if(qtdCaoGrande >= 0 && qtdCaoPequeno>=0){
        const petShops = [

            {
                nome : "Meu Canino Feliz",
                distanciaCanil : 2000,
                DogPequenoPreco : 20,
                DogGrandePreco : 40,
                weekEndAddP: 4,
                weekEndAddG : 8
            },

            {
                nome : "Vai Rex",
                distanciaCanil : 1700,
                DogPequenoPreco : 15,
                DogGrandePreco : 50,
                weekEndAddP : 5,
                weekEndAddG : 5
            },

            {
                nome : "ChowChawgas",
                distanciaCanil : 800,
                DogPequenoPreco : 30,
                DogGrandePreco : 45,
                weekEndAddP : 0,
            weekEndAddG :  0
            }


        ];
        
        function calcularValorBanho(qtdPequeno, qtdGrande, petShop,dia) {
            if(dia != 0 && dia != 6){
            return (qtdPequeno * petShop.DogPequenoPreco) + (qtdGrande * petShop.DogGrandePreco);
            }
            else {
                return (qtdPequeno *(petShop.DogPequenoPreco+petShop.weekEndAddP)) + (qtdGrande * (petShop.DogGrandePreco+petShop.weekEndAddG));
            }
            
        }
    
        function menorDistancia(pet1 , pet2){

            if(pet1.distanciaCanil <= pet2.distanciaCanil){
                return pet1;
            }
            else{
                return pet2;
            }
        }  
        
        function acharMelhorShop(P,G,petShops,dia){
    
            let melhorShop = petShops[0];       
            for(let i = 1 ;i < petShops.length;i++ ){
                        
                const temp1 = calcularValorBanho(P,G,melhorShop,dia);
                const temp2 = calcularValorBanho(P,G,petShops[i],dia);
                
                if(temp2 < temp1){
                    melhorShop = petShops[i];
                }
                else if(temp1==temp2){
                    melhorShop = menorDistancia(melhorShop,petShops[i]);
                }
                
                    
            }
            return melhorShop;    
        
        }

        const melhorDeTodos = acharMelhorShop(qtdCaoPequeno,qtdCaoGrande,petShops,diaSemanal);
        const precoTotal = calcularValorBanho(qtdCaoPequeno,qtdCaoGrande,melhorDeTodos,diaSemanal);

        document.getElementById('escrita').textContent = melhorDeTodos.nome +" -"+ " R$ "+ precoTotal.toFixed(2); 
    }
    else{
        document.getElementById('escrita').textContent = "Parâmetros não aceitos. Por favor, tente de novo."; 
    }
    
});

