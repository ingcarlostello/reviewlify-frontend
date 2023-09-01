import { ChangeEvent, useState } from "react";

// @Interfaces
import { IUserData } from "@/interfaces/IUserData";

// @Constants
import {REGISTER_ENDPOINT} from "@/constants/urls";

// @React Toaster
import toast from "react-hot-toast";

const RegisterViewModel = () => {



    const [userData, setUserData] = useState<IUserData>({
        username: "",
        email: "",
        password: "",
    });
    const [repeatPassword, setRepeatPassword] = useState<string>();

    const [validateForm, setValidateForm] = useState("input input-bordered");

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
            setValidateForm("input input-bordered input-error");
            return toast.error("Por favor, rellena todos los campos");
        }

        if (
            (userData.password && !repeatPassword) ||
            (!userData.password && !repeatPassword)
        ) {
            return toast.error("Por favor, rellena todos los campos");
        } else if (userData.password !== repeatPassword) {
            return toast.error("Passwords no coinciden");
        }

        try {
            const toastId = toast.loading("Registrando...");
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
                toast.remove(toastId);
                return toast.error("Ocurrió un error al guardar los datos");
            }

            if (data.success) {
                toast.remove(toastId);
                setUserData({
                    username: "",
                    email: "",
                    password: "",
                });
                setRepeatPassword("");
                return toast.success("Usuario creado con exito!");
            }

            toast.remove(toastId);
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
        email,
        password,
        repeatPassword,
        username,
        validateForm,
    };
};

export default RegisterViewModel;
