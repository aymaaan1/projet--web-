 let qty = 1;

    document.getElementById('qty-up').addEventListener('click', function () {
      qty = Math.min(20, qty + 1);
      document.getElementById('qty-display').textContent = qty;
    });

    document.getElementById('qty-down').addEventListener('click', function () {
      qty = Math.max(1, qty - 1);
      document.getElementById('qty-display').textContent = qty;
    });

    document.getElementById('submit-btn').addEventListener('click', function () {
      var fname = document.getElementById('fname').value.trim();
      var lname = document.getElementById('lname').value.trim();
      var email = document.getElementById('email').value.trim();
      var dest  = document.querySelector('input[name="destination"]:checked').value;

      var missing = [];
      if (!fname) missing.push('first name');
      if (!email) missing.push('email address');
      if (!dest)  missing.push('a destination');

      if (missing.length) {
        alert('Please fill in: ' + missing.join(', ') + '.');
        return;
      }

      document.getElementById('form-body').style.display = 'none';
      document.getElementById('success-msg').style.display = 'block';
      document.getElementById('success-message').innerHTML='<h3>Thank you for your reservation dear '+fname+" "+lname.toUpperCase()+"</h3></br><h4> Your disrination is "+dest+"</h4>";
    });
