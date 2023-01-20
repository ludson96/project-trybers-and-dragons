import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints;
  private static _createdRacesInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc._createdRacesInstances += 1;
    this._maxLifePoints = 74;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}