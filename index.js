// var flag = 0;
// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   if (flag===0) {
//     if (
//       document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
//     ) {
//       document.querySelector(".main").innerHTML +=
//         "<div class='questions container-fluid'> <div class='row pt-5'> <div class=' col-lg-2'> </div> <div class=' col-lg-1 pl-5'> <h1>Q2.</h1> </div> <div class=' col-lg-6'> <h1>What is your mode of transport?</h1> <select class='mt-5 pt-2 pb-2' name='mode'> <option value=' '> </option> <option value='Road Trip'>Road Trip</option> <option value='Cruise'>Cruise</option> <option value='Other'>Other</option> </select> </div> <div class=' col-lg-3'> </div> </div></div>";
//       flag = 1;
//     }
//   }
// }

document.querySelector(".next").addEventListener("click", function (event) {
  if (document.myform.weathertype.value === "Yes") {
    document.querySelector("#or").innerHTML =
      "<div class='questions container-fluid'> <div class='row pt-5'> <div class=' col-lg-2'> </div> <div class=' col-lg-1 pl-5'> <h1>Q4.</h1> </div> <div class=' col-lg-6'> <h1>What is the weather like at the place you want to go?</h1> <select class='mt-5 pt-2 pb-2' name='weather'> <option value=' '> </option> <option value='Sunny'>Sunny</option> <option value='Chilly'>Chilly</option> <option value='Rainy'>Rainy</option> <option value='Snowy'>Snowy</option> <option value='Dry'>Dry</option> </select> <br> <input name='submit' class='btn getstarted mt-lg-5' type='submit' value='Submit'></form> </div> <div class=' col-lg-3'> </div> </div> </div>";
  } else if (document.myform.weathertype.value === "No") {
    document.querySelector("#or").innerHTML +=
      "<div class='questions container-fluid'> <div class='row pt-5'> <div class=' col-lg-2'> </div> <div class=' col-lg-1 pl-5'> <h1>Q4.</h1> </div> <div class=' col-lg-6'> <h1>From: </h1> <input class='location mt-5 pt-2 pb-2' name='from' type='text'><br> <a class='next btn getstarted mt-lg-5' href='#to' role='button'>Next</a></div> <div class=' col-lg-3'> </div> </div> </div> <div id = 'to' class='questions container-fluid'> <div class='row pt-5'> <div class=' col-lg-2'> </div> <div class=' col-lg-1 pl-5'> <h1>Q5.</h1> </div> <div class=' col-lg-6'> <h1>To:</h1> <input class='location mt-5 pt-2 pb-2' name='to' type='text'> <br> <input name='submit' class='btn getstarted mt-lg-5' type='submit' value='Submit'></form> </div> <div class=' col-lg-3'> </div> </div> </div>";
  }
});



