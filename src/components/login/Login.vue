<template>
<body>
<div>
  <div class="background">
    <img :src="imgSrc" width="100%" height="100%" alt="" />
  </div>
  <div class="front">
    <div class="login_logo">
        <h1>Login</h1>
  <form name="myForm" action="home.html" onsubmit="return validateForm_index()" method="post">
    <label for="name">用户名</label>
    <input type="text" id="name" placeholder="用户名" >
    <label for="password">密码</label>
    <input type="text" id="password"  placeholder="密码" >
    <label >身份</label>
    <select id="identity" name="identity" onchange="testClk_index()">
      <option value="user">用户</option>
      <option value="manager">管理员</option>
    </select>
    <div id="org"></div>
     <router-link to="/home" class="link" onclick="javascript:checkCookie(document.getElementById('name').value);return validateForm_index()">
     登录
     </router-link>
  </form>
</div>
  </div>
</div>
</body>
</template>
<script>
export default {
  data () {
    return {
      imgSrc: require('../.././assets/background_login.jpeg')
    }
  },
  methods: {
    testClk_index () {
      var obj = document.getElementById('org')
      var sel = document.getElementById('identity')
      if (sel.value === 'manager') {
        var input1 = document.createElement('input')
        input1.setAttribute('type', 'text')
        input1.setAttribute('name', 'countrywrite')
        obj.insertBefore(input1, null)
      }
    },
    validateForm_index () {
      var x = document.forms['myForm']['name'].value
      if (x == null || x === '') {
        alert('输入不得为空')
        return false
      }
    },
    setCookie (cname, cvalue, exdays) {
      var d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      var expires = 'expires=' + d.toGMTString()
      document.cookie = cname + '=' + cvalue + '; ' + expires
    },
    getCookie (cname) {
      var name = cname + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim()
        if (c.indexOf(name) === 0) { return c.substring(name.length, c.length) }
      }
      return ''
    },
    checkCookie (cname) {
      this.setCookie('username', cname, 30)
      var user = this.getCookie('username')
      if (user !== '') {
        alert('欢迎 ' + user + '登录')
      } else {
        user = prompt('请输入你的用户名:', '')
        if (user !== '' && user != null) {
          this.setCookie('username', user, 30)
        }
      }
    }

  }
}
</script>
<style scoped>
.background{
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}
.front{
    z-index:1;
    position: absolute;
}
body {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans',sans-serif;
    margin: 0;
    background: url('~@/assets/background_login.jpeg') no-repeat;
    background-size: 1920px auto;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  display: block;
}
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
.login_logo
{
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 150px 0 0 600px;
    width: 300px;
    height: 400px;
}
.login_logo h1 {
    color: #fff;
    text-shadow: 0 0 10px;
    letter-spacing: 1px;
    text-align: center;
}
h1 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.link
{
  display: block;
  color:white;
  background-color: #4CAF50;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
.link:hover
{
    background-color: #45a049;
}
a {
    text-decoration: none;
}
</style>
