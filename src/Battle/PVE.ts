import Fighter from '../Fighter/index';
import SimpleFighter from '../Fighter/SimpleFighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _p1: Fighter,
    private _monster: Fighter[] | SimpleFighter[],
  ) {
    super(_p1);
  }

  fight(): number {
    this._monster.forEach((m) => {
      while (this._p1.lifePoints > 0 && m.lifePoints > 0) {
        this._p1.attack(m);
        m.attack(this._p1);
      }
      console.log(this._p1.lifePoints);
    });
    
    return super.fight();
  }
}