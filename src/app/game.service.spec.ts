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

  describe('getStats()', () =>{
    beforeEach(() => {
      window.localStorage.clear();
    });
    it('should return default stats when no stats stored', () => {
        const expected = {win:0,draw:0,lose:0};
        const actual = gameService.getStats();
        
        expect(expected).toEqual(actual);
    });

    it('should return saved stats', () => {
        const expected = {win:11,draw:1,lose:0};
        let actual;
        
        window.localStorage.setItem('stats',JSON.stringify({win:11,draw:1,lose:0}))
        actual = gameService.getStats();
        
        expect(expected).toEqual(actual);
    });    
  })

  describe('saveStats()', () =>{
    beforeEach(() => {
      window.localStorage.clear();
    });
    it('should store stats', () => {
        const expected = {win:10,draw:20,lose:30};
        let actual;

        gameService.saveStats({win:10,draw:20,lose:30});
        actual = JSON.parse(window.localStorage.getItem('stats'));
        
        expect(expected).toEqual(actual);
    });    
  })

  describe('resetStats()', () =>{
    beforeEach(() => {
      window.localStorage.clear();
    });
    it('should reset stats to default value', () => {
        const expected = {win:0,draw:0,lose:0};
        let actual;

        window.localStorage.setItem('stats',JSON.stringify({win:11,draw:1,lose:30}));
        gameService.resetStats();

        actual = JSON.parse(window.localStorage.getItem('stats'));
        
        expect(expected).toEqual(actual);
    });    
  })
  
});
