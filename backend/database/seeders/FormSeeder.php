<?php

namespace Database\Seeders;

use Faker\Core\Number;
use Faker\Guesser\Name;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        for($i = 0; $i < 10; $i++) {
            DB::table('forms')->insert([
                'name' => fake()->company(),
                'amount' => round(rand(1, 1000) * 10, 2),
                'status' => fake()->shuffleArray(['approved', 'denied', 'waiting-decision'])[0],
            ]);
        }

    }
}
