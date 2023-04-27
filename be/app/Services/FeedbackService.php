<?php

namespace App\Services;

use App\Models\Feedback;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class FeedbackService
{
    /**
     * @return Collection
     */
    public function getList(): Collection
    {
        return Feedback::query()->orderBy('rating', 'DESC')->get();
    }

    /**
     * @param $attributes
     * @return Model
     */
    public function create(array $attributes): Model
    {
        if (isset($attributes['photo'])) {
            $attributes['photo'] = $this->uploadImage($attributes['photo']);
        }

        return Feedback::query()->create($attributes);
    }

    public function uploadImage ($photo)
    {
        try {
            $photoName = time() . '.' . $photo->extension();
            $photo->move(public_path('images'), $photoName);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return null;
        }

        return "/images/" . $photoName;
    }
}
