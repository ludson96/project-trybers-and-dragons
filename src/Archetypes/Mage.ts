import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(_name: string) {
    super(_name);
    Mage._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number { 
    return Mage._createdArchetypeInstances;
  }

  public get name(): string {
    return this.name;
  }
}