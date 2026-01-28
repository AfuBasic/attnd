import { Head, Link, router } from '@inertiajs/react';

interface Props {
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export default function Dashboard({ user }: Props) {
    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <nav className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex items-center">
                                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                                    Event Booking
                                </Link>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-700 dark:text-gray-300">{user.name}</span>
                                <button
                                    onClick={handleLogout}
                                    className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className="py-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Welcome back, {user.name}! Your event booking dashboard will appear here.
                        </p>

                        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h2>
                                <p className="mt-2 text-3xl font-bold text-indigo-600">0</p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Events you're attending</p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Bookings</h2>
                                <p className="mt-2 text-3xl font-bold text-indigo-600">0</p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Total bookings made</p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Saved Events</h2>
                                <p className="mt-2 text-3xl font-bold text-indigo-600">0</p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Events in your wishlist</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
