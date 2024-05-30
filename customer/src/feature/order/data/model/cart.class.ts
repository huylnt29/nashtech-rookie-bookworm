import { BookLine } from "./book_line.class";

export class Cart {
  constructor(obj?: any) {
    if (obj) Object.assign(this, obj);
    else {
      this.lines = [];
      this.subtotal = 0;
      this.final = 0;
      this.booksCount = 0;
      this.discounted = 0;
    }
  }

  copyWith = (obj: Object) => new Cart(Object.assign(this, obj));

  addLine(newLine: BookLine) {
    this.lines!.push(newLine);
    return this.copyWith(this);
  }
  setPrice() {
    const booksCount = this.lines?.reduce(
      (accumulator, currentBookLine) => accumulator + currentBookLine.quantity!,
      0
    );
    const subtotal = this.lines!.reduce(
      (accumulator, currentBookLine) =>
        accumulator + currentBookLine.book!.price * currentBookLine.quantity!,
      0
    );
    const discounted = 0;
    const final = subtotal - discounted;

    return this.copyWith({
      ...this,
      booksCount,
      subtotal,
      discounted,
      final,
    });
  }
  lines?: BookLine[];
  booksCount?: number;
  subtotal?: number;
  discounted?: number;
  final?: number;
}
