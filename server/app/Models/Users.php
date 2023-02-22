<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    public $table = 'users';
    protected $fillable = [
        'userId',
        'username',
        'password',
    ];
}
