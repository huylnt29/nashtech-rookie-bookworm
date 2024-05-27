interface AuthorData {
  id: number;
  name: string;
}

class Author {
  id: number;
  name: string;

  constructor(data: AuthorData) {
    this.id = data.id;
    this.name = data.name;
  }
}
