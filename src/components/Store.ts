interface StoreInter{
  actions: any
  mutations: any

  getState(): any
  dispatch(actionName: string,payload?: any)
  commit(mutationName: string,payload?: any)

}

export default class Store implements StoreInter{

  private static state: any = {}
  actions: any = {}
  mutations: any = {}

  constructor(state = {},actions = {},mutations = {}){
    Store.state = state
    this.actions = actions
    this.mutations = mutations
  }

  getState(): any{
    return Store.state
  }

  dispatch(actionName: string,payload?: any){
    for(let key in this.actions){
      if(actionName === key)
        this.actions[key](this,payload)
    }
  }
  
  commit(mutationName: string,payload?: any){
    for(let key in this.mutations){
      if(mutationName === key)
        this.mutations[key](Store.state,payload)
    }
  }

}
