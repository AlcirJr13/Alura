<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(){
        $nome = "Alcir";
        $idade = 29;
        $arr = [10,20,30,40,50];
        $nomes = ["alcir","albher","aldhen","alcir jr","augusta"];

        return view('welcome',
        [
            'nome' => $nome,
            'idade' => $idade,
            'profissao' => "Programador",
            'arr' => $arr,
            'nomes' => $nomes
        ]);
    }
    public function create(){
        return view('events.create');
    }

     public function contacts(){
        return view('events.create');
    }

     public function products(){
        return view('events.create');
    }
}
