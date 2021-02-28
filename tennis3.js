"use strict";
/**
 *
 * A game is won by the first player to have scored at least four points
 * in total and at least two points more than the opponent.
 * 
 * A>=4 and (A-B)>=2
 *
 * The running score of each game is described in a manner peculiar to tennis: scores from zero to
 * three points are described as "Love", "Fifteen", "Thirty", and "Forty" respectively.
 * 
 * 0 - love, 1- fifteen, 2- Thirty, 3- Forty
 * 
 * 
 * If at least three points have been scored by each player, 
 * and the scores are equal, the score is "Deuce".
 * 
 * A>=3 and B>=3
 * output -> Deuce
 * 
 * If at least three points have been scored by each side 
 * and a player has one more point than his opponent, 
 * the score of the game is "Advantage" for the player in the lead.
 * 
 * A>b and A>=3 -> Advantage


 */
function getScore(p1, p2) {
  try {
    var s;
    const p1N = "player1";
    const p2N = "player2";
    if (p1 < 4 && p2 < 4 && p1 + p2 < 6) {
      const p = ["Love", "Fifteen", "Thirty", "Forty"];
      s = p[p1];
      return p1 === p2 ? s + "-All" : s + "-" + p[p2];
    } else {
      if (p1 === p2 && p1 >= 3) {
        return "Deuce";
      }
      s = p1 > p2 ? p1N : p2N;
      return (p1 - p2) * (p1 - p2) === 1 ? "Advantage " + s : "Win for " + s;
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = getScore;
