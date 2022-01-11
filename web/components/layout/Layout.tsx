import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import Home from "svgs/home.svg";
import Logo from "svgs/logo.svg";

type Props = {
  children?: ReactNode;
  title?: string;
};

export function Layout({ children, title = "Chitter" }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid-topbar min-h-full bg-background">
        <nav className="flex items-center w-full px-6 py-3">
          <Link href="/home">
            <a className="flex items-center">
              <Logo className="w-4 h-4 mr-2" /> RPS
            </a>
          </Link>
          <button type="button" className="ml-auto group">
            <span className="underline-offset-2 group-hover:underline">
              Logout
            </span>
          </button>
        </nav>
        <div className="flex justify-center">
          <main className="w-full max-w-xl min-w-xs pb-8 mx-6">{children}</main>
        </div>
      </div>
    </>
  );
}
