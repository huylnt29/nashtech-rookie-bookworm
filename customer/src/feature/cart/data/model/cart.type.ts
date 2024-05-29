import { BookDetail } from "../../../book_detail/data/model/book_detail.type";

export class Cart {
  lines?: BookLine[];
  subtotal?: number;
  discounted?: number;
  final?: number;
  constructor() {
    Object.assign(this, {});
  }
  addLine(newLine: BookLine) {
    const newLines = this.lines?.push(newLine);
    return Object.assign(this, {
      ...this,
      newLines,
    });
  }
}

export type BookLine = {
  book: BookDetail;
  quantity: number;
};
