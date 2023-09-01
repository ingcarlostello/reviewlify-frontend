"use client";

// @reactjs
import { useEffect } from "react";

// @next js
import { useRouter } from "next/navigation";

const Redirect = () => {
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:1337/api/auth/google/callback${location.search}`);

                if (!response.ok) {
                    throw new Error(`Couldn't login to Strapi. Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('data--->', data);

                setTimeout(() => {
                    router.push("/dashboard");
                }, 3000);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return <p>redireccionado...</p>;
};

export default Redirect;
