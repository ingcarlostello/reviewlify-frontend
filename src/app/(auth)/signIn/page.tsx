// @Nextjs
import Image from "next/image";

// @Assets
import Logo from "../../../assets/logo-black-white.png";

// Components
import GoogleButtom from "@/components/GoogleButtom";

const SignIn = () => {
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
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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
            </div>
        </>
    );
};

export default SignIn;
