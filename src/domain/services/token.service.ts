export interface TokenService {
   generateToken(id: Record<string, any>): string
   generateRefreshToken(id: Record<string, any>): string
}