$(function () {
  // 点击去注册的链接
  $('.link_reg').on('click', function () {
    $('.login-box').hide()
    $('.reg-box').show()
  })
  // 点击去登录的链接
  $('.link_login').on('click', function () {
    $('.login-box').show()
    $('.reg-box').hide()
  })



  var form = layui.form
  form.verify({
    password: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
    repassword: function (value) {
      // 内部的规则 实际上就是判断密码以及确认密码输入框内容是否一致
      var pwd = $(".reg-box [name=password]").val()
      if(pwd !== value) {
        return "两次密码不一致!"
      }
    }
  })
})