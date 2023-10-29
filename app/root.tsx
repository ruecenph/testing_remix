import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LinksFunction, type LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { userLocale } from "~/cookies.server";
import i18n from './i18n';
import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];



export async function loader({
  request,
}: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie =
    (await userLocale.parse(cookieHeader)) || {};
  return json({ language: cookie.language || 'en' });
}


type TUseData = {
  language: string;
}


export default function App() {

  const useData:TUseData  = useLoaderData();

  i18n.changeLanguage(useData.language);

  //console.log(" dir --- " +)

  return (
    <html lang={useData.language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
