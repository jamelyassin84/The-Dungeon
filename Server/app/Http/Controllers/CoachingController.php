<?php

namespace App\Http\Controllers;

use App\Models\Coaching;
use App\Http\Requests\StoreCoachingRequest;
use App\Http\Requests\UpdateCoachingRequest;

class CoachingController extends Controller
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
     * @param  \App\Http\Requests\StoreCoachingRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCoachingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Coaching  $coaching
     * @return \Illuminate\Http\Response
     */
    public function show(Coaching $coaching)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coaching  $coaching
     * @return \Illuminate\Http\Response
     */
    public function edit(Coaching $coaching)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCoachingRequest  $request
     * @param  \App\Models\Coaching  $coaching
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCoachingRequest $request, Coaching $coaching)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Coaching  $coaching
     * @return \Illuminate\Http\Response
     */
    public function destroy(Coaching $coaching)
    {
        //
    }
}
