export class Customer {
  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  copyWith = (obj: Object) => new Customer(Object.assign(this, obj));

  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  district?: string;

  validate() {
    return this.name && this.phone && this.address;
  }
}
