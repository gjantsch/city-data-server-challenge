<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Form;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Get a list of forms
Route::get("/forms", function (Request $request) {

    return response()->json(Form::all()->toArray());

});

// Handles PUT/PATCH Form requests
Route::post('/form', function (Request $request) {

    $data = Form::find($request->input('id', 0));

    if (!$data) {
        $data = new Form();
    }

    $updates = ['status' => Form::STATUS_WAITING];

    if ($request->input('name')) {
        $updates['name'] = $request->input('name');
    }

    if ($request->input('amount')) {
        $updates['amount'] = $request->input('amount');
    }

    if ($request->input('status')) {
        $updates['status'] = $request->input('status');
    }

    $data->fill($updates);

    $data->save();

    return response()->json($data);

});

// Get a single form from its ID
Route::get("/form/{id}", function (Request $request, $id) {
    return response()->json(Form::find($id)->toArray());
});
