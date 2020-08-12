function Plant(name, description, ...othersArgs){
    this.name = name;
    this.description = description;

    for(var i = 0; i < othersArgs.length; i++){
        if(i == 0)
            this.species = othersArgs[i];
        if(i = 1)
            this.age = othersArgs[i];
        if(i = 2)
            this.plant_class = othersArgs[i];
        if(i = 3)
            this.infloresence_size = othersArgs[i];
        if(i = 4)
            this.hazard_class = othersArgs[i];
        if(i = 5)
            this.habitat = othersArgs[i];
        if(i = 6)
            this.application = othersArgs[i];
        if(i = 7)
            this.discoverer = othersArgs[i];
        if(i = 8)
            this.place_of_growth = othersArgs[i];
    }

    this.getAge = function(){
        return this.age;
    }

    this.getDescription = function(){
        return this.description;
    }

    this.setAge = function(value){
        this.age = value;
    }

    this.setDescription = function(value){
        this.description = value;
    }
}

function fern(name){
    Plant.apply(this, arguments);
}

function spruce(name){
    Plant.apply(this, arguments);
}

var fern1 = new fern('Fern1', 'new plant type of Fern', 11, 22, 34, 34, 324, 1211);
var spruce1 = new spruce('Spruce1', 'new plant type of Spruce', 'test plant', 24, 'class Spruce', 88);

console.log(fern1);
console.log(spruce1);
