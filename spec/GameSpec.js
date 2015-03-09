/**
 * Created by zangee3 on 3/9/15.
 */
describe("Game", function() {
    var game;

    beforeEach(function() {
        game = new Game();
    });

    it("should return true when given a valid choice", function() {
        expect(game.validateChoice('Paper')).toBe(true);
    });

    it("should return false when given an invalid choice", function() {
        expect(game.validateChoice('Rope')).toBe(false);
    });

    it("should return result as 'Paper' when given 'Paper' and 'Rock' as choices ", function() {
        var result = game.getResults('Paper', 'Rock');
        expect(result).toEqual('Paper');
    });

    it("should return result as 'Rock' when given 'Scissors' and 'Rock' as choices ", function() {
        var result = game.getResults('Scissors', 'Rock');
        expect(result).toEqual('Rock');
    });

    it("should return result as 'Scissors' when given 'Paper' and 'Scissors' as choices ", function() {
        var result = game.getResults('Paper', 'Scissors');
        expect(result).toEqual('Scissors');
    });

    it("should return result as 'it is a tie' when given 'Paper' and 'Paper' as choices ", function() {
        var result = game.getResults('Paper', 'Paper');
        expect(result).toEqual('it is a tie');
    });

    it("should return result as 'it is a tie' when given 'Rock' and 'Rock' as choices ", function() {
        var result = game.getResults('Rock', 'Rock');
        expect(result).toEqual('it is a tie');
    });

    it("should return result as 'it is a tie' when given 'Scissors' and 'Scissors' as choices ", function() {
        var result = game.getResults('Scissors', 'Scissors');
        expect(result).toEqual('it is a tie');
    });
});
