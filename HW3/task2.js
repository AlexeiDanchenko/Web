var fermArray = [];
var spruceArray = [];
var latestId = 0;
var bIsEdit = true;

function midFunc(){
    alert('midFunc');
    if (!latestId) 
        latestId = 1;
    else 
        latestId++;
    return latestId;
}

function Plant(name, description, species, plant_class, application, discoverer){
  
    var id = midFunc();
    
    var name = name;
    var description = description;
    var species = species;
    var plant_class = plant_class;
    var application = application;
    var discoverer = discoverer;
}

Plant.prototype.getId = function(){
    return Plant.id;
}

Plant.prototype.setName = function(value){
    Plant.name = value;
}

Plant.prototype.getName = function(){
    return Plant.name;
}

Plant.prototype.setDescription = function(value){
    description = value;
}

Plant.prototype.getDescription = function(){
    return description;
}

Plant.prototype.setSpecies = function(value){
    species = value;
}

Plant.prototype.getSpecies = function(){
    return species;
}

Plant.prototype.setPlantClass = function(value){
    plant_class = value;
}

Plant.prototype.getPlantClass = function(){
    return plant_class;
}

Plant.prototype.setApplication = function(value){
    application = value;
}

Plant.prototype.getApplication = function(){
    return application;
}

Plant.prototype.setDiscoverer = function(value){
    discoverer = value;
}

Plant.prototype.getDiscoverer = function(){
    return discoverer;
}


function fernClass(name, description, species, plant_class, application, discoverer, age, place_of_growth){
    Plant.call(this, name, description, species, plant_class, application, discoverer);

    var age = age;
    var place_of_growth = place_of_growth;

    var type = 'fern';

    this.setAge = function(value){
        age = value;
    }

    this.getAge = function(){
        return age;
    }

    this.setPlaceOfGrowth = function(value){
        place_of_growth = value;
    }

    this.getPlaceOfGrowth = function(){
        return place_of_growth;
    }

    this.getType = function(){
        return type;
    }

    this.getObj = function () {
        return { 
            id: this.getId(),
            name: this.getName(),
            description: this.getDescription(),
            species: this.getSpecies(),
            plant_class: this.getPlantClass(),
            application: this.getApplication(),
            discoverer: this.getDiscoverer(),
            age: this.getAge(),
            place_of_growth: this.getPlaceOfGrowth(), 
            type: this.getType()  
               };
    }
}

fernClass.prototype = Object.create(Plant.prototype);

function spruceClass(name, description, species, plant_class, application, discoverer, hazard_class,
                inflorescence_class, habitat){
    Plant.call(this, [name, description, species, plant_class, application, discoverer]);
    
    var hazard_class = hazard_class;
    var inflorescence_class = inflorescence_class;
    var habitat = habitat;
    var type = 'spruce';

    this.setHazardClass = function(value){
        hazard_class = value;
    }

    this.getHazardClass = function(){
        return hazard_class;
    }

    this.setInflorescenceClass = function(value){
        inflorescence_class = value;
    }

    this.getInflorescenceClass = function(){
        return inflorescence_class;
    }

    this.setHabitat = function(value){
        habitat = value;
    }

    this.getHabitat = function(){
        return habitat;
    }

    this.getType = function(){
        return type;
    }

    this.getObj = function () {
        return { 
            id: this.getId(),
            name: this.getName(),
            description: this.getDescription(),
            species: this.getSpecies(),
            plant_class: this.getPlantClass(),
            application: this.getApplication(),
            discoverer: this.getDiscoverer(),
            hazard_class: this.getHazardClass(),
            inflorescence_class: this.getInflorescenceClass(),
            habitat: this.getHabitat(), 
            type: this.getType()  
               };
    }
}

spruceClass.prototype = Object.create(Plant.prototype);

