<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CoachesController;
use App\Http\Controllers\CoachingController;
use App\Http\Controllers\CompetitionSection1Controller;
use App\Http\Controllers\CompetitionSection2Controller;
use App\Http\Controllers\CompetitionSection3Controller;
use App\Http\Controllers\CompetitionSection4Controller;
use App\Http\Controllers\CompetitionSection5Controller;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\FooterController;
use App\Http\Controllers\HomePricingController;
use App\Http\Controllers\HomeSection1Controller;
use App\Http\Controllers\HomeSection2Controller;
use App\Http\Controllers\HomeSection3Controller;
use App\Http\Controllers\HomeSection4Controller;
use App\Http\Controllers\HomeSliderImageController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\InteractedController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\OurStoryController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\RegistrationFieldController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\RuleController;
use App\Http\Controllers\RuleValueController;
use App\Http\Controllers\StoryImagesController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::post('auth/login', [AuthController::class, 'log_in']);
Route::post('auth/log_out', [AuthController::class, 'log_out']);

Route::resource('user', UserController::class);
Route::resource('email', EmailController::class);
Route::resource('home-section1', HomeSection1Controller::class);

Route::resource('home-section2', HomeSection2Controller::class);
Route::resource('home-section3', HomeSection3Controller::class);
Route::resource('home-section4', HomeSection4Controller::class);

Route::resource('home-slider', HomeSliderImageController::class);
Route::resource('home-pricing', HomePricingController::class);
Route::resource('footer', FooterController::class);

Route::resource('competition-section1', CompetitionSection1Controller::class);
Route::resource('competition-section2', CompetitionSection2Controller::class);
Route::resource('competition-section3', CompetitionSection3Controller::class);

Route::resource('competition-section4', CompetitionSection4Controller::class);
Route::resource('competition-section5', CompetitionSection5Controller::class);
Route::resource('registration-field', RegistrationFieldController::class);

Route::resource('rule', RuleController::class);
Route::resource('rule-value', RuleValueController::class);
Route::resource('participant', ParticipantController::class);

Route::resource('review', ReviewController::class);
Route::resource('location', LocationController::class);
Route::resource('coaching', CoachingController::class);

Route::resource('coaches', CoachesController::class);
Route::resource('our-story', OurStoryController::class);
Route::resource('story-image', StoryImagesController::class);

Route::resource('inbox', InboxController::class);
Route::resource('interacted', InteractedController::class);
