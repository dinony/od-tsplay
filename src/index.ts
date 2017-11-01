import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'

Observable.timer(0, 512).map(i => Math.pow(2, i))
  .subscribe(i => {console.log(i)})
