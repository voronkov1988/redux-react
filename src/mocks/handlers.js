import { rest } from "msw"

import Book from "./books.json"

export const handlers = [
  rest.get("https://books-7d21.restdb.io/rest/books", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({...Book})
    )
  }),
  rest.put("https://books-7d21.restdb.io/rest/books?q={'_id':'601468f062aa200f00000753'}", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(Book.glava)
    )
  })
]