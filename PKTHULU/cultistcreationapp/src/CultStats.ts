class CultStats {


    private _maxPoints: number;
    private _remPoints: number;
    private _maxScore: number;
    private _age: number;
    private _grade: number;
    private _lore: number;
    private _sanity: number;
    private _physED: number;
    private _trash: number;
    private _shop: number;
    private _chName: string;
    private _type: string;
    private _hometown: string;
    private _lucky: string;


    constructor() {
        this._maxPoints = 30;
        this._remPoints = this._maxPoints - 6;
        this._maxScore = 13;
        this._age = 5;
        this._grade = 1;
        this._lore = 1;
        this._sanity = 1;
        this._physED = 1;
        this._trash = 1;
        this._shop = 1;
        this._chName = "";
        this._type = "";
        this._hometown = "";
        this._lucky = "";
    }

    // getters and setters for cultist stats
    public get age() {
        return this._age;
    }
    public set age(age: number) {
        this._age = age;
    }

    public get grade() {
        return this._grade;
    }

    public set grade(grade: number) {
        this.remPoints(this._grade,'add');
        this._grade = grade;
        this.remPoints(this._grade,'sub');
        
    }

    public get lore() {
        return this._lore;
    }

    public set lore(lore: number) {
        this.remPoints(this._lore,'add');
        this._lore = lore;
        this.remPoints(this._lore,'sub');
    }

    public get sanity() {
        return this._sanity;
    }

    public set sanity(sanity: number) {
        
        this.remPoints(this._sanity,'add');
        this._sanity = sanity;
        this.remPoints(this._sanity,'sub');
    }

    public get physED() {
        return this._physED;

    }

    public set physED(phys: number) {
        this.remPoints(this._physED,'add');
        this._physED = phys;
        this.remPoints(this._physED,'sub');
    }

    public get shop() {
        return this._shop;

    }

    public set shop(shop: number) {
        this.remPoints(this._shop, 'add');
        this._shop = shop;
        this.remPoints(this._shop, 'sub');
    }

    public get trash() {
        return this._trash;
    }

    public set trash(trash: number) {
        this.remPoints(this._trash, 'add');
        this._trash = trash;
        this.remPoints(this._trash, 'sub');
    }

    public get name() {
        return this._chName;
    }

    public set name(name: string) {
        this._chName = name;
    }

    public get type() {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

    public get hometown() {
        return this._hometown;
    }

    public set hometown(home: string) {
        this._hometown = home;
    }
    public get points() {
        return this._remPoints;
    }

    private remPoints(points: number, op: string) {
        
        if (op == 'add'){
            this._remPoints += points;
        }
        else if(op == 'sub'){
            this._remPoints -= points;
        }
    }

    public set lucky(stat: string){
        this._lucky = stat;
    }

    public get lucky(){
        return this._lucky;
    }

}