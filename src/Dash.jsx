import React from "react";
import CheckboxOptions from "./CHECKBOXS/CheckBoxOptions";
import CheckboxList from "./CHECKBOXS/CheckBoxList";
import CheckboxListPCA from "./CHECKBOXS/CheckboxListPCA";
import CheckboxListEnvironmentalSubsurface from "./CHECKBOXS/CheckboxListEnvironmentalSubsurface";
import CheckboxListEnvironmentalLaboratory from "./CHECKBOXS/CheckboxListEnvironmentalLaboratory";
import CheckboxListEnvironmentalCleanup from "./CHECKBOXS/CheckboxListEnviromentalCleanup";
import TableGrid from "./TableGrid/TableGrid";

const Dash = () => {

    return (
        <div id="content">
        <div id="content-header">
        <div class="row">
        	<div class="col-md-8 col-sm-6 col-xs-8">
        		<ol class="breadcrumb">  
		 			  			  		<li><a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><i class="fa fa-dashboard"></i> Dashboard</a></li>
		  			  			  	<li>Active Projects</li>
		</ol>
	</div>
                             <div class="col-md-2 col-sm-6 col-xs-3">
                <a href="#" class="btn  btn-warning  btn-sm" style="margin-top:8px;" id="dashboardFilter"><i class="fa fa-filter" aria-hidden="true"></i> Filter</a>
                                <span class="badge badge-pill badge-light notif-badge" style="top: 2px !important;margin-left: 1px;" title="No Filters Selected">0</span>
                            </div>
                
</div>
<div class="row">
	<div class="col-xs-12 visible-xs text-right collapse-chevron">
		<a data-toggle="collapse" class="" href="#collapseFilter" aria-expanded="true">
			<button type="button" class="btn btn-warning btn-circle" id="dashboard-icon-toggle"><i class="fa fa-chevron-down"></i></button>
		</a> 
	</div>
</div>
           
            
           
        </div> 
          
        <div id="content-container">
    	            <div class="content">
  <div class="col-md-12">
         <div class="col-md-12">
    
        <div class="panel panel-info" id="dashboardFilterForm" style="display:none">
		<div class="panel-heading">
			<div class="panel-title" align="left">Filter</div>
		</div>
    <div class="panel-body">
<div class="col-md-12">
    <div class="row">
        <form method="POST" action="https://stagingapp.blue222.com/firm/searchorsaveprojectfilter" accept-charset="UTF-8" id="searchorsaveprojectfilterform"><input name="_token" type="hidden" value="xHUXPuEO4vZEL3cHC5E0YfvLgXjn1gLtW12wTTTn">   
        <input type="hidden" name="formaction" id="formaction">
        <div class="col-md-4">
            <div class="col-md-4" style="padding-left: 6%;">
		<label for="Team" id="" class="">Team</label>
            </div>
            <div class="col-md-8">
                <div class="dev-drop">
                    <ul class="nav">
                        <div class="dropdown">
                            <li class="button-dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" id="select-teamname">  All Team <span>▼</span> </a>
                              <ul class="dropdown-menu" role="menu">
                                                             </ul>
                            </li>
                        </div>
                    </ul>
                    <span class="error-display" style="color:red"></span>
                </div>
            </div>
        </div>
        <div class="col-md-5">
			   
			        <div class="col-md-5" style="padding-left: 6%;">
			           	<label style="font-size:14px;" class="">
			           	Type of Project
			           	</label>
					</div>
			     	 <div class="col-md-7">
					        <div class="dev-drop">
					        <ul class="nav">
					          <div class="dropdown">
					            <li class="button-dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" id="select-rfp">  All Project Type <span>▼</span> </a>
					              <ul class="dropdown-menu" role="menu">
					               
 														                <li>
					                  <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
					                    <div class="panel panel-default">
					                      <div class="panel-heading" role="tab" id="heading0">
					                        <h4 class="panel-title"> 
					                        <a role="button" data-toggle="collapse" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
					                         <i class="more-less glyphicon glyphicon-plus"></i> Environmental Site Assessments </a> </h4>
					                      </div>
					                      <div id="collapse0" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
					                        <div class="panel-body">
					                          <CheckboxList name="ref_type[]" className="dev-ref-types"/>
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                </li>
														                <li>
					                  <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
					                    <div class="panel panel-default">
					                      <div class="panel-heading" role="tab" id="heading1">
					                        <h4 class="panel-title"> 
					                        <a role="button" data-toggle="collapse" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
					                         <i class="more-less glyphicon glyphicon-plus"></i> Property Condition Assessments </a> </h4>
					                      </div>
					                      <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
					                        <div class="panel-body">
					                         <CheckboxListPCA name="ref_type[]" className="dev-ref-types"/>
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                </li>
														                <li>
					                  <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
					                    <div class="panel panel-default">
					                      <div class="panel-heading" role="tab" id="heading2">
					                        <h4 class="panel-title"> 
					                        <a role="button" data-toggle="collapse" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
					                         <i class="more-less glyphicon glyphicon-plus"></i> Environmental Subsurface </a> </h4>
					                      </div>
					                      <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
					                        <div class="panel-body">
					                          <CheckboxListEnvironmentalSubsurface name="ref_type[]" className="dev-ref-types"/>
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                </li>
														                <li>
					                  <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
					                    <div class="panel panel-default">
					                      <div class="panel-heading" role="tab" id="heading3">
					                        <h4 class="panel-title"> 
					                        <a role="button" data-toggle="collapse" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
					                         <i class="more-less glyphicon glyphicon-plus"></i> Environmental Cleanup </a> </h4>
					                      </div>
					                      <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
					                        <div class="panel-body">
					                          <CheckboxListEnvironmentalCleanup name="ref_type[]" className="dev-ref-types"/>
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                </li>
														                <li>
					                  <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
					                    <div class="panel panel-default">
					                      <div class="panel-heading" role="tab" id="heading4">
					                        <h4 class="panel-title"> 
					                        <a role="button" data-toggle="collapse" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
					                         <i class="more-less glyphicon glyphicon-plus"></i> Environmental - Laboratory </a> </h4>
					                      </div>
					                      <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
					                        <div class="panel-body">
					                          <CheckboxListEnvironmentalLaboratory name="ref_type[]" className="dev-ref-types"/>
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                </li>
														                <li>
					                  <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
					                    <div class="panel panel-default">
					                      <div class="panel-heading" role="tab" id="heading5">
					                        <h4 class="panel-title"> 
					                        <a role="button" data-toggle="collapse" href="#collapse5" aria-expanded="true" aria-controls="collapse5">
					                         <i class="more-less glyphicon glyphicon-plus"></i> Real Estate Services </a> </h4>
					                      </div>
					                      <div id="collapse5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
					                        <div class="panel-body">
                                              <CheckboxOptions name="ref_type[]" className="dev-ref-types" />
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                </li>
									</ul>
					            </li>
					          </div>
					        </ul>
					        <span class="error-display" style="color:red"></span>
					        </div>
					 </div>
			        
			                  
			</div>
         <div class="col-md-3 buttonMediaBreak">
             <div class="col-md-12">
         <input id="search_project" class="btn btn-success" style="height:40px" value="Search" name="search_project" form="searchorsaveprojectfilterform" type="submit">
         <input id="save_search_filter" class="btn btn-success" style="height:40px" value="Save Filter" name="save_search_filter" form="searchorsaveprojectfilterform" type="submit">
             </div>
        </div>              

    </form></div>    
  
</div>
    </div>
</div>





    
   
  <div class="modal" id="confirm-delete-draft" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              Delete
          </div>
          <div class="modal-body">
             Are you sure you want to delete this draft ?
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
              <a class="btn btn-danger btn-ok">Delete</a>
          </div>
      </div>
    </div>
  </div>

  <TableGrid />


  
</div>


	</div>
</div>

        </div> 
    </div>
    );
}