
export class GenerateRandomPass {
   static generate(): string {
      return Math.random().toString(20).substring(2, 15) + Math.random().toString(20).substring(2, 15);
   }
}