<?php

namespace App\Http\Controllers;

use App\Models\HomeSliderImage;
use App\Http\Requests\StoreHomeSliderImageRequest;
use App\Http\Requests\UpdateHomeSliderImageRequest;

class HomeSliderImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreHomeSliderImageRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHomeSliderImageRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HomeSliderImage  $homeSliderImage
     * @return \Illuminate\Http\Response
     */
    public function show(HomeSliderImage $homeSliderImage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HomeSliderImage  $homeSliderImage
     * @return \Illuminate\Http\Response
     */
    public function edit(HomeSliderImage $homeSliderImage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHomeSliderImageRequest  $request
     * @param  \App\Models\HomeSliderImage  $homeSliderImage
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHomeSliderImageRequest $request, HomeSliderImage $homeSliderImage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HomeSliderImage  $homeSliderImage
     * @return \Illuminate\Http\Response
     */
    public function destroy(HomeSliderImage $homeSliderImage)
    {
        //
    }
}
