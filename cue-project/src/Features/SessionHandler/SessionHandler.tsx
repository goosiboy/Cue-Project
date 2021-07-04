import Utils from "../Utils/Utils";
import Cookies from "js-cookie";
import { exception } from "console";

/**
 * Contains helper methods for handling cookies, sessionStorage and localStorage
 * 
 * @author jonydev
 */
export default class SessionHandler {

    /**
     * Pushes the given value to the localStorage. Non string values are converted to string automatically.
     * 
     * @param name Name of the key
     * @param value Value
     */
    public static setToLocalStorage(name : string, value : any) {
        let valueStr : any = value;
        if(typeof value !== 'string') {
            valueStr = JSON.stringify(value);
        }
        window.localStorage.setItem(name, valueStr);
    }

    /**
     * Returns a parsed object from localStorage
     * 
     * @param name Name of the object, which will be parsed and returned
     * @returns A parsed object of any type, if one is found from localStorage. Otherwise returns an empty object
     */
    public static getFromLocalStorage(name : string) : any {
        let localStorageValue : any = window.localStorage.getItem(name);

        if(Utils.notEmpty(localStorageValue)) {
            return JSON.parse(localStorageValue);
        } else {
            return {};
        }
    }

    /**
     * Sets a cookie to the browser cache with specific name and value
     * 
     * @param name Cookie name
     * @param val Cookie value
     */
    public static setCookie(name : string, val: any) {
        const date : Date = new Date();
        const value : string = val;

        // Expires in 7 days
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = this.secureCookieBuilder(name, value, date);
    }

    /**
     * Get a specific cookie
     * 
     * @param name Cookie name
     * @returns Cookie string
     */
    public static getCookie(name : string) : string {        
        const cookieString : string = Utils.clone(Utils.sanitize(document.cookie));
        
        let stringArray : string[] = cookieString.split(";");
        let returnString = "";

        stringArray.forEach(value => {
            if(value.match(name)) {
                returnString = value;
            }
        });

        return returnString;
    }

    /**
     * Deletes a specific cookie from the browser cache
     * 
     * @param name Name of the cookie, which will be deleted
     */
     public static deleteCookie(name : string) {
        const date : Date = new Date();

        // Set the date to expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));   
        document.cookie = this.secureCookieBuilder(name, "", date);
    }

    /**
     * Tries to delete all cookies from the browser cache
     */
    public static clearCookies() {
        const cookieString : string = Utils.clone(Utils.sanitize(document.cookie));      
        let stringArray : string[] = cookieString.split(";");
        
        stringArray.forEach(value => {
            let cookieName = value.substr(0, value.indexOf('=')).replaceAll(' ',''); 
            Cookies.remove(cookieName);
        });
    }

    /**
     * Generates a secure cookie string
     * 
     * @param name Cookie name
     * @param value Cookie value
     * @param date Expiration date
     * @returns A string, that contains the required configurations for a secure cookie
     */
    private static secureCookieBuilder(name : string, value: string, date : Date) : string {       
        return (
            name+"="+value+"; "+
            "expires="+date.toUTCString()+"; samesite=strict; path=/");
    }

}