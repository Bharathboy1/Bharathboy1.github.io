<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "your-email@gmail.com"; // Your Gmail address
    $subject = $subject;
    $body = "Name: $fullname\nEmail: $email\nPhone: $phone\n\n$message";

    // Headers
    $headers = "From: $email";

    // Sending email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>
