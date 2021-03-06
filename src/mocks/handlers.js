import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", true);
    return res(ctx.status(200));
  }),
  rest.post("/newlogin", (req, res, ctx) => {
    const { username } = req.body;
    return res(
      ctx.json({
        id: "1234-123",
        username,
        firstName: "Nike",
        lastName: "Olympus",
      })
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated") === true;

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not Authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
