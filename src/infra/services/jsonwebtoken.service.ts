import { TokenService } from "../../domain/services/token.service";
import Jwt from "jsonwebtoken";
import { env } from "../../env";

export class JsonWebTokenService implements TokenService {
   generateToken(id: Record<string, any>): string {
      const token = Jwt.sign(id, env.JWT_SECRET as string, {
         expiresIn: "1d"
      })

      return token
   }

   generateRefreshToken(id: Record<string, any>): string {
      const token = Jwt.sign(id, env.JWT_SECRET as string, {
         expiresIn: "7d"
      })

      return token
   }
}