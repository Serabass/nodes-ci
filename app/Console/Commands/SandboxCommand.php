<?php

namespace App\Console\Commands;

use App\NodeJob;

use App\Nodes\Bash;
use App\Nodes\Git;
use App\Nodes\Notify;

use Faker\Factory;
use Illuminate\Console\Command;

/**
 * Class SandboxCommand
 * @package App\Console\Commands
 */
class SandboxCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 's';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run sandbox command';

    protected $nodeClasses = [
        Git::class,
        Bash::class,
        Notify::class,
    ];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $faker = Factory::create();

        foreach (NodeJob::all() as $job) {
            $job->remove();
        }

        $cli = [
            'yarn',
            'yarn build',
            'php artisan migrate',
        ];

        for ($i = 0; $i < 7; $i++) {
            $id = str_replace('.', '', $faker->userName);
            $job = new NodeJob($id);
            $job->title = $faker->text(40);
            shuffle($cli);
            $nodesCount = $faker->numberBetween(6, 15);
            for ($i2 = 0; $i2 < $nodesCount; $i2++) {
                $class = $faker->randomElement($this->nodeClasses);

                $node = new $class();

                switch ($class) {
                    case Git::class:
                        /**
                         * @var $node Git
                         */
                        $node->setInput('repo_url', $faker->url);
                        break;

                    case Bash::class:
                        /**
                         * @var $node Bash
                         */

                        $cli = [];

                        for ($i3 = 0; $i3 < $faker->numberBetween(3, 7); $i3++) {
                            $cli[] = $faker->userName;
                        }

                        $node->setInput('cli', $cli);
                        break;
                }

                $job->nodes[] = $node;
            }
            $job->save();
        }
    }
}
