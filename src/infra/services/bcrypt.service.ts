import { EncryptedPasswordService } from "../../domain/services/encrypted-password.service";
import bcrypt from "bcrypt"

export class BcryptService implements EncryptedPasswordService{
   public static readonly saltsRounds = 10

   async encrypt(password: string): Promise<string> {
      return await bcrypt.hash(password, BcryptService.saltsRounds)
   }

   async compare(password: string, encryptedPassword: string): Promise<boolean> {
      return await bcrypt.compare(password, encryptedPassword)
   }
}
