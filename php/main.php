<?php
$bdd = new PDO('mysql:host=localhost;dbname=btp', 'root', ''); 

$insertmbr = $bdd->prepare("SELECT * FROM anecdotes ORDER BY date DESC");
$insertmbr->execute(array());
$actuinfo = $insertmbr->fetchAll();
$countactu = $insertmbr->rowCount();
for($i = 0; $i < $countactu; $i++) {
    echo '
        <div class="post">
            <p>'.$actuinfo[$i]['text'].'</p>
        </div>
    ';
}