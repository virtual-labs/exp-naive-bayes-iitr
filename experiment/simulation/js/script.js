
const myContainer = document.getElementById('box');
// myContainer.style.padding="0px";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});




// table
let index = 1;
let count = 0;

function populateDataPointsTable() {
  
  const dataPointsTable = document.getElementById("dataPointsTable");
  const tbody = dataPointsTable.getElementsByTagName("tbody")[0];

  let colora = (document.getElementById("colora"));
  let typea = (document.getElementById("typea"));
  let origina = (document.getElementById("origina"));
  let stolena = (document.getElementById("stolena"));

  
  
if ( colora.value!='NULL' && typea.value!='NULL' && origina.value!='NULL' && stolena.value!='NULL'){
  const row = document.createElement("tr");
  row.classList.add("tocheck")
    rl=document.getElementsByClassName("tocheck")
    let countd=0
    des=true;
    for (var j = 0; j < rl.length; j++) {
     if(rl[j].cells[1].innerHTML==colora.value && rl[j].cells[2].innerHTML==typea.value && rl[j].cells[3].innerHTML==origina.value && rl[j].cells[4].innerHTML==stolena.value ){
      countd=countd+1
      
      if(countd==2){
        Swal.fire({
          icon: 'error',
          title: 'Max 2 entries for the same value!!',
          text: "The provided value has already been entered 2 times; please try using a different values.",
          allowOutsideClick: false,
          target: '.container',
          customClass: {
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },    
        });
        des=false;
        break;


      }

     }
     }
     if(des==true){

  document.getElementById('reset').disabled=false;
  row.innerHTML = `
      <td>${index}</td>
      <td>${colora.value}</td>
      <td>${typea.value}</td>
      <td>${origina.value}</td>
      <td>${stolena.value}</td>
      <td><input type="button" class="delete-button" value="Delete" onClick="deleteRow(this)"></td>

    `;

  tbody.appendChild(row);
  index++;
  count++;
  colora.value='NULL'
  typea.value='NULL'
  origina.value='NULL'
 stolena.value='NULL'

colora.style.border=""
typea.style.border=""
origina.style.border=""
stolena.style.border=""

     }
}
else
  {
    let countfof=0
    let a=""
    if(colora.value=='NULL'){
      a=a+"COLORS ,"
      countfof=countfof+1
      colora.style.border="2px solid red"
    }
    else{
      colora.style.border=""
    }
    if(typea.value=='NULL'){
      a=a+"TYPE ,"
      countfof=countfof+1
      typea.style.border="2px solid red"
    }
    else{
      typea.style.border=""
    }
    if(origina.value=='NULL'){
      a=a+"ORIGIN ,"
      countfof=countfof+1
      origina.style.border="2px solid red"
    }
    else{
      origina.style.border=""
    }
    if(stolena.value=='NULL'){
      a=a+"STOLEN ,"
      countfof=countfof+1
      stolena.style.border="2px solid red"
    }
    else{
      stolena.style.border=""
    }
    if(countfof==1){
      g='MISSING VALUE'
      tempa = a.split(" ,");
      tempa.pop()
      a=''
    a=tempa[0] 
        a=a+` field cannot have NULL value.`
    }
    if(countfof>1 && countfof<4){
      g='MISSING VALUES'
      tempa = a.split(" ,");
      tempa.pop()
      a='' 
      for(let i=0;i<tempa.length;i++){
        if (i!=tempa.length-1){
          a=a+tempa[i]+', '
        }
        if(i==tempa.length-1){
          a=a+'and '+tempa[i]
        }
      }
   
        a=a+` fields cannot have NULL values.`
    }
    if(countfof==4){
      g='MISSING VALUES'
      a=`Enter the required values.`
    }

    Swal.fire({
      icon: 'error',
      title: g,
      text: a,
      allowOutsideClick: false,
      target: '.container',
      customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
    },   
    });

  }
  if (count ===6) {

    f=document.getElementById("add-button")
    f.style.cursor="not-allowed";
    f.disabled = true;


    let temp2 = document.getElementById("for7");
    let yes1 =0 , no1=0;
    for (let i = 0 ; i<6 ; i++){
     let z =  temp2.rows.item(i).cells.item(4).innerHTML
      if (z=='Yes'){
        yes1=yes1+1
      }
      if (z=='No'){
        no1=no1+1
      }
    }
 
   
if(yes1<2)
{
  Swal.fire({
    icon: 'warning',
    title: 'At least enter 2 YES entries!',
    text: 'Delete any row and add the new entry to the table.',
    showCancelBotton:true,
    allowOutsideClick: false,
    target: '.container',
    customClass: {
      container: "position-absolute",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
  },    
  });
  return;
}
else if(no1<2)
{
  Swal.fire({
    icon: 'warning',
    title: 'At least enter 2 NO entries!',
    text: 'Delete any row and add the new entry to the table.',
    showCancelBotton:true,
    allowOutsideClick: false,
    target: '.container',
    customClass: {
      container: "position-absolute",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
  },    
  });
  return;
}

if (yes1==6){
  Swal.fire({
    showCancelButton: true,
  title: "Non-varying target variable in the dataset!",
  text: "Since all the target values in the training dataset are 'Yes', the prediction will likewise be 'Yes'. Would you like to modify any of the rows?",
  icon: "warning",
  allowOutsideClick: false,
  cancelButtonText: "NO",
  cancelButtonColor : "red",
  confirmButtonText: "YES",
  target: '.container',
  customClass: {
    container: "position-absolute",
    popup: "swal-popup",
    title: "swal-title",
    content: "swal-content",
},
  
}).then((result) => {
  if (result.isConfirmed) {

Swal.fire({
        icon: 'info',
        html: 'Click on <b style="color:red">Delete</b> button and then add a new row.',
        showCancelBotton:true,
        allowOutsideClick: false,
        target: '.container',
        customClass: {
          container: "position-absolute",
          popup: "swal-popup",
          title: "swal-title",
          content: "swal-content",
      },    
});

    const ne = document.getElementById("NEXT")
      ne.disabled=false;
      ne.style.cursor="pointer";
      ne.onclick=function(){tocheckthenextfunc()}
    
    ;}
    else{
        f=document.getElementById("add-button")
        f.style.cursor="not-allowed";
        f.disabled = true;
        for(let i =5;i>=0;i--){
            const del=document.getElementsByClassName("delete-button")
          del[i].disabled=true;
          del[i].style.opacity=0.5
          del[i].style.cursor="not-allowed";
        }
   
      const ne = document.getElementById("NEXT")
      ne.disabled=false;
      ne.style.cursor="pointer"
      
      Swal.fire({
        icon: 'success',
        html: 'Click on the <b style="color:#FF6600">NEXT</b> button',
        showCancelBotton:true,
        allowOutsideClick: false,
        target: '.container',
        customClass: {
          container: "position-absolute",
          popup: "swal-popup",
          title: "swal-title",
          content: "swal-content",
      },     

  
});
    }
  
});


}

else if(no1==6){
  Swal.fire({
    showCancelButton: true,
  title: "Non-varying target variable in the dataset!",
  text: "Since all the target values in the training dataset are 'No', the prediction will likewise be 'No'. Would you like to modify any of the rows?",
  icon: "warning",
  allowOutsideClick: false,
  cancelButtonText: "NO",
  cancelButtonColor : "red",
  confirmButtonText: "YES",
  target: '.container',
  customClass: {
    container: "position-absolute",
    popup: "swal-popup",
    title: "swal-title",
    content: "swal-content",
},
  
}).then((result) => {
  if (result.isConfirmed) {

    Swal.fire({
        icon: 'info',
        html: 'Click on <b style="color:red">Delete</b> button and then add a new row.',
        showCancelBotton:true,
        allowOutsideClick: false,
        target: '.container',
        customClass: {
          container: "position-absolute",
          popup: "swal-popup",
          title: "swal-title",
          content: "swal-content",
      },     
});

    const ne = document.getElementById("NEXT")
      ne.disabled=false;
      ne.style.cursor="pointer";
      ne.onclick=function(){tocheckthenextfunc()}
    
    ;}
    else{
        f=document.getElementById("add-button")
        f.style.cursor="not-allowed";
        f.disabled = true;
        for(let i =5;i>=0;i--){
            const del=document.getElementsByClassName("delete-button")
          del[i].disabled=true;
          del[i].style.opacity=0.5
          del[i].style.cursor="not-allowed";
        }
   
      const ne = document.getElementById("NEXT")
      ne.disabled=false;
      ne.style.cursor="pointer"
      
      Swal.fire({
        icon: 'success',
        html: 'Click on the <b style="color:#FF6600">NEXT</b> button',
        showCancelBotton:true,
        allowOutsideClick: false,
        target: '.container',
        customClass: {
          container: "position-absolute",
          popup: "swal-popup",
          title: "swal-title",
          content: "swal-content",
      },    

  
});
    }
  
});

}
else{
    Swal.fire({
        showCancelButton: true,
      text: "Do you want to delete any row?",
      icon: "warning",
      allowOutsideClick: false,
      cancelButtonText: "NO",
      cancelButtonColor : "red",
      confirmButtonText: "YES",
      target: '.container',
      customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
    },
      
    }).then((result) => {
      if (result.isConfirmed) {
        const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer";
          ne.onclick=function(){tocheckthenextfunc()}
        
        ;}
        else{
            f=document.getElementById("add-button")
            f.style.cursor="not-allowed";
            f.disabled = true;
            for(let i =5;i>=0;i--){
                const del=document.getElementsByClassName("delete-button")
              del[i].disabled=true;
              del[i].style.opacity=0.5
              del[i].style.cursor="not-allowed";
            }
       
          const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer"
          
          Swal.fire({
            icon: 'success',
            html: 'Click on the <b style="color:#FF6600">NEXT</b> button',
            showCancelBotton:true,
            allowOutsideClick: false,
            target: '.container',
            customClass: {
              container: "position-absolute",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
          },     
  
      
    });
        }
      
    });
  }
}
}

