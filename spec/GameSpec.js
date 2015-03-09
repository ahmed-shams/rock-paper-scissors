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
});
