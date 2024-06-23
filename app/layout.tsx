"use client"

import "./globals.scss";
import React from "react";
import NavLists from "@/app/component/NavLists";
import TaberController from "@/app/component/TaberController";



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
    {children}
    </body>
    </html>
  );
}
