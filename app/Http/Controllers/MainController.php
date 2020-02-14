<?php

namespace App\Http\Controllers;

use App\NodeJob;

class MainController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @param null $id
     */
    public function __construct()
    {
    }

    public function index() {

        $job = new NodeJob();

        dd(NodeJob::all()); die;

        return view('index', [
            'version' => '1.1'
        ]);
    }
}
