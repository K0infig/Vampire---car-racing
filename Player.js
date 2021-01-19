class Player{
    constructor(){
      this.name = null;
      this.distance = 0
      this.index=null;
      

    }


    getCount(){
        var gameCountRef = database.ref('playerCount');
        gameCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })

    }


    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",function(data){
          allPlayers = data.val();
      })
    }


// allPlayers = [player1, player 2, player3, player4]



}