import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import AuthLayout from '@/layouts/auth-layout';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/email/verification-notification');
    };

    return (
        <AuthLayout>
            <Head title="Verify Email" />

            <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-xl shadow-gray-200/50 backdrop-blur-sm">
                {/* Header */}
                <div className="mb-6 text-center">
                    {/* Email Icon */}
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                        <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Check your email</h1>
                    <p className="mt-3 text-gray-500">
                        We've sent a verification link to your email address. Please click the link to activate your account.
                    </p>
                </div>

                {/* Success Message */}
                {status === 'verification-link-sent' && (
                    <div className="mb-6 rounded-xl bg-green-50 p-4 text-center">
                        <p className="text-sm font-medium text-green-700">A new verification link has been sent to your email!</p>
                    </div>
                )}

                {/* Resend Form */}
                <form onSubmit={submit}>
                    <p className="mb-4 text-center text-sm text-gray-500">
                        Didn't receive the email? Check your spam folder or click below to resend.
                    </p>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded-xl bg-primary-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 focus:ring-4 focus:ring-primary-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {processing ? 'Sending...' : 'Resend verification email'}
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-sm text-gray-400">or</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Logout Link */}
                <Link
                    href="/logout"
                    method="post"
                    as="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 focus:outline-none"
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                    Sign out and use a different account
                </Link>
            </div>
        </AuthLayout>
    );
}