function deleteRow(button) {
  // Traverse up the DOM to find the table row (tr) element
  var row = button.parentNode.parentNode;

  // Remove the row from the table
  row.parentNode.removeChild(row);

  // Update the serial numbers
  updateSerialNumbers();
  f=document.getElementById("add-button")
    f.style.cursor="pointer";
    f.disabled = false;
    const ne = document.getElementById("NEXT")
    ne.disabled=true;
    ne.style.cursor="not-allowed";
    countMale=0;
    countFemale=0;
    
}

function updateSerialNumbers() {
  index--;
  count--;
  var table = document.getElementById('dataPointsTable');
  var rows = table.getElementsByTagName('tr');

  // Start the serial number from 1
  var serialNumber = 1;

  // Loop through each row (skip the header row)
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];

    // Update the serial number cell
    var sNoCell = row.cells[0];
    sNoCell.textContent = serialNumber;

    // Increment the serial number for the next row
    serialNumber++;
  }
}

let countMale=0;
let countFemale=0;
function populateDataPointsTablecon() {
  
  const dataPointsTable = document.getElementById("dataPointsTable");
  const tbody = dataPointsTable.getElementsByTagName("tbody")[0];

  let hft = parseFloat(document.getElementById("hft").value).toFixed(2);
  let wlbs = parseFloat(document.getElementById("wlbs").value).toFixed(2);
  let fsi = parseFloat(document.getElementById("fsi").value).toFixed(2);
  let gendert = (document.getElementById("gendert").value);
  
  console.log(gendert)
  let hftp = document.getElementById("hft");
  let wlbsp =document.getElementById("wlbs");
  let fsip = document.getElementById("fsi");
  let gendertp = document.getElementById("gendert");


  if (count >= 6) {
    return;
  }


  
  
  if ( isNaN(hft)==false && isNaN(wlbs)==false && isNaN(fsi)==false && gendert!="NULL"){
    if((hft>=4.5 && hft<=7.6)&&(wlbs>=90 && wlbs<=350)&&(fsi>=8.1 && fsi<=18)){
    const row = document.createElement("tr");
    row.classList.add("tocheck")
    rl=document.getElementsByClassName("tocheck")
    let countd=0
    des=true;


    for (var j = 0; j < rl.length; j++) {

     
     if(rl[j].cells[1].innerHTML==hft && rl[j].cells[2].innerHTML==wlbs && rl[j].cells[3].innerHTML==fsi && rl[j].cells[4].innerHTML==gendert ){
      countd=countd+1
      console.log('countd'+countd)
   
      if(countd==2){
        Swal.fire({
          icon: 'error',
          title: 'Max 2 entries for the same value!!',
          text: "The provided value has already been entered 2 times; please try using a different values.",
          allowOutsideClick: false,
          target: '.container',
          customClass: {
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },    
        });
        des=false;
        break;


      }

     }
     }
     if(des==true){
  row.innerHTML = `
      <td>${index}</td>
      <td>${hft}</td>
      <td>${wlbs}</td>
      <td>${fsi}</td>
      <td>${gendert}</td>
      <td><input type="button" class="delete-button" value="Delete" onClick="deleteRow(this)"></td>
    `;

  tbody.appendChild(row);

  index++;
  count++;
  hftp.style.border="";
  wlbsp.style.border="";
  fsip.style.border="";
  gendertp.style.border="";

  hftp.value='';
  wlbsp.value='';
  fsip.value='';
  gendertp.value='NULL'
     }
  }
  else{
     let countfof=0
    let a=""
    if(!(hft>=4.5 && hft<=7.6)){
      hftp.style.border="2px solid red"
      a=a+"HEIGHT ,"
      countfof=countfof+1
    }
    else{
      hftp.style.border=""
    }
    if(!(wlbs>=90 && wlbs<=350)){
      wlbsp.style.border="2px solid red"
      a=a+"WEIGHT ,"
      countfof=countfof+1
    }
    else{
      wlbsp.style.border=""
    }
    if(!(fsi>=8.1 && fsi<=18)){
      fsip.style.border="2px solid red"
      a=a+"FOOT SIZE ,"
      countfof=countfof+1
    }
    else[
      fsip.style.border=""
    ]
    if(countfof==1){
      g='INCORRECT VALUE'
      tempa = a.split(" ,");
      tempa.pop()
      a=''
    a=tempa[0] 
        a="Please enter the correct value for "+a+" field."
    }
    if(countfof>1 && countfof<4){
      g='INCORRECT VALUES'


      tempa = a.split(" ,");
      tempa.pop()
      a='' 
      for(let i=0;i<tempa.length;i++){
        if (i!=tempa.length-1){
          a=a+tempa[i]+', '
        }
        if(i==tempa.length-1){
          a=a+'and '+tempa[i]
        }
      }
        a="Enter correct values for "+a+" fields."


    }
    if(countfof==4){
      g='INCORRECT VALUES'
      a='Enter correct values in all field.'
  }
  gendertp.style.border=""
    Swal.fire({
      icon: 'error',
      title: g,
      text: a,
      showCancelBotton:true,
      allowOutsideClick: false,
      target: '.container',
      customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
    },    
    });


  }

}
  else{
    let countfof=0
    let a=""
    if(isNaN(hft)){
      hftp.style.border="2px solid red"
      a=a+"HEIGHT ,"
      countfof=countfof+1
    }
    else{
      hftp.style.border=""
    }
    if(isNaN(wlbs)){
      wlbsp.style.border="2px solid red"
      a=a+"WEIGHT ,"
      countfof=countfof+1
    }
    else{
      wlbsp.style.border=""
    }
    if(isNaN(fsi)){
      fsip.style.border="2px solid red"
      a=a+"FOOT SIZE ,"
      countfof=countfof+1
    }
    else{
      fsip.style.border=""
    }
    if(gendert=='NULL'){
      a=a+"GENDER ,"
      countfof=countfof+1
      gendertp.style.border="2px solid red"
    }
    else{
      gendertp.style.border=""
    }
    
    if(countfof==1){
      g='MISSING VALUE'
      tempa = a.split(" ,");
      tempa.pop()
      a=''
    a=tempa[0] 
        a=a+` field cannot have NULL values.`
    }
    if(countfof>1 && countfof<4){
      g='MISSING VALUES'
      tempa = a.split(" ,");
      tempa.pop()
      a='' 
      for(let i=0;i<tempa.length;i++){
        if (i!=tempa.length-1){
          a=a+tempa[i]+', '
        }
        if(i==tempa.length-1){
          a=a+'and '+tempa[i]
        }
      }
   
     
        a=a+` fields cannot have NULL values.`
        
       
    }
    if(countfof==4){
      g='MISSING VALUES'
      a=`Enter values in all fields.`
  }
    Swal.fire({
      icon: 'error',
      title: g,
      text: a,
      showCancelBotton:true,
      allowOutsideClick: false,
      target: '.container',
      customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
    },     
    });


  }

  
  if (count === 6) {
    f=document.getElementById("add-button")
        f.style.cursor="not-allowed";
        f.disabled = true;
        for (var j = 0; j < rl.length; j++) {

          if(rl[j].cells[4].innerHTML=='Male')
          {
           countMale++
           console.log('countMale :'+countMale)
          }
          else if(rl[j].cells[4].innerHTML=='Female')
          {
           countFemale++
           console.log('countFemale :'+countFemale)
          }
        }
    if(countMale<2)
    {
      Swal.fire({
        icon: 'warning',
        title: 'At least enter 2 MALE entries!',
        text: 'Delete any row and add the new entry to the table.',
        showCancelBotton:true,
        allowOutsideClick: false,
        target: '.container',
        customClass: {
          container: "position-absolute",
          popup: "swal-popup",
          title: "swal-title",
          content: "swal-content",
      },    
      });
      return;
    }
    else if(countFemale<2)
    {
      Swal.fire({
        icon: 'warning',
        title: 'At least enter 2 FEMALE entries!',
        text: 'Delete any row and add the new entry to the table.',
        showCancelBotton:true,
        allowOutsideClick: false,
        target: '.container',
        customClass: {
          container: "position-absolute",
          popup: "swal-popup",
          title: "swal-title",
          content: "swal-content",
      },    
      });
      return;
    }
        

    
    Swal.fire({
        showCancelButton: true,
      text: "Do you want to delete any row?",
      icon: "warning",
      allowOutsideClick: false,
      cancelButtonText: "NO",
      cancelButtonColor : "red",
      confirmButtonText: "YES",
      target: '.container',
      customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
    }, 
      
    }).then((result) => {
      if (result.isConfirmed) {
        
        const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer";
          ne.onclick=function(){tocheckthenextfunc2()}
        ;}
        else{
            f=document.getElementById("add-button")
            f.style.cursor="not-allowed";
            f.disabled = true;
            for(let i =5;i>=0;i--){
                const del=document.getElementsByClassName("delete-button")
              del[i].disabled=true;
              del[i].style.opacity=0.5
              del[i].style.cursor="not-allowed";
            }
       
          const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer"
          Swal.fire({
            icon: 'success',
            html: 'Click on the <b style="color:#FF6600">NEXT</b> button.',
            showCancelBotton:true,
            allowOutsideClick: false,
            target: '.container',
            customClass: {
              container: "position-absolute",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
          },     
  
      
    });
        }
      
    });
  
  
}
}


