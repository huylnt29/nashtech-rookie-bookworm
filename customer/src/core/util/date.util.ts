export class DateUtil {
  static isBeforeToday = (date: Date) => {
    const today = new Date();
    return (
      new Date(date.getFullYear(), date.getMonth(), date.getDate()) <
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  };
}
