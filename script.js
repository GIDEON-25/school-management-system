function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user=="admin" && pass=="1234admin")
(user=="principal" && pass=="1234principal")
(user=="dos" && pass=="1234dos")
(user=="deputy principal" && pass=="1234dp"){
window.location="dashboard.html"
}

else{
document.getElementById("error").innerText="Invalid Login"
}

}
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAXGwPuCLslxBdDtQE_mgkZteHtoWVIK4Q",
    authDomain: "my-project2-48b45.firebaseapp.com",
    projectId: "my-project2-48b45",
    storageBucket: "my-project2-48b45.firebasestorage.app",
    messagingSenderId: "723678492819",
    appId: "1:723678492819:web:f35ffde0360a36dfcef566",
    measurementId: "G-2D3FFLEKZL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firestore
  const db = getFirestore(app);

  // Example: Add a student
  async function addStudent(name, adm, clas){
    try {
      const docRef = await addDoc(collection(db, "students"), {
        name: name,
        admission: adm,
        class: clas
      });
      console.log("Student added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding student: ", e);
    }
  }

  // Example: Get all students
  async function getStudents(){
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `, doc.data());
    });
  }
async function submitStudent(){
  const name = document.getElementById("studentName").value;
  const adm = document.getElementById("admNo").value;
  const clas = document.getElementById("class").value;

  if(name && adm && clas){
    await addStudent(name, adm, clas, phone);
    alert("Student Registered successfully!");
    displayStudents();
  } else {
    alert("Please fill all fields");
  }
}

function addStudent(){

let name=document.getElementById("name").value
let adm=document.getElementById("adm").value
let clas=document.getElementById("class").value
let phone=document.getElementById("phone").value

let students=JSON.parse(localStorage.getItem("students")) || []

let student={
name:name,
adm:adm,
class:clas,
phone:phone
}

students.push(student)

localStorage.setItem("students",JSON.stringify(students))

displayStudents()

}
function displayStudents(){

let students=JSON.parse(localStorage.getItem("students")) || []

let table=document.getElementById("studentTable")

table.innerHTML=`
<tr>
<th>Name</th>
<th>Adm No</th>
<th>Class</th>
<th>Phone</th>
</tr>
`

students.forEach(function(student){

let row=table.insertRow()

row.insertCell(0).innerHTML=student.name
row.insertCell(1).innerHTML=student.adm
row.insertCell(2).innerHTML=student.class
row.insertCell(3).innerHTML=student.phone

})

}
window.onload = function(){
  displayStudents();
}


function addTeacher(){

let name=document.getElementById("tname").value
let subject=document.getElementById("subject").value
let phone=document.getElementById("tphone").value
let email=document.getElementById("temail").value

let table=document.getElementById("teacherTable")

let row=table.insertRow()

row.insertCell(0).innerHTML=name
row.insertCell(1).innerHTML=subject
row.insertCell(2).innerHTML=phone
row.insertCell(3).innerHTML=email

}



function markAttendance(){

let name=document.getElementById("studentName").value
let status=document.getElementById("status").value

let table=document.getElementById("attendanceTable")

let row=table.insertRow()

row.insertCell(0).innerHTML=name
row.insertCell(1).innerHTML=status

}

function searchStudent(){

let input=document.getElementById("searchStudent").value.toLowerCase()

let table=document.getElementById("studentTable")

let rows=table.getElementsByTagName("tr")

for(let i=1;i<rows.length;i++){

let name=rows[i].cells[0].innerHTML.toLowerCase()

if(name.includes(input)){
rows[i].style.display=""
}else{
rows[i].style.display="none"
}

}

}


function payFee(){

let name=document.getElementById("fname").value
let amount=document.getElementById("amount").value

let table=document.getElementById("feeTable")

let row=table.insertRow()

row.insertCell(0).innerHTML=name
row.insertCell(1).innerHTML=amount

}

function payFee(){

let name = document.getElementById("fname").value
let total = parseInt(document.getElementById("totalFee").value)
let paid = parseInt(document.getElementById("amountPaid").value)

let fees=JSON.parse(localStorage.getItem("fees")) || []

let record={
name:name,
total:total,
paid:paid,
balance:total-paid
}

fees.push(record)

localStorage.setItem("fees",JSON.stringify(fees))

displayFees()

}
function displayFees(){

let fees=JSON.parse(localStorage.getItem("fees")) || []

let table=document.getElementById("feeTable")

table.innerHTML=`
<tr>
<th>Name</th>
<th>Total Fee</th>
<th>Paid</th>
<th>Balance</th>
</tr>
`

fees.forEach(function(fee){

let row=table.insertRow()

row.insertCell(0).innerHTML=fee.name
row.insertCell(1).innerHTML=fee.total
row.insertCell(2).innerHTML=fee.paid
row.insertCell(3).innerHTML=fee.balance

})

}

function printRow(button){

let row=button.parentNode.parentNode

let data=row.innerText

let newWindow=window.open("")

newWindow.document.write("<h2>Student Fee Statement</h2>")
newWindow.document.write("<pre>"+data+"</pre>")

newWindow.print()

}
function printAllFees(){

window.print()

}
window.onload=function(){

if(document.getElementById("studentTable")){
displayStudents()
}

}
function markAttendance(){

let name=document.getElementById("studentName").value
let status=document.getElementById("status").value

let attendance=JSON.parse(localStorage.getItem("attendance")) || []

let record={
name:name,
status:status
}

attendance.push(record)

localStorage.setItem("attendance",JSON.stringify(attendance))

displayAttendance()

}
function displayAttendance(){

let attendance=JSON.parse(localStorage.getItem("attendance")) || []

let table=document.getElementById("attendanceTable")

table.innerHTML=`
<tr>
<th>Name</th>
<th>Status</th>
</tr>
`

attendance.forEach(function(record){

let row=table.insertRow()

row.insertCell(0).innerHTML=record.name
row.insertCell(1).innerHTML=record.status

})


}

