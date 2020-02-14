<?php

namespace App\Http\Controllers;

use App\NodeJob;

class MainController extends Controller
{
    /**
     * Create a new controller instance.
     *
     */
    public function __construct()
    {
    }

    public function index()
    {
        return view('index', [
            'jobs' => NodeJob::all()
        ]);
    }
}
