import { BookDetail } from "../../../book_detail/data/model/book_detail.type";

export class BookLine {
  constructor(obj: any) {
    Object.assign(this, obj);
  }

  copyWith = (obj: Object) => new BookLine(Object.assign(this, obj));

  book?: BookDetail;
  quantity?: number;

  getTotal() {
    return Math.round(
      this.book!.price * this.book!.discount.percentage * this.quantity!
    );
  }
}
