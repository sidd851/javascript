const student = {

            name2: "kaj",
            age2: 19,
            college2: "mdu",
            course2: "BCA"

}

//console.log(Object.keys(student));
           // Object.freeze(student)

            //student.name= "sidd"

        //console.log(student.name);

        

const obj = {}

const stdn2 = Object.create(student);

stdn2.name="kaj2"
stdn2.age=19
stdn2.college= "du"
stdn2.course="btech"

const stdn3 = {...student,...stdn2}

// console.log(stdn2);
//** */ console.log(Object.propertyIsEnumrable);
//** */ console.log(Object.isPrototypeOf(obj));

// console.log(Object.keys(stdn3));
// console.log(Object.entries(stdn3));

//console.log(stdn3);



///console.table(student);
//console.table([stdn2.name,stdn2.age]);

