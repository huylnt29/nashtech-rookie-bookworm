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
    if (foundIndex != -1) this.categoryIds!.splice(foundIndex, 1);
    else this.authorIds!.push(authorId);
    return this.copyWith(this);
  }

  categoryIds?: number[] | null;
  authorIds?: number[] | null;
  rating?: number | null;
  sortBy?: string | null;
  sortDirection?: SortDirection | null;
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
      where = "where: {";
      where = where.concat(categorySubWhere).concat(",");
    }
    if (authorSubWhere) {
      if (!where) where = "where: {";
      where = where.concat(authorSubWhere).concat(",");
    }
    if (ratingSubWhere) {
      if (!where) where = "where: {";
      where = where.concat(ratingSubWhere).concat(",");
    }
    if (where) {
      where = where.concat("}");
    }

    const query = `
      query {
        books(page: ${this.page}, ${where ?? ""}) {
          data {
            id
            imageUrls
            name
            totalSoldQuantity
            averageRating
            batches {
              id 
              price
              discount {
                percentage
              }
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