function thenextbutton(){
  let res = document.getElementById('reset')
  res.disabled=true;
  res.onclick=function(){todelete7throw();}
  const ne = document.getElementById("NEXT")
          ne.disabled=true;
          ne.style.cursor="not-allowed"
  f=document.getElementById("add-button")
    f.style.cursor="pointer";
    f.disabled = false;
    f.onclick=function(){newaddfunc()};
  
    const ttt = document.getElementById("trainToTest")
          ttt.innerHTML="ATTRIBUTES"
    const tohide = document.getElementById("target");
    tohide.remove()
    const tble = document.getElementById("dataPointsTable");
            var row = tble.rows;   
            var i = 5; 
            for (var j = 0; j < row.length; j++) {
                row[j].deleteCell(i);
            }
  

}

function thenextbutton2(){
  let res = document.getElementById('reset')
          res.onclick=function(){todelete7throw2();}
  f=document.getElementById("add-button")
    f.style.cursor="pointer";
    f.disabled = false;
    f.onclick=function(){newaddfunc2()};
 const ne = document.getElementById("NEXT")
       ne.disabled=true;
       ne.style.cursor="not-allowed"
       const ttt = document.getElementById("trainToTest")
          ttt.innerHTML="ATTRIBUTES"
 const tohide = document.getElementById("target");
 tohide.remove()
 const tble = document.getElementById("dataPointsTable");
         var row = tble.rows;   
         var i = 5; 
         for (var j = 0; j < row.length; j++) {
             row[j].deleteCell(i);
         }
        }

