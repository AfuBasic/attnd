<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - Attnd</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f3f7;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f3f7; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #5f4780 0%, #72569a 100%); padding: 40px 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                attnd
                            </h1>
                            <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.8); font-size: 14px;">
                                Your gateway to amazing events
                            </p>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <!-- Welcome Message -->
                            <h2 style="margin: 0 0 16px; color: #2d2240; font-size: 24px; font-weight: 600;">
                                Welcome, {{ $user->name }}! 🎉
                            </h2>
                            
                            <p style="margin: 0 0 24px; color: #666666; font-size: 16px; line-height: 1.6;">
                                We're thrilled to have you join our community of
                                @if($user->user_type === 'organizer')
                                <strong style="color: #5f4780;">event organizers</strong>. You're now ready to create amazing events and connect with attendees.
                                @else
                                <strong style="color: #5f4780;">event enthusiasts</strong>. Get ready to discover and attend incredible events near you.
                                @endif
                            </p>

                            <p style="margin: 0 0 24px; color: #666666; font-size: 16px; line-height: 1.6;">
                                Please click the button below to verify your email address and activate your account:
                            </p>

                            <!-- Verify Email Button -->
                            <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 32px 0;">
                                <tr>
                                    <td style="background-color: #e17868; border-radius: 12px;">
                                        <a href="{{ $verificationUrl }}" style="display: inline-block; padding: 16px 32px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600;">
                                            Verify Email Address
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin: 0 0 24px; color: #999999; font-size: 14px; line-height: 1.6;">
                                This verification link will expire in 60 minutes.
                            </p>

                            <!-- Divider -->
                            <hr style="border: none; border-top: 1px solid #ebe7ef; margin: 32px 0;">

                            <!-- What's Next Section -->
                            <h3 style="margin: 0 0 16px; color: #2d2240; font-size: 18px; font-weight: 600;">
                                What's Next?
                            </h3>

                            @if($user->user_type === 'organizer')
                            <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                                <tr>
                                    <td style="padding: 12px 0;">
                                        <table role="presentation" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="width: 32px; height: 32px; background-color: #f5f3f7; border-radius: 8px; text-align: center; vertical-align: middle;">
                                                    <span style="color: #5f4780; font-size: 14px;">✨</span>
                                                </td>
                                                <td style="padding-left: 12px; color: #666666; font-size: 15px;">Create your first event</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0;">
                                        <table role="presentation" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="width: 32px; height: 32px; background-color: #f5f3f7; border-radius: 8px; text-align: center; vertical-align: middle;">
                                                    <span style="color: #5f4780; font-size: 14px;">👤</span>
                                                </td>
                                                <td style="padding-left: 12px; color: #666666; font-size: 15px;">Set up your organizer profile</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0;">
                                        <table role="presentation" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="width: 32px; height: 32px; background-color: #f5f3f7; border-radius: 8px; text-align: center; vertical-align: middle;">
                                                    <span style="color: #5f4780; font-size: 14px;">🎫</span>
                                                </td>
                                                <td style="padding-left: 12px; color: #666666; font-size: 15px;">Start selling tickets</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            @else
                            <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                                <tr>
                                    <td style="padding: 12px 0;">
                                        <table role="presentation" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="width: 32px; height: 32px; background-color: #f5f3f7; border-radius: 8px; text-align: center; vertical-align: middle;">
                                                    <span style="color: #5f4780; font-size: 14px;">🔍</span>
                                                </td>
                                                <td style="padding-left: 12px; color: #666666; font-size: 15px;">Browse upcoming events</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0;">
                                        <table role="presentation" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="width: 32px; height: 32px; background-color: #f5f3f7; border-radius: 8px; text-align: center; vertical-align: middle;">
                                                    <span style="color: #5f4780; font-size: 14px;">❤️</span>
                                                </td>
                                                <td style="padding-left: 12px; color: #666666; font-size: 15px;">Save events you're interested in</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0;">
                                        <table role="presentation" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="width: 32px; height: 32px; background-color: #f5f3f7; border-radius: 8px; text-align: center; vertical-align: middle;">
                                                    <span style="color: #5f4780; font-size: 14px;">🎟️</span>
                                                </td>
                                                <td style="padding-left: 12px; color: #666666; font-size: 15px;">Book your first tickets</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            @endif

                            <!-- Security Note -->
                            <div style="margin-top: 32px; padding: 16px; background-color: #f5f3f7; border-radius: 8px;">
                                <p style="margin: 0; color: #666666; font-size: 13px; line-height: 1.5;">
                                    If you didn't create an account on Attnd, you can safely ignore this email.
                                </p>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f5f3f7; padding: 30px 40px; text-align: center;">
                            <p style="margin: 0 0 8px; color: #666666; font-size: 14px;">
                                Questions? We're here to help.
                            </p>
                            <a href="mailto:support@attnd.com" style="color: #5f4780; text-decoration: none; font-size: 14px; font-weight: 500;">
                                support@attnd.com
                            </a>
                            <p style="margin: 24px 0 0; color: #999999; font-size: 12px;">
                                © {{ date('Y') }} Attnd. All rights reserved.
                            </p>
                            <p style="margin: 12px 0 0; color: #cccccc; font-size: 11px; word-break: break-all;">
                                If the button doesn't work, copy this link:<br>
                                <a href="{{ $verificationUrl }}" style="color: #5f4780;">{{ $verificationUrl }}</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
