import { IAuthState } from "@/interfaces/IAuth";

export const authReducer = (state: IAuthState, action:any) => {


    switch (action.type) {
        case 'USER_LOGGED':
            return {
                
            }
            

    
        default:
            return state;
    }

}