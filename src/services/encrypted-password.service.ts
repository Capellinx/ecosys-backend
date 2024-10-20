
export interface EncryptedPasswordService {
   encrypt(password: string): Promise<string>
   comapare(password: string, encryptedPassword: string): Promise<boolean>
}