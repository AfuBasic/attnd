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
        user_type: 'attendee' as 'organizer' | 'attendee',
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
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={`block w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:ring-4 focus:outline-none ${
                                errors.name
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                                    : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500/10'
                            }`}
                            placeholder="John Doe"
                            autoFocus
                            autoComplete="name"
                        />
                        {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={`block w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:ring-4 focus:outline-none ${
                                errors.email
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                                    : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500/10'
                            }`}
                            placeholder="john@example.com"
                            autoComplete="email"
                        />
                        {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    {/* Account Type Selection */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">I want to</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setData('user_type', 'attendee')}
                                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                                    data.user_type === 'attendee'
                                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span className="text-sm font-medium">Attend Events</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setData('user_type', 'organizer')}
                                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                                    data.user_type === 'organizer'
                                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-sm font-medium">Organize Events</span>
                            </button>
                        </div>
                        {errors.user_type && <p className="mt-1.5 text-sm text-red-600">{errors.user_type}</p>}
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
                            className={`block w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:ring-4 focus:outline-none ${
                                errors.password
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                                    : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500/10'
                            }`}
                            placeholder="Min. 8 characters"
                            autoComplete="new-password"
                        />
                        {errors.password && <p className="mt-1.5 text-sm text-red-600">{errors.password}</p>}
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
                            className={`block w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:ring-4 focus:outline-none ${
                                errors.password_confirmation
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                                    : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500/10'
                            }`}
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                        />
                        {errors.password_confirmation && <p className="mt-1.5 text-sm text-red-600">{errors.password_confirmation}</p>}
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
