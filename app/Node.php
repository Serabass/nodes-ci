<?php

namespace App;

abstract class Node
{
    /**
     * @var NodeJob
     */
    public $job;

    public $title;

    public $inputNames = [];

    protected $inputs = [];

    public abstract function run();

    public function input($key)
    {
        return $this->inputs[$key];
    }

    public function setInput($key, $value)
    {
        $this->inputs[$key] = $value;
    }
}
