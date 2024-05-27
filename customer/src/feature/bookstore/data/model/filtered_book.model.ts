interface FilteredBookData {
  id: number;
  imageUrls: string[];
  name: string;
  totalSoldQuantity: number;
  averageRating: number;
}

class FilteredBook {
  id: number;
  imageUrls: string[];
  name: string;
  totalSoldQuantity: number;
  averageRating: number;

  constructor(data: FilteredBookData) {
    this.id = data.id;
    this.imageUrls = data.imageUrls;
    this.name = data.name;
    this.totalSoldQuantity = data.totalSoldQuantity;
    this.averageRating = data.averageRating;
  }
}
