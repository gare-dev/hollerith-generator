<?php

$nome = $_POST["nome"];
$nRegistro = $_POST["nRegistro"];
$qtFilhos = $_POST["filhos"];
$extraSabado = $_POST["quantasHorasExtra"];
$extraFeriado = $_POST["extraFeriado"];
$diasUteis = $_POST["diasUteis"];
$domingoFeriado = $_POST["domingosFeriados"];
$salarioBruto = $_POST["salarioBruto"];
$faltas = $_POST["faltasDias"];


echo("$nome <br>");
echo("$nRegistro <br>");

if(strlen($_POST["filhos"]) > 0){
    echo("Tem filhos. $qtFilhos filhos. <br>");
} else {
    echo("Não tem filhos. <br>");
}


if(strlen($extraSabado > 0)){
    echo("Fez horas extras de segunda a sábado. $extraSabado horas. <br>");
} else {
    echo("Não fez horas extras de segunda a sábado. <br>");
}

if(strlen($extraFeriado > 0 )){
    echo("Fez hora extra de domingo e feriado. $extraFeriado horas. <br>");
} else {
    echo("Não fez hora extra de domingo e feriado. <br>");
}

echo("$diasUteis Dias uteis <br>");
echo("$domingoFeriado Domingos e feriados <br>");
echo("$salarioBruto de salário bruto <br>");
echo("$faltas faltas. <br>");