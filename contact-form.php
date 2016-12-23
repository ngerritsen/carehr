<?php

$hasError = false;
$sent = false;
$submitted = false;

if(isset($_POST['submitform'])) {
    $name = trim(htmlspecialchars($_POST['name'], ENT_QUOTES));
    $email = trim($_POST['email']);
    $subject = trim(htmlspecialchars($_POST['subject'], ENT_QUOTES));
    $message = trim(htmlspecialchars($_POST['message'], ENT_QUOTES));
    $submitted = true;

    $fieldsArray = array(
        'name' => $name,
        'subject' => $subject,
        'email' => $email,
        'message' => $message
    );

    $errorArray = array();

    foreach ($fieldsArray as $key => $val) {
        switch ($key) {
            case 'name':
            case 'subject':
            case 'message':
            if (empty($val)) {
                $hasError = true;
                $errorArray[$key] = ucfirst($key) . " veld is leeg.";
            }
            break;
            case 'email':
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $hasError = true;
                $errorArray[$key] = ucfirst($key) . " email adres is niet geldig.";
            } else {
                $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            }
            break;
        }
    }

    if($hasError === false) {
        $to = "info@carehr.nl";
        $subject = "$subject (via CareHR.nl)";
        $msgcontents = "Van: $name \r\n";
        $msgcontents .= "Email: $email \r\n";
        $msgcontents .= "\r\n";
        $msgcontents .= "$message \r\n";
        $headers = "MIME-Version: 1.0 \r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1 \r\n";
        $headers .= "From: ".$name." <".$email."> \r\n";
        $headers .= "Reply-To: ".$email."\r\n";
        $mailsent = mail($to, $subject, $msgcontents, $headers);
        if ($mailsent) {
            $sent = true;
            unset($name);
            unset($email);
            unset($subject);
            unset($message);
        }
    }
}

?>

<div class="row contact" id="contact">
    <?php
    if($sent === true) {
        echo "<div class='message-container succes'>";
        echo "<p class='message'><span class='glyphicon glyphicon-ok'></span> Uw bericht is met succes verzonden!</p>";
        echo "<a href='javascript: void(0)' class='close-message'><span class='glyphicon glyphicon-remove'></span></a></div>";
    } elseif ($hasError === true) {
        echo "";
        echo "<div class='message-container error'><ul class='error-list message'>";
        foreach ($errorArray as $key => $val) {
            echo "<li class='error'>" . ucfirst($key) . "field error - $val</li>";
        }
        echo "</ul><a href='javascript: void(0)' class='close-message'><span class='glyphicon glyphicon-remove'></span></a></div>";
    } elseif($submitted === true && $sent === false && $hasError === false) {
        echo "<div class='message-container error'>";
        echo "<p class='message'><span class='glyphicon glyphicon-warning-sign'></span> Uw bericht is helaas niet verzonden!</p>";
        echo "<a href='javascript: void(0)' class='close-message'><span class='glyphicon glyphicon-remove'></span></a></div>";
    }
    ?>

    <div class="wrap">
        <h2>Contact</h2>
        <p>Vul hieronder uw gegevens en uw bericht in en ik zal u zo snel mogelijk beantwoorden!</p>

        <form class="form-horizontal" method="post" id="contact-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" string";" novalidate>


            <div class="form-group">
                <label class="col-sm-2 control-label">Naam:</label>
                <div class="col-sm-10">
                    <input type="text" name="name" value="<?php echo (isset($name) ? $name : ""); ?>" class="form-control" placeholder="John Doe">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Email:</label>
                <div class="col-sm-10">
                    <input type="email" name="email" value="<?php echo (isset($email) ? $email : ""); ?>" class="form-control" placeholder="voorbeeld@adres.com">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Onderwerp:</label>
                <div class="col-sm-10">
                    <input type="text" name="subject" value="<?php echo (isset($subject) ? $subject : ""); ?>" class="form-control" placeholder="Onderwerp">
                </div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label">Bericht:</label>
                <div class="col-sm-10">
                    <textarea class="form-control" name="message" placeholder="Uw bericht..." rows="5"><?php echo (isset($message) ? $message : ""); ?></textarea>
                </div>
            </div>

            <input type="submit" value="Versturen" name="submitform" class="btn button">
        </form>

        <p>U kunt ook zelf een email sturen of telefonisch contact opnemen:</p>
        <div class="contact-wrapper">
            <div class="col-sm-6">
                <p><a href="mailto:info@carehr.nl"><span class="glyphicon glyphicon-envelope"></span> info@carehr.nl</a></p>
            </div>
            <div class="col-sm-6">
                <p><a href="tel:+31642468484"><span class="glyphicon glyphicon-phone"></span> (06) 42 46 84 84</a></p>
            </div>
        </div>
    </div>
</div>
