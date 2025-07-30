'use client';

import { Form } from "radix-ui";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SignUpForm() {
    const supabase = useSupabaseClient();
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [confirmPassword, setConfirmPassword] = React.useState<string>("");
    const [viewError, setViewError] = React.useState<string | null>(null);
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setViewError("Passwords do not match");
            return;
        }
        if (!email || !password) {
            setViewError("Email and password are required");
            return;
        }
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setViewError("Sign up failed: " + error.message);
        } else {
            console.log("Sign up successful");
            router.push("/dashboard"); // Redirect to dashboard after successful sign up
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <Form.Root className="w-full max-w-md bg-white p-8 rounded-lg shadow" onSubmit={handleSignUp}>
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
                <Form.Field className="w-full mb-4" name="email">
                    <div className="flex items-center justify-between mb-2">
                        <Form.Label className="FormLabel text-black">Email</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter your email
                        </Form.Message>
                        <Form.Message className="FormMessage" match="typeMismatch">
                            Please enter a valid email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input className="w-full px-4 py-2 border-2 border-black rounded text-black" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Control>
                </Form.Field>
                <Form.Field className=" w-full mb-4" name="password">
                    <div className="flex mb-2 items-center justify-between">
                        <Form.Label className="FormLabel text-black">Password</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter your password
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <PasswordToggleField.Root>
                            <div className="relative w-full">
                            <PasswordToggleField.Input className="w-full px-4 py-2 mr-2 border-2 border-black rounded text-black" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <PasswordToggleField.Toggle className="absolute right-3 top-1/2 -translate-y-1/2">
                                <PasswordToggleField.Icon
                                    visible={<EyeOpenIcon className="text-black w-5 h-10 ml-10"/>}
                                    hidden={<EyeClosedIcon className="text-black w-5 h-10 ml-10"/>}
                                />
                            </PasswordToggleField.Toggle>
                            </div>
                        </PasswordToggleField.Root>
                    </Form.Control>
                </Form.Field>
                <Form.Field className=" w-full mb-4" name="confirmPassword">
                    <div className="flex mb-2 items-center justify-between">
                        <Form.Label className="FormLabel text-black">Confirm Password</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please re-enter your password
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <PasswordToggleField.Root>
                            <div className="relative w-full">
                            <PasswordToggleField.Input className="w-full px-4 py-2 mr-2 border-2 border-black rounded text-black" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            <PasswordToggleField.Toggle className="absolute right-3 top-1/2 -translate-y-1/2">
                                <PasswordToggleField.Icon
                                    visible={<EyeOpenIcon className="text-black w-5 h-10 ml-10"/>}
                                    hidden={<EyeClosedIcon className="text-black w-5 h-10 ml-10"/>}
                                />
                            </PasswordToggleField.Toggle>
                            </div>
                        </PasswordToggleField.Root>
                    </Form.Control>
                </Form.Field>
                {viewError && <p className="text-red-500">{viewError}</p>}
                <div className="flex items-center justify-between mb-4 gap-4">
                    <button
                    type="submit"
                    className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={handleSignUp}
                    >
                    Sign Up
                    </button>
                    <Link
                        className="w-full mt-2 bg-gray-500 text-center text-white px-4 py-2 rounded hover:bg-gray-300 transition-colors"
                        href="/sign-in">
                        Login
                    </Link>
                </div>
            </Form.Root>
        </div>
    )
}