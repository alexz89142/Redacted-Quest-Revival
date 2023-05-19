import accounts from './Accounts';
import Player from './Player';
import Shop from './Shop';
import Battle from './Battle';
import CardBase from './Cards/CardBase';

class Game{
    private player:Player;
    private shop:Shop;
    private battle:Battle;
    private cardBase:CardBase;

    constructor(){
        this.shop=new Shop(this.player,this.cardBase);
    }

    public logIn(userName:string,password:string):Player{
        for(let x=0;x<accounts.length;x++)
            if(accounts[x].name==userName && accounts[x].pass==password)
                return new Player(accounts[x]);
        return undefined;
    }

}