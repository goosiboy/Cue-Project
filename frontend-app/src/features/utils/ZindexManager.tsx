import { v4 as uuid } from "uuid";

/**
 * z-index manager
 * 
 * @author jonydev
 */
 class ZindexLevels {
    public static LAYER : string = "LAYER_";
    public static EMPTY_LAYER_KEY : string = "EMPTY";

    public static BASE_LAYER_VALUE : number = 0;
    public static INTERACTIVE_LAYER_VALUE : number = 1;
    public static MAX_LAYER_VALUE : number = 100;
    public static DEFAULT_LAYER_VALUE : number = 0;
}

class IndexCell {

    private _id: string = "";
    private _key: string = "";
    private _value: any = "";

    constructor(_id : string, key : string, value : any) {
        this._id = _id;
        this.key = key;
        this.value = value;
    }  
    
    /**
     * An unique identifier for the indexCell
     */
    public get id(): string {
        return this._id;
    }
    
    public set id(value: string) {
        this._id = value;
    }

    /**
     * A key for the indexCell
     */
    public get key(): string {
        return this._key;
    }

    public set key(value: string) {
        this._key = value;
    }

    /**
     * A value for the indexCell
     */
    public get value(): any {
        return this._value;
    }

    public set value(value: any) {
        this._value = value;
    }

}

/**
 * Singleton z-index manager
 */
class ZindexManager { 
    
    private zIndexArray : IndexCell[] = [];

    private static instance: ZindexManager;

    constructor() {
        if (ZindexManager.instance) {
            return ZindexManager.instance;
        }      
        this.initIndexManager();

        ZindexManager.instance = this;
    }

    private initIndexManager() {      
        for(let i = 0; i < ZindexLevels.MAX_LAYER_VALUE; i++) {
            let index : string = ZindexLevels.LAYER + i;
            this.zIndexArray.push(this.createIndexCell(uuid(), index, i));
        }     
    }

    /**
     * Returns a specific layer from the index array, if one is found. 
     * 
     * @param layerKey The name of the layer, which will be returned from the index array
     * @returns A specific layer, if one is found. Otherwise returns '0'.
     */
    public getLayer(layerKey : string) : number {
        for(let i = 0; i < this.zIndexArray.length; i++) {
            if(this.zIndexArray[i].key === layerKey) {
                return this.zIndexArray[i].value;
            }      
        }
        return ZindexLevels.DEFAULT_LAYER_VALUE;
    }

    public printLayers() {
        this.zIndexArray.forEach(element => {
                console.log(element);
        });   
    }

    private createIndexCell(_id : string, key : string, value : any) : IndexCell {
        return new IndexCell(_id, key, value);
    }

}

export default new ZindexManager();