

 class Person{
    constructor(name= 'Anonymous', age =0){
      //  console.log('test');
        this.name=name; 
        this.age=age;
    }
    getGreeting() {
        //return "Hello I am "+ this.name+' !'
    return `Hi I am ${this.name}!`;
    }
    getDescription(){
       return  `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
constructor(name,age,major){
    super(name,age);
    this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
       // return `${super.getDescription()} and my major is ${this.major}`
    let description = super.getDescription();
    if (this.hasMajor())
        description+=  `, their major is ${this.major}`;
 
        return description;

    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    } 
    hasHomelocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
    let greeting= super.getGreeting();

    if (this.hasHomelocation()){
        greeting+= ` I am from ${this.homeLocation}`;
    }
    return greeting; 

}
}
;


 const him= new Student('Yana',22, 'Computer Science');
 console.log(him.getGreeting()); 
 console.log(him.getDescription());
 console.log(him.hasMajor());

 const her= new Student ();
 console.log(her.getGreeting());      
 console.log(her.getDescription());
 console.log(her.hasMajor());

 const me  = new Traveler( 'Yassine', 27, 'Casabalanca');
console.log(me.getGreeting())

 const other = new Traveler();
 console.log(other.getGreeting());
