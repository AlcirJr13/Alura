@extends('layouts.main')

@section('title', 'HDC Events')

@section('conten')
    <h1>TÍTULO</h1>
    <img src="/img/banner.jpg" alt="Banner da pagina">
    @for ($i =0; $i < count($arr);$i++)
    <p>{{$arr[$i]}}</p>
    @endfor

    {{--comentarios no blade--}}

    @foreach($nomes as $nome)
        <p>{{$loop->index}}</p> {{--index do array--}}
        <p>{{$nome}}</p>
    @endforeach
@endsection