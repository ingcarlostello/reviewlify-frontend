"use client";

// @Vier model
import LoginViewModel from "./Login.viewModel";

// Components
import GoogleButtom from "@/components/GoogleButtom";

// @Nextjs
import Image from "next/image";
import Link from "next/link";

// @Assets
import Logo from "../../../assets/logo-black-white.png";


const LogIn = () => {
    const { handleSubmit, loginData, setLoginData, validateForm } = LoginViewModel();

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
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className={`${loginData.email ? "input input-bordered" : validateForm
                                        }`}
                                    //className="input input-bordered"
                                    value={loginData.email.trim().toLowerCase()}
                                    onChange={({ target }) =>
                                        setLoginData({ ...loginData, email: target.value })
                                    }
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className={`${loginData.password ? "input input-bordered" : validateForm
                                        }`}
                                    //className="input input-bordered"
                                    value={loginData.password}
                                    onChange={({ target }) =>
                                        setLoginData({ ...loginData, password: target.value })
                                    }
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    onClick={(e) => handleSubmit(e)}
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="mt-8">
                                <fieldset className="border-t border-slate-300 mb-5">
                                    <legend className="mx-auto px-4 italic">
                                        Loguearse con:
                                    </legend>
                                </fieldset>
                                <div className="text-center">
                                    <GoogleButtom />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <p>
                        No tienes una cuenta?{" "}
                        <Link className="link" href="/register">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LogIn;
