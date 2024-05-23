// Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase, uppercase, and titlecase.



let person_name:string= "shumaila imran";
console.log("uppercase",person_name.toUpperCase());
console.log("lowercase",person_name.toLowerCase());
console.log("titlecase:", person_name.replace(/\b\w/g, (per) => per.toUpperCase()));