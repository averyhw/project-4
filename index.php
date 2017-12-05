<html>
<link rel="stylesheet" href="css/styles.css">
<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');
require_once('TwitterTextFormatter.php');


// Set here your twitter application tokens
$settings = array(
    'oauth_access_token' => "414253036-1hXRqePVdnMimRitNNLUgMaiBnW5puPxC35eMZw2",
    'oauth_access_token_secret' => "jMUgyCfwmN40WnWW2njJgLZmRResM0Aslt5YmOcZTOprs",
    'consumer_key' => "WsdVlzy7Mw3oNuMUgznQtUgF7",
    'consumer_secret' => "6jKbedxh6dC7iMq9PfJsE3p4wIjJ1e87ID20ffukNli2QEeLju"
);

// Set here the Twitter account from where getting latest tweets
$screen_name = 'billboard';

// Get timeline using TwitterAPIExchange
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = "?screen_name=billboard";
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$user_timeline = $twitter
  ->setGetfield($getfield)
  ->buildOauth($url, $requestMethod)
  ->performRequest();

$user_timeline = json_decode($user_timeline);







// Use the class TwitterTextFormatter
use Netgloo\TwitterTextFormatter;


foreach ($user_timeline as $user_tweet) {
  echo '<div class="tweet" id="tweets">';
  $profile_image_url = $user_tweet->user->profile_image_url;
  $screen_name = $user_tweet->user->screen_name;
  echo '<img class="prof-pic" src="' . $profile_image_url . '">';
  echo '<a href="https://twitter.com/billboard" target="_blank"><h5 class="screen-name barlow-semi-condensed">@' . $screen_name . '</h5></a>';
  echo '<p class="text-of-tweet barlow-semi-condensed">' . TwitterTextFormatter::format_text($user_tweet) . '</p>';


  if (isset($user_tweet->entities->media)) {
  $media_url = $user_tweet->entities->media[0]->media_url;
  echo "<img class='tweet-media' src='{$media_url}' width='100%' />";
}
  echo '</div>';
}

?>
</html>
