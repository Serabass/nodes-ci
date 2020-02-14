<?php

namespace App\Http\Controllers;

use App\NodeJob;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @param null $id
     */
    public function __construct()
    {
    }

    public function index($id)
    {
        $job = NodeJob::readById($id);
        return view('job.index', [
            'job' => $job
        ]);
    }

    public function save($id, Request $request)
    {
        $job = NodeJob::readById($id);
        $title = $request->get('title', $job->title);
        $json_data = $request->get('json_data', $job->json_data);

        $job->title = $title;
        $job->json_data = $json_data;

        $job->save();

        return redirect(route('job.index', ['id' => $job->id]));
    }
}
