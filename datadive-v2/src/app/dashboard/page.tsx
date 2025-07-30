'use client';

import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Session } from '@supabase/auth-helpers-nextjs';

const DashboardPage = () => {
    const supabase = createClientComponentClient();
    const [session, setSession] = React.useState<Session | null>(null);

    React.useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [supabase]);
    return (
        <main className="dashboard-page">
            <h1>Dashboard</h1>
            {session ? (
                <div>
                    <h2>Welcome, {session.user.email}</h2>
                    {/* Add more user-specific content here */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
};
export default DashboardPage;