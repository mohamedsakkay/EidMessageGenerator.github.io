function displayMessage(message) {
    $('#output').text(message);
  }
  
  function eidFitr(name, typeofRelation, dedicace, langue) {
    var message = "";
    switch (typeofRelation) {
      case "sahbi":
        message = `Hey, ça va khoya ${name} ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah `;
        break;
      case "sahbti":
        message = `salaam zin, ça va ? 3washrek mebrouka khti ${name}, ydkhol elik b seha w selama w tolet l3omer, t3yedi w t3awdi inchallah.`;
        break;
      case "bestfriend-sahbi":
        message = `Hey, ça va khoya ${name} ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah, selem lia 3la ${dedicace.join(", ")}. `;
        break;
      case "bestfriend-sahbti":
        message = `salaam zin, ça va ? 3washrek mebrouka khti ${name}, ydkhol elik b seha w selama w tolet l3omer, t3yedi w t3awdi inchallah,, selemi lia 3la ${dedicace.join(", ")}. `;
        break;
      case "3amti":
        if (langue === "ar") {
          message = `سلام عمتي ${name}، لباس عليك بخير ؟ مبروك عواشرك يدخل عليكم بالصحة و السلامة و طول العمر إنشاء الله. سلمي ليا على  ${dedicace.join(", ")}`;
        } else if (langue === "fr") {
          message = `salam tata ${name}, kif dayra labes 3lik ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yedi w t3awdi inchallah, selemi lia 3la ${dedicace.join(", ")}. `;
        }
        break;
    case "3ami":
        if (langue === "ar") {
            message =`سلام عمي ${name}، لباس عليك بخير ؟ مبروك عواشرك يدخل عليكم بالصحة و السلامة و طول العمر إنشاء الله. سلم ليا على  ${dedicace.join(", ")}.`;
        }
        else if (langue === "fr") {
            message =`salam 3emi ${name}, kif dayr labes 3lik ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah, selem lia 3la ${dedicace.join(", ")}.`;
            }
        break;

    case "khalti":
        if (langue === "ar") {
            message =(`سلام خالتي ${name}، لباس عليك بخير ؟ مبروك عواشرك يدخل عليكم بالصحة و السلامة و طول العمر إنشاء الله. سلمي ليا على  ${dedicace.join(", ")}`);
        } else if (langue === "fr") {
            message =`salam tata ${name}, kif dayra labes 3lik ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yedi w t3awdi inchallah, selemi lia 3la ${dedicace.join(", ")}. `;
        }
        break;
    case "khali":
        if (langue === "ar") {
            message =`سلام خالي ${name}، لباس عليك بخير ؟ مبروك عواشرك يدخل عليكم بالصحة و السلامة و طول العمر إنشاء الله. سلم ل   ${dedicace.join(", ")}`;
        }
        else if (langue === "fr") {
            message =`salam khali ${name}, kif dayra labes 3lik ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah, selemi lia 3la ${dedicace.join(", ")}.`;
            }
        break;
    }
    displayMessage(message);
  }
  
  $(document).ready(function() {
    $('#greet-form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();
      var typeofRelation = $('#relation').val();
      var dedicace = $('#dedicace').val().split('\n');
      var langue = $('#langue').val();
      var output = eidFitr(name, typeofRelation, dedicace, langue); // store the message in a variable
      $('#greet-form').fadeOut(200, function() {
        $('#output')
          .html(output)
          .addClass('card')
          .fadeIn(500, function() {
            $(this).show(); // show the element after the fadeIn animation is complete
          });
      });
    });
  });
  
  
  
  
  