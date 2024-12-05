<?php

$nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['mensagem']);

    $para = "securytech01@gmail.com";
    $assunto = "Coleta de dados - Secury Tech";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Mensagem: ".$mensagem;

    $cabeca = "From: "."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>