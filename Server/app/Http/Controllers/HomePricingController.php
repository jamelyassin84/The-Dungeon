<?php

namespace App\Http\Controllers;

use App\Models\HomePricing;
use App\Http\Requests\StoreHomePricingRequest;
use App\Http\Requests\UpdateHomePricingRequest;

class HomePricingController extends Controller
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
     * @param  \App\Http\Requests\StoreHomePricingRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHomePricingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HomePricing  $homePricing
     * @return \Illuminate\Http\Response
     */
    public function show(HomePricing $homePricing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HomePricing  $homePricing
     * @return \Illuminate\Http\Response
     */
    public function edit(HomePricing $homePricing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHomePricingRequest  $request
     * @param  \App\Models\HomePricing  $homePricing
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHomePricingRequest $request, HomePricing $homePricing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HomePricing  $homePricing
     * @return \Illuminate\Http\Response
     */
    public function destroy(HomePricing $homePricing)
    {
        //
    }
}
