document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".main").style.display = "block";
});
document.querySelector(".pt2").addEventListener("click", function () {
  document.querySelector(".main").style.display = "none";
});
document.querySelector(".pt3").addEventListener("click", function () {
      document.querySelector(".main").style.display = "none";
    });



    $('#datepicker').datepicker({
    multidate: true,
    todayHighlight: true,
    format: 'dd/mm/yyyy',clearBtn: true
  });
  $('#datepicker').on('changeDate', function(evt) {
    const d = new Date(evt.date);
    const date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    document.querySelector(".pt3").addEventListener("click", function () {
      const a=document.querySelector(".i").value;
      const b=document.querySelector(".i1").value;
      document.querySelector(".j").innerHTML+= `<div class="pad">${date}</div>`
      document.querySelector(".k").innerHTML+=`<div class="pad">${a}-${b}</div>`
    });

 
 });
  
