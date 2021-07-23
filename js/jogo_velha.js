const tic_tac_toe = {
    board: ['','','','','','','','',''],

    simbols: {
       options: ['X','O'],
       turn_index: 0,
       change: function(){
           this.turn_index = (this.turn_index === 0 ? 1 : 0);
       }
    },
    
    container_element: null,
    gameover: false,
    
    possibilidade_vitoria:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    init: function(container){
    this.container_element = container;
    },

    fazer_jogada: function(position){
        if (this.gameover) return false;
        if (this.board[position] === ''){
            this.board[position] = this.simbols.options [this.simbols.turn_index];
            this.draw();
            let possibilidade_vitoria_index = this.checar_possibilidade_vitoria(this.simbols.options [this.simbols.turn_index]);
            if(possibilidade_vitoria_index >= 0 ){
                this.game_is_over();
            } else {
            this.simbols.change();
            }
            return true;
        } else{
            return false;
        }
    },

    game_is_over: function(){
        this.gameover = true;
        console.log("Temos um Vencedor !");
        alert("Temos um Vencedor !");
    },

    start: function(){
        this.board.fill('');
        this.draw();
        this.gameover = false;
    },

    checar_possibilidade_vitoria: function(simbol){
        for (i in this.possibilidade_vitoria){
            if(this.board [ this.possibilidade_vitoria [i][0] ] == simbol &&
                this.board [ this.possibilidade_vitoria [i][1] ] == simbol &&
                this.board [ this.possibilidade_vitoria [i][2] ] == simbol ){
                    console.log('Sequencia Vencedora' +i);
                    return i;
                } 
        };
        return -1;
    },

        draw: function(){
            let content = '';

            for (i in this.board){
                content += '<div onclick="tic_tac_toe.fazer_jogada('+ i +')">' + this.board[i] + '</div>';
            }

            this.container_element.innerHTML = content;
        }

};