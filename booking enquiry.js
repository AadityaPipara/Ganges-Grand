document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // stop page redirect

        const btn = document.querySelector('.submit');
        btn.textContent = 'Submitting...';  // ✅ changes on click
        btn.disabled = true;

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => data[key] = value);

        fetch('https://script.google.com/macros/s/AKfycbwXG0bJpRJsWZKvSIXwVLiuXzhAF_oftvQEe5tzIhuyZl6L3F5Hza5zx8oRQx6dzhaU/exec', {
            method: 'POST',
            body: formData
        })
            .then(() => {
                btn.textContent = 'Submit Your Query';  // ✅ reverts back
                btn.disabled = false;
                alert('Query submitted successfully!');
            })
            .catch(() => {
                btn.textContent = 'Submit Your Query';  // ✅ reverts on error too
                btn.disabled = false;
                alert('Something went wrong.');
            });
    });