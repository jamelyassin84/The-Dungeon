<?php

namespace App\Http\Controllers;

use App\Models\RuleValue;
use App\Http\Requests\StoreRuleValueRequest;
use App\Http\Requests\UpdateRuleValueRequest;

class RuleValueController extends Controller
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
     * @param  \App\Http\Requests\StoreRuleValueRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRuleValueRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RuleValue  $ruleValue
     * @return \Illuminate\Http\Response
     */
    public function show(RuleValue $ruleValue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RuleValue  $ruleValue
     * @return \Illuminate\Http\Response
     */
    public function edit(RuleValue $ruleValue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRuleValueRequest  $request
     * @param  \App\Models\RuleValue  $ruleValue
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRuleValueRequest $request, RuleValue $ruleValue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RuleValue  $ruleValue
     * @return \Illuminate\Http\Response
     */
    public function destroy(RuleValue $ruleValue)
    {
        //
    }
}
