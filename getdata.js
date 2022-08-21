function getData() {
  //gettting the values
  console.log('start');
  var index = document.getElementById('index').value;
  var name = document.getElementById('name').value.toUpperCase();
  var nic = document.getElementById('nic').value;
  //var year = document.getElementById('year').value;
  //step02
  var Drank = document.getElementById('Drank').value;
  var Irank = document.getElementById('Irank').value;
  var zscore = document.getElementById('zscore').value;
  var stream = document.getElementById('stream').value.toUpperCase();
  //step03
  var sub1 = document.getElementById('sub1').value.toUpperCase();
  var res1 = document.getElementById('res1').value;
  var sub2 = document.getElementById('sub2').value.toUpperCase();
  var res2 = document.getElementById('res1').value;
  var sub3 = document.getElementById('sub3').value.toUpperCase();
  var res3 = document.getElementById('res3').value;
  //step04
  var engres = document.getElementById('engres').value;
  var cgtest = document.getElementById('cgtest').value;

  //saving the values in local storage
  localStorage.setItem('index', index);
  localStorage.setItem('name', name);
  localStorage.setItem('nic', nic);
  //localStorage.setItem('year', year);
  //save.step02
  localStorage.setItem('Drank', Drank);
  localStorage.setItem('Irank', Irank);
  localStorage.setItem('zscore', zscore);
  localStorage.setItem('stream', stream);
  //save.step03
  localStorage.setItem('sub1', sub1);
  localStorage.setItem('res1', res1);
  localStorage.setItem('sub2', sub2);
  localStorage.setItem('res2', res2);
  localStorage.setItem('sub3', sub3);
  localStorage.setItem('res3', res3);
  //save.step04
  localStorage.setItem('engres', engres);
  localStorage.setItem('cgtest', cgtest);

  window.location.href = './examresults.html';
}
