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

  categoryIds?: number[] | null;
  authorIds?: number[] | null;
  rating?: number | null;
  sortBy?: string | null;
  sortDirection?: string | null;
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

    let where;
    if (categorySubWhere && authorSubWhere)
      where = `where: {${categorySubWhere}, ${authorSubWhere}}`;
    else if (categorySubWhere) where = `where: {${categorySubWhere}}`;
    else if (authorSubWhere) where = `where: {${authorSubWhere}}`;

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
