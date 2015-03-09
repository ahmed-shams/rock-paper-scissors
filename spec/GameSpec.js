/**
 * Created by zangee3 on 3/9/15.
 */
describe("Game", function() {
    
    it("should return true when given a valid choice", function() {
        expect(Game.validateChoice('Paper')).toBe(true);
    });

    it("should return false when given an invalid choice", function() {
        expect(Game.validateChoice('Rope')).toBe(false);
    });

    it("should return result as 'Paper' when given 'Paper' and 'Rock' as choices ", function() {
        var result = Game.getResults('Paper', 'Rock');
        expect(result).toEqual('Paper');
    });

    it("should return result as 'Rock' when given 'Scissors' and 'Rock' as choices ", function() {
        var result = Game.getResults('Scissors', 'Rock');
        expect(result).toEqual('Rock');
    });

    it("should return result as 'Scissors' when given 'Paper' and 'Scissors' as choices ", function() {
        var result = Game.getResults('Paper', 'Scissors');
        expect(result).toEqual('Scissors');
    });

    it("should return result as 'it is a tie' when given 'Paper' and 'Paper' as choices ", function() {
        var result = Game.getResults('Paper', 'Paper');
        expect(result).toEqual('it is a tie');
    });

    it("should return result as 'it is a tie' when given 'Rock' and 'Rock' as choices ", function() {
        var result = Game.getResults('Rock', 'Rock');
        expect(result).toEqual('it is a tie');
    });

    it("should return result as 'it is a tie' when given 'Scissors' and 'Scissors' as choices ", function() {
        var result = Game.getResults('Scissors', 'Scissors');
        expect(result).toEqual('it is a tie');
    });
});
