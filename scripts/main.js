//   GET THE ice_cream_form AND SAVE IT AS A VARIABLE
let ice_cream_form = document.querySelector(".ice-cream-form");

//   ADD A SUBMIT EVENT LISTENER TO THE ice_cream_form
ice_cream_form.addEventListener("submit", function(e) {
     //   PREVENT THE DEFAULT ACTION OF THE SUBMIT, WHICH IS TH EPAGE RELOAD
     e.preventDefault();
     //   RUN THE submit_form FUNCTION
     submit_form();
});

//   FUNCTION TO SUBMIT THE FORM
function submit_form() {
     //   GET THE VALUES OF TH ETWO INPUTS
     let ice_cream_amount = document.querySelector(".amount").value;
     let ice_cream_cost = document.querySelector(".cost").value;

     //   CHECK IF BOTH INPUTS ARE NOT EMPTY
     if (ice_cream_amount != "" && ice_cream_cost != "") {
          //   CHANGE THE DATA TYPES TO THE CORRECT ONES
          ice_cream_cost = parseFloat(ice_cream_cost);
          ice_cream_amount = parseInt(ice_cream_amount);

          //   SHOW THE USER THE PRICE OF THEIR REQUEST
          alert(`${ice_cream_amount} ice cream cone(s) cost R${parseFloat(ice_cream_amount * ice_cream_cost)}`);
     } else {
          //   IF THE ENTRIES ARE EMPTY, THEN INFORM THE USER
          alert("Inputs are empty")
     }
}