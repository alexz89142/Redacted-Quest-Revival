import Player from './Player';
import CardBase from './Cards/CardBase';

export class Shop{
    private buyer:Player;
    private availableCards:CardBase;

    constructor(buyer:Player,availableCards:CardBase){
        this.buyer=buyer;
        this.availableCards=availableCards;
    }

    public buyCard(cardIndex:number){
        return this.availableCards.loadCard(cardIndex);
    }
    public buyEffect(cardIndex:number){

    }
    public buyWeapon(cardIndex:number){

    }
}
export default Shop;