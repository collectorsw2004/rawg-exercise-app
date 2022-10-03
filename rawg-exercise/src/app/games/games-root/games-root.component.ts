import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../../models/game";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-games-root',
  templateUrl: './games-root.component.html',
  styleUrls: ['./games-root.component.scss']
})
export class GamesRootComponent implements OnInit {

  games$: Observable<Game[]>

  constructor(private gameService: GameService) {
  }


  search(query: string): void {
    if (!query) return;
    this.games$ = this.gameService.findAllByTitle(query)
  }

  ngOnInit(): void {
  }


}
