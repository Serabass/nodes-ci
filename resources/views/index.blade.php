@extends('general')


@section('content')
    <table class="table">
        <thead>
        <tr>
            <th>id</th>
            <th>title</th>
        </tr>
        </thead>

        <tbody>
        @foreach ($jobs as $job)
            <tr>
                <td>
                    {{ $job->id }}
                </td>
                <td>
                    {{ $job->title }}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
