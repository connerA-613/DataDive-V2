'useClient';

import { Form } from "radix-ui";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";


export default function LoginForm() {
    const supabase = useSupabaseClient();
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error("Login failed:", error.message);
        } else {
            console.log("Login successful");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <Form.Root className="w-full max-w-md bg-white p-8 rounded-lg shadow" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
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
                        <input className="w-full px-4 py-2 border-2 border-black rounded" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
                        <div className="relative w-full">
                            <PasswordToggleField.Root>
                                <div>
                                <PasswordToggleField.Input className="w-full px-4 py-2 mr-2 border-2 border-black rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <PasswordToggleField.Toggle className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <PasswordToggleField.Icon
                                        visible={<EyeOpenIcon className="text-black w-5 h-10 ml-10"/>}
                                        hidden={<EyeClosedIcon className="text-black w-5 h-10 ml-10"/>}
                                    />
                                </PasswordToggleField.Toggle>
                                </div>
                            </PasswordToggleField.Root>
                        </div>
                    </Form.Control>
                </Form.Field>
                <button
                type="submit"
                className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                onClick={handleLogin}
            >
                Login
            </button>
            </Form.Root>
        </div>
    )
}