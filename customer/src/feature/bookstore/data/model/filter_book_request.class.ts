import { SortDirection } from "../../../../core/data/enum/sort_direction.enum";

export class FilterBookRequest {
  constructor(obj?: any) {
    if (!obj)
      Object.assign(this, {
        categoryIds: [],
        authorIds: [],
      });
    else Object.assign(this, obj);
  }

  copyWith = (obj: Object) => new FilterBookRequest(Object.assign(this, obj));

  toggleCategory(categoryId: number) {
    const foundIndex = this.categoryIds!.indexOf(categoryId);
    if (foundIndex != -1) this.categoryIds!.splice(foundIndex, 1);
    else this.categoryIds!.push(categoryId);
    return this.copyWith(this);
  }

  toggleAuthor(authorId: number) {
    const foundIndex = this.authorIds!.indexOf(authorId);
    if (foundIndex != -1) this.authorIds!.splice(foundIndex, 1);
    else this.authorIds!.push(authorId);
    return this.copyWith(this);
  }

  categoryIds?: number[] | null;
  authorIds?: number[] | null;
  rating?: number | null;
  sortBy?: string | null;
  sortDirection?: "asc" | "desc";
  page?: number;

  toGraphQLQuery = () => {
    let categoryQueryObjs: string[] = [];
    let categorySubWhere;
    if (this.categoryIds!.length > 0) {
      this.categoryIds!.forEach((e) => {
        categoryQueryObjs.push(`{id: ${e}}`);
      });
      categorySubWhere = `category: {is: {OR: [${categoryQueryObjs}]}}`;
    }

    let authorQueryObjs: string[] = [];
    let authorSubWhere;
    if (this.authorIds!.length > 0) {
      this.authorIds!.forEach((e) => {
        authorQueryObjs.push(`{id: ${e}}`);
      });
      authorSubWhere = `authors: {some: {OR: [${authorQueryObjs}]}}`;
    }

    let ratingSubWhere;
    if (this.rating) {
      ratingSubWhere = `reviews: {some: {OR: [{rating: ${this.rating}}]}}`;
    }

    let where;
    if (categorySubWhere) {
      where = "where: { book: { is: {";
      where = where.concat(categorySubWhere).concat(",");
    }
    if (authorSubWhere) {
      if (!where) where = "where: { book: { is: {";
      where = where.concat(authorSubWhere).concat(",");
    }
    if (ratingSubWhere) {
      if (!where) where = "where: { book: { is: {";
      where = where.concat(ratingSubWhere).concat(",");
    }
    if (where) {
      where = where.concat("}}}");
    }

    let orderBy;
    if (this.sortBy && this.sortDirection) {
      orderBy = "orderBy: { ";
      switch (this.sortBy) {
        case "sale":
          orderBy = orderBy.concat(
            `discount: {percentage: ${this.sortDirection}}`
          );
          break;
        case "popular":
          orderBy = orderBy.concat(
            `book: {totalSoldQuantity: ${this.sortDirection}}`
          );
          break;
        case "price":
          orderBy = orderBy.concat(`price: ${this.sortDirection}`);
          break;
        default:
          break;
      }
      orderBy = orderBy.concat("}");
    }

    const query = `
      query {
        batches(page: ${this.page}, ${where ?? ""}, ${orderBy ?? ""}) {
          data {
            id
            index
            price
            book {
              id 
              imageUrls
              name
              totalSoldQuantity
              averageRating
            }
            discount {
              id 
              percentage
            }
          }
          meta {
            page
            totalItems
            totalPages
          }
        }
      }
    `;
    return query;
  };
}

export type FilterBookRequestProperty =
  | "categoryIds"
  | "authorIds"
  | "rating"
  | "sortBy"
  | "sortDirection"
  | "page";
