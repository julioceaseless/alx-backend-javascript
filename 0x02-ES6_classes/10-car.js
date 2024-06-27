export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * @param {String} brand
   */

  set brand(brand) {
    this._brand = brand;
  }

  get brand() {
    return this._brand;
  }

  /**
   * @param {String} motor
   */

  set motor(motor) {
    this._motor = motor;
  }

  get motor() {
    return this._motor;
  }

  /**
   * @param {String} color
   */

  set color(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
