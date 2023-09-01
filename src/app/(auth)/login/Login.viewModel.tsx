import { useState } from "react";

// @Nextjs
import { useRouter } from "next/navigation";

// @NextAuth
import { signIn } from "next-auth/react";

// @Interfaces
import { ILoginCredentials } from "@/interfaces/IAuth";

// @React Toaster
import toast from "react-hot-toast";

const LoginViewModel = () => {
    const router = useRouter();
    const [loginData, setLoginData] = useState<ILoginCredentials>({
        email: "",
        password: "",
    });

    const [errorLogin, setErrorLogin] = useState<string>();

    const [validateForm, setValidateForm] = useState<string>(
        "input input-bordered"
    );

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!loginData || Object.values(loginData).some((value) => !value)) {
            console.error("Error: Campos vacíos");
            setValidateForm("input input-bordered input-error");
            return toast.error("Por favor, rellena todos los campos");
        }

        try {
            const res = await signIn("credentials", {
                email: loginData.email,
                password: loginData.password,
                redirect: false,
            });

            if (res?.error) {
                setErrorLogin("Invalid credentials");
                return toast.error("Credenciales invalidas");
            }

            if (res?.ok) {
                return router.push("/dashboard");
            }
        } catch (error) {
            console.log("error:", error);
        }
    };


    return {
        // functios
        handleSubmit,

        // constants
        loginData,
        setLoginData,
        validateForm,
    };
};

export default LoginViewModel;
