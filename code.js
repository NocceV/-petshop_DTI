//console.log("Hello World");

document.getElementById('formulario').addEventListener('submit',function(event){
    
    event.preventDefault();

    
    const data = new Date(document.getElementById('data').value);
    const qtdCaoPequeno = parseInt(document.getElementById('caesPequenos').value);
    const qtdCaoGrande = parseInt(document.getElementById('caesGrandes').value);

    const petShops = [

        {
            nome : "Meu Canino Feliz",
            distanciaCanil : 2000,
            DogPequenoPreco : 20,
            DogGrandePreco : 40
        },

        {
            nome : "Vai Rex",
            distanciaCanil : 1700,
            DogPequenoPreco : 15,
            DogGrandePreco : 50
        },

        {
            nome : "ChowChawgas",
            distanciaCanil : 800,
            DogPequenoPreco : 30,
            DogGrandePreco : 45
        }


    ];
      
    function calcularValorBanho(qtdPequeno, qtdGrande, petShop) {

        return (qtdPequeno * petShop.DogPequenoPreco) + (qtdGrande * petShop.DogGrandePreco);
        
    }
  
    function menorDistancia(pet1 , pet2){

        if(pet1.distanciaCanil <= pet2.distanciaCanil){
            return pet1;
        }
        else{
            return pet2;
        }
    }  
    
    function acharMelhorShop(P,G,petShops){
   
        let melhorShop = petShops[0];       
         for(let i = 1 ;i < petShops.length;i++ ){
                      
            const temp1 = calcularValorBanho(P,G,melhorShop);
            const temp2 = calcularValorBanho(P,G,petShops[i]);
            
            if(temp2 < temp1){
                melhorShop = petShops[i];
            }
            else if(temp1==temp2){
                melhorShop = menorDistancia(melhorShop,petShops[i]);
            }
             
                
        }
        return melhorShop;    
       
    }

    const melhorDeTodos = acharMelhorShop(qtdCaoPequeno,qtdCaoGrande,petShops);
    const precoTotal = calcularValorBanho(qtdCaoPequeno,qtdCaoGrande,melhorDeTodos);
    document.getElementById('escrita').textContent = melhorDeTodos.nome + " R$:"+ precoTotal;  

});

