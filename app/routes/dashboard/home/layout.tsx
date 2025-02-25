import { Outlet } from "@remix-run/react";

export const HomeLayout: React.FC = () => {
    return (
        <div className="flex h-full flex-col">
            <header className="bg-gray-100 p-4">
                <h1 className="text-3xl font-bold">Home</h1>
            </header>
            <main className="flex-1 p-4">
                <Outlet />
            </main>
        </div>
    );
};
