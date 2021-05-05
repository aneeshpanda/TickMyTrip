
const inputBox = document.querySelector(".inputtext input");
const addBtn = document.querySelector(".inputtext button");
const toDo = document.querySelector(".list");


const btns = document.querySelectorAll('button');

console.log(btns);
btns.forEach((btn) => {
	btn.addEventListener('click', Oncheck);
});

function Oncheck(ev) {
	let id = ev.currentTarget.id;
	let btn = document.getElementById(id);
    console.log(Number(id)+10);
	let icon = document.getElementById(Number(id)+10);
    document.querySelector(".list").innerHTML += "<li>" + document.getElementById(id).innerText + "</li>"
	if (icon.classList.contains('fa-plus')) {
		icon.classList.remove('fa-plus');
		icon.classList.add('fa-check');
	}
	btn.style.backgroundColor = 'green';
	btn.style.color = 'white';
}

inputBox.onkeyup = ()=>{
    let data = inputBox.value;
    if(data.trim() != 0){// if the data is not only spaces
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active")
    }
}
show();

addBtn.onclick = ()=>{
    let data = inputBox.value;
    let getLocalStorage = localStorage.getItem("New to do");
    if(getLocalStorage == null){
        listArr = []; 
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; 
    completedButton.classList.add("complete-btn"); 
    toDo.appendChild(completedButton);
    listArr.push(data);
    localStorage.setItem("New to do", JSON.stringify(listArr));
    show();
    addBtn.classList.remove("active"); //unactive the add button once the task added
    inputBox.value = ""//setting the input box blank after task is entered
}


function show(){
    let getLocalStorageData = localStorage.getItem("New to do");
    if(getLocalStorageData == null){
      listArr = [];
    }else{
      listArr = JSON.parse(getLocalStorageData); 
    }
    let newLiTag = "";
    listArr.forEach((element, index) => {
      newLiTag += `<li>${element}<span onClick="deleteT(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    toDo.innerHTML = newLiTag; //adding new li tag inside ul tag
}
function deleteT(index){
    let getLocalStorageData = localStorage.getItem("New to do");
    listArr = JSON.parse(getLocalStorageData);
    listArr.splice(index,1);
    localStorage.setItem("New to do", JSON.stringify(listArr));
    show();
}

function deleteT(index){
    let getLocalStorageData = localStorage.getItem("New to do");
    listArr = JSON.parse(getLocalStorageData);
    listArr.splice(index,1);
    localStorage.setItem("New to do", JSON.stringify(listArr));
    show();
}