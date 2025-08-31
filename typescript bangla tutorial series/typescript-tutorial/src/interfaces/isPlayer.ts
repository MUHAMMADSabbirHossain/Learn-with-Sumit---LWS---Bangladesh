interface IsPlayer {
  name: string;
  //   age: number;
  readonly country: string;

  getProperty(): number;

  play(): void;
}

export type { IsPlayer };
