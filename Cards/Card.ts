import Weapon from './Weapon';

export class Card{
    //Card Info
    private cardID:number;
    public name:string;
    private cardType:string;
    private isFemale:boolean=false;
    private img:string;
    
    //Card Stats
    private HP:number;
    private AP:number;
    private DP:number;
    private SB:number;

    //Card Equips
    private weapon:Weapon;

    constructor(cardData){
        this.cardID=cardData.cardID;
        this.name=cardData.name;
        this.cardType=cardData.type;
        this.img=cardData.img; 
        if(cardData.gender=='female')
            this.isFemale=true;
        
        this.HP=cardData.HP;
        this.AP=cardData.AP;
        this.DP=cardData.DP;
        this.SB=cardData.SB;
    }

    attack(opponent:Card){
        return this.AP;
    }
    takeDamage(amount:number){
        return this.HP-=amount;
    }
    takeEffect(stat:string,isBuff:boolean,amount:number){
        //if(stat=='AP')
    }
    /*special(cardNum:number){

    }*/
}
export default Card;