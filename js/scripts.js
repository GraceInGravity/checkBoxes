$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    var userResponses = [];
    var nerdScore = 0;
    var antiNerdScore = 0;
    var total = 0;
    $("#work-responses").show();
    $("input:checkbox[name=nerd-points]:checked").each(function(){
      var workTransportationMode = $(this).val();
      nerdScore++;

      userResponses.push(workTransportationMode);
      var capitalWorkTransportationMode = workTransportationMode.toUpperCase()
      $('#work-responses').append(workTransportationMode + "<br>");
      total = total + 1;
    });

    $("#fun-responses").show();
    $("input:checkbox[name=anti-nerd-points]:checked").each(function(){
      var funTransportationMode = $(this).val();
      total = total - 1;

      $('#fun-responses').append(funTransportationMode + "<br>");

    });

    $('#transportation_survey').hide();
    // function score(score) {
    //   total = total - 1;
    //
    //
    // }

    if (nerdScore<0){
      var normal = "You are a normal person! Too bad you will be poor!";
      $("#nerdScore").text(normal);
    }
    if (nerdScore > 5){
      var nerd = "You are a complete Nerd. And never getting laid, however you have the best tech";
      $("#nerdScore").text(nerd);
    }
    else {
      var maybeNerd = "You are a somewhat functioning Nerd.";
      $("#nerdScore").text(maybeNerd);
    }



  });
});
