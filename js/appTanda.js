var app1 = angular.module('tandaApp',[]);

/**
 * ID number given to each staff member must be unique. 
 */
// add user to a certain Team
app1.controller('ctrl1', function($scope) {
    
    // List of the staff profile
    $scope.staff =[
        {id: 0, fName: "Tonny", lName: 'Stark', departments: ['Bistro','Bar'] , tags: ['Part Time', 'Casual']},
        {id: 1, fName: 'Bruce', lName: 'Wayne', departments: ['Bistro','Bar'] , tags: ['Part Time', 'Casual']}, 
        {id: 2, fName: 'Silver', lName: 'Surfer', departments: ['Bistro','Bar'] , tags: ['Part Time', 'Casual']},
        {id: 3, fName: 'Peter', lName: 'Parker', departments: ['Bistro','Bar'] , tags: ['Part Time', 'Casual']},
        {id: 4, fName: 'Thomas', lName: 'Smith', departments: ['Bar'] , tags: ['Casual']}, 
        {id: 5, fName: 'Bruce', lName: 'Banner', departments: ['Bar'] , tags: ['Casual']}, 
        {id: 6, fName: 'Matt', lName: 'Murdock', departments: ['Bar'] , tags: ['Casual']}, 
        {id: 7, fName: 'Victor', lName: 'Doom', departments: ['Bar'] , tags: ['Casual']},
        {id: 8, fName: 'Remi', lName: 'Gambit', departments: ['Bar'] , tags: ['Casual']}, 
        {id: 9, fName: 'Reed', lName: 'Richards', departments: ['Gaming'] , tags: ['Salaried']},
        {id: 10, fName: 'Kal', lName: 'El', departments: ['Kitchen'] , tags: ['Level 2']}, 
        {id: 11,fName: 'Charles', lName: 'Xavier', departments: ['Bar'] , tags: ['Level 1']},
        {id: 12,fName: 'Steve', lName: 'Rogers', departments: ['Gamming'] , tags: ['Level 6']},
        {id: 13,fName: 'Lex', lName: 'Luthor', departments: ['Pokies'] , tags: ['Apprentice']},
        {id: 14,fName: 'Wade', lName: 'Wilson', departments: ['Kitchen'] , tags: ['Apprentice']},
        {id: 15,fName: 'Logan', lName: 'Wolverine', departments: ['Bar', 'Pokies'] , tags: ['Level 6, Salaried']}
    ];
    // Available Departments
    $scope.departments =["Bar", "Bistro", "Gaming", 
    "Kitchen", "Pokies", "Uncategorized Shifts"
    ];
    // Available Tags
    $scope.tags =["Apprentice", "Casual", "Full Time", 
    "Level 1", "Level 2", "Level 3", "Level 4", "Level 5",
    "Level 6", "Part Time", "Salaried"
    ];
    $scope.temp_modal_depts = new Array();
    $scope.temp_modal_tags = new Array();
    $scope.temp_modal_users = new Array();

    $scope.wipeDepts = function(){
        return $scope.temp_modal_depts = []; 
    }
    $scope.wipeTags = function(){
        return $scope.temp_modal_tags = []; 
    }
    $scope.wipeUsers = function(){
        return $scope.temp_modal_users = []; 
    }

    /**
     * Uses de name of a department and checks for records
     * containing "departPicked" in the $scope.staff array
     * @param {Name of tag} tagPicked 
     */
    $scope.refineByDept = function(departName){  
        arr = new Array();
        $scope.titlea = departName.target.id;
        for(var i = 0; i < $scope.staff.length; i++){
            for(var j=0; j<$scope.staff[i].departments.length; j++){
                if ($scope.staff[i].departments[j] == departName.target.id){
                    arr.push($scope.staff[i]);
                    $scope.check = arr;
                    } else {
                    continue;
                }
            }                
        }

    }   

    /**
     * Uses de name of a tag and checks for records
     * containing "tagPicked" in the $scope.staff array
     * @param {Name of tag} tagPicked 
     */
    $scope.refineByTags = function(tagPicked){  
        arr2 = new Array();
        $scope.titlet = tagPicked.target.id;
        for(var i = 0; i < $scope.staff.length; i++){
            for(var j=0; j<$scope.staff[i].tags.length; j++){
                if ($scope.staff[i].tags[j] == tagPicked.target.id){
                    arr2.push($scope.staff[i]);
                    $scope.checkT = arr2;
                 } else {
                    continue;
                }
            }                
        }
}   

    // Define temporal selected staff list
    $scope.temp_user_storage = new Array();
    /**
     * Check status of checkboxes (true/false). If true, then push 
     * id of active checkbox to array. If false then remove from array.
     * @param {integer} id 
     * @param {boolean} status 
     */
    $scope.checkId = function(id, status) {
        // if not active then remove from array
        if (!status) {
            $scope.temp_user_storage = $scope.temp_user_storage.filter(e => e !== id);
            $scope.temp_user_storage.sort();
            
        } else {
            // push unique user ID
            $scope.temp_user_storage.push(id);       
        }    
    } 

    /**
     * Check ids and status of checkboxes seleted (departments)
     */
    $scope.temp_selected_depts = new Array();
    $scope.checkDeptsSelected = function(deptName,status){
        if (!status) {
            $scope.temp_selected_depts = $scope.temp_selected_depts.filter(i => i !== deptName);
           
        } else {
            // push unique user ID
            $scope.temp_selected_depts.push(deptName);            
        }  

    }

    /**
     * Check ids and status of checkboxes seleted (tags)
     */
    var temp_selected_tags = new Array();
    $scope.checkTagsSelected = function(tagName,status){
        if (!status) {
            temp_selected_tags = temp_selected_tags.filter(j => j !== tagName);
        
        } else {
            // push unique user ID
            temp_selected_tags.push(tagName);            
        }
     
    }
    /**
     * Select/Deselect all staff members 
     */
    $scope.allSelected = false;
    $scope.selectText = "Select All";
    $scope.toggleSelected = function() {
        $scope.allSelected = !$scope.allSelected;
        angular.forEach($scope.staff, function(employee){
            employee.checked = $scope.allSelected;
            $scope.checkId(employee.id, employee.checked);
        });
        /*Togle Button Text*/
        if($scope.allSelected){
            $scope.selectText = "Deselect All";
        } else {
            $scope.selectText = "Select All";
        }
    };

    /**
     *  Function used to deselect all staff members
     * */
    $scope.uncheckAll = function() {
        angular.forEach($scope.staff, function (employee) {
            employee.checked = false;
            $scope.checkId(employee.id, employee.checked);
        });
    };
 
    /** 
     * Add attribute 'departments' to staff element. 
     * Not the best approach -> running time can be improved
     * @param {[integer]} id 
     * @param {string} tag 
     */ 

    $scope.addDepartmentTag = function(){
        selectedUsers = $scope.temp_user_storage;
        for(var j=0; j < $scope.staff.length; j++){
            for(var i=0; i < selectedUsers.length; i++){
                if( selectedUsers[i] == $scope.staff[j].id){   
                    // add selected tag to selected staff member/s
                    $scope.temp_modal_users.push($scope.staff[j]);  
                    for(var k=0; k<$scope.temp_selected_depts.length; k++){
                        $scope.staff[j].departments.push($scope.temp_selected_depts[k]);   
                        $scope.temp_modal_depts.push($scope.temp_selected_depts[k]);
                    }
                } 
            } 
        }
        // Once tags are given, uncheck all staff checkboxes
        $scope.uncheckAll();
        $scope.uncheckTags();
    }
    // Uncheck all Tags selected users by user
    $scope.uncheckTags = function() {
        angular.forEach($scope.departments, function (department) {
            department.checked = false;
            $scope.checkDeptsSelected(department, department.checked);
        });         
    }

    /**
     * Add attribute 'department' to staff element. 
     * Runs in n*m time which is not optimal, this is done 
     * for demonstration only. Can be improved using hashtables
     * @param {[integer]} id 
     * @param {string} tag 
     */
    $scope.addTags = function(){
        selectedUsers = $scope.temp_user_storage;
        for(var j=0; j < $scope.staff.length; j++){
            for(var i=0; i < selectedUsers.length; i++){
                if( selectedUsers[i] == $scope.staff[j].id){
                    // add selected tag to selected staff member/s
                    for(var k=0; k < temp_selected_tags.length; k++){
                        $scope.staff[j].tags.push(temp_selected_tags[k]);   
                          
                    }                    
                } 
            }          
        }
        // Once tags are given, uncheck all staff checkboxes
        $scope.uncheckAll();
    }



    
});