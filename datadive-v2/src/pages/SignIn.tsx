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
        <Form.Root className="FormRoot">
            <Form.Field className="FormField" name="email">
                <div className="flex flex-col mb-4 align-center justify-between">
                    <Form.Label className="FormLabel">Email</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Please enter your email
                    </Form.Message>
                    <Form.Message className="FormMessage" match="typeMismatch">
                        Please enter a valid email
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Control>
                <Form.Field className="FormField" name="password">
                    <div className="flex flex-col mb-4 align-center justify-between">
                        <Form.Label className="FormLabel">Password</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter your password
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <PasswordToggleField.Root>
                            <PasswordToggleField.Input className="Input" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <PasswordToggleField.Toggle className="Toggle">
                                <PasswordToggleField.Icon
                                    visible={<EyeOpenIcon />}
                                    hidden={<EyeClosedIcon />}
                                />
                            </PasswordToggleField.Toggle>
                        </PasswordToggleField.Root>
                    </Form.Control>
                </Form.Field>

            </Form.Field>
        </Form.Root>
    )
}