"use client";

import "./globals.scss";
import React from "react";
import NavLists from "@/app/component/NavLists";
import TaberController from "@/app/component/TaberController";
import { Provider } from "react-redux";
import { store } from "@/app/store";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavLists></NavLists>
        <TaberController></TaberController>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
