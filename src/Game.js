/**
 * Created by zangee3 on 3/8/15.
 */

function Game() {
    this.validChoices = ['Rock', 'Paper', 'Scissors'];
    this.computerChoice = '';
    this.result = '';
}

Game.prototype.validateChoice = function(choice) {
    return ($.inArray(choice, this.validChoices) != -1);
}
Game.prototype.startGame = function(choice) {

    if(!this.validateChoice(choice)) {
        alert('invalid choice');
        return;
    }

    this.computerChoice = this.generateComputerChoice();
    $('#computer-choice').html(this.computerChoice);
    $('.alert-info').show('slow');
    this.result = this.getResults(choice, this.computerChoice);
    switch(this.result) {
        case choice:
            $('#result-text').html('You Won !!!!!');
            $('.result').removeClass('alert-danger').removeClass('alert-warning');
            $('.result').addClass('alert-success');
            break;
        case this.computerChoice:
            $('#result-text').html('You Loose :(');
            $('.result').removeClass('alert-success').removeClass('alert-warning');
            $('.result').addClass('alert-danger');
            break;
        default:
            $('#result-text').html("It's is a tie");
            $('.result').removeClass('alert-success').removeClass('alert-danger');
            $('.result').addClass('alert-warning');
    }
    $('.result').show('slow');
}
Game.prototype.generateComputerChoice = function() {
    var rand = parseFloat(Math.random()).toFixed(2);
    return (rand <= 0.33) ? 'Rock' : (0.34 <= rand && rand <= 0.66) ? 'Paper' : 'Scissors';
}
Game.prototype.getResults = function(ch1, ch2) {
    var winner = '';
    if(ch1 === ch2) {
        return 'it is a tie';
    }
    switch(ch1) {
        case 'Rock':
            winner = (ch2 === 'Paper') ? ch2 : ch1;
            break;
        case 'Paper':
            winner = (ch2 === 'Scissors') ? ch2 : ch1;
            break;
        case 'Scissors':
            winner = (ch2 === 'Rock') ? ch2 : ch1;
            break;
        default:
            break;
    }
    return winner;
}


var Game = new Game();
$('.user-choice').click(function() {
    console.log($(this).data( "choice" ));
    Game.startGame($(this).data( "choice" ));
});
