export class Weapon{
    //Weapon Info
    private weaponID:number;
    private name:string;
    private type:string;
    private img:string;
    private desc:string;

    //Weapon Stats
    private SB:number;
    private cost:number;

    constructor(weaponData){
        this.weaponID=weaponData.wID;
        this.name=weaponData.name;
        this.type=weaponData.type;
        this.img=weaponData.img;
        this.desc=weaponData.desc;
        
        this.SB=weaponData.SB;
        this.cost=weaponData.cost;
    }
}
export default Weapon;