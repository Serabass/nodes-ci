<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', [
    'as' => 'home',
    'uses' => 'MainController@index'
]);
$router->get('/job/{id}',[
    'as' => 'job.index',
    'uses' => 'JobController@index'
]);

$router->post('/job/{id}',[
    'as' => 'job.save',
    'uses' => 'JobController@save'
]);
