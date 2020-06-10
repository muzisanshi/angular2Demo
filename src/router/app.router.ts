import {Routes} from '@angular/router'
import AComp from '../components/AComp'
import BComp from '../components/BComp'

const routes: Routes = [
  {
    path:'',
    component:AComp,
  },
  {
    path:'b',
    component:BComp,
  }
]

export default routes
