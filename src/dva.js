import { notification } from 'antd';

export function config() {
  return {
    onError(err) {
      //console.log(err.message);
      if(err.message=='用户未登录。'){
        notification.info({message:err.message,});
        setTimeout('window.location.href="/"', 2000 )
      }else {
        notification.info({message:err.message||"系统异常！！",});
      }
      debugger;
    },
  };
}
