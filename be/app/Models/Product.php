<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    protected $attributes = [
        'quantity' => 1,
    ];

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }
}
