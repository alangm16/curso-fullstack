<?php
// Array que simula la tabla usuarios
$usuarios = [
    ["id"=>1, "nombre"=>"Alan", "email"=>"alan@test.com"],
    ["id"=>2, "nombre"=>"Maria", "email"=>"maria@test.com"],
];

// INSERT
$nuevoUsuario = ["id"=>3, "nombre"=>"Juan", "email"=>"juan@test.com"];
$usuarios[] = $nuevoUsuario;

// UPDATE
foreach($usuarios as &$u){
    if($u['id'] == 2){
        $u['email'] = "maria_nuevo@test.com";
    }
}

// DELETE
$usuarios = array_filter($usuarios, fn($u) => $u['id'] != 1);

// SELECT / Mostrar
foreach($usuarios as $u){
    echo $u['id']." - ".$u['nombre']." - ".$u['email']."<br>";
}
?>
