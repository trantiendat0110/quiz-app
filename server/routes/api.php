<?php

use App\Http\Controllers\messageController;
use App\Http\Controllers\roomController;
use App\Http\Controllers\roomsController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('user', userController::class);
Route::get('user/userId/{id}', [userController::class, 'getUserId']);

Route::resource('message', messageController::class);
Route::get('message/roomId/{id}', [messageController::class, 'getRoomId']);

Route::resource('room', roomController::class);
Route::get('room/roomId/{id}', [roomController::class, 'showRoomId']);

Route::resource('rooms', roomsController::class);
Route::get('rooms/userId/{id}', [roomsController::class, 'showRoomId']);
