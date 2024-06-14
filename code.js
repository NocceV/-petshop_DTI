
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

    if(qtdCaoGrande == 0 && qtdCaoPequeno==0){
        document.getElementById('escrita').textContent = "Nenhum cão irá ao PetShop" +" -"+ " R$ "+ "0,00"; 
    }
    else if(qtdCaoGrande >= 0 && qtdCaoPequeno>=0){


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
