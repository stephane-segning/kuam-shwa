import {PropsWithChildren} from "react";
import {Navbar} from "@/components/nav/navbar";
import {Footer} from "@/components/footer/footer";

export default async function MainLayout({children}: PropsWithChildren) {
    return (
        <>
            <Navbar/>
            {children}
            <Footer />
        </>
    )
}