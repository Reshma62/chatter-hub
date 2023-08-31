const emailOTP = (otp,userName) => {
  return `  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
        <center>
            <img src="https://example.com/logo.png" alt="Your Company Logo" style="max-width: 100px; height: auto;">
            <h1 style="color: #333;">Chatter Hub</h1>
        </center>

        <p>Hello ${userName},</p>
        <p style="color: #333;">
            Thank you for signing up with Your Company. Please click the following link to verify your email:
            <a href="https://example.com/verify-link" style="color: #007bff; text-decoration: none;">Verify Email otp is:  ${otp}</a>
        </p>
        <p style="color: #333;">
            This is a sample email template. You can customize it according to your needs.
        </p>
        <p style="color: #333;">
            Feel free to add more content here. Use inline styles for styling to ensure better compatibility with email clients.
        </p>
        <p style="color: #333;">Best regards,<br>Your Name</p>

        <div style="text-align: center; padding: 20px; color: #777;">
            &copy; 2023 Your Company. All rights reserved.
        </div>
    </div>`;
};
module.exports = emailOTP;
