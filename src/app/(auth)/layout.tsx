"use client";

import { useState, useEffect } from "react";

import AuthProvider from "@/context/AuthProvider";

import { Toaster } from "react-hot-toast";

export default function Layout({ children }: any) {
    const [windowSize, setWindowSize] = useState({ width: 0 });

    useEffect(() => {
        setWindowSize({ width: window.innerWidth });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth });
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toasterPosition = windowSize.width! < 768 ? "top-center" : "top-right";

    return (
        <>
            <AuthProvider>
                <main>{children}</main>
                <Toaster position={toasterPosition} reverseOrder={false} />
            </AuthProvider>
        </>
    );
}
