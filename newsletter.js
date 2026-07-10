document.querySelector('#newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = document.querySelector('#submit-email');
  btn.style.cursor = 'progress';
  document.body.style.cursor = 'progress';
  btn.disabled = true;

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  fetch('https://script.google.com/macros/s/AKfycbxAX4NkIWPsNRJ3zlB_yixyqDiRaN98pyhaQGYVEFR1Hr3nGcHgc1cbisWsY_rVGzc3bg/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(() => {
    btn.style.cursor = 'pointer';
    document.body.style.cursor = 'default';
    btn.disabled = false;
    alert('Subscribed successfully!');
  })
  .catch(() => {
    btn.style.cursor = 'pointer';
    document.body.style.cursor = 'default';
    btn.disabled = false;
    alert('Something went wrong.');
  });
});