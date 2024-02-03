const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask()
{
    if(inputBox.value === "")
    {
        alert("You are adding an empty value...! Please enter something")
    }
    else
    {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.append(li)
        //cancel button
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.append(span)
    }
    inputBox.value = ""  //after adding it removes searched value in input
    saveData()
}

// for removing the task or to put line through in task

listContainer.addEventListener("click",function(e)
{
    // console.log(e); //it refers to pointer
    // console.log(e.target); //li child/current element <li>....</li> (which ever element you click)
    // console.log(e.target.tagName); //LI (get is upper case)

    // console.log(e.target.parentElement); //parent element <ul id="list-container">...</ul>
    // remove() is used to remove element

    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN")
    {
        // console.log(e.target.parentElement);  //it takes parent element of whichever element u click
        e.target.parentElement.remove()
        saveData()
    }
})

// storing inside local storage

function saveData()
{
    localStorage.setItem("Data",listContainer.innerHTML)
}

// after reloading it should not disappear so we display it

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("Data")
}
showTask()