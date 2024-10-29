
export class GenerateRandomPass {
   static generate(): string {
      return Math.random().toString(25).slice(-10)
   }
}