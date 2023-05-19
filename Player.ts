import CardBase from './Cards/CardBase';
import Card from './Cards/Card';
import Effect from './Cards/Effect';
import Weapon from './Cards/Weapon';

export class Player{
    //Player info
    public username:string;
    public money:number;

    //Available in battle
    //These are put in the slots, if there are none open they are kept off-screen
    public cardDeck:Card[]=[];
    public effectDeck:Effect[]=[];
    public weaponDeck:Weapon[]=[];

    //Equipped
    public cardsInPlay:Card[]=[];
    public weaponsInPlay:Card[]=[];

    
    //Other cards for swapping
    private cardBox:Card[]=[];
    public effectBox:Effect[]=[];
    public weaponBox:Weapon[]=[];
    
    private allCards=new CardBase();

    constructor(playerData){
        this.username=playerData.name;
        this.money=playerData.money;
        
        for(let x=0;x<playerData.cardBox.length;x++)
            this.cardBox.push(this.allCards.loadCard(playerData.cardBox[x]));
        for(let x=0;x<playerData.cardDeck.length;x++)
            this.cardDeck.push(this.allCards.loadCard(playerData.cardDeck[x]));

        for(let x=0;x<playerData.effectBox.length;x++)
            this.effectBox.push(this.allCards.loadEffect(playerData.effectBox[x]));
        for(let x=0;x<playerData.effectDeck.length;x++)
            this.effectDeck.push(this.allCards.loadEffect(playerData.effectDeck[x]));

        for(let x=0;x<playerData.weaponBox.length;x++)
            this.weaponBox.push(this.allCards.loadWeapon(playerData.weaponBox[x]));
        for(let x=0;x<playerData.weaponDeck.length;x++)
            this.weaponDeck.push(this.allCards.loadWeapon(playerData.weaponDeck[x]));
    }

    public getCard(cardIndex:number):Card{
        return this.cardDeck[cardIndex];
    }
}
export default Player;