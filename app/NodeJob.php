<?php

namespace App;

class NodeJob
{
    const JOBS_ROOT = '../_jobs';

    /**
     * @var string
     */
    public $id;

    /**
     * @var string
     */
    public $title;


    /**
     * @var string
     */
    public $cli;

    public static function all()
    {
        $result = [];
        $d = dir(self::JOBS_ROOT);

        while (false !== ($entry = $d->read())) {
            if ($entry == '.' || $entry == '..')
                continue;

            $result[] = self::read(self::JOBS_ROOT . '/' . $entry);
        }

        dd($result);
    }

    public static function read($file)
    {
        $contents = file_get_contents($file);
        return unserialize($contents);
    }

    public function __construct($id = NULL)
    {
        if ($id == null) {
            $id = md5(rand());
        }

        $this->id = $id;
    }

    public function save()
    {
        $filename = self::JOBS_ROOT . '/' . $this->id . '.job';
        $serialized = serialize($this);
        file_put_contents($filename, $serialized);
    }
}
