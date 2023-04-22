

function greet(event) {
    event.preventDefault();
    var name = $('#name').val();
    var typeofRelation = $('#relation').val();
    var dedicace = $('#dedicace').val().split('\n');
    var langue = $('#langue').val();
    
    eidFitr(name, typeofRelation, dedicace, langue);
  }

function eidFitr(name, typeofRelation, dedicace, langue) {
    switch (typeofRelation) {
      case "sahbi":
        console.log(`Hey, ça va khoya ${name} ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah `);
        break;
      case "sahbti":
        console.log(`salaam zin, ça va ? 3washrek mebrouka khti ${name}, ydkhol elik b seha w selama w tolet l3omer, t3yedi w t3awdi inchallah.`);
        break;
      case "bestfriend-sahbi":
        console.log(`Hey, ça va khoya ${name} ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah, selem lia 3la ${dedicace.join(", ")}. `)
        break;
      case "bestfriend-sahbti":
        console.log(`salaam zin, ça va ? 3washrek mebrouka khti ${name}, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah,, selem lia 3la ${dedicace.join(", ")}. `)
        break;
      case "3amti":
        if (langue === "ar") {
          console.log(`سلام عمتي ${name}، لباس عليك بخير ؟ مبروك عواشرك يدخل عليكم بالصحة و السلامة و طول العمر إنشاء الله. سلمي ليا على  ${dedicace.join(", ")}`);
        } else if (langue === "fr") {
          console.log(`salam tata ${name}, kif dayra labes 3lik ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yedi w t3awdi inchallah, selemi lia 3la ${dedicace.join(", ")}. `);
        }
        break;
      case "3ami":
        if (langue === "ar") {
          console.log(`سلام عمي ${name}، لباس عليك بخير ؟ مبروك عواشرك يدخل عليكم بالصحة و السلامة و طول العمر إنشاء الله. سلم ليا على  ${dedicace.join(", ")}`);
        } else if (langue === "fr") {
          console.log(`salam 3emi ${name}, kif dayr labes 3lik ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah, selem lia 3la ${dedicace.join(", ")}. `);
        }
        break;
      case "khalti":
        if (langue === "ar"){
            console.log(`سلام خالتي ${name}، لباس عليك بخير ؟ مبروك عواشرك يدخل عليكم بالصحة و السلامة و طول العمر إنشاء الله. سلمي ليا على  ${dedicace.join(", ")}`)
        }
        else if (langue === "fr") {
            console.log(`salam tata ${name}, kif dayra labes 3lik ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yedi w t3awdi inchallah, selemi lia 3la ${dedicace.join(", ")}. `)
        }
        break;
      case "khali":
        if (langue === "ar"){
            console.log(`سلام خالي ${name}، لباس عليك بخير ؟ مبروك عواشرك يدخل عليكم بالصحة و السلامة و طول العمر إنشاء الله. سلم ليا على  ${dedicace.join(", ")}`)
        }
        else if (langue === "fr") {
            console.log(`salam khali ${name}, kif dayr labes 3lik ? 3washrek mebrouka, ydkhol elik b seha w selama w tolet l3omer, t3yed w t3awd inchallah, selem lia 3la ${dedicace.join(", ")}. `)
        }
        break;
    }
}

          
$(document).ready(function() {
    $('#greet-form').submit(function(event) {
      greet(event);
    });
  });


  