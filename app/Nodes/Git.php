<?php

namespace App\Nodes;

use App\Node;
use Cz\Git\GitException;
use Cz\Git\GitRepository;

class Git extends Node
{
    public $inputNames = [
        'repo_url' => 'string'
    ];

    public function run()
    {
        try {
            $repo_url = $this->input('repo_url');
            $directory = $this->job->getWorkRoot();

            $repo = GitRepository::cloneRepository($repo_url, $directory);
        } catch (GitException $e) {
        }
    }
}
