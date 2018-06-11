import React,{Component} from 'react';
import router from 'umi/router';
import Styles from './404.less';

class NoFindPage extends Component{

  render() {
    return (
      <div className={Styles.errorPage} style={{height:'100%'}}>
        <div className={Styles.errorPageContainer}>
          <div className={Styles.errorPageMain}>
            <h3>
              <strong>404</strong>无法打开页面
            </h3>
            <div className={Styles.errorPageActions}>
              <div>
                <h4>可能原因：</h4>
                <ol>
                  <li>网络信号差</li>
                  <li>找不到请求的页面</li>
                  <li>输入的网址不正确</li>
                </ol>
              </div>
              <div>
                <h4>可以尝试：</h4>
                <a onClick={() => { router.replace('/'); }}>返回首页</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default  NoFindPage;
