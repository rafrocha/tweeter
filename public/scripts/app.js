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
      $('#tweet-container').append($tweet);
    })
  }

  function loadTweets(url){
    console.log('Button clicked, performing ajax call...');
    $.ajax({
          url: url,
          method: "GET",
          success: function(response){
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

  $("form").on('submit', function(event) {
    event.preventDefault();
    if( $('textarea').val('') || $('textarea').val().length > 140){
      alert('Invalid tweet!');
      return;
    }
    $.ajax({
      method: "POST",
      url: '/tweets',
      data: $('form').serialize()
    })
    $('textarea').val('');
  });



});