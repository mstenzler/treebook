window.userFriendships = [];

$(document).ready(function() {
  var user_logged_in = ( $('li#logged-in-user').length > 0);
  if (user_logged_in) {
    $.ajax({
      url: Routes.user_friendships_path({format: 'json'}),
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        window.userFriendships = data;
      }
    });

    $('#add-friendship').click(function(event) {
      event.preventDefault();
      var addFriendshipBtn = $(this);
      $.ajax({
        url: Routes.user_friendships_path({user_friendship: { friend_id: addFriendshipBtn.data('friendId') }}),
        dataType: 'json',
        type: 'POST',
        success: function(e) {
          addFriendshipBtn.hide();
          $('#friend-status').html("<a href='#' class='btn btn-success'>Friendship Requested</a>");
        }
      });
    });
  }

});