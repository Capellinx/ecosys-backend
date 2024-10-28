
export interface EncryptedPasswordService {
   encrypt(password: string): Promise<string>
   compare(password: string, encryptedPassword: string): Promise<boolean>
}