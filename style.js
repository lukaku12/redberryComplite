
//ინტრო გვერდიდან პირველ გვერდზე გადასვლა
function button1(){
    document.getElementById("intro").style.display = "none"
    document.getElementById("motherBody").style.display = "flex"
    document.getElementById("header").style.display = "flex"
    document.getElementById("headerSplit").style.display = "flex"
    document.getElementById("footer").style.display = "flex"
}

//პირველი გვერდის ვალიდაციები//
function test() {
    var x = document.getElementById("saxeli").value;
    var y = document.getElementById("gvari").value;
    var z = document.getElementById("maili").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let nameState = false;
    let lastNameState = false;
    let mailState = false;

    

    /* ვალიდაციები სახელისთვის */
    if(x == ""){
        document.getElementById("error").innerHTML = "ეს ველი არ უნდა იყოს ცარიელი";
        nameState = false;
    }
    else if(x.toString().length < 3){
        document.getElementById("error").innerHTML = "ეს ველი უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს";
        nameState = false;
    }
    else if(x.toString().length >= 255){
        document.getElementById("error").innerHTML = "ეს ველი უნდა შეიცავდეს მაქსიმუმ 255 სიმბოლოს";
        nameState = false;
    }
    else{
        document.getElementById("error").innerHTML = "";
        nameState = true;
    }
    /* ვალიდაციები გვარისთვის */
    if(y == ""){
        document.getElementById("error1").innerHTML = "ეს ველი არ უნდა იყოს ცარიელი"
        lastNameState = false;
    }
    else if(y.toString().length < 3){
        document.getElementById("error1").innerHTML = "ეს ველი უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს"
        lastNameState = false;
    }
    else if(y.toString().length >= 255){
        document.getElementById("error1").innerHTML = "ეს ველი უნდა შეიცავდეს მაქსიმუმ 255 სიმბოლოს"
        lastNameState = false;
    }
    else{
        document.getElementById("error1").innerHTML = ""
        lastNameState = true;
    }
    /* ვალიდაციები მეილისთვის */
    if(z.endsWith('@redberry.ge')){
        document.getElementById("error2").innerHTML = ""
        mailState = true;
    }
    else{
        document.getElementById("error2").innerHTML = "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)"
        mailState = false;
    }
    if(nameState && lastNameState && mailState ){
        console.log("სახელი: " + x)
        console.log("გვარი: " + y)
        console.log("მეილი: " + z)
        document.getElementById("pageNumber").innerHTML = "2/4"
        document.getElementById("kitxvari2").style.display = "inline-block"
        document.getElementById("leftBody2").style.display = "inline-block"
        document.getElementById("rightBody2").style.display = "inline-block"
        document.getElementById("rightBody").style.display = "none"
        document.getElementById("leftBody").style.display = "none"
        document.getElementById("page1Next").style.display = "none"
        document.getElementById("page2Last").style.display = "inline-block"
        document.getElementById("page2Last").style.visibility = "visible"
        document.getElementById("page4Last").style.display = "none"
        //document.getElementById("page2Next").style.visibility = "visible"
    }
}


