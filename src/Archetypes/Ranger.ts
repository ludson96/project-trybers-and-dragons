import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(_name: string) {
    super(_name);
    Ranger._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number { 
    return Ranger._createdArchetypeInstances;
  }

  public get name(): string {
    return this.name;
  }
}