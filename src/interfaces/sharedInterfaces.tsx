
export interface Author {
    name: string;
    booksCount: number;
    picture: string;
}

export interface Book {
    id: number;
    name: string;
    cover: string;
    description: string;
    author: Author;
}