//მეორე გვერდის ვალიდაციები//
function gadataniliGaqvs(x){ //გაქვს გადატანილი Covid-19?*
    if(x == 0){
        document.getElementById("secondStage").style.display = "inline-block"
        document.getElementById("secondStage").style.visibility = "visible"
        document.getElementById("page2Next").style.visibility = "hidden"
    }else{
        document.getElementById("secondStage").style.visibility = "hidden"
        document.getElementById("fourthStage").style.display = "none"
        document.getElementById("thirdStage").style.display = "none"
        document.getElementById("page2Next").style.display = "inline-block"
        document.getElementById("page2Next").style.visibility = "visible"
        document.getElementById("page2NextKiKi").style.display = "none"
        document.getElementById("page2NextKiAra").style.display = "none"
    }
}
function checkAnti(x){ //ანტისხეულების ტესტი გაქვს გაკეთებული?*
    if(x == 0){ // კი
        document.getElementById("thirdStage").style.display = "inline-block"
        document.getElementById("thirdStage").style.visibility = "visible"
        document.getElementById("fourthStage").style.display = "none"
        document.getElementById("page2NextKiKi").style.display = "inline-block"
        document.getElementById("page2NextKiAra").style.display = "none"
    }
    if(x == 1){ // არა
        document.getElementById("thirdStage").style.display = "none"
        document.getElementById("fourthStage").style.display = "inline-block"
        document.getElementById("fourthStage").style.visibility = "visible"
        document.getElementById("page2NextKiKi").style.display = "none"
        document.getElementById("page2NextKiAra").style.display = "inline-block"
    }
}
function page2NextKiKi(){
    if(document.getElementById("dateInput").value == ""){
        document.getElementById("error11").innerHTML = "*-ით მონიშნული ველები უნდა შეავსო!"
        document.getElementById("error11").style.visibility = "visible"
    }else if(document.getElementById("numberInput").value == ""){
        document.getElementById("error11").innerHTML = "*-ით მონიშნული ველები უნდა შეავსო!"
        document.getElementById("error11").style.visibility = "visible"
    }else if(document.getElementById("numberInput").value !== ""){
        document.getElementById("pageNumber").innerHTML = "3/4"
        document.getElementById("kitxvari3").style.display = "inline"
        document.getElementById("leftBody3").style.display = "inline"
        document.getElementById("rightBody3").style.display = "inline"
        document.getElementById("page3Last").style.display = "inline-block"
        document.getElementById("page3Last").style.visibility = "visible"
        document.getElementById("rightBody2").style.display = "none"
        document.getElementById("leftBody2").style.display = "none"
        document.getElementById("page2Last").style.display = "none"
        document.getElementById("page2Next").style.display = "none"
        document.getElementById("page2NextKiKi").style.display = "none"
        document.getElementById("page2NextKiAra").style.display = "none"
    }
}
function page2NextKiAra(){
    if(document.getElementById("dateInput2").value == ""){
        document.getElementById("error13").innerHTML = "*-ით მონიშნული ველები უნდა შეავსო!"
        document.getElementById("error13").style.visibility = "visible"
    }else{
        document.getElementById("pageNumber").innerHTML = "3/4"
        document.getElementById("kitxvari3").style.display = "inline"
        document.getElementById("leftBody3").style.display = "inline"
        document.getElementById("rightBody3").style.display = "inline"
        document.getElementById("page3Last").style.display = "inline-block"
        document.getElementById("page3Last").style.visibility = "visible"
        document.getElementById("rightBody2").style.display = "none"
        document.getElementById("leftBody2").style.display = "none"
        document.getElementById("page2Last").style.display = "none"
        document.getElementById("page2Next").style.display = "none"
        document.getElementById("page2NextKiKi").style.display = "none"
        document.getElementById("page2NextKiAra").style.display = "none"
    }
}

function page2Last(){
    document.getElementById("rightBody").style.display = "inline-block"
    document.getElementById("leftBody").style.display = "inline-block"
    document.getElementById("page1Next").style.display = "inline-block"
    document.getElementById("rightBody2").style.display = "none"
    document.getElementById("leftBody2").style.display = "none"
    document.getElementById("page2Last").style.display = "none"
    document.getElementById("page2Next").style.display = "none"
    document.getElementById("pageNumber").innerHTML = "1/4"
    document.getElementById("page2NextKiKi").style.display = "none"
    document.getElementById("page2NextKiAra").style.display = "none"
}
function page2Next(){
    document.getElementById("pageNumber").innerHTML = "3/4"
    document.getElementById("kitxvari3").style.display = "inline"
    document.getElementById("leftBody3").style.display = "inline"
    document.getElementById("rightBody3").style.display = "inline"
    document.getElementById("page3Last").style.display = "inline-block"
    document.getElementById("page3Last").style.visibility = "visible"
    document.getElementById("rightBody2").style.display = "none"
    document.getElementById("leftBody2").style.display = "none"
    document.getElementById("page2Last").style.display = "none"
    document.getElementById("page2Next").style.display = "none"
}

