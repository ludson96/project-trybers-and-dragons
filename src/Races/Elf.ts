import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints;
  private static _createdRacesInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf._createdRacesInstances += 1;
    this._maxLifePoints = 99;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}