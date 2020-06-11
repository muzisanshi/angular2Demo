import {Injectable} from '@angular/core'
import Store from '../components/Store'

const state = {
  name:'lilei'
}

const actions = {
  change(context,payload){
    context.commit('CHANGE',payload)
  }
}

const mutations = {
  CHANGE(state,payload){
    if(!payload.name || !payload.data) return
    state[payload.name] = payload.data
  }
}

@Injectable(
  {providedIn: 'root'}
)
export default class AppStore extends Store{
  constructor(){
    super(state,actions,mutations)
  }
}
