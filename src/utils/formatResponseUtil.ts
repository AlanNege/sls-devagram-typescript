import type {DefaultResponseMessage} from "../types/DefaultResponseMessage"; 

export type DefaultJsonResponse = {
    statusCode: number,
    header: object,
    body: string
}

export const formatDefaultResponse = (statusCode: number, 
        message: string | undefined,
        response?: Record <string,unknown>) : DefaultJsonResponse => {

    const defaultMessage: DefaultResponseMessage = {};

    if(message && (statusCode >=200 || statusCode <= 390)){
        defaultMessage.msg = message;        
    }else if (message){
        defaultMessage.error = message;
    }

    return{
        header : {
            "content-type" : "application/json"
        },
        statusCode,
        body: JSON.stringify(response || defaultMessage)
    };

} 