import { serialize } from "cookie";

export async function POST(request: Request, params: { slug: string }) {
  const data: { password: string } = await request.json();
  console.log("data", data);
  const password = data.password;
  console.log("pw", password);
  console.log("env", process.env.PAGE_PASSWORD);


  const cookie = serialize(process.env.PASSWORD_COOKIE_NAME!, "true", {
    httpOnly: false,
    path: "/",
  });

  if (process.env.PAGE_PASSWORD !== password) {
    return new Response("incorrect password", {
      status: 401,
    });
  }

  return new Response("password correct", {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
    },
  });
}