function newaddfunc(){
  
  var tableData = [];
  const tbody = document.getElementById("for7");
  const row11 = document.createElement("tr");
    let colora = (document.getElementById("colora"));
  let typea = (document.getElementById("typea"));
  let origina = (document.getElementById("origina"));
  colora.style.border=""
typea.style.border=""
origina.style.border=""
  if ( colora.value!='NULL'&&typea.value!='NULL'&& origina.value!='NULL'){
    document.getElementById('reset').disabled=false;
  row11.innerHTML = `
      <td><b>${index}</b></td>
      <td><b>${colora.value}</b></td>
      <td><b>${typea.value}</b></td>
      <td><b>${origina.value}</b></td>
      <td><b>?</b></td>`

      row11.style.backgroundColor="#ffc198"
      row11.style.color="black"
tbody.appendChild(row11)
colora.value='NULL';
  typea.value='NULL';
  origina.value='NULL';

  colora.style.border=""
typea.style.border=""
origina.style.border=""
f=document.getElementById("add-button")
    f.style.cursor="not-allowed";
    f.disabled = true;
const ne = document.getElementById("NEXT")
ne.disabled=false;
ne.style.cursor="pointer"
Swal.fire({
  icon: 'success',
  title:'Testing data received!!!',
  html: 'Click on the <b style="color:#FF6600">NEXT</b> button.',
  showCancelBotton:true,
  allowOutsideClick: false,
  target: '.container',
  customClass: {
    container: "position-absolute",
    popup: "swal-popup",
    title: "swal-title",
    content: "swal-content",
},    
});

ne.onclick=function () {
  location.href = "testcat.html";};;

  for (var i = 0; i < tbody.rows.length; i++) {
    var rowData = [];
    var cells = tbody.rows[i].cells;
  
    // Iterate through each cell of the row
    for (var j = 0; j < cells.length; j++) {
    
      var cellValue = cells[j].textContent;
  
      rowData[j] = cellValue;
    }
  
    tableData.push(rowData);
  }
  
  var serializedData1 = JSON.stringify(tableData); // Convert data to a string format
  
  localStorage.setItem('objectToPass', serializedData1); 



}
else
  {
    let countfof=0
    let a=""
    if(colora.value=='NULL'){
      a=a+"COLORS ,"
      countfof=countfof+1
      colora.style.border="2px solid red"
    }
    if(typea.value=='NULL'){
      a=a+"TYPE ,"
      countfof=countfof+1
      typea.style.border="2px solid red"
    }
    if(origina.value=='NULL'){
      a=a+"ORIGIN ,"
      countfof=countfof+1
      origina.style.border="2px solid red"
    }
    if(countfof==1){
      tempa = a.split(" ,");
      tempa.pop()
      a=''
    a=tempa[0] 
        a=a+` field cannot have NULL value.`
        g='MISSING VALUE'
    }
    if(countfof==2){
      tempa = a.split(" ,");
      tempa.pop()
      a='' 
      for(let i=0;i<tempa.length;i++){
        if (i!=tempa.length-1){
          a=a+tempa[i]+', '
        }
        if(i==tempa.length-1){
          a=a+'and '+tempa[i]
        }
      }
        a=a+` fields cannot have NULL values.`
        g='MISSING VALUES'
    }
    if(countfof==3){
      a=`Enter the required values in all fields.`
      g='MISSING VALUES'
    }

    Swal.fire({
      icon: 'error',
      title: g,
      text: a,
      showCancelBotton:true,
      allowOutsideClick: false,
      target: '.container',
      customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
    },   
    });

  }
}

