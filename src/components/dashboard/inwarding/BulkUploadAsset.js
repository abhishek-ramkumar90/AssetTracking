import React, { Fragment, Component } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { ToastContainer, toast } from 'react-toastify';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


class BulkUploadAsset extends Component{
    constructor(props){
        super(props)
        this.state = {
                 selectedFile: null,
                 resetKey:false
        }
    }

    onFileChangeHandler = (e) => {
        e.preventDefault();
       this.setState({
                    selectedFile: e.target.files[0]}
        );        
    };

    fileUploadHandler = () => {
        this.setState({resetKey:!this.state.resetKey});
        const formData = new FormData()
        console.log(this.state.selectedFile);
        if(this.state.selectedFile==undefined){
            toast.info('Please select a file to upload');
            return;
        }
        formData.append('file', this.state.selectedFile)
        console.log(formData);
        axios.post('/File/upload', formData)
             .then(res => { // then print response status
                           this.setState({selectedFile:undefined},()=>{
                          
                            toast.success('File uploaded successfully')});
                                                    
                          })
             .catch(err => { // then print response status
                           toast.error('File upload failed')
                          })
      };

    validateSize=(event)=>{
        let file = event.target.files[0];
        let size = 30000;
        let err = '';
        console.log(file.size);
        if (file.size > size) {
         err = 'File is too large, please pick a smaller file\n';
         toast.error(err);
       }
       return true
      };

    
render (){
    return (
        <Fragment>
            <Breadcrumb parent="Inwarding" title="Bulk Upload Assets" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                    <ToastContainer />
                        <div className="card">
                            <div className="card-header">
                                <h5>Bulk Upload Assets</h5>
                            </div>
                            <div className="card-body">
                               <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                                <div className="form-group files color">
                                                    <label>Upload Your File </label>
                                                    <input type="file" key={this.state.resetKey} className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                                                </div>
                                                <div className="col-md-6 pull-right">
                                                   <button width="100%"   type="button" className="btn btn-info" onClick={this.fileUploadHandler}>Upload File</button>
                                                </div>
                                                <div>
                                                <NavLink to="/files/AssetsUpload.xlsx" className="nav-link-gdc" target="_blank" download>Download</NavLink>
                                                 </div>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

}

export default BulkUploadAsset;