<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
            [
                User::FLD_EMAIL => 'admin@gmail.com',
                User::FLD_NAME => 'admin',
                User::FLD_PASSWORD => Hash::make('admin'),
            ],
        ];
        fill_seeds($records, User::class, User::FLD_EMAIL);
    }


}
