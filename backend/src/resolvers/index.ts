import { booksData } from "../data/book";

export const resolvers = {
  Query: {
    books: () => booksData,
  },
};