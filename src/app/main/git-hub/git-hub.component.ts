import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { User } from '../../models/user.model';
import { FormControl } from '@angular/forms';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent {
  // Контрол для поиска пользователей
  findControl = new FormControl();
  // Ошибка поиска
  error: boolean = false;
  // Найденный пользователь
  user: User = null;
  constructor(private httpService: HttpService) {}

  // Хук инициализации компонента
  ngOnInit() {
    this.findControl.valueChanges
      .pipe(
        // Фильтруем если введено меньше двух символов
        filter(value => value.length > 2),
        // Ставим задержку одну секунду
        debounceTime(1000),
        // Запрашиваем данные пользователя
        switchMap(value =>
          this.httpService.getUser(value).pipe(
            // Обработка ошибок
            catchError(err => {
              this.user = null;
              this.error = true;
              return EMPTY;
            })
          )
        )
      )
      // Получение данных
      .subscribe(user => {
        this.user = user;
        console.log(this.user)
        this.error = false;
      });
  }


}
