import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    private readonly _name: string,
    private readonly _special: number = 0,
    private readonly _cost: number = 0,
  ) { }

  public static createdArchetypeInstances(): number { 
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }
}