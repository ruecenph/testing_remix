import { redirect, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { useTranslation } from 'react-i18next';
import { userLocale } from "~/cookies.server";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({
  request,
}: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userLocale.parse(cookieHeader)) || {};
  const bodyParams = await request.formData();

  if (bodyParams.has("language")) {
    cookie.language = bodyParams.get("language");
  }
  

  return redirect("/", {
    headers: {
      "Set-Cookie": await userLocale.serialize(cookie),
    },
  });
}

export default function Index() {

  const { t } = useTranslation();

  const testLink = [
    'my', 'intl', 'about', 'post/23/th', 'contact'
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix {t('title')} {t('welcome')}</h1>
      <Form method="post">
            <select name="language">
              <option value="en">English</option>
              <option value="de">Deutch</option>
            </select>
            <button type="submit">Switch Language</button>
        </Form>
      <ul>
        {
          testLink.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link}>{link}</Link>
              </li>
            )
          })
        }
      </ul>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
