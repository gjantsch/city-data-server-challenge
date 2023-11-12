<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;

    const STATUS_DENIED = 'denied';
    const STATUS_APPROVED = 'approved';
    const STATUS_WAITING = 'waiting-decision';

    protected $table = 'forms';

    protected $fillable = ['name', 'amount', 'status'];

}
