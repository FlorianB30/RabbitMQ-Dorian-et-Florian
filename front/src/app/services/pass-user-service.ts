import Cookies from 'js-cookie';
import { UserInputModel } from '../models/user.input.model';

export class PassService {

    setIsConnected(user: UserInputModel[]) {
        if(user.length != 1) {
            console.log(user)
            return
        }

        const Json = {
            isConnected: true,
            user: {
                name: user[0].name,
                email: user[0].email,
                id: user[0].id
            },
            id_conv: 0
        }

        console.log(Json)

        Cookies.set('user_current', JSON.stringify(Json), {expires: 1});
    }

    getIsConnected(): boolean {
        // Cookies.remove('user_current');
        let user_temp = Cookies.get('user_current');
        if(user_temp != null) {
            let Json = JSON.parse(user_temp);
            return Json.isConnected;
        } 
        return false
    }

    getUserName(): string {
        let user_temp = Cookies.get('user_current');
        if(user_temp != null) {
            let Json = JSON.parse(user_temp);
            return Json.user.name;
        } 
        return ''
    }

    getUserEmail(): string {
        let user_temp = Cookies.get('user_current');
        if(user_temp != null) {
            let Json = JSON.parse(user_temp);
            return Json.user.email;
        } 
        return ''
    }

    getUserId(): number {
        let user_temp = Cookies.get('user_current');
        if(user_temp != null) {
            let Json = JSON.parse(user_temp);
            return Json.user.id;
        } 
        return 0
    }

    getUserConversation(): number {
        let user_temp = Cookies.get('user_current');
        if(user_temp != null) {
            let Json = JSON.parse(user_temp);
            return Json.id_conv;
        } 
        return 0 
    }

    setUserConversation(id: number) {
        let user_temp = Cookies.get('user_current');
        if(user_temp != null) {
            let Json = JSON.parse(user_temp);
            Json.id_conv = id;
            Cookies.set('user_current', JSON.stringify(Json), {expires: 1});
        } 
    }

    deconnection() {
        Cookies.remove('user_current');
        location.reload();
    }

    refresh() {
        location.reload();
    }
}