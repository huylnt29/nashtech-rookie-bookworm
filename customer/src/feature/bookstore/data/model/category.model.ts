interface CategoryData {
  id: number;
  name: string;
}

class Category {
  id: number;
  name: string;

  constructor(data: CategoryData) {
    this.id = data.id;
    this.name = data.name;
  }
}
