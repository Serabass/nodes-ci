<?php

namespace App\Http\Controllers;

use App\NodeJob;
use SebastianBergmann\CodeCoverage\Report\Xml\Node;

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
}
