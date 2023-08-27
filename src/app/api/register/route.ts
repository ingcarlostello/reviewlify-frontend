// @Nextjs
import { NextResponse } from "next/server";

// @bcrypt
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, email, password } = body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const response = await fetch(
            "http://127.0.0.1:1337/api/auth/local/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    //password: hashedPassword,
                    password
                }),
            }
        );

        console.log("response-->", response.ok);

        if (response.ok) {
            return NextResponse.json({
                success: true,
                message: "User created successfully",
            });
        }

        if (!response.ok) {
            return NextResponse.json({
                success: false,
                message: "Username or email already exist",
            });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message:
                error.message || "There was an error processing the POST request",
        });
    }
}
