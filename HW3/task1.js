var latestId = 1;

function Plant(name, description, species, plant_class, application, discoverer){

    this.incrementId = function() {  
        return latestId++;
      }

    this.name = name;
    this.description = description; 
    this.species = species;
    this.plant_class = plant_class;
    this.application = application;
    this.descoverer = discoverer;

  
    this.getDescription = function(){
        return this.description;
    }

    this.setDescription = function(value){
        this.description = value;
    }
}

function fern(name, description, species, plant_class, application, discoverer, age, place_of_growth){
    Plant.apply(this, [name, description, species, plant_class, application, discoverer]);
    var age = age;
    var place_of_growth = place_of_growth;

    this.setAge = function(value){
        age = value;
    }

    this.getAge = function(){
        return age;
    }
}

function spruce(name, description, species, plant_class, application, discoverer, 
    hazard_class, inflorescence_class, habitat){
    Plant.apply(this, [name, description, species, plant_class, application, discoverer]);

    var hazard_class = hazard_class;
    var inflorescence_class = inflorescence_class;
    var habitat = habitat;

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
        return 

        this.setHabitat = f;
    }

    this.setHabitat = function(value){
        habitat = value;
    }

    this.getHabitat = function(){
        return habitat;
    }
}

var fern1 = new fern('Fern1', 'new plant type of Fern', 11, 22, 34, 34, 324, 1211);
var spruce1 = new spruce('Spruce1', 'new plant type of Spruce', 'test plant', 24, 'class Spruce', 88);

console.log(fern1);
console.log(spruce1);

console.log(fern1.incrementId());
console.log(spruce1.incrementId());

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

