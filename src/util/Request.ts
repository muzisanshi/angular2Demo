import {Injectable} from '@angular/core'
import axios from 'axios'

interface RequestInter{
  req(config: any): Promise<any>
}

@Injectable({
  providedIn:'root'
})
export default class Request implements RequestInter{

  private STATUS = {
    '404':'找不到资源',
    '500':'服务器错误',
    '-100':'网络开小差了',
    '-99':'请求数据异常'
  }

  private DEFAULT_CONF = {
  	method:'post',
  	url:'',
  	timeout:30000,
  	headers:{

  	},
  	data:{// post

  	},
  	params:{// get的query参数

  	},
  	responseType:'json',
  	withCredentials:true,
  	isflower:true,
  }

  req(config: any): Promise<any>{

    return new Promise((resolve,reject) => {
      resolve()
    })

  }

}
