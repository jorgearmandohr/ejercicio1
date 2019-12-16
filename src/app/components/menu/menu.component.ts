import { Component, OnInit } from '@angular/core';
import { Menu } from '../../class/menu';
import { MENUS } from '../../mocks/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menus = MENUS;
  selectedMenu: Menu;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(data: Menu){
    this.selectedMenu = data;
    this.router.navigate([this.selectedMenu.url]);
  }
}
