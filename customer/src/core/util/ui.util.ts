export class UI {
  static formatNumberWithDots = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
}
