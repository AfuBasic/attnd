import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import AuthLayout from '@/layouts/auth-layout';

function GoogleIcon() {
    return (
        <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
        </svg>
    );
}

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/register');
    };

    const handleGoogleSignIn = () => {
        // TODO: Implement Google OAuth sign-in
        console.log('Google sign-in clicked - not yet implemented');
    };

    return (
        <AuthLayout>
            <Head title="Register" />

            <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-xl shadow-gray-200/50 backdrop-blur-sm">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Get started</h1>
                    <p className="mt-2 text-gray-500">Create your account to discover amazing events</p>
                </div>

                <form onSubmit={submit} className="space-y-4">
                {/* Name and Email in a row on larger screens */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:outline-none"
                            placeholder="John Doe"
                            required
                            autoFocus
                            autoComplete="name"
                        />
                        {errors.name && <p className="mt-1.5 text-sm text-coral-600">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:outline-none"
                            placeholder="john@example.com"
                            required
                            autoComplete="email"
                        />
                        {errors.email && <p className="mt-1.5 text-sm text-coral-600">{errors.email}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:outline-none"
                        placeholder="Min. 8 characters"
                        required
                        autoComplete="new-password"
                    />
                    {errors.password && <p className="mt-1.5 text-sm text-coral-600">{errors.password}</p>}
                </div>

                <div>
                    <label htmlFor="password_confirmation" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Confirm password
                    </label>
                    <input
                        id="password_confirmation"
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 focus:outline-none"
                        placeholder="Confirm your password"
                        required
                        autoComplete="new-password"
                    />
                    {errors.password_confirmation && (
                        <p className="mt-1.5 text-sm text-coral-600">{errors.password_confirmation}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="mt-2 w-full rounded-xl bg-primary-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 focus:ring-4 focus:ring-primary-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {processing ? 'Creating account...' : 'Create account'}
                </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-400">or continue with</span>
                <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Google Sign In Button */}
            <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 focus:outline-none"
            >
                <GoogleIcon />
                Google
            </button>

            <p className="mt-8 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link href="/login" className="font-semibold text-primary-600 transition-colors hover:text-primary-700">
                        Sign in
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
