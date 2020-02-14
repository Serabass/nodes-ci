<?php

namespace App;

class NodeJob
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var string
     */
    public $title;

    /**
     * @var NodeJob[]
     */
    public $nodes = [];

    public static function all()
    {
        $result = [];
        $d = dir(base_path() . '/' . Common::JOBS_ROOT);

        while (false !== ($entry = $d->read())) {
            if ($entry == '.' || $entry == '..')
                continue;

            $result[] = self::read(Common::JOBS_ROOT . '/' . $entry);
        }

        return $result;
    }

    public static function read($file)
    {
        $contents = file_get_contents(base_path() . '/' . $file);
        return unserialize($contents);
    }

    public static function readById($id)
    {
        return self::read(Common::JOBS_ROOT . '/' . $id . '.job');
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
        $serialized = serialize($this);
        file_put_contents($this->getFileName(), $serialized);
    }

    public function remove()
    {
        unlink($this->getFileName());
    }

    public function getFileName()
    {
        return Common::JOBS_ROOT . '/' . $this->id . '.job';
    }

    public function getWorkRoot()
    {
        return Common::JOBS_WORKROOT . '/' . $this->id . '.job';
    }
}
