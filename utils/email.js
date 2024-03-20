// emailTemplates.js

export function getPasswordResetTemplate(link, userName) {
    return `
        <div style="font-family: 'Arial', sans-serif; max-width: 400px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  
            <img src="https://media.istockphoto.com/id/144349803/photo/cables.jpg?s=612x612&w=0&k=20&c=7fht36zJSEXu3j1XQCEC9bMGt4n95AGGkC5GafmHd5o=" alt="Cable Shop logo" style="max-width: 100%; margin-bottom: 20px;">
  
            <h1 style="color: #007bff;">Hello ${userName},</h1>
  
            <p>We received a request to reset your password. Click the link below to reset it:</p>
  
            <p style="background-color: #007bff; color: #fff; padding: 8px; border-radius: 5px; text-align: center; margin: 2px 0 2px 0">
                <a href="${link}" style="text-decoration: none; color: #fff; font-weight: bold;">Reset Your Password</a>
            </p>
  
            <p>If you didn't request a password reset, please ignore this email.</p>
  
            <p style="font-size: 12px; color: #888;">Thank you,<br>Sharyng.ai</p>
        </div>
    `;
  }
  
  export function getVerificationTemplate(verificationLink) {
    return `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  
            <img src="https://media.istockphoto.com/id/144349803/photo/cables.jpg?s=612x612&w=0&k=20&c=7fht36zJSEXu3j1XQCEC9bMGt4n95AGGkC5GafmHd5o=" alt="Cable Shop" style="max-width: 100%; margin-bottom: 20px;">
  
            <h1 style="color: #4caf50;">Welcome to Sharyng.ai!</h1>
  
            <p>Thank you for signing up. To complete your registration, please click the link below to verify your email address:</p>
  
            <p style="background-color: #4caf50; color: #fff; padding: 10px; border-radius: 5px; text-align: center;">
                <a href="${verificationLink}" style="text-decoration: none; color: #fff; font-weight: bold;">Verify Your Email</a>
            </p>
  
            <p style="font-size: 12px; color: #888;">This step ensures the security of your account and helps us provide you with the best service.</p>
  
            <p style="font-size: 12px; color: #888;">If you didn't sign up for [Sharyng.ai], please ignore this email.</p>
  
            <p style="font-size: 12px; color: #888;">Thank you,<br>Sharyng.ai</p>
        </div>
    `;
  }