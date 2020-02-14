@extends('general')

@section('content')

    <section class="row p-2">
        <div class="col-md-6">{{ $job->id }}</div>
        <div class="col-md-6">{{ $job->title }}</div>
    </section>

    <section class="row p-2">
        <textarea name="cli" class="form-control">{{ $job->cli }}</textarea>
    </section>

    <section class="row p-2">
        {{ $job->id }}
    </section>
@endsection
