import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  items: MenuItem[] = [];

  testData: MenuItem[] = [
    {
      label: 'Главная',
    },
    {
      label: 'О Фонде',
      items: [
        {label: 'Информация'},
      ]
    },
    {
      label: 'Продуктовая линейка',
      items: [
        {label: 'Информация'},
      ]
    },
    {
      label: 'Предпринимателям',
      items: [{
        label: 'Перечень документов',
        items: [
          {label: 'Перечень ИП'},
          {label: 'Перечень ЮЛ'},
        ]
      },
        {label: 'Калькулятор'},
        {label: 'Продуктовая линейка'}
      ]
    },
    {
      label: 'Записаться',
    },
    {
      label: 'Новости',
    },
    {
      label: 'Реквизиты',
    },
    {
      label: 'Контакты',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.items = this.testData;
  }

}
