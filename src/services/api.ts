import {API_PASS, API_URL} from "../constants";
import type {IApi} from "../interfaces/services/iApi";
import {Md5} from "ts-md5";


export class Api implements IApi {
    private XAuthHeader(){
        const today = new Date;
        return (new Md5)
            .appendStr(API_PASS)
            .appendStr('_')
            .appendStr(today.getUTCFullYear().toString())
            .appendStr((today.getMonth() + 1).toString().padStart(2,'0'))
            .appendStr(today.getDate().toString().padStart(2,'0'))
            .end()
    }

    async fetch(body:Object){
        return await fetch(API_URL, {
            "headers": {
                'content-type': 'application/json',
                "X-Auth": this.XAuthHeader(),
            } as any,
            "body": JSON.stringify(body),
            "method": "POST",
        }).then(async response=> {
            if(!response.ok) throw new Error(await response.text())
            return response.json().then(json => json.result);
        })

    }
}