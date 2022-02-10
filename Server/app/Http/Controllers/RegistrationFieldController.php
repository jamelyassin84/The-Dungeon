<?php

namespace App\Http\Controllers;

use App\Models\RegistrationField;
use App\Http\Requests\StoreRegistrationFieldRequest;
use App\Http\Requests\UpdateRegistrationFieldRequest;

class RegistrationFieldController extends Controller
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
     * @param  \App\Http\Requests\StoreRegistrationFieldRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRegistrationFieldRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RegistrationField  $registrationField
     * @return \Illuminate\Http\Response
     */
    public function show(RegistrationField $registrationField)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RegistrationField  $registrationField
     * @return \Illuminate\Http\Response
     */
    public function edit(RegistrationField $registrationField)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRegistrationFieldRequest  $request
     * @param  \App\Models\RegistrationField  $registrationField
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRegistrationFieldRequest $request, RegistrationField $registrationField)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RegistrationField  $registrationField
     * @return \Illuminate\Http\Response
     */
    public function destroy(RegistrationField $registrationField)
    {
        //
    }
}
