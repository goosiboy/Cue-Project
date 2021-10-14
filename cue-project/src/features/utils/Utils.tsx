/**
 * Utility methods
 * 
 * @author jonydev
 */
export default class Utils {
    
    private static sanitizationMap : any = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        "`": '&grave;'
    }

    /**
     * Checks if the value is not empty
     * 
     * @param val Value that will be checked
     * @returns TRUE if not empty
     */
    public static notEmpty(val : any) : boolean {
        return !Utils.isEmpty(val);
    }

    /**
     * Checks if the value is empty
     * 
     * @param val Value that will be checked
     * @returns TRUE if empty
     */
    public static isEmpty(val : any) : boolean {
        return (!val || val.length === 0 );
    }   

    /**
     * Sanitizes the given string value
     * 
     * @param string String that will be sanitized
     * @returns A sanitized string
     */
    public static sanitize(value : string) : string {
        const reg = /[&<>"'/]/ig;

        if(Utils.notEmpty(value)) {
            return value.replace(reg, (match)=>(Utils.sanitizationMap[match])).trim();
        } else {
            return "";
        }
    }

   /**
     * Sanitizes the given string value with given map
     * 
     * @param string String that will be sanitized
     * @param sanitizationMap Map that contains the characters, which will be sanitized
     * @returns A sanitized string
     */
    public static sanitizeWithMap(value : string, sanitizationMap : any) : string {
        const reg = /[&<>"'/]/ig;

        if(Utils.notEmpty(value)) {
            return value.replace(reg, (match)=>(sanitizationMap[match])).trim();
        } else {
            return "";
        }
    }

    /**
     * Attempts to clone the object
     * 
     * @param object Object that will be cloned
     * @returns A clone of the provided object
     */
    public static clone(object : any) : string {
        return JSON.parse(JSON.stringify(object));
    }

}