import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import io from "socket.io-client";
export enum KEY_CODE {
  RIGHT = 39,
  LEFT = 37,
  UP = 38,
  DOWN = 40,
  W = 87,
  A = 65,
  S = 83,
  D = 68
}//mapeia os arrows
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  /*@ViewChild("game")
  private gameCanvas: ElementRef;

  private context: any;*/

  private socket: any;
  px1;
  py1;
  px2;
  py2;
  px3; 
  py3;
  pontos_player1 = 0;
  pontos_player2 = 0;
  posPa;
  posPb;
  id;
  tabela = [];
  tabelaLimpa = [];
  abaJ = false;
  abaW = false;

  public ngOnInit(){
    this.socket = io("http://localhost:3000");
    this.pontos_player1 = 0;
    this.pontos_player2 = 0;
  }//server
  public ngAfterViewInit(){
    this.id = 1;
    this.socket.on("table",position =>{
      this.tabela = position;
    })
    this.socket.on("pontuou1",valor=>
    {
      this.pontos_player1 = this.pontos_player1 + valor;
    })
    this.socket.on("pontuou2",valor=>
    {
      this.pontos_player2 = this.pontos_player2 + valor;
    })
    this.socket.on("posPremioa", a =>{
      this.posPa = a;
    })
    this.socket.on("posPremiob", b =>{
      this.posPb = b;
    })
    
  }
 
  fase1()
  {
    this.abaJ = true;
    this.abaW = false;
  }
  win()
  {
    this.abaJ = false;
    this.abaW = true;
  }
  test_win()
  {
    if(this.pontos_player1 === 5)
    {
      this.abaJ = false;
      this.abaW = true;
      this.pontos_player1 = 0;
    }
    if(this.pontos_player2 === 5)
    {
      this.abaJ = false;
      this.abaW = true;
      this.pontos_player2 = 0;
    }
  }
 
 @HostListener('window:keydown', ['$event'])
  keyEvent1(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT)
    {
      this.socket.emit("move1", "right");
     /* this.socket.on("table",position =>{
        this.tabela = position;})*/
    }
    if (event.keyCode === KEY_CODE.UP)
    {
      this.socket.emit("move1", "up");
      this.test_win();
    }
    if (event.keyCode === KEY_CODE.LEFT)
    {
      this.socket.emit("move1", "left");
      this.test_win();
    }
    if (event.keyCode === KEY_CODE.DOWN)
    {
      this.socket.emit("move1", "down");
      this.test_win();
    }
    if (event.keyCode === KEY_CODE.D)
    {
      this.socket.emit("move2", "right2");
      this.test_win();
    }
    if (event.keyCode === KEY_CODE.W)
    {
      this.socket.emit("move2", "up2");
      this.test_win();
    }
    if (event.keyCode === KEY_CODE.A)
    {
      this.socket.emit("move2", "left2");
      this.test_win();
    }
    if (event.keyCode === KEY_CODE.S)
    {
      this.socket.emit("move2", "down2");
      this.test_win();
    }
  }

  
  /*public ngAfterViewInit(){
     
        
      });*/
      
  }//canvas
  