function newaddfunc2(){
  var tableData = [];
  const tbody = document.getElementById("for7");
  const row11 = document.createElement("tr");
  let hft = parseFloat(document.getElementById("hft").value).toFixed(2);
  let wlbs = parseFloat(document.getElementById("wlbs").value).toFixed(2);
  let fsi = parseFloat(document.getElementById("fsi").value).toFixed(2);
  let hftp = document.getElementById("hft");
  let wlbsp =document.getElementById("wlbs");
  let fsip = document.getElementById("fsi");

  if ( isNaN(hft)==false && isNaN(wlbs)==false && isNaN(fsi)==false){
    if((hft>=4.5 && hft<=7.6)&&(wlbs>=90 && wlbs<=350)&&(fsi>=8.1 && fsi<=18)){
  row11.innerHTML = `
  <td><b>${index}</b></td>
  <td><b>${hft}</b></td>
  <td><b>${wlbs}</b></td>
  <td><b>${fsi}<b></td>
  <td><b>?</b></td>`

      row11.style.backgroundColor="#ffc198"
      row11.style.color="black"
tbody.appendChild(row11)
  hftp.value='';
  wlbsp.value='';
  fsip.value='';
  hftp.style.border="";
  wlbsp.style.border="";
  fsip.style.border="";
 
  Swal.fire({
    icon: 'success',
    title:'Testing data received!!!',
    html: 'Now, click on the <b style="color:#FF6600">NEXT</b> button.',
    showCancelBotton:true,
    allowOutsideClick: false,
    target: '.container',
    customClass: {
      container: "position-absolute",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
  },     
  });

f=document.getElementById("add-button")
    f.style.cursor="not-allowed";
    f.disabled = true;
const ne = document.getElementById("NEXT")
ne.disabled=false;
ne.style.cursor="pointer"
ne.onclick=function () {
  location.href = "styletest.html";};;


for (var i = 0; i < tbody.rows.length; i++) {
  var rowData = [];
  var cells = tbody.rows[i].cells;

  // Iterate through each cell of the row
  for (var j = 0; j < cells.length; j++) {
  
    var cellValue = cells[j].textContent;

    rowData[j] = cellValue;
  }

  tableData.push(rowData);
}

var serializedData1 = JSON.stringify(tableData); // Convert data to a string format

localStorage.setItem('objectToPass', serializedData1); 



}
else{
    let countfof=0
   let a=""
   if(!(hft>=4.5 && hft<=7.6)){
     a=a+"HEIGHT ,"
     hftp.style.border="2px solid red";
     countfof=countfof+1
   }
   else{
    hftp.style.border="";
  
   }
   if(!(wlbs>=90 && wlbs<=350)){
    wlbsp.style.border="2px solid red";
     a=a+"WEIGHT ,"
     countfof=countfof+1
   }
   else{
    wlbsp.style.border="";
  
   }
   if(!(fsi>=8.1 && fsi<=18)){
    fsip.style.border="2px solid red";
     a=a+"FOOT SIZE ,"
     countfof=countfof+1
   }
   else{
    fsip.style.border="";
   }
   
   if(countfof==1){
    tempa = a.split(" ,");
      tempa.pop()
      a=''
    a=tempa[0] 
       a="Enter Correct value for "+a+" field."
       g='INCORRECT VALUE'
   }
   if(countfof<3){
    tempa = a.split(" ,");
      tempa.pop()
      a='' 
      for(let i=0;i<tempa.length;i++){
        if (i!=tempa.length-1){
          a=a+tempa[i]+', '
        }
        if(i==tempa.length-1){
          a=a+'and '+tempa[i]
        }
      }
       a="Enter Correct values for "+a+" fields."
       g='INCORRECT VALUES'
   }
   if(countfof==3){
    g='INCORRECT VALUES'
    a='Enter correct values in all field.'
}
   Swal.fire({
     icon: 'error',
     title: g,
     text: a,
     allowOutsideClick: false,
     target: '.container',
     customClass: {
      container: "position-absolute",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
  },  
   });

}
  }
else
  {
    let countfof=0
    let a=""
    if((isNaN(hft)==true)){
      hftp.style.border="2px solid red";
      a=a+"HEIGHT ,"
      countfof=countfof+1
    }
    else{
      hftp.style.border="";
     }
    if(isNaN(wlbs)==true){
      wlbsp.style.border="2px solid red";
      a=a+"WEIGHT ,"
      countfof=countfof+1
    }
    else{
      wlbsp.style.border="";
     }
    if(isNaN(fsi)==true){
      fsip.style.border="2px solid red";
      a=a+"FOOT SIZE ,"
      countfof=countfof+1
    }
    else{
      fsip.style.border="";
    
     }
    if(countfof==1){
      g='MISSING VALUE'
      tempa = a.split(" ,");
      tempa.pop()
      a=''
    a=tempa[0] 
        a=a+` field cannot have NULL value.`
    }
    if(countfof==2){
      g='MISSING VALUES'
      tempa = a.split(" ,");
      tempa.pop()
      a='' 
      for(let i=0;i<tempa.length;i++){
        if (i!=tempa.length-1){
          a=a+tempa[i]+', '
        }
        if(i==tempa.length-1){
          a=a+'and '+tempa[i]
        }
      }
   
        a=a+` fields cannot have NULL values.`
    }
    if(countfof==3){
      g='MISSING VALUES'
      a=`Enter the required values.`
    }

    Swal.fire({
      icon: 'error',
      title: g,
      text: a,
      showCancelBotton:true,
      allowOutsideClick: false,
      target: '.container',
      customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
    },     
    });

  }
}

