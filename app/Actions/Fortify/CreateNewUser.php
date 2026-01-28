<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'user_type' => ['required', 'string', Rule::in(['organizer', 'attendee'])],
            'password' => $this->passwordRules(),
        ])->validate();

        // Wrap in transaction for atomicity
        // Fortify dispatches Registered event after this returns,
        // which triggers SendWelcomeEmail listener (queued)
        return DB::transaction(function () use ($input) {
            return User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'user_type' => $input['user_type'],
                'password' => Hash::make($input['password']),
            ]);
        });
    }
}
