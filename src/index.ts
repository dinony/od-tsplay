import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {BrowserModule} from '@angular/platform-browser'
import {NgModule, Component} from '@angular/core'

@Component({
  'selector': 'od-app',
  'template': ':)'
})
export class AppShell {}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppShell],
  bootstrap:[AppShell]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
