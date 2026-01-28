import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import PageTransition from '@/components/page-transition';

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-12">
            {/* Decorative background elements */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-200/60 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-200/60 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral-100/40 blur-3xl" />
            </div>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-md">
                {/* Centered logo */}
                <div className="mb-10 text-center">
                    <Link href="/" className="inline-block">
                        <img src="/assets/images/logo.png" alt="attnd" className="mx-auto h-14 w-auto" />
                    </Link>
                </div>

                <PageTransition>{children}</PageTransition>
            </div>
        </div>
    );
}
