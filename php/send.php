<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['message'];

// Формирование самого письма
$sendus_title = "Новое обращение Best Tour Plan";
$sendus_body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$text
";
$newvisiter_title = "Новый пользователь сайта Best Tour Plan!";
$newvisiter_body = "
<h2>Новый пользователь!</h2>
<b>Email:</b> $email<br>
";

$all_title="Новый пользователь обратился за Booking";
$all_body="
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Email:</b> $email<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$text
";
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'dveretcompany@gmail.com'; // Логин на почте
    $mail->Password   = 'sd456245823164589'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('dveretcompany@gmail.com', 'Дмитрий Веретельников'); // Адрес самой почты и имя отправителя

    // Получатель письма
    if(isset($email)) {
        if($email!='digrod777@gmail.com'){
            $mail->addAddress('digrod777@gmail.com'); 
            $mail->addAddress($email);              
        }              
    }
    else $mail->addAddress('digrod777@gmail.com'); 
 


// Отправка сообщения
$mail->isHTML(true);
if (isset($name)&&isset($email)) {
    $mail->Subject = $all_title;
    $mail->Body = $all_body;
} else { 
    if(isset($name)) {
        $mail->Subject = $sendus_title;
        $mail->Body = $sendus_body;   
    }
    else {
        $mail->Subject = $newvisiter_title;
        $mail->Body = $newvisiter_body;
    }
};



 

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: ../thankyou.html');