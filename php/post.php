<?php
$bdd = new PDO('mysql:host=localhost;dbname=btp', 'root', ''); 

if(isset($_POST['upload'])) {
    if(!empty($_POST['text'])) {
        $requser = $bdd->prepare("INSERT INTO anecdotes(text, ip, date, user) VALUES(?, ?, UNIX_TIMESTAMP(), 0)");
        $requser->execute(array($_POST['text'], $_SERVER['REMOTE_ADDR']));
        echo "ok";
    }
    else {
        echo "erreur";
    }
}
else {
    echo "erreur";
}