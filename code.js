
/*
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
*/

class PetShop{


    constructor(nome,distanciaCanil,precoPequeno,precoGrande,addWeekEndP,addWeekEndG){

        this.nome= nome;
        this.distanciaCanil= distanciaCanil;
        this.precoPequeno = precoPequeno;
        this.precoGrande = precoGrande;
        this.addWeekEndP = addWeekEndP;
        this.addWeekEndG = addWeekEndG;
    }

    calcularValorBanho(qtdPequeno, qtdGrande,dia) {

        if(dia != 0 && dia != 6){
            
            return (qtdPequeno * this.precoPequeno) + (qtdGrande * this.precoGrande);
        }
        else {

            return (qtdPequeno *(this.precoPequeno+this.addWeekEndP)) + (qtdGrande * (this.precoGrande+this.addWeekEndG));
        }
        
    }

}

class RegistroPetShop{


    menorDistancia(pet1,pet2){

        if(pet1.distanciaCanil <= pet2.distanciaCanil){
            return pet1;
        }
        else{
            return pet2;
        }
    }  
    
    acharMelhorShop(P,G,petShops,dia){

        let melhorShop = petShops[0];       
        for(let i = 1 ;i < petShops.length;i++ ){
                    
            const temp1 = melhorShop.calcularValorBanho(P,G,dia);
            const temp2 = petShops[i].calcularValorBanho(P,G,dia);
            
            if(temp2 < temp1){
                melhorShop = petShops[i];
            }
            else if(temp1==temp2){
                melhorShop = this.menorDistancia(melhorShop,petShops[i]);
            }
            
                
        }
        return melhorShop;    
    
    }
    
}

document.getElementById('formulario').addEventListener('submit',function(event){
    
    event.preventDefault();

    
    const data = new Date(document.getElementById('data').value);
    const qtdCaoPequeno = parseInt(document.getElementById('caesPequenos').value);
    const qtdCaoGrande = parseInt(document.getElementById('caesGrandes').value);

    const diaSemanal = data.getUTCDay();


    if(qtdCaoGrande >= 0 && qtdCaoPequeno>=0){


        const listaPetShops =[
            new PetShop("Meu Canino Feliz", 2000, 20, 40, 4, 8),
            new PetShop("Vai Rex", 1700, 15, 50, 5, 5),
            new PetShop("ChowChawgas", 800, 30, 45, 0, 0)
        ];

        const registro = new RegistroPetShop();

        const melhorPetShop = registro.acharMelhorShop(qtdCaoPequeno,qtdCaoGrande,listaPetShops,diaSemanal);
        const  precoTotal = melhorPetShop.calcularValorBanho(qtdCaoPequeno,qtdCaoGrande,diaSemanal);

        document.getElementById('escrita').textContent = melhorPetShop.nome +" -"+ " R$ "+ precoTotal.toFixed(2); 
    }
    else{
        document.getElementById('escrita').textContent = "Parâmetros não aceitos. Por favor, tente de novo."; 
    }

    

});
