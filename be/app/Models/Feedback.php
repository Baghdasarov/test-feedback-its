<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'email',
        'name',
        'comment',
        'rating',
        'photo',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
