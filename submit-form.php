<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримуємо дані з форми
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Електронна пошта, на яку будуть надсилатися дані
    $to = "jariksuperlol6@gmail.com"; // Введіть вашу пошту
    $subject = "Нова заявка з форми";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Тіло листа
    $body = "Ім'я: $name\n";
    $body .= "Телефон: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Повідомлення: $message\n";

    // Відправка листа
    if (mail($to, $subject, $body, $headers)) {
        echo "Ваше повідомлення успішно надіслано.";
    } else {
        echo "Сталася помилка при відправленні повідомлення.";
    }
}
?>