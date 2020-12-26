$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageArea" data-message-id=${message.id}>
          <div class="Message__head">
            <div class="Message__name">
              ${message.user_name}
            </div>
            <div class="Message__data">
              ${message.created_at}
            </div>
          </div>
          <div class="Message__text">
            <p class="Form__text">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageArea" data-message-id=${message.id}>
        <div class="Message__head">
          <div class="Message__name">
            ${message.user_name}
          </div>
          <div class="Message__data">
            ${message.created_at}
          </div>
        </div>
        <div class="Message__text">
          <p class="Form__text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message').append(html);
      $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});
      $('form')[0].reset();
      $('.Submit__btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
});