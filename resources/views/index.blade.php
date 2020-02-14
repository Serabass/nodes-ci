@extends('general')

@section('content')
    <table class="table">
        <thead>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>cli</th>
        </tr>
        </thead>

        <tbody>
        @foreach ($jobs as $job)
            <tr>
                <td>
                    <a href="{{ route('job.index', ['id' => $job->id]) }}">
                        {{ $job->id }}
                    </a>
                </td>
                <td>
                    {{ $job->title }}
                </td>
                <td>
                    <pre>{{ $job->cli }}</pre>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
