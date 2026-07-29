<?php
// api/send-contact.php - Handle contact form submissions
// This works on Hostinger shared hosting (no Node.js needed)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get JSON data from React
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit;
}

// Validate required fields
$name = sanitize($data['name'] ?? '');
$email = sanitize($data['email'] ?? '');
$message = sanitize($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields: name, email, message']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Get optional fields
$phone = sanitize($data['phone'] ?? 'Not provided');
$subject = sanitize($data['subject'] ?? 'Contact Form Submission');

// Company email address
$company_email = 'greenchipenergy@gmail.com';

// Email to company
$subject_company = "📧 Contact Form: $subject";
$message_company = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h2 { color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px; }
        p { margin: 10px 0; }
        strong { color: #14532d; }
        hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
        .label { color: #16a34a; font-weight: bold; }
        .timestamp { color: #999; font-size: 12px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>New Contact Form Submission</h2>
        <p><span class='label'>Name:</span> $name</p>
        <p><span class='label'>Email:</span> $email</p>
        <p><span class='label'>Phone:</span> $phone</p>
        <p><span class='label'>Subject:</span> $subject</p>
        <p><span class='label'>Message:</span></p>
        <p>$message</p>
        <hr/>
        <p><small>Reply to: $email</small></p>
        <p class='timestamp'>Received: " . date('Y-m-d H:i:s') . "</p>
    </div>
</body>
</html>
";

// Email to user (confirmation)
$subject_user = "✅ We received your message - GreenChip Energy";
$message_user = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h2 { color: #16a34a; }
        p { margin: 10px 0; }
        .footer { color: #999; font-size: 12px; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>Thank you, $name!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <div class='footer'>
            <p>Best regards,<br/>GreenChip Energy Team</p>
        </div>
    </div>
</body>
</html>
";

// Send email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: noreply@greenchipenergy.com\r\n";
$headers .= "Reply-To: $email\r\n";

// Send to company
$mail_company = mail($company_email, $subject_company, $message_company, $headers);

// Send confirmation to user
$mail_user = mail($email, $subject_user, $message_user, $headers);

if ($mail_company && $mail_user) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}

// Sanitize input
function sanitize($string) {
    return htmlspecialchars(strip_tags(trim($string)), ENT_QUOTES, 'UTF-8');
}
?>
