@extends('general')

@section('content')

    <section class="row p-2">
        <div class="col-md-6">{{ $job->id }}</div>
        <div class="col-md-6">{{ $job->title }}</div>
    </section>

    <section class="row p-2">
        <div class="col-md-12">
            @dump($job)
        </div>
    </section>

    <section class="row p-2">

    </section>
@endsection
