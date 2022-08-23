const form = document.getElementById('msform');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const serverUrl = 'https://doenets.deta.dev/add';
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  //console.log(data);
  fetch(serverUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      if (data.status === 'success') {
        alert('Data added successfully');
        window.location.href = '/examresults';
      } else {
        alert('Data not added');
      }
    });
});
