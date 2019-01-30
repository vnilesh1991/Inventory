<?php

class General {

    private $ci = "";

    public function __construct() {
        $this->ci = & get_instance();
    }

    public function set_timezone() {
        $timezone = "Asia/Kolkata";
        if (function_exists('date_default_timezone_set')) {
            date_default_timezone_set($timezone);
        }
    }

}
