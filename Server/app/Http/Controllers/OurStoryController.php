<?php

namespace App\Http\Controllers;

use App\Models\OurStory;
use App\Http\Requests\StoreOurStoryRequest;
use App\Http\Requests\UpdateOurStoryRequest;

class OurStoryController extends Controller
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
     * @param  \App\Http\Requests\StoreOurStoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOurStoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OurStory  $ourStory
     * @return \Illuminate\Http\Response
     */
    public function show(OurStory $ourStory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OurStory  $ourStory
     * @return \Illuminate\Http\Response
     */
    public function edit(OurStory $ourStory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOurStoryRequest  $request
     * @param  \App\Models\OurStory  $ourStory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOurStoryRequest $request, OurStory $ourStory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OurStory  $ourStory
     * @return \Illuminate\Http\Response
     */
    public function destroy(OurStory $ourStory)
    {
        //
    }
}
