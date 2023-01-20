import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(_name: string) {
    super(_name);
    Necromancer._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number { 
    return Necromancer._createdArchetypeInstances;
  }

  public get name(): string {
    return this.name;
  }
}