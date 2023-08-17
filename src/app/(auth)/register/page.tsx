"use client";

// @View Models
import RegisterViewModel from "./page.viewModel";

// @Nextjs
import Image from "next/image";
import Link from "next/link";

// @Assets
import Logo from "../../../assets/logo-black-white.png";

// @Components
import GoogleButtom from "@/components/GoogleButtom";

const Register = () => {
    const { handleChange, username, email, password, handleUserRegister, repeatPassword, setRepeatPassword, validateForm } = RegisterViewModel(); 
    

    return (
        <>
            <div className="min-h-screen grid content-center">
                <div className="flex justify-center mb-4">
                    <Image src={Logo} alt="Reviewlify-logo" width={250} height={250} />
                </div>
                <div className="flex justify-center">
                    <div className="sm:shadow-2xl w-full max-w-sm bg-base-100 md:card">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nombre Usuario/Empresa *</span>
                                </label>
                                <input
                                    className={`${username ? 'input input-bordered' : validateForm}`}                                         
                                    name="username"
                                    onChange={handleChange}
                                    placeholder="Nombre Empresa"
                                    type="text"
                                    value={username.trim().toLowerCase()}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email *</span>
                                </label>
                                <input
                                    className={`${email ? 'input input-bordered' : validateForm}`}  
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Email"
                                    type="text"
                                    value={email}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password *</span>
                                </label>
                                <input
                                    className={`${password ? 'input input-bordered' : validateForm}`}  
                                    name="password"
                                    onChange={handleChange}
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Repetir Password *</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Repetir password"
                                    className={`${repeatPassword ? 'input input-bordered' : validateForm}`}  
                                    name="repeatPassword"
                                    value={repeatPassword}
                                    onChange={e => setRepeatPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    onClick={handleUserRegister}
                                    className="btn btn-primary"
                                >
                                    Registrar
                                </button>
                            </div>
                            <div className="mt-8">
                                <fieldset className="border-t border-slate-300 mb-5">
                                    <legend className="mx-auto px-4 italic">
                                        Registrarse con:
                                    </legend>
                                </fieldset>
                                <div className="text-center">
                                    <GoogleButtom />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-6 mb-10">
                    <p>
                        Ya tengo una cuenta{" "}
                        <Link className="link" href="/login">
                            Iniciar Sesión
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
