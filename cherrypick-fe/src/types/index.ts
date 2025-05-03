export type Item = {
  id: string;
  title: string;
  author: string;
  cover?: string;
  description?: string;
  type: "book";
};

export type Pairing = {
  user: string;
  item1: Item;
  item2: Item;
};
