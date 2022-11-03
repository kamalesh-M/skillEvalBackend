import { Injectable} from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { secretKey } from 'src/jwt.token';
import { ConfigService } from '@nestjs/config/dist';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:secretKey
        })
    }
    async validate(payload: any){
        console.log("jwt auth validate")
        return {
            id: payload.sub,
            email: payload.email
        }
    }
}