function openForm() {
    //    alert('Now you need enter data!');
        checkFern();
    //    $(".overlay").fadeToggle("fast");
        document.getElementById('fernForm').style.display='block';
    }
    
    $(".close").click(function(e){
        e.preventDefault();
        $(".overlay").fadeToggle("fast");
    });
    
    $(".closeEdit").click(function(e){
        e.preventDefault();
        $(".overlayEdit").fadeToggle("fast");
    });
    
    function closeForm(){
        alert('Close Form Alert!');
        document.getElementById('fernForm').style.display='none';
    }
    
    function showAllElements(){
        document.getElementById('nameArray').innerHTML = null;
        var e = document.getElementById('nameArray');
    
        var bExist = false;
    
        for (var i = 0; i < fermArray.length; i++)
        {
            if(!bExist && i == 0){
                onViewEditInfo(fermArray[i]);
                bExist = true;
            } 
    
            var option = document.createElement('option');
            option.innerHTML = fermArray[i].name;
            option.keys = fermArray[i].id;
            e.appendChild(option); 
        }
    
        for (var i = 0; i < spruceArray.length; i++)
        {
            if(!bExist && i == 0){
                onViewEditInfo(spruceArray[i]);
                bExist = true;
            }
               
            var option = document.createElement('option');
            option.innerHTML = spruceArray[i].name;
            option.keys = spruceArray[i].id;
            e.appendChild(option);
        }
    }
    
    function updateForm(){
        alert('Update Form!');
        bIsEdit = true;
    
        showAllElements();
        
        document.getElementById('editForm').style.display='block';
        document.getElementById('editLabel').innerHTML = 'Edit plant';  
        document.getElementById('buttonSubmitEdit').innerHTML = 'Edit';
    }
    
    function deleteForm(){
        alert('Delete Form!');
        console.log('fernArray = ' + fermArray.length);
        console.log('spruceArray = ' + spruceArray.length);
        bIsEdit = false;
        showAllElements();
    
        document.getElementById('editForm').style.display='block';
        document.getElementById('editLabel').innerHTML = 'Delete plant';
        document.getElementById('buttonSubmitEdit').innerHTML = 'Delete';
    }
    
    function onPrepareInfo(){
        alert('Prepare to send information!');
    
        var allCount = fermArray.length + spruceArray.length;
    
        if(fermArray.length >= 1)
            console.log(JSON.stringify(fermArray));
            
        if(spruceArray.length >= 1)
            console.log(JSON.stringify(spruceArray));
            
            var obj = JSON.parse(JSON.stringify(fermArray));
    
            for(var i = 0; i < obj.length; i++)
            {
                if(obj[i].type == 'fern')
                    console.log('This is Fern object');
                else if(obj[i].type == 'spruce')
                    console.log('This is Spruce object');
                else
                    console.log('This is Other object');
            }
    
        alert('Prepare for sending ' + allCount + ' objects');
    }
    
    function onReceiveInfo(){
        
    }
    
    function submitFormfunc(){
        if(document.getElementById('spruceFields').hidden == false)
            addSpruce();
            
        if(document.getElementById('fernFields').hidden == false)
            addFern();   
    
        document.getElementById('fernForm').style.display='none';
    
        document.getElementById('formPlant').reset();
    }
    
    function submitFormEditfunc(){
    
        console.log('Submit Edit form');
        console.log(document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].value);
        console.log(document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys);
    
        if(!bIsEdit)
        {
            for(var i = 0; i < spruceArray.length; i++){
                if(spruceArray[i].id == document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys){
                    spruceArray.splice(i, 1);
                    break;
                }
            }
        
            for(var i = 0; i < fermArray.length; i++){
                if(fermArray[i].id == document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys){
                    fermArray.splice(i, 1);
                    break;
                }
            }
            document.getElementById('formEdit').reset();
            deleteForm();
        }
        else{
            var editObj = getUpdatingElement();
    
            for(var i = 0; i < spruceArray.length; i++){
                if(spruceArray[i].id == editObj.id){
                    spruceArray.splice(i, 1, editObj);
                    break;
                }
            }
        
            for(var i = 0; i < fermArray.length; i++){
                if(fermArray[i].id == editObj.id){
                    fermArray.splice(i, 1, editObj);
                    break;
                }
            }
    
            document.getElementById('formEdit').reset();
            updateForm();
        }   
    }
    
    function checkFern(){
        console.log("checkFern");
        document.getElementById('fernFields').hidden             = false;
        document.getElementById('spruceFields').hidden             = true;
        document.getElementById("spruceRB").checked = false;
        document.getElementById("fernRB").checked = true;
    }
    
    function checkSpruce(){
        console.log("checkSpruce");
        document.getElementById('spruceFields').hidden             = false;
        document.getElementById('fernFields').hidden             = true;
        document.getElementById("fernRB").checked = false;
        document.getElementById("spruceRB").checked = true;
    }
    
    function addFern(){  
    
        var fernObj1 = new fernClass();
        fernObj1.setName(document.getElementById('username').value);
        fernObj1.setDescription(document.getElementById('description').value);
        fernObj1.setSpecies(document.getElementById('species').value);
        fernObj1.setPlantClass(document.getElementById('plant_class').value);
        fernObj1.setApplication(document.getElementById("application").options[document.getElementById("application").selectedIndex].value);
        fernObj1.setDiscoverer(document.getElementById('discoverer').value);
        fernObj1.setAge(document.getElementById('age').value);
        fernObj1.setPlaceOfGrowth(document.getElementById('place_of_growth').value);
    
        fernObj1 = fernObj1.getObj();
    
        console.log('New Fern = ');
        console.log(fernObj1);
    
        console.log(JSON.stringify(fernObj1));
        fermArray.push(fernObj1);
    
        for(var i = 0; i < fermArray.length; i++){
            console.log(fermArray[i]);
        }
    
        alert('fermArray.length = ' + fermArray.length);
    }
    
    function addSpruce(){  
        var spruceObj1 = new spruceClass();
        spruceObj1.setName(document.getElementById('username').value);
        spruceObj1.setDescription(document.getElementById('description').value);
        spruceObj1.setSpecies(document.getElementById('species').value);
        spruceObj1.setPlantClass(document.getElementById('plant_class').value);
        spruceObj1.setApplication(document.getElementById("application").options[document.getElementById("application").selectedIndex].value);
        spruceObj1.setDiscoverer(document.getElementById('discoverer').value);
        spruceObj1.setHazardClass(document.getElementById('hazard_class').value);
        spruceObj1.setInflorescenceClass(document.getElementById('inflorescence_class').value);
        spruceObj1.setHabitat(document.getElementById('habitat').value);
    
        spruceObj1 = spruceObj1.getObj();
    
        spruceArray.push(spruceObj1);
     
      for(var i = 0; i < spruceArray.length; i++){
          console.log(spruceArray[i]);
          console.log(spruceArray[i].id);
      }
    
      alert('spruceArray.length = ' + spruceArray.length);
    }
    
    $('#formPlant').submit(function(e){
        e.preventDefault();
    });
    
    $('#formEdit').submit(function(e){
        e.preventDefault();
    });
    
    
    function clearTable(){
        for (var i = document.getElementById('tableData').getElementsByTagName('tr').length -1; i; i--) {
            document.getElementById('tableData').deleteRow(i);
            }
    }
    
    
    function addFernDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
        data.forEach((d, i) => {
          var tr = nl.insertRow(i);
          Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
            
            if(j != (Object.keys(d).length - 1))
            {
                var cell = tr.insertCell(j);
                cell.innerHTML = d[k]; // Assign object values to cells
            }     
          });
          nl.appendChild(tr);
        })
      }
    
      function addSpruceDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
        data.forEach((d, i) => {
          var tr = nl.insertRow(i);
          Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
            var cell;
            if(j != (Object.keys(d).length - 1))
            {
                if(j >= 7)
                {
                    if(j == 7)
                    {
                        cell = tr.insertCell(j);
                        cell.innerHTML = "";    
                        cell = tr.insertCell(j+1);
                        cell.innerHTML = "";
                        cell = tr.insertCell(j+2);
                        cell.innerHTML = d[k];
                    }
                    else{
                        cell = tr.insertCell(j+2);
                        cell.innerHTML = d[k];
                    }
                } 
                else
                {
                    cell = tr.insertCell(j);
                    cell.innerHTML = d[k];
                }
            }
          });
          nl.appendChild(tr);
        })
      }
    
    function onViewTable(){
        clearTable();
        if(document.getElementById('tableView').style.display == 'block')
            document.getElementById('tableView').style.display = 'none';
        else
            document.getElementById('tableView').style.display = 'block';
    
        if(fermArray.length >= 1)
            addFernDataToTbody(document.querySelector("#tableView tbody"), fermArray);
        if(spruceArray.length >= 1)
            addSpruceDataToTbody(document.querySelector("#tableView tbody"), spruceArray);
    
        console.log(JSON.stringify(fermArray));
        console.log(JSON.stringify(spruceArray));
    
        console.log(JSON.parse(JSON.stringify(fermArray)));
        console.log(JSON.parse(JSON.stringify(spruceArray)));
    }
    
    function onEditName(){
        console.log("onEditName");
        console.log(document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys);
    
        for(var i =0 ; i < spruceArray.length; i++)
        {
            console.log(spruceArray[i].id);
            if(spruceArray[i].id == document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys)
            {
                onViewEditInfo(spruceArray[i]);
                break;
            }
        }
    
        for(var i =0 ; i < fermArray.length; i++)
        {
            console.log(fermArray[i].id);
            if(fermArray[i].id == document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys)
            {
                onViewEditInfo(fermArray[i]);
                break;
            }
        }
    }
    
    function getCurrentIndexSelect(value){
        var objSel = document.getElementById("applicationArray"); 
        var iIndex = -1;
    
        console.log(objSel);
    
        console.log('fing string = ' + value + '  options size = ' + objSel.options.length);
        for(var i = 0; i < objSel.options.length; i++){
            console.log('curr string = ' + objSel.options[i].value);
            if(objSel.options[i].value == value){
                iIndex = i;
                break;
            }
        }
    
        return iIndex;
    }
    
    function onViewEditInfo(obj){
    
        console.log("onViewEditInfo");
        console.log(obj.name);
        console.log(obj.type);
    
        document.getElementById('DescriptionArray').value = obj.description;
        document.getElementById('speciesArray').value = obj.species;
        document.getElementById('plant_classArray').value = obj.plant_class;
        document.getElementById('discovererArray').value = obj.discoverer;
    
        var curIndex = getCurrentIndexSelect(obj.application);
        console.log('Cur index = ' + curIndex);
        if(curIndex != -1)
            document.getElementById("applicationArray").selectedIndex  = curIndex;
    
        if(obj.type == 'fern')
        {
            console.log('fern1');
            console.log(obj.age);
    
            document.getElementById('fernFieldsArray').hidden = false;
            document.getElementById('spruceFieldsArray').hidden = true;
    
            document.getElementById('ageArray').value = obj.age;
            document.getElementById('place_of_growthArray').value = obj.place_of_growth;
        }
        else if(obj.type == 'spruce')
        {
            console.log('spruce1');
            console.log(obj.hazard_class);
    
            document.getElementById('fernFieldsArray').hidden = true;
            document.getElementById('spruceFieldsArray').hidden = false;
    
            document.getElementById('hazard_classArray').value = obj.hazard_class;
            document.getElementById('inflorescence_classArray').value = obj.inflorescence_class;
            document.getElementById('habitatArray').value = obj.habitat;
        }
    }
    
    function getUpdatingElement(){
    
        for(var i =0 ; i < spruceArray.length; i++)
        {
            console.log(spruceArray[i].id);
            if(spruceArray[i].id == document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys)
            {
                obj = spruceArray[i];
                break;
            }
        }
    
        for(var i =0 ; i < fermArray.length; i++)
        {
            console.log(fermArray[i].id);
            if(fermArray[i].id == document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys)
            {
                obj = fermArray[i];
                break;
            }
        }
    
        obj.description = document.getElementById('DescriptionArray').value;
        obj.species = document.getElementById('speciesArray').value;
        obj.plant_class = document.getElementById('plant_classArray').value;
        obj.discoverer = document.getElementById('discovererArray').value;
        obj.application = document.getElementById("applicationArray").options[document.getElementById("applicationArray").selectedIndex].value;
    
        if(obj.type == 'fern')
        {
            obj.age = document.getElementById('ageArray').value;
            obj.place_of_growth = document.getElementById('place_of_growthArray').value;
        }
        else if(obj.type == 'spruce')
        {
            obj.hazard_class = document.getElementById('hazard_classArray').value;
            obj.inflorescence_class = document.getElementById('inflorescence_classArray').value;
            obj.habitat = document.getElementById('habitatArray').value;
        }
    
        return obj;
    }
    
    var openNewForm = document.getElementById('buttonCreate');
    var openEditForm = document.getElementById('buttonUpdate');
    var openDeleteForm = document.getElementById('buttonDelete');
    var viewTable = document.getElementById('buttonView');
    var sendInfo = document.getElementById('buttonPrepare');
    
    var submitForm = document.getElementById('buttonSubmit');
    var cancelForm = document.getElementById('buttonCancel');
    
    var submitEditForm = document.getElementById('buttonSubmitEdit');
    
    var fernRadio = document.getElementById('fernRB');
    var spruceRadio = document.getElementById('spruceRB');
    
    var checkEditName = document.getElementById('nameArray');
    
    openNewForm.addEventListener('click', openForm);
    openEditForm.addEventListener('click', updateForm);
    openDeleteForm.addEventListener('click', deleteForm);
    viewTable.addEventListener('click', onViewTable);
    sendInfo.addEventListener('click', onPrepareInfo);
    
    submitForm.addEventListener('click', submitFormfunc);
    cancelForm.addEventListener('click', closeForm);
    
    submitEditForm.addEventListener('click', submitFormEditfunc);
    
    fernRadio.addEventListener('click', checkFern);
    spruceRadio.addEventListener('click', checkSpruce);
    
    checkEditName.addEventListener('change', onEditName);