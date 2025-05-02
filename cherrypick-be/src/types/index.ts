type Item = {
    id: string;
    title: string;
    author: string;
    cover?: string;
    description?: string;
    type: "book";
}

type Pairing = {
    id: string;
    item1: Item;
    item2: Item;
}