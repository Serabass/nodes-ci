<?php

namespace App\Console\Commands;

use App\NodeJob;
use App\User;
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

      for ($i = 0; $i < 10; $i++) {
          $job = new NodeJob();
          $job->title = $faker->text(40);
          shuffle($cli);
          $job->cli = join("\n", $cli);
          $job->save();
      }
  }
}
