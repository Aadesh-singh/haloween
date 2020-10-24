 
        
//        /modal script
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("mybtn");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function() {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
//  modal-2
  var modal1 = document.getElementById("myModal1");
        var btn = document.getElementById("mybtn1");
        var span = document.getElementsByClassName("close1")[0];

        btn.onclick = function() {
            modal1.style.display = "block";
        }
        span.onclick = function() {
            modal1.style.display = "none";
        }
        window.onclick = function() {
            if (event.target == modal1) {
                modal1.style.display = "none";
            }
        }
//  modal-3
  var modal2 = document.getElementById("myModal2");
        var btn = document.getElementById("mybtn2");
        var span = document.getElementsByClassName("close2")[0];

        btn.onclick = function() {
            modal2.style.display = "block";
        }
        span.onclick = function() {
            modal2.style.display = "none";
        }
        window.onclick = function() {
            if (event.target == modal2) {
                modal2.style.display = "none";
            }
        }




function ButtonClicked(){
    alert("Blogs Chahiye chutiye ko Bhakk !!");
}
function btn1(){
    var str1 = document.getElementById("txt1").value;
    var str2 = document.getElementById("txt2").value;
    alert("Your question : ' "+ str1 + "' is asked by '" + str2 + "' Thanks for asking");
    
}
function fuc1(){
    alert("Record submitted");
}
function fuc5(){
    alert("for contact details goto bottom of the page");
}
function fuc2(){
    window.open("https://www.goodhousekeeping.com/holidays/halloween-ideas/g565/halloween-party-ideas/");
}
function fuc3(){
    window.open("https://www.amazon.in/");
}
function fuc4(){
    window.open("https://www.amazon.in/s?k=Halloween+swags&ref=nb_sb_noss");
}





