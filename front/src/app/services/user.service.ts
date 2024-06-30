import { response } from "express";
import { UserModel } from "../models/user.model";
import { UserInputModel } from "../models/user.input.model";

export class UserService {
    async register(user: UserModel) {
        const data: UserModel =   {
            name: user.name,
            email: user.email,
            password: user.password
        }

        await fetch('http://localhost:3000/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
    }

    async login(user: UserModel): Promise<UserInputModel[]> {
        const data = {
            email: user.email,
            password: user.password
        }

        const reponse = await fetch('http://localhost:3000/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        
        const reponseJson = await reponse.json();
    
        return reponseJson.user != null ? [reponseJson.user] : [];
    }

    async getAllUsers(): Promise<UserInputModel[]> {
        const reponse = await fetch('http://localhost:3000/users', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        })

        const reponseJson = await reponse.json();

        console.log(reponseJson.users)

        return reponseJson.users
    }
}