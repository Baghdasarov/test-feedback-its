<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Feedback\FeedbackCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'quantity' => $this->quantity,
            'feedbacks' => $this->feedbacks ? new FeedbackCollection($this->feedbacks) : []
        ];
    }
}
