import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import AuthLayout from '@/layouts/auth-layout';

interface Props {
    status?: string;
}

export default function ForgotPassword({ status }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/forgot-password');
    };

    return (
        <AuthLayout>
            <Head title="Forgot Password" />

            <h1 className="mb-2 text-center text-2xl font-semibold text-gray-900 dark:text-white">
                Forgot your password?
            </h1>

            <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
                No problem. Enter your email address and we'll send you a link to reset your password.
            </p>

            {status && (
                <div className="mb-4 rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/50 dark:text-green-300">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        required
                        autoFocus
                        autoComplete="email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    {processing ? 'Sending...' : 'Send reset link'}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Remember your password?{' '}
                <Link href="/login" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                    Sign in
                </Link>
            </p>
        </AuthLayout>
    );
}
