//Validate
//下記読み込み必須
//https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js
//オプション：https://bonoponz.hatenablog.com/entry/2020/10/24/%E3%80%90jQuery/Laravel%E3%80%91jQuery_Validation_Plugin%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9
//======================
//----------------validate----------------
  $(document).ready(function() {
    $.validator.setDefaults({
        highlight: function() {
            $('#cboxLoadedContent').css('height', 'auto');
        },
        invalidHandler: function() {
            $('#cboxLoadedContent').css('height', 'auto');
        }
    });
    //対象フォームid
    $("#js-reserveForm").validate();
    $.extend($.validator.messages, {
        required: '※必須項目です。入力をお願いします。'
    });
});
$("#js-reserveForm").validate({
//-   rules: {
//-     mail_address: "required",
//-     mail_address_confirm: {
//-       equalTo: "#mail",
//-     },
//-     password: "required",
//-     password_confirm: {
//-       equalTo: "#pass",
//-     },
//-   },
//-   messages: {
//-     mail_address: "*メールアドレスと一致していません。",
//-     mail_address_confirm: "*メールアドレスと一致していません。",
//-     password_confirm: "*パスワードが一致していません。",
//-   },
//-   submitHandler: function () {
//-     $('input[type="submit"]').prop("disabled", true);
//-     form.submit();
//-   },
  errorPlacement: function(error, element){
    var errorKey = $(element).attr('id') + 'Error';
    $('#error_' + errorKey).remove();
    element.addClass('is-invalid');
    const errorP = $('<p>').text(error[0].innerText);
    const errorDiv = $('<div class="invalid-feedback" id="error_' + errorKey + '">').append(errorP);
    element.parent().append(errorDiv);
  },
  success: function(error, element) {
    var errorKey = $(element).attr('id') + 'Error';
    $('#error_' + errorKey).remove();
    $(error).remove();
    //- $(element).addClass('is-valid');
    $(element).removeClass('is-invalid');
    $(element).removeClass('error');
  },
});

$(function(){
    jQuery.validator.addMethod("js-valid-number", function(value, element) {
        return this.optional(element) || /^([0-9]+)$/.test(value);
        }, "※半角数字のみで記入ください。"
    );
    jQuery.validator.addMethod("js-valid-space", function(value, element) {
        return this.optional(element) || !/([　\r\n\t\f\s])/.test(value);
        }, "※スペースを削除してください。"
    );
    jQuery.validator.addMethod("js-valid-katakana",  function(value,  element) {
        return this.optional(element) || /^([ァ-ヶーｧ-ﾝﾞﾟ]+)$/.test(value);
        }, "※カタカナで入力してください。"
    );
    jQuery.validator.addMethod("js-valid-hiragana",  function(value,  element) {
        return this.optional(element) || /^([ぁ-んー]+)$/.test(value);
        }, "※ひらがなで入力してください。"
    );
    jQuery.validator.addMethod("js-valid-email",  function(value,  element) {
        return this.optional(element) || /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(value);
        }, "※メールアドレス形式で入力してください。"
    );
    jQuery.validator.addMethod("js-valid-url",  function(value,  element) {
        return this.optional(element) || /^https?(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/.test(value);
        }, "※URL形式で入力してください。"
    );
    jQuery.validator.addMethod("js-valid-minLength8", function(value, element) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= 8;
        }, "※8文字以上で入力してください。"
    );
    jQuery.validator.addMethod("js-valid-maxLength32", function(value, element) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= 32;
        }, "※32文字以内で入力してください。"
    );
    jQuery.validator.addMethod("js-valid-maxLength64", function(value, element) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= 64;
        }, "※64文字以内で入力してください。"
    );
    jQuery.validator.addMethod("js-valid-maxLength128", function(value, element) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= 128;
        }, "※128文字以内で入力してください。"
    );
    jQuery.validator.addMethod("js-valid-maxLength255", function(value, element) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= 255;
        }, "※255文字以内で入力してください。"
    );
});


$(function(){
    // 確認ボタンをクリックしたとき
    $("form").submit(function(){
        $("p.error").remove();

        if($("#validate_pref option:selected").val()==""){
            $("#validate_pref").parent().parent().append("<div class='input_box'><p class='error'>*必須項目です。選択してください。</p></div>");
        }

        if($("#selectedate-h option:selected").val()==""){
            $("#selectedate-h").parent().parent().append("<p class='error'>*必須項目です。選択してください。</p>");
        }

        if($("#selectedate-m option:selected").val()==""){
            $("#selectedate-m").parent().parent().append("<p class='error'>*必須項目です。選択してください。</p>");
        }

        if($(":radio[name='is_decided']:checked").size()==0){
            $(":radio[name='is_decided']").parent().append("<p class='error'>*必須項目です。選択してください。</p>");
        }
      
        if($(":radio[name='is_display']:checked").size()==0){
            $(":radio[name='is_display']").parent().append("<p class='error'>*必須項目です。選択してください。</p>");
        }

        if ($("p.error").size()>0) {
            return false;
        }
    });

    $(":radio[name='is_decided'], :radio[name='is_shuttle_bus'], :radio[name='is_parking'], :radio[name='is_charged_seat'], :radio[name='is_display']").change(function() {
        if ($(this).val() != "") {
            $(this).parent().find("p.error").remove();
        }
    });
    $("#validate_pref, #validate_season").change(function() {
        if ($(this).val() != "") {
            $(this).parent().next("div.input_box").remove();
        }
    });
    $("#selectedate-h, #selectedate-m").change(function() {
        if ($(this).val() != "") {
            $(this).parent().parent().find("p.error").remove();
        }
    });
});