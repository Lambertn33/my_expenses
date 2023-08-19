import uuid from "react-native-uuid";

export class Expense {
  constructor(title, description, categoryId, amount) {
    this.id = uuid.v4();
    this.title = title;
    this.description = description;
    this.categoryId = categoryId;
    this.amount = amount;
  }
}
