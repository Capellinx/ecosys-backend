import { EncryptedPasswordService } from "../encrypted-password.service";
import bcrypt from "bcrypt"

export class BcryptService implements EncryptedPasswordService{
   public static readonly saltsRounds = 10

   encrypt(password: string): Promise<string> {
      return bcrypt.hash(password, BcryptService.saltsRounds)
   }

   comapare(password: string, encryptedPassword: string): Promise<boolean> {
       return bcrypt.compare(password, encryptedPassword)
   }
}
