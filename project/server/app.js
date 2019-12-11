const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

var position = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,1], [1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0 ,1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6 ,1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1]];

var pos1x = 1;
var pos1y = 1;
var pos2x = 7;
var pos2y = 10;
var move = 1;

Socketio.on("connection", socket =>
{
    socket.emit("table", position);

    socket.on("move1", data =>{
        switch(data)
        {
            case "left":
                if(position [pos1x][pos1y - move] != 1) {
                if(position [pos1x][pos1y - move] != 2)
                {
                    if(position [pos1x][pos1y - move]===3)
                    {
                        socket.emit("pontuou1", 1);
                        var a = Math.floor((Math.random() * 6) + 1);
                        var b = Math.floor((Math.random() * 9) + 1);
                        position[a][b] = 3;
                        socket.emit("posPremioa", a);
                        socket.emit("posPremiob", b);
                        
                    }
                    position [pos1x][pos1y - move] = 5;
                    position [pos1x][pos1y] = 0;
                    pos1y--;
                    Socketio.emit("table",position);
                    break;
                }
            }
            case "right":
                if(position [pos1x][pos1y + move] != 1) {
                if(position [pos1x][pos1y + move] != 6)
                {
                    if(position [pos1x][pos1y + move]===3)
                    {
                        socket.emit("pontuou1", 1); 
                        var a = Math.floor((Math.random() * 6) + 1);
                        var b = Math.floor((Math.random() * 9) + 1);
                        position[a][b] = 3;
                        socket.emit("posPremioa", a);
                        socket.emit("posPremiob", b);
                    }
                    position [pos1x][pos1y + move] = 5;
                    position [pos1x][pos1y] = 0;
                    pos1y++;
                    Socketio.emit("table",position);
                    break; 
                }
            }
            case "up":
                if(position [pos1x - move][pos1y] != 1){
                if(position [pos1x - move][pos1y] != 6)
                {
                    if(position [pos1x - move][pos1y]===3)
                    {
                        socket.emit("pontuou1", 1);
                        var a = Math.floor((Math.random() * 6)+1);
                        var b = Math.floor((Math.random() * 9) + 1);
                        position[a][b] = 3;
                        socket.emit("posPremioa", a);
                        socket.emit("posPremiob", b);
                    }
                    position [pos1x - move][pos1y] = 5;
                    position [pos1x][pos1y] = 0;
                    pos1x--;
                    Socketio.emit("table",position);
                    break;
                }
            }
            case "down":
                if(position [pos1x + move][pos1y] != 1)
                {
                if(position [pos1x + move][pos1y] != 6)
                {
                    if(position [pos1x + move][pos1y]===3)
                    {
                        socket.emit("pontuou1", 1);
                        var a = Math.floor((Math.random() * 6)+1);
                        var b = Math.floor((Math.random() * 9) + 1);
                        position[a][b] = 3;
                        socket.emit("posPremioa", a);
                        socket.emit("posPremiob", b);
                    }
                    position [pos1x + move][pos1y] = 5;
                    position [pos1x][pos1y] = 0;
                    pos1x++;
                    Socketio.emit("table",position);
                    break;
                }
            }

        }
    
    });
    socket.on("move2", data =>{
        switch(data)
        {
            case "left2":
                if(position [pos2x][pos2y - move] != 1){
                if(position [pos2x][pos2y - move] != 5)
                {
                    if(position [pos2x][pos2y - move] === 3)
                    {
                        socket.emit("pontuou2", 1);
                        var a = Math.floor((Math.random() * 6)+1);
                        var b = Math.floor((Math.random() * 9) + 1);
                        position[a][b] = 3;
                        socket.emit("posPremioa", a);
                        socket.emit("posPremiob", b);
                    }
                    position [pos2x][pos2y - move] = 6;
                    position [pos2x][pos2y] = 0;
                    pos2y--;
                    Socketio.emit("table",position);
                    break;
                }
            }
            case "right2":
                if(position [pos2x][pos2y + move] != 1)
                {
                if(position [pos2x][pos2y + move] != 5)
                {
                    if(position [pos2x][pos2y + move] === 3)
                    {
                         socket.emit("pontuou2", 1);
                         var a = Math.floor((Math.random() * 6)+1);
                         var b = Math.floor((Math.random() * 9) + 1);
                         position[a][b] = 3;
                         socket.emit("posPremioa", a);
                         socket.emit("posPremiob", b);
                    }
                    position [pos2x][pos2y + move] = 6;
                    position [pos2x][pos2y] = 0;
                    pos2y++;
                    Socketio.emit("table",position);
                    break;
                }
            }

            case "up2":
                if(position [pos2x - move][pos2y] != 1){
                if(position [pos2x - move][pos2y] != 5)
                {
                    if(position [pos2x - move][pos2y] === 3)
                    {
                    socket.emit("pontuou2", 1);
                    var a = Math.floor((Math.random() * 6)+1);
                    var b = Math.floor((Math.random() * 9) + 1);
                    position[a][b] = 3;
                    socket.emit("posPremioa", a);
                    socket.emit("posPremiob", b);
                    }
                    position [pos2x - move][pos2y] = 6;
                    position [pos2x][pos2y] = 0;
                    pos2x--;
                    Socketio.emit("table",position);
                    break;    
                }
            }

            case "down2":
                if(position [pos2x + move][pos2y] != 1)
                {
                if(position [pos2x + move][pos2y] != 5)
                {
                    if(position [pos2x + move][pos2y] === 3)
                    {
                        socket.emit("pontuou2", 1);
                        var a = Math.floor((Math.random() * 6)+1);
                        var b = Math.floor((Math.random() * 9) + 1);
                        position[a][b] = 3;
                        socket.emit("posPremioa", a);
                        socket.emit("posPremiob", b);
                    }
                    position [pos2x + move][pos2y] = 6;
                    position [pos2x][pos2y] = 0;
                    pos2x++;
                    Socketio.emit("table",position);
                    break;
                }
            }
          
        }
    
    });
    
});
    
//sempre que um user conecta ele manda a position


Http.listen(3000, () => {
    console.log("listening at :3000...");
});