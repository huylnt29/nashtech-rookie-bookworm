import { BookDetail } from "../../../book_detail/data/model/book_detail.type";

export class Cart {
  constructor(obj: any) {
    Object.assign(this, obj);
  }

  copyWith = (obj: Object) => new Cart(Object.assign(this, obj));

  addLine(newLine: BookLine) {
    if (!this.lines) this.lines = [];
    this.lines.push(newLine);
    return this.copyWith(this);
  }
  setPrice() {
    const booksCount = this.lines?.reduce(
      (accumulator, currentBookLine) => accumulator + currentBookLine.quantity,
      0
    );
    const subtotal = this.lines!.reduce(
      (accumulator, currentBookLine) =>
        accumulator + currentBookLine.book.price * currentBookLine.quantity,
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

export type BookLine = {
  book: BookDetail;
  quantity: number;
};
