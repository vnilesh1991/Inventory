<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Manufacturer_model extends CI_Model {
    function __construct() {
        parent::__construct();
        date_default_timezone_set('Asia/Kolkata');
    }
    
    public function add_manufacturer(){
        
        $jsonData = file_get_contents("php://input");
        $postData = json_decode($jsonData, TRUE);
        $data = array("flag" => FALSE, "msg" => "No data found");
        
        if(isset($postData['manufacturer']) && $postData['manufacturer']!=''){
            $arr = array(
                'manufacturer' => $postData['manufacturer'],
                'created_date' => date('Y-m-d H:i:s'),
                'is_active' => 1
            );
            $res = $this->db->insert(MANUFACT,$arr);
            if($res){
                $data = array("flag" => TRUE, "msg" => "Manufacturer added successfully");
            }else{
                $data['msg'] = 'Sorry.Unable to add manufacturer';
            }
        }
        return $data;
    }
  
    public function get_manufacturer(){
        
        $jsonData = file_get_contents("php://input");
        $postData = json_decode($jsonData, TRUE);
        $data = array("flag" => FALSE,"manufacturer"=>array());
        
        $res = $this->db->select('man_id,manufacturer as man_name')->from(MANUFACT)->where(array('is_active'=>1))->get();
        if($res->num_rows()>0){
            $data['flag'] = TRUE;
            $data['manufacturer'] = $res->result_array();
        }
        return $data;
    }
    
}
?>