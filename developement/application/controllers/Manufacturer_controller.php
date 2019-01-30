<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Manufacturer_controller extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('Manufacturer_model');
    }
 
    public function add_manufacturer(){
        $data = $this->Manufacturer_model->add_manufacturer();
        echo json_encode($data);
    }
 
    public function get_manufacturer(){
        $data = $this->Manufacturer_model->get_manufacturer();
        echo json_encode($data);
    }
}
?>