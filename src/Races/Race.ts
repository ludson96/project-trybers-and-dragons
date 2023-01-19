export default abstract class Race {
  constructor(
    private readonly _name: string, 
    private readonly _dexterity: number,
  ) {}

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}