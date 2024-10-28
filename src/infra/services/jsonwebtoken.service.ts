import { TokenService } from "../../domain/services/token.service";
import Jwt from "jsonwebtoken";
import { env } from "../../env";

export class JsonWebTokenService implements TokenService {
   generateToken(payload: Record<string, any>): string {
      const token = Jwt.sign(payload, env.JWT_SECRET as string, {
         expiresIn: "1d"
      })

      return token
   }

   generateRefreshToken(payload: Record<string, any>): string {
      const token = Jwt.sign(payload, env.JWT_REFRESH_SECRET as string, {
         expiresIn: "7d"
      })

      return token
   }
}