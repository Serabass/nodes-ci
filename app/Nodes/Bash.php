<?php

namespace App\Nodes;

use App\Node;

class Bash extends Node
{
    public $inputNames = [
        'cli' => 'string|multiline'
    ];

    public function run()
    {
        echo $this->input('cli');
    }
}
