export class Board{
    readonly cardHoldSlots:number[];//The positions in pixels of cards before they are equipped
    readonly effectHoldSlots:number[];//The positions in pixels of effects before they are used
    readonly weaponHoldSlots:number[];//The positions in pixels of weapons before they are equipped

    readonly playerSlots:number[]; //The positions in pixels of individual player slots
    readonly opponentSlots:number[];//The positions in pixels of individual opponent slots
    
    readonly playerDefeatedCards=0;//The location in pixels of the player's defeated pile
    readonly oppenentDefeatedCards=0;//The location in pixels of the opponent's defeated pile
}
export default Board;