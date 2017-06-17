import { GameService } from './game.service';

describe('GameService', () => {
  let gameService; 
  beforeEach(() => {
    gameService = new GameService();
  });

  it('should exist', () => {
    expect(gameService).toBeTruthy();
  });

  describe('drawing a game', () => {

    it('rock v rock should be a draw', () => {
      const actual = gameService.getResult('rock','rock');
      const expected = 'draw';

      expect(expected).toBe(actual);
    });

    it('paper v paper should be a draw', () => {
      const actual = gameService.getResult('paper','paper');
      const expected = 'draw';
      
      expect(expected).toBe(actual);
    });

    it('scissors v scissors should be a draw', () => {
      const actual = gameService.getResult('scissors','scissors');
      const expected = 'draw';
      
      expect(expected).toBe(actual);
    });
   
  });

  describe('winning a game', () => {

    it('rock v scissors should be a win', () => {
      const actual = gameService.getResult('rock','scissors');
      const expected = 'win';

      expect(expected).toBe(actual);
    });

    it('paper v rock should be a win', () => {
      const actual = gameService.getResult('paper','rock');
      const expected = 'win';

      expect(expected).toBe(actual);
    });

    it('scissors v paper should be a win', () => {
      const actual = gameService.getResult('scissors','paper');
      const expected = 'win';

      expect(expected).toBe(actual);
    });
  });

  describe('losing a game', () => {

    it('rock v paper should be a lose', () => {
      const actual = gameService.getResult('rock','paper');
      const expected = 'lose';

      expect(expected).toBe(actual);
    });

    it('paper v scissors should be a lose', () => {
      const actual = gameService.getResult('paper','scissors');
      const expected = 'lose';

      expect(expected).toBe(actual);
    });

    it('scissors v rock should be a lose', () => {
      const actual = gameService.getResult('scissors','rock');
      const expected = 'lose';

      expect(expected).toBe(actual);
    });
  });

  describe('getRandomGesture', () =>{
    it('should return rock,paper or scissors', () => {
        const expected = true;
        const actual = ['rock','paper','scissors'].includes(gameService.getRandomGesture())
        
        expect(expected).toBe(actual);
    });   
  })
});
