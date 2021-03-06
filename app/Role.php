<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public $timestamps = false;

    //a role can be assigned to many user/employee : role->users
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
