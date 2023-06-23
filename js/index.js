var labels = document.querySelectorAll('.btn-group label');
  
labels.forEach(function(label) {
    label.addEventListener('click', function() {
        labels.forEach(function(label) {
            label.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.querySelectorAll('input[name="options"]').forEach(function (el) {
  el.addEventListener('change', function () {
      if (this.id === 'option3') {
          document.querySelector('#business-info').style.display = 'none';
          document.querySelector('#personal-info').style.display = 'block';
      } else {
          document.querySelector('#business-info').style.display = 'block';
          document.querySelector('#personal-info').style.display = 'none';
      }
  });
});

const myButton10 = document.querySelector('#my-button10');

myButton10.addEventListener('click', function(event) {
    event.preventDefault();
});

function myFunction10() {
    var x = document.getElementById("myInput10");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }