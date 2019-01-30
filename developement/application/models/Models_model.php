<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Models_model extends CI_Model {
    function __construct() {
        parent::__construct();
        date_default_timezone_set('Asia/Kolkata');
    }
    
    public function add_model(){
        
        $jsonData = file_get_contents("php://input");
        $postData = json_decode($jsonData, TRUE);
        $data = array("flag" => FALSE, "msg" => "No data found");
        
        if(isset($postData['manufacturer']) && $postData['manufacturer']!='' && 
           isset($postData['model_name']) && $postData['model_name']!=''){
            $arr = array(
                'man_id' => $postData['manufacturer'],
                'model' => $postData['model_name'],
                'created_date' => date('Y-m-d H:i:s'),
                'is_active' => 1
            );
            $res = $this->db->insert(MODLS,$arr);
            if($res){
                $data = array("flag" => TRUE, "msg" => "Model added successfully");
            }else{
                $data['msg'] = 'Sorry.Unable to add model';
            }
        }
        return $data;
    }
    
    public function get_models(){
        
        $jsonData = file_get_contents("php://input");
        $postData = json_decode($jsonData, TRUE);
        $data = array("flag" => FALSE, "models" => array());
        
        if(isset($postData['manufacturer']) && $postData['manufacturer']!=''){
            $res = $this->db->select('model_id,model as model_name')->from(MODLS)->where(array('is_active'=>1,'man_id'=>$postData['manufacturer']))->get();
            if($res->num_rows()>0){
                $data['flag'] = TRUE;
                $data['models'] = $res->result_array();
            }
        }
        return $data;
    }
    

    public function upload_car_pic($file, $carid) {

        $arr = array();
        if (!empty($file['name'])){
            $filesCount = count($file['name']);
            
                $_FILES['car_pic']['name'] = $file['name'];
                $_FILES['car_pic']['type'] = $file['type'];
                $_FILES['car_pic']['tmp_name'] = $file['tmp_name'];
                $_FILES['car_pic']['error'] = $file['error'];
                $_FILES['car_pic']['size'] = $file['size'];
                
                $dir = 'car-' . $carid;
                if (!is_dir('./application/cars/' . $dir)) {
                    mkdir("./application/cars/$dir");
                }
                chmod("./application/cars/$dir", 0777);

                $config['upload_path'] = './application/cars/' . $dir;
                $config['overwrite'] = TRUE;
                $config['allowed_types'] = 'gif|jpg|png|jpeg';
                $config['file_name'] = "car_pic";

                $this->load->library('upload', $config);
                $this->upload->initialize($config);
                if ($this->upload->do_upload('car_pic')) {
                    $fileData = $this->upload->data();
                    $url = 'http://192.168.2.22/Nilesh/invent/developement/application/cars/' . $dir . '/' . $fileData['file_name'];
                    $arr = array('fileurl' => $url);
                }
        }
        return $arr;
    }    
    
    public function add_car(){
        
        $jsonData = $this->input->post('other');
        $postData = json_decode($jsonData,TRUE);
        $data = array("flag" => FALSE, "msg" => 'No data found','post'=>$postData,'file'=>$_FILES);
        
        $arr = array(
            'model_id' => $postData['model_name'],
            'color' => $postData['color'],
            'year' => $postData['man_year'],
            'reg_no' => $postData['registration_no'],
            'notes' => $postData['notes'],
            'created_date' => date('Y-m-d H:i:s'),
            'is_active' => 1
        );
        $res = $this->db->insert(CAR,$arr);
        if($res){
            $carid = $this->db->insert_id();
            if(!empty($_FILES['car_pic'])){
               $filearr = $this->upload_car_pic($_FILES['car_pic'],$carid);
                if(!empty($filearr)){
                    $this->db->where('car_id',$carid)->update(CAR,$filearr);
                }
            }
            $data['flag'] = TRUE;
            $data['msg'] = 'Car informations added successfully.';
        }
        
        return $data;
    }
  
    public function get_cars(){
        $jsonData = file_get_contents("php://input");
        $postData = json_decode($jsonData, TRUE);
        $data = array("flag" => FALSE, "cars" => array());
        
        $this->db->select(CAR.'.*,'.MODLS.'.model,'.MANUFACT.'.manufacturer');
        $this->db->from(CAR);
        $this->db->join(MODLS,MODLS.'.model_id = '.CAR.'.car_id','left');
        $this->db->join(MANUFACT,MANUFACT.'.man_id = '.MODLS.'.man_id');
        $this->db->where(array(CAR.'.is_active'=>1));
        $this->db->order_by(CAR.'.car_id');
        $res = $this->db->get();
        if($res->num_rows()>0){
            $data['flag'] = TRUE;
            $data['cars'] = $res->result_array();
        }
        return $data;
    }
    
}
?>