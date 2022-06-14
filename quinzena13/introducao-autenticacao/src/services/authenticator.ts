import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/authentication";

export class Authenticator {
    
    public generateToken = (payload: AuthenticationData) => {
      const token = jwt.sign(payload, process.env.JWT_KEY as string, { expiresIn: "5h" })
      return token
    }

    public getTokenData = (token: string) => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string)
        return payload 
    }
}

