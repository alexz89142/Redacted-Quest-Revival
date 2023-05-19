export class Effect{
    //Effect Info
    private effectID:number;
    private name:string;
    private effectType:string;
    private img:string;
    private desc:string;

    //Effect Stats
    private SB:number;
    private amount:number;
    private cost:number;

    constructor(effectData){
        this.effectID=effectData.eID;
        this.name=effectData.name;
        this.effectType=effectData.type;
        this.img=effectData.img;
        this.desc=effectData.desc;

        this.SB=effectData.SB;
        this.amount=effectData.amount;
        this.cost=effectData.cost;
    }
}
export default Effect;