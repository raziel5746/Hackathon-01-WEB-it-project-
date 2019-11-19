let body = document.querySelector("body");
let elements = document.getElementsByClassName("selectable");
let selectedElement;
let childToAdd;
let input = document.querySelector("#input");
let colours = document.querySelector("#colours");
let elementBtn;
let btnAddRow = document.getElementById("btnAddRow");
let btnAddImg = document.getElementById("btnAddImg");
let btnRemove = document.getElementById("btnRemove");
let hrefInput = document.querySelector("#hrefInput")
let btnAddA = document.querySelector("#btnAddA");
let btnAddH1 = document.querySelector("#btnAddH1");
let btnAddP = document.querySelector("#btnAddP");
let btnInsertText = document.querySelector("#btnInsertText");
let btnExport = document.querySelector("#btnExport");
let myWeb = document.querySelector("#myWeb");
let codeToExport;
let exportArea = document.querySelector("#exportArea");
let btnAddTable = document.getElementById("btnAddTable");
let btnAddNavbar = document.getElementById("btnAddNavbar");
let navbar = '<div class="topnav"><a class="active" href="#home">Home</a><a href="#news">News</a><a href="#contact">Contact</a><a href="#about">About</a></div>'
let table = '<table><tr><th>column1</th><th>column2</th><th>column3</th><th>column4</th></tr><tr><td>cel 2 1</td><td>cel 2 2</td><td>cel 2 3</td><td>cel 2 4</td></tr><tr><td>cel 3 1</td><td>cel 3 </td><td>cel 3 </td><td>cel 3 </td></tr></table>'
let btnClear = document.querySelector("#btnClear");
let template1 = '<style>.selectable;*{box-sizing: border-box;}.col-1 {  background: #D7E8D4;  flex: 1; height: 100%}.col-2 {  display: flex;  flex-direction: column;  flex: 5;}.content {  display: flex;  flex-direction: row; height: 60%}.content > article {  flex: 3;  min-height:60%;}.content > aside {  background: beige;  flex: 1;}header, footer {  background: yellowgreen;  height: 20%;}header, footer, article, nav, aside {  padding: 1em;}</style><nav class="col-1"></nav><div class="col-2">    <header></header>  <main class="content">  <article></article>  <aside></aside>  </main>    <footer></footer></div>'
let btnTemplate1 = document.querySelector("#btnTemplate1")
let headOfCodeToExport = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link href="https://fonts.googleapis.com/css?family=Acme|Asap|Barlow+Condensed|Comfortaa|Indie+Flower|Lobster|Source+Code+Pro|Source+Serif+Pro|Yanone+Kaffeesatz&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="navbar.css"><title>WEB-IT!</title></head><body>';
let footOfCodeToExport = '</body></html>';


// FUNCTIONS

function makeAllSelectable() {
	for (i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains("selectable")) {
			elements[i].addEventListener("click", function (e) {
				selectedElement = e.target;
				if (selectedElement.classList.contains("selected")) {
					selectedElement.classList.toggle("selected");
				} else {
					unselect();
					selectedElement.classList.toggle("selected");
				}
			})
		}
	}
}

function unselect() {
	elements = document.getElementsByClassName("selectable");
	for (i = 0; i < elements.length; i++) {
		elements[i].classList.remove("selected");
	}
}

function addChild() {
	childToAdd = document.createElement(elementBtn);
	if (elementBtn == "img") { childToAdd.src = input.value }
	if (selectedElement.classList.contains("selected")) {
		if (input.value) {
			childToAdd.innerHTML = input.value;
			childToAdd.style.color = colours.value;
			childToAdd.style.fontFamily = fonts.value;
		}
		selectedElement.appendChild(childToAdd);
		childToAdd.classList.add("selectable");
	};
	input.value = "";
}

function removeElement() {
	if (selectedElement.classList.contains("selected")) {
		selectedElement.remove();
	};
}


makeAllSelectable();


// EVENT LISTENERS
btnRemove.addEventListener("click", removeElement);

btnAddRow.addEventListener("click", function () {
	elementBtn = btnAddRow.name;
	addChild();
	childToAdd.classList.add("row")
})

btnAddColumn.addEventListener("click", function () {
	elementBtn = btnAddColumn.name;
	addChild();
	childToAdd.classList.add("column")
})

btnAddImg.addEventListener("click", function () {
	elementBtn = btnAddImg.name;
	addChild();
})

btnAddA.addEventListener("click", function () {
	elementBtn = btnAddA.name;
	addChild();
	childToAdd.href = hrefInput.value;
	hrefInput.value = "";
})

btnAddH1.addEventListener("click", function () {
	elementBtn = btnAddH1.name;
	addChild();
})

btnAddP.addEventListener("click", function () {
	elementBtn = btnAddP.name;
	addChild();
})

btnInsertText.addEventListener("click", function () {
	let newText = document.createTextNode(input.value);
	selectedElement.appendChild(newText);
	selectedElement.style.color = colours.value;
	selectedElement.style.fontFamily = fonts.value;
	selectedElement.appendChild(newText);
	input.value = "";
})

btnExport.addEventListener("click", function () {
	codeToExport = headOfCodeToExport + myWeb.outerHTML + footOfCodeToExport;

	exportArea.value = codeToExport.replace(/>/g, ">\n");
})

btnAddTable.addEventListener("click", function () {
	// let stringifiedTable = table.toString;
	console.log(table);
	selectedElement.innerHTML += table;
})

btnAddNavbar.addEventListener("click", function () {
	let navbarElement = document.createElement("nav");
	navbarElement.innerHTML = navbar;
	navbarElement.classList.add("selectable");
	navbarElement.firstChild.classList.add("selectable");
	selectedElement.prepend(navbarElement);
})

btnClear.addEventListener("click", function () {
	exportArea.value = "";
})

btnTemplate1.addEventListener("click", function () {
	myWeb.innerHTML += template1;
})