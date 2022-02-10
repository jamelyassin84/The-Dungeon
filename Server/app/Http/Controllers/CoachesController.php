<?php

namespace App\Http\Controllers;

use App\Models\Coaches;
use App\Http\Requests\StoreCoachesRequest;
use App\Http\Requests\UpdateCoachesRequest;

class CoachesController extends Controller
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
     * @param  \App\Http\Requests\StoreCoachesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCoachesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Coaches  $coaches
     * @return \Illuminate\Http\Response
     */
    public function show(Coaches $coaches)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coaches  $coaches
     * @return \Illuminate\Http\Response
     */
    public function edit(Coaches $coaches)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCoachesRequest  $request
     * @param  \App\Models\Coaches  $coaches
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCoachesRequest $request, Coaches $coaches)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Coaches  $coaches
     * @return \Illuminate\Http\Response
     */
    public function destroy(Coaches $coaches)
    {
        //
    }
}
