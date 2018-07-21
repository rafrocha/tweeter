/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//document.ready jquery shorthand



$(document).ready(function() {


  function renderTweets(tweets) {
    tweets.forEach(tweet => {
      let $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
    })
  }

  function loadTweets(url) {
    console.log('Button clicked, performing ajax call...');
    $.ajax({
      url: url,
      method: "GET",
      success: function(response) {
        renderTweets(response);
      }
    });
  }

  loadTweets('/tweets');


  function createTweetElement(tweet) {
    let $article = $("<article>", { "class": "tweet" });
    let header = $(`<header><h3><img src=${tweet.user.avatars.small}><span class='tweetName'>${tweet.user.name}</span><span class='at'>${tweet.user.handle}</span></h3>`);
    let sectionParagraph = $(`<section><p>${tweet.content.text}</p></section>`);
    let footer = $(`<footer>
      <span class="day">${moment(tweet.created_at).fromNow()}</span>
      <span class="icons">
        <form class="del"><button id="${tweet.id}" type="submit"><i class="far fa-trash-alt"></i></button></form>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
    </footer>`);
    $article.append(header);
    $article.append(sectionParagraph);
    $article.append(footer);
    return $article;
  }

  $("form.oink").on('submit', function(event) {
    event.preventDefault();
    let errorContainer = $(this).siblings('.error-container');
    if ($('textarea').val() === '') {
      errorContainer.text('Empty tweet!');
      if (errorContainer.is(":visible")) {
        return;
      }
      errorContainer.show("fast");
      return;
    } else if ($('textarea').val().length > 140) {
      errorContainer.text('Too many characters! No books please! :)');
      if (errorContainer.is(":visible")) {
        return;
      }
      errorContainer.slideToggle("fast");
      return;
    } else {
      $.ajax({
        method: "POST",
        url: '/tweets',
        data: $('form').serialize(),
        success: function(tweets) {
          // renderTweets([tweets]);
          $("#tweet-container").empty();
          loadTweets('/tweets');
        }
      })
      errorContainer.slideToggle("fast");
      $('textarea').val('');
      $('.counter').text('140');
      // loadTweets('/tweets');
    }
  });

  $('#tweet-container').on('submit', function(event) {
    event.preventDefault();
    let form = event.target;
    let id = $(form).children().attr('id');
    $.ajax({
      method: "DELETE",
      url: '/tweets/' + id,
      success: function(tweets) {
        // renderTweets([tweets]);
        $("#tweet-container").empty();
        loadTweets('/tweets');
      }
    })
  });

  $( ".logo" ).click(function() {
    location.reload(true);
  });

  $( "nav span.header" ).click(function() {
    location.reload(true);
  });

  $("button.btn").click(function() {
    $(this).parent().siblings().children('.new-tweet').slideToggle("fast", function() {
      $(this).children('form').children('textarea').focus();
    });

  });

  $('input,textarea').focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'))
      .attr('placeholder', '');
  }).blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });


});