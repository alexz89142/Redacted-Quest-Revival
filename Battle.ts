import Player from './Player';
import Board from'./Board';

export class Battle{
    private players:Player[];
    private board:Board;
    
    //player 1 is self
    constructor(player1:Player,player2:Player){
        this.players[0]=player1;
        this.players[1]=player2;
    }
    
    public start(){
        this.determineStarter(this.flipCoin());
    }

    //Turn functions
    private flipCoin():boolean{
        return true;
    }
    private determineStarter(isHeads:boolean){

    }
    private startTurn(){
        //Allow player to equip cards and fight.
    }
    private endTurn(){

    }
    
    //After set up phase
    private fight(){
        for(let x=0;x++;x<5){
            this.players[0].getCard(x).attack(this.players[1].getCard(x));
        }
    }

    private win(){}
    private lose(){

    }
    private swapTurn(){
        this.players.splice(0,0,this.players.splice(1)[0]);
    }
}
export default Battle;