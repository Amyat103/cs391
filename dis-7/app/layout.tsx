import React from "react";
import type {Metadata} from "next";
import Header from "@/app/components/header";

export const metadata: Metadata = {
    title: "Dis-7 | CS-391",
    description: "GA web-app showcasing the simple Next.js tools/functionalities",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body>
                <Header/>
                {children}
            </body>
        </html>
    );
}
