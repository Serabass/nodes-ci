<?php

namespace App\Nodes;

use App\Node;
use Cz\Git\GitException;
use Cz\Git\GitRepository;

class Notify extends Node
{
    public $inputNames = [
        'channel' => 'telegram',
        'id' => 'serabass',
    ];

    public function run()
    {

    }
}
