type Item = {
    title: string;
    author: string;
    cover?: string;
    description?: string;
    type: "book";
}

type Pairing = {
    user: string;
    item1: string;
    item2: string;
}