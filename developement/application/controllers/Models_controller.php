<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Models_controller extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('Models_model');
    }
 
    public function add_model(){
        $data = $this->Models_model->add_model();
        echo json_encode($data);
    }
 
    public function get_models(){
        $data = $this->Models_model->get_models();
        echo json_encode($data);
    }
 
    public function add_car(){
        $data = $this->Models_model->add_car();
        echo json_encode($data);
    }
 
    public function get_cars(){
        $data = $this->Models_model->get_cars();
        echo json_encode($data);
    }
}
?>