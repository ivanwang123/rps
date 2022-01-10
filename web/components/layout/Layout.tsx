import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import Home from "svgs/home.svg";
import User from "svgs/user.svg";

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
              <Home className="w-6 h-6 mr-2" /> RPS
            </a>
          </Link>
          <button type="button" className="ml-auto group">
            <span className="underline-offset-2 group-hover:underline">
              Logout
            </span>
          </button>
        </nav>
        <div className="flex justify-center">
          {/* <button
            type="button"
            className="flex items-center group mb-auto ml-6 mt-2"
          >
            <User className="w-6 h-6 mr-2" />
            <span className="underline-offset-2 group-hover:underline">
              Profile
            </span>
          </button> */}
          <main className="col-start-2 w-full max-w-xl min-w-xs pb-2 mx-2 sm:pb-12">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
