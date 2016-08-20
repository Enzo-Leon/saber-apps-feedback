var textCounter = document.getElementById('text-counter'),
    $UpVote = $('.up'),
    $DownVote = $('.down');
    
//  Submitted Feedback fields
var FRB = document.getElementById('feedback-replies'); // FeedbackReplyBase 

$("<div class='reply'></div>")



$UpVote.on('click',function ()
{
    var COUNTER = $(this).parent().children('.count').html();
    COUNTER = parseInt(COUNTER);
    COUNTER += 1;
    $(this).parent().children('.count').html(COUNTER);
});

$DownVote.on('click',function ()
{
    var COUNTER = $(this).parent().children('.count').html();
    COUNTER = parseInt(COUNTER);
    COUNTER -= 1;
    $(this).parent().children('.count').html(COUNTER);
});


function remaining(text)
{
    if (!(text.value.length <= 500))
    {
        console.log('error');
    }
    else
    {
        var textCount = (500 - text.value.length);
        textCounter.innerHTML = textCount;
    }
}

$("form").on( "submit", function(event)
{
  event.preventDefault();
  var FBD = $(this).serializeArray();
  var FBF = FBD[0].value; // Feedback data
  var FBU = FBD[1].value; // Username
  console.log(FBF, FBU);
  $('textarea').val('');
  $('input').val('');
});