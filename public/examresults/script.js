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
function getResultOriginal(examIndexNo) {
  const Url = `https://result.doenets.lk/result/service/AlResult?index=${examIndexNo}&nic=`;
  fetch(Url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const {
        year,
        name,
        nic,
        districtRank,
        islandRank,
        zScore,
        stream,
        subjectResults,
        examIndexNo,
      } = data;
      const sub1 = subjectResults[0].subjectName;
      const sub1R = subjectResults[0].subjectResult;
      const sub2 = subjectResults[1].subjectName;
      const sub2R = subjectResults[1].subjectResult;
      const sub3 = subjectResults[2].subjectName;
      const sub3R = subjectResults[2].subjectResult;
      const generalTest = subjectResults[3].subjectResult;
      const english = subjectResults[4].subjectResult;

      data = {
        key: examIndexNo,
        year,
        name,
        nic,
        districtRank,
        islandRank,
        zScore,
        stream,
        sub1,
        sub1R,
        sub2,
        sub2R,
        sub3,
        sub3R,
        english,
        generalTest,
      };
      injectData(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getResult(examIndexNo) {
  const url = `https://doenets.deta.dev/result/${examIndexNo}`;
  fetch(url).then((response) => {
    if (response.status === 200) {
      response.json().then((data) => getResultOur(data));
    } else {
      //console.log(response.status + ' ' + response.statusText);
      getResultOriginal(examIndexNo);
    }
  });
}

function getResultOur(data) {
  console.log(data);
  injectData(data);
}

function injectData(data) {
  const {
    key,
    year,
    name,
    nic,
    districtRank,
    islandRank,
    zScore,
    stream,
    sub1,
    sub1R,
    sub2,
    sub2R,
    sub3,
    sub3R,
    english,
    generalTest,
  } = data;

  document.getElementById('index').innerHTML = key;
  document.getElementById('name').innerHTML = name.toUpperCase();
  document.getElementById('nic').innerHTML = nic;
  document.getElementById('year').innerHTML = year;
  document.getElementById('Drank').innerHTML = districtRank;
  document.getElementById('Irank').innerHTML = islandRank;
  document.getElementById('zscore').innerHTML = zScore;
  document.getElementById('stream').innerHTML = stream;
  document.getElementById('sub1').innerHTML = sub1;
  document.getElementById('res1').innerHTML = sub1R;
  document.getElementById('sub2').innerHTML = sub2;
  document.getElementById('res2').innerHTML = sub2R;
  document.getElementById('sub3').innerHTML = sub3;
  document.getElementById('res3').innerHTML = sub3R;
  document.getElementById('engres').innerHTML = english;
  document.getElementById('cgtest').innerHTML = generalTest;

  setTimeout(() => {
    resultSheet.style.display = 'block';
  }, 100);
}
