import { v4 as uuid } from "uuid";

/**
 * Singleton z-index manager
 */
export default class ZIndexManager { 
    
    private zIndexArray : IndexCell[] = [];
    private zIndexPool : number[] = [];

    private static instance: ZIndexManager;

    constructor() {
        if (ZIndexManager.instance) {
            return ZIndexManager.instance;
        }      
        this.initIndexManager();

        ZIndexManager.instance = this;
    }

    private initIndexManager() {      
        for(let i = 0; i < ZIndexLevels.MAX_LAYER_VALUE; i++) {
            this.zIndexArray.push(this.createIndexCell(uuid(), ZIndexLevels.EMPTY_LAYER_KEY, i));
        }     
    }

    /**
     * Gives a new free z-index from the index array. Returns '0' if no free
     * layers are available in the index array.
     * 
     * @returns A free layer, if one is available. Otherwise returns '0'.
     */
    public getNewEmptyLayer() : number {
        for(let i = 0; i < this.zIndexArray.length; i++) {
            if(this.zIndexArray[i].key === ZIndexLevels.EMPTY_LAYER_KEY) {
                this.zIndexArray[i].key = ZIndexLevels.LAYER + i;
                return this.zIndexArray[i].value;
            }      
        }
        return ZIndexLevels.DEFAULT_LAYER_VALUE;
    }

    /**
     * Returns a specific layer from the index array, if one is found. 
     * 
     * @param layerKey The name of the layer, which will be returned from the index array
     * @returns A specific layer, if one is found. Otherwise returns '0'.
     */
    public getLayerWithKey(layerKey : string) : number {
        for(let i = 0; i < this.zIndexArray.length; i++) {
            if(this.zIndexArray[i].key === layerKey) {
                return this.zIndexArray[i].value;
            }      
        }
        return ZIndexLevels.DEFAULT_LAYER_VALUE;
    }

    /**
     * Returns the layer with given key, if one is found. If none is found, assigns the given key 
     * into new empty layer and returns the value. If no empty layers are available, returns the 
     * value '0'.
     * 
     * @param layerKey The name of the layer, which will be returned from the index array
     * @returns The layer with given key, if one is found.
     */
    public findLayerWithKey(layerKey : string) : number {
        for(let i = 0; i < this.zIndexArray.length; i++) {
            if(this.zIndexArray[i].key === layerKey) {
                return this.zIndexArray[i].value;
            }      
        }
        for(let i = 0; i < this.zIndexArray.length; i++) {            
            if(this.zIndexArray[i].key === ZIndexLevels.EMPTY_LAYER_KEY) {
                this.zIndexArray[i].key = layerKey;
                return this.zIndexArray[i].value;
            }
        }
        return ZIndexLevels.DEFAULT_LAYER_VALUE;
    }

    public currentlyActiveLayers() {
        this.zIndexArray.forEach(element => {
                console.log(element);
        });   
    }

    private createIndexCell(_id : string, key : string, value : any) : IndexCell {
        return new IndexCell(_id, key, value);
    }

}

/**
 * z-index manager
 * 
 * @author jonydev
 */
class ZIndexLevels {
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