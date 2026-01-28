import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                        Event Booking
                    </Link>
                </div>
                <div className="rounded-lg bg-white px-8 py-10 shadow-md dark:bg-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
}
