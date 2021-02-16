//pretending this response is coming from server

const students = [
    {name: "Ashik", subject: "CSE"},
    {name: "Sifat", subject: "BBA"}
]


function enrollStudent(student){
    let prom = new Promise(function(resolve, reject){
        setTimeout(() => {
            students.push(student);
            console.log("student have been pushed");
            let error = false;
            if (!error){
                resolve();
            }else{
                reject("Something went Wrong");
            }
        }, 4000);
    });
    return prom;
}

function getStudent(){
    setTimeout(function() {
        let output = '';
        students.forEach(function(student){
            output += `<li>${student.name}</li>`
        });
        document.getElementById("id").innerHTML = output;
        console.log("student has fetched");
    }, 1000);
}

let newStudent = {name: "Rahim", subject: "Ban"};
enrollStudent(newStudent).then(getStudent).catch(function(err){
    console.log(err);
});
