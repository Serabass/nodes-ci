@extends('general')

@section('content')

    <form action="{{route('job.save', ['id' => $job->id])}}" method="POST" id="jobForm">
        <div class="form-group">
            <h1>Job <b>{{ $job->id }}</b></h1>
            <hr>
        </div>
        <div class="form-group">
            <label for="inputTitle">Title</label>

            <input type="text"
                   class="form-control"
                   id="inputTitle"
                   name="title"
                   aria-describedby="titleHelp"
                   placeholder="Enter title"
                   value="{{ $job->title }}">

            <small id="titleHelp" class="form-text text-muted">A title of your job.</small>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="enabled" name="enabled" value="1">
            <label class="form-check-label" for="enabled">Enabled</label>
        </div>
        <div class="form-group form-check">
            {{--@dump($job)--}}
        </div>
        <div class="form-group form-check">
            <canvas
                id='mycanvas'
                width='1400'
                height='500'
                style='border: 1px solid'
            ></canvas>
        </div>
        <div class="form-group form-check">
            <input type="hidden" id="json_data" name="json_data" />
            <div id="json_data_div" hidden>{{ $job->json_data }}</div>
        </div>
        <div class="form-group form-check">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
@endsection