function todelete7throw(){
let colora = (document.getElementById("colora"));
  let typea = (document.getElementById("typea"));
  let origina = (document.getElementById("origina"));

  document.getElementById("reset").disabled=true;
  colora.style.border=""
typea.style.border=""
origina.style.border=""

  colora.value='NULL';
  typea.value='NULL';
  origina.value='NULL';

  const tbodyre = document.getElementById("for7");
  var rowre = tbodyre.getElementsByTagName('tr');
  console.log(tbodyre)
  if(rowre.length==7){
    tbodyre.deleteRow(6);
    console.log(tbodyre);
    f=document.getElementById("add-button");
    f.style.cursor="pointer";
    f.disabled = false;
    let d=document.getElementById("NEXT");
    d.disabled = true;

  }

}

function todelete7throw2(){
  let hftp = document.getElementById("hft");
  let wlbsp =document.getElementById("wlbs");
  let fsip = document.getElementById("fsi");
  hftp.style.border="";
  wlbsp.style.border="";
  fsip.style.border="";

  hftp.value=''
  wlbsp.value=''
  fsip.value=''
  
  const tbodyre = document.getElementById("for7");
  var rowre = tbodyre.getElementsByTagName('tr');
  console.log(tbodyre)
  if(rowre.length==7){
    tbodyre.deleteRow(6);
    console.log(tbodyre);
    f=document.getElementById("add-button");
    f.style.cursor="pointer";
    f.disabled = false;
    let d=document.getElementById("NEXT");
    d.disabled = true;

  }
  
}

function tocheckthenextfunc(){
  rl=document.getElementsByClassName("tocheck");
  if(rl.length==6){
    thenextbutton()
  }
  
  }
  function tocheckthenextfunc2(){
    rl=document.getElementsByClassName("tocheck");
    if(rl.length==6){
      thenextbutton2()
    }
    
    }

