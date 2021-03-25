const seatsSelected = []
const seatsSelected2 = []
const seatsSelected3 = []
const order = {
    name : 'Pirates of the Carribrean',
    price: 18,
    total: 0,
    seats: 0
}
var option = 18;
function clickedBox(id){
    if(seatsSelected.includes(id)){
        const elmt = document.getElementById(id);
        elmt.style.backgroundColor = "rgba(49, 47, 47, 0.8)";
        const total = document.getElementById('total');
        total.innerText = parseInt(total.innerText) - parseInt(option);
        const seats = document.getElementById('seats_selected');
        seats.innerText = seatsSelected.length - 1;
        const index = seatsSelected.indexOf(id);
        if (index > -1) {
            seatsSelected.splice(index, 1);
            console.log(seatsSelected);
        }
        order.seats = seats;
        order.total = total;
        window.localStorage.setItem('seats', seatsSelected.length);
        window.localStorage.setItem('total', parseInt(total.innerText) - parseInt(option));
    }
    else{
        const elmt = document.getElementById(id);
        elmt.style.backgroundColor = "rgb(140, 206, 120)";
        seatsSelected.push(id);
        console.log(seatsSelected);
        const seats = document.getElementById('seats_selected');
        seats.innerText = seatsSelected.length;
        const total = document.getElementById('total');
        total.innerText = parseInt(option) * seatsSelected.length;
        window.localStorage.setItem('seats', seatsSelected.length);
        window.localStorage.setItem('total',  (parseInt(option) * seatsSelected.length));
        order.seats = seats;
        order.total = total;
       
    }
}

function movieSelected(){
   // window.
//    const v = 0;

//    window.localStorage.setItem('name', order.name);
//    const n =  window.localStorage.getItem('name');

//    if(n == "Pirates of the Carribean"){
//       v = 18;
//       console.log(v);
//    }else{
//     console.log(n);
   
//     //location.reload();
 
//     console.log(v);
//    }
  

   
   
    //console.log(t);
   //document.getElementsByClassName(".grid-container").contentWindow.location.reload(true);
   //location.reload( '.grid-container' )
//    if(option == 18){}
//    else if(option == 15){}
//    else if(option == 10){}
    seatsSelected.length = 0;
    const elmt = document.getElementById('movies');
    option= elmt.value;
    order.price = option;
    const txt = document.getElementById(elmt.value).innerHTML;
    order.name = txt;
    const movie = document.getElementById('movieName');
    movie.innerText = txt;
    const total = document.getElementById('total');
    total.innerText = parseInt(option) * seatsSelected.length;
    order.total = total;
    const price = document.getElementById('price');
    price.innerText = "$ " +option ;
    order.price = price;
    const seats = document.getElementById('seats_selected');
    seats.innerText = seatsSelected.length;
    order.seats = seats;
    console.log(order.seats);
    window.localStorage.setItem('name', order.name);
    window.localStorage.setItem('total', parseInt(option) * seatsSelected.length);
    window.localStorage.setItem('price', "$ " +option);
    window.localStorage.setItem('seats', seatsSelected.length);
   

}

function myFunction() {
   var input = confirm("Are you sure you want to confirm your order?");
   if(input){
   
    
    console.log(order);
       console.log("jhgj");
       window.open("action_page.html");
   }
  }

  function loadOrder() {
    console.log("loadimg order");
    const n =  window.localStorage.getItem('name');
    const t =  window.localStorage.getItem('total');
    const p =  window.localStorage.getItem('price');
    const s =  window.localStorage.getItem('seats');
    console.log(n);
    console.log(t);
    console.log(p);
    console.log(s);
    const movie = document.getElementById('movieName');
    movie.innerText = n;
    const total = document.getElementById('total');

    total.innerText = t;
   
    const price = document.getElementById('price');
    price.innerText = p ;
   
    const seats = document.getElementById('seats_selected');
    seats.innerText = s;
    
   }