import Card from './Card';
import Effect from './Effect';
import Weapon from './Weapon';

import characterCards from './Cards';
import effectCards from './Effects';
import weaponCards from './Weapons';

export class CardBase{
    public loadCard(cardID:number){
        return new Card(characterCards[cardID]);
    }
    public loadEffect(effectID:number){
        return new Effect(effectCards[effectID]);
    }
    public loadWeapon(weaponID:number){
        return new Weapon(weaponCards[weaponID]);
    }
}
export default CardBase;