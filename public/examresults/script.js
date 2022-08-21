const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const resultSheet = document.getElementById('result-sheet');
const errorBox = document.getElementById('error-box');

//click event for submit button
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const examIndexNo = document.getElementById('examIndexNo').value;
  errorBox.innerHTML = '';
  console.log(examIndexNo);
  examIndexNo.length < 5
    ? (errorBox.innerHTML = 'Please enter a valid exam index number')
    : getResult(examIndexNo);
});

//click event for reset button
resetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  resultSheet.style.display = 'none';
  document.getElementById('examIndexNo').value = '';
  errorBox.innerHTML = '';
});

//function to get result
function getResult(examIndexNo) {
  const Url = `https://result.doenets.lk/result/service/AlResult?index=${examIndexNo}&nic=`;
  fetch(Url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { name, nic, districtRank, islandRank, zScore, stream } = data;
      console.log(
        'name : ' +
          name +
          ' nic : ' +
          nic +
          ' districtRank : ' +
          districtRank +
          ' islandRank : ' +
          islandRank +
          ' zScore : ' +
          zScore +
          ' stream : ' +
          stream
      );
      document.getElementById('index').innerHTML = examIndexNo;
      document.getElementById('name').innerHTML = name;
      document.getElementById('nic').innerHTML = nic;
      document.getElementById('Drank').innerHTML = districtRank;
      document.getElementById('Irank').innerHTML = islandRank;
      document.getElementById('zscore').innerHTML = zScore;
      document.getElementById('stream').innerHTML = stream;
    })
    .catch((err) => {
      console.log(err);
    });
  setTimeout(() => {
    resultSheet.style.display = 'block';
  }, 500);
}
