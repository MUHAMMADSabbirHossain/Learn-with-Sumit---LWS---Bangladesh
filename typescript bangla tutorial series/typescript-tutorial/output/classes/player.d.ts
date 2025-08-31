import type { IsPlayer } from "../interfaces/isPlayer";
declare class Player implements IsPlayer {
    name: string;
    private age;
    readonly country: string;
    constructor(n: string, a: number, c: string);
    getProperty(): number;
    play(): void;
}
export { Player };
//# sourceMappingURL=player.d.ts.map