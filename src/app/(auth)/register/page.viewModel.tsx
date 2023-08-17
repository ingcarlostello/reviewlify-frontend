import { ChangeEvent, useState } from "react";

// @Interfaces
import { IUserData } from "@/interfaces/IUserData";

// @Constants
import { REGISTER_ENDPOINT } from "@/constants/urls";

// @React Toaster
import toast from "react-hot-toast";

const RegisterViewModel = () => {
    const [userData, setUserData] = useState<IUserData>({
        username: "",
        email: "",
        password: "",
    });
    const [repeatPassword, setRepeatPassword] = useState<string>();

    const { username, email, password } = userData;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleUserRegister = async () => {
        if (!userData || Object.values(userData).some((value) => !value)) {
            console.error("Error: Campos vacíos");
            return "Por favor, rellena todos los campos.";
        }

        try {
            const response = await fetch(REGISTER_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            console.log("data", data);

            if (data.message === "fetch failed" || !response.ok) {
                return toast.error("Ocurrió un error al guardar los datos");
            }

            if (data.success) {
                return toast.success("Usuario creado con exito!");
            }

            return toast.error("Nombre de usuario o correo ya tomados");
        } catch (error) {
            console.log("error: " + error);
        }
    };

    return {
        // functions
        handleChange,
        handleUserRegister,
        setRepeatPassword,

        // constants
        username,
        email,
        password,
        repeatPassword,
    };
};

export default RegisterViewModel;
