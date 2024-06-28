let vormgeving = document.getElementById("vormgeving");
let content = document.getElementById("content");
let internetstandaarden = document.getElementById("internetstandaarden");
let emerging = document.getElementById("emerging");
let assetto = document.getElementById("assetto");
let dashboard = document.getElementById("dashboard");
let huttendorp = document.getElementById("huttendorp");
let sim = document.getElementById("sim");
let back = document.getElementById("background");

function vormgeving2() {
    document.getElementById("vormgeving2").style.display = "block";
    open();
}
function content2() {
    document.getElementById("content2").style.display = "block";
    open();
}
function internetstandaarden2() {
    document.getElementById("internetstandaarden2").style.display = "block";
    open();
}
function emerging2() {
    document.getElementById("emerging2").style.display = "block";
    open();
}
function assetto2() {
    document.getElementById("assetto2").style.display = "block";
    open();
}
function dashboard2() {
    document.getElementById("dashboard2").style.display = "block";
    open();
}
function huttendorp2() {
    document.getElementById("huttendorp2").style.display = "block";
    open();
}
function sim2() {
    document.getElementById("sim2").style.display = "block";
    open();
}

function open() {
    document.getElementById("background").style.display = "block";
}
function close2() {
    document.getElementById("background").style.display = "none";
    document.getElementById("vormgeving2").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("internetstandaarden2").style.display = "none";
    document.getElementById("emerging2").style.display = "none";
    document.getElementById("assetto2").style.display = "none";
    document.getElementById("dashboard2").style.display = "none";
    document.getElementById("huttendorp2").style.display = "none";
    document.getElementById("sim2").style.display = "none";

}

vormgeving.addEventListener("click", vormgeving2);
content.addEventListener("click", content2);
internetstandaarden.addEventListener("click", internetstandaarden2);
emerging.addEventListener("click", emerging2);
assetto.addEventListener("click", assetto2);
dashboard.addEventListener("click", dashboard2);
huttendorp.addEventListener("click", huttendorp2);
sim.addEventListener("click", sim2);
back.addEventListener("click", close2)