//მესამე გვერდის ვალიდაციები//
function acriliXar(x){ // უკვე აცრილი ხარ?
    if(x == 0){ // კი
        document.getElementById("secondStage2").style.display = "inline"
        document.getElementById("secondStage2").style.visibility = "visible"
        document.getElementById("thirdStage2").style.display = "none"
        document.getElementById("romArGadado").style.display = "none"
        document.getElementById("justLink").style.display = "none"
        document.getElementById("linkWithText").style.display = "none"
        document.getElementById("page3Next").style.display = "none"
        console.log("უკვე აცრილი ხარ?: კი")
    }
    if(x == 1){ //არა
        document.getElementById("thirdStage2").style.display = "inline"
        document.getElementById("thirdStage2").style.visibility = "visible"
        document.getElementById("secondStage2").style.display = "none"
        document.getElementById("romArGadado").style.display = "none"
        document.getElementById("justLink").style.display = "none"
        document.getElementById("linkWithText").style.display = "none"
        document.getElementById("page3Next").style.display = "none"
        console.log("უკვე აცრილი ხარ?: არა")
    }
}
function raEtapze(x){ // აირჩიე რა ეტაპზე ხარ*
    if(x == 2){ // პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
        document.getElementById("romArGadado").style.display = "inline-block"
        document.getElementById("romArGadado").style.visibility = "visible"
        document.getElementById("page3Next").style.display = "inline-block"
        document.getElementById("page3Next").style.visibility = "visible"
        console.log("პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე")
    }else if(x == 1){
        document.getElementById("romArGadado").style.display = "none"
        document.getElementById("thirdStage2").style.display = "none"
        document.getElementById("justLink").style.display = "none"
        document.getElementById("linkWithText").style.display = "none"
        document.getElementById("page3Next").style.display = "inline-block"
        document.getElementById("page3Next").style.visibility = "visible"
        console.log("სრულად აცრილი ვარ")
    }else{
        document.getElementById("romArGadado").style.visibility = "hidden"
        document.getElementById("page3Next").style.display = "inline-block"
        document.getElementById("page3Next").style.visibility = "visible"
        console.log("პირველი დოზა და დარეგისტრირებული ვარ მეორეზე")
    }
}
function rasElodebi(x){ // რას ელოდები?
    if(x == 1){ // არ ვგეგმავ
        document.getElementById("justLink").style.visibility = "visible"
        document.getElementById("justLink").style.display = "inline"
        document.getElementById("linkWithText").style.display = "none"
        document.getElementById("page3Next").style.display = "inline-block"
        document.getElementById("page3Next").style.visibility = "visible"
        console.log("რას ელოდები?: არ ვგეგმავ")
    }else if(x == 2){ // გადატანილი მაქვს და ვგეგმავ აცრას
        document.getElementById("linkWithText").style.display = "inline-block"
        document.getElementById("linkWithText").style.visibility = "visible"
        document.getElementById("justLink").style.display = "none"
        document.getElementById("page3Next").style.display = "inline-block"
        document.getElementById("page3Next").style.visibility = "visible"
        console.log("რას ელოდები?: გადატანილი მაქვს და ვგეგმავ აცრას")
    }else{
        document.getElementById("justLink").style.display = "none"
        document.getElementById("linkWithText").style.display = "none"
        document.getElementById("page3Next").style.display = "inline-block"
        document.getElementById("page3Next").style.visibility = "visible"
        console.log("რას ელოდები?: დარეგისტრირებული ვარ და ველოდები რიცხვს")
    }
}
function page3Last(){
    document.getElementById("rightBody2").style.display = "inline-block"
    document.getElementById("leftBody2").style.display = "inline-block"
    document.getElementById("page2Last").style.display = "inline-block"
    document.getElementById("rightBody3").style.display = "none"
    document.getElementById("leftBody3").style.display = "none"
    document.getElementById("page3Last").style.display = "none"
    document.getElementById("page3Next").style.display = "none"
    document.getElementById("pageNumber").innerHTML = "2/4"
}
function page3Next(){
    document.getElementById("pageNumber").innerHTML = "4/4"
    document.getElementById("kitxvari4").style.display = "inline-block"
    document.getElementById("leftBody4").style.display = "inline-block"
    document.getElementById("rightBody4").style.display = "inline-block"
    document.getElementById("rightBody3").style.display = "none"
    document.getElementById("leftBody3").style.display = "none"
    document.getElementById("page3Last").style.display = "none"
    document.getElementById("page3Next").style.display = "none"
    document.getElementById("page4Last").style.display = "inline-block"
    document.getElementById("page4Last").style.visibility = "visible"
}

//მეოთხე გვერდის ვალიდაციები//
let madloba = false;
function raSixshirit(x){
    if(x == 0 || x == 1 || x == 2 || x == 3){
    madloba = true;
    }else{
        madloba = false
    }
}
function raSixshirit2(x){
    if(x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5){
        madloba = true;
    }else{
        madloba = false
    }
}

function changeButton4(){
    if(madloba == true){
        document.getElementById("leftBody").style.display = "none"
        document.getElementById("rightBody").style.display = "none"
        document.getElementById("leftBody2").style.display = "none"
        document.getElementById("rightBody2").style.display = "none"
        document.getElementById("leftBody3").style.display = "none"
        document.getElementById("rightBody3").style.display = "none"
        document.getElementById("leftBody4").style.display = "none"
        document.getElementById("rightBody4").style.display = "none"
        document.getElementById("header").style.display = "none"
        document.getElementById("headerSplit").style.display = "none"
        document.getElementById("footer").style.display = "none"
        document.getElementById("lastPage").style.display = "inline-block"
        document.getElementById("error15").style.display = "inline-block"
        document.getElementById("error15").style.visibility = "visible"
        document.getElementById("colorChange").style.cssText = "background-color: #232323 !important;"
    }
}

function page4Last(){
    document.getElementById("rightBody3").style.display = "inline-block"
    document.getElementById("leftBody3").style.display = "inline-block"
    document.getElementById("page3Last").style.display = "inline-block"
    document.getElementById("rightBody4").style.display = "none"
    document.getElementById("leftBody4").style.display = "none"
    document.getElementById("page4Last").style.display = "none"
    document.getElementById("pageNumber").innerHTML = "3/4"
}