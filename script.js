// main page
$(document).ready(function() {
  $('nav ul li a').click(function() {
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('button:first-of-type').click(function() {
    alert("Please login to access the Fitness Tracker.");
  });

  $('button:last-of-type').click(function() {
    alert("Sign-up to create an account and start tracking your fitness.");
  });
});

//time and date realtime
$(document).ready(function() {
    function updateTime() {
      let currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();
      let period = hours >= 12 ? 'PM' : 'AM';
      let date = currentTime.toDateString();
  
      hours = hours % 12 || 12;
  
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
  
      $('#hours').animate({ opacity: 0 }, 400, function() {
        $(this).text(hours).animate({ opacity: 1 }, 400);
      });
  
      $('#minutes').animate({ opacity: 0 }, 400, function() {
        $(this).text(minutes).animate({ opacity: 1 }, 400);
      });
  
      $('#seconds').animate({ opacity: 0 }, 400, function() {
        $(this).text(seconds).animate({ opacity: 1 }, 400);
      });
  
      $('#period').text(period);
      $('#date').text(date);
    }

    setInterval(updateTime, 1000);
  });

  //show/hide
  $(document).ready(function() {
    var paragraph = $('#myParagraph');
    var button = $('#toggleButton');
    paragraph.hide();
    button.click(function() {
      if (paragraph.is(':hidden')) {
        paragraph.fadeIn(500);
        button.text('Hide');
      } else {
        paragraph.fadeOut(500, function() {
          button.text('Show');
        });
      }
    });
  });

  //Login
  function showAlertLogin() {
    alert('Login button clicked!');
  }

  //Reset
  function showAlertReset() {
    alert('You can now login!');
  }

  //SignUp
  function showAlertSignUp() {
    alert('You can start login now');
  }

  //contact-form
  $(document).ready(function() {
    $('#contactTable').css({
      width: '100%',
      'border-collapse': 'collapse',
      'margin-top': '20px',
    });

    $('#contactTable th, #contactTable td').css({
      padding: '8px',
      'text-align': 'left',
      'border-bottom': '1px solid #ddd',
    });

    $('#contactTable th').css({
      'background-color': 'black',
      'font-weight': 'bold',
    });

    $('#contactForm').submit(function(e) {
      e.preventDefault();

      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();

      var tableRow = $('<tr>');
      tableRow.append($('<td>').text(name));
      tableRow.append($('<td>').text(email));
      tableRow.append($('<td>').text(message));

      $('#contactTable tbody').append(tableRow);

    });
  });

  function showAlertSubmit(){
    alert('Thanks for Submitting');
  }


  // show hide password in login
  $(document).ready(function() {
    const password = $('#password');
    $('#toggle-password').click(function() {
      if (password.prop('type') == 'password') {
        $(this).addClass('fa-eye-slash');
        password.attr('type', 'text');
      } else {
        $(this).removeClass('fa-eye-slash');
        password.attr('type', 'password');
      }
    });
  });

  // todo list
  $(document).ready(function() {
    $("#add-todo").click(function() {
      var newTodo = $("#new-todo").val();
      if (newTodo !== "") {
        var listItem = $("<li>").text(newTodo);
        var deleteButton = $("<button>").text("Delete").addClass("delete");
        listItem.append(deleteButton);
        $("#todo-items").append(listItem);
        $("#new-todo").val("");
      }
    });
  
    $(document).on("click", ".delete", function() {
      $(this).parent().remove();
    });
  });



  
