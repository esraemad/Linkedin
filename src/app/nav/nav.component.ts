import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../registeration/signup/signup.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  // {text: 'Two', cols:8 , rows: 2, color: 'transparent'},
  // {text: '', cols: 2, rows: 1, color: 'transparent'},
  // constructor(private breakpointObserver: BreakpointObserver) { }


  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) { }
  isAuthenticated = false;
  private userSub: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  tiles: Tile[] = [
    { text: '', cols: 2, rows: 1, color: 'transparent' },
  ];
  tiles2: Tile[] = [
    { text: '', cols: 2, rows: 1, color: 'transparent' },
  ];
  tiles3: Tile[] = [
    { text: '', cols: 8, rows: 1, color: 'transparent' },
  ];

  value = 'Search';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onLogout() {
    this.authService.logout();
  }

}
