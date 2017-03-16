require('normalize.css/normalize.css');
require('styles/App.scss');
import React from 'react';
import ReactDOM from 'react-dom';
//获取图片相关的数据
let info = require('json!../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
  var TextGet = React.createClass({
        handle: function(){
          var name = this.refs.myName.value;
          var password = this.refs.myPwd.value;
          ((imageDatasArr) => {
            for (var i = 0, j = imageDatasArr.length; i < j; i++) {
              
              let singleInfo = imageDatasArr[i];
              if(singleInfo.userName == name&&singleInfo.password == password) {
                alert("登陆成功!");
                return true;
              }
            }

            alert("登陆失败！");
            return false;
              
          })(info);
        },
        render: function(){
          return (
             <div className="land">
              用户名：<input type="text" ref="myName"/>
              <br/>
              密码：<input className="pwd" type="password" ref="myPwd"/>
              <br/>
              <input type="button" className="sub" value="提交" onClick={this.handle}/>
            </div>
          );
        }
     });

TextGet.defaultProps = {};

export default TextGet;