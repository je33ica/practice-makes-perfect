// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now
//  plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that
//  you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you,
// return "Pls go away and stop eating my sheep". Otherwise,
// return "Oi! Sheep number N! You are about to be eaten by a wolf!"
// where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
  var wolfIndex = queue.indexOf("wolf");
  if (wolfIndex === queue.length) {
    ("Pls go away and stop eating my sheep");
  } else
    (wolfIndex -= 1)(
      "Oi! Sheep number `{wolfIndex}`! You are about to be eaten by a wolf!"
    );
}

function warnTheSheep(queue) {
  var wolfIndex = queue.indexOf("wolf");

  if (wolfIndex === queue.length) {
    ("Pls go away and stop eating my sheep");
  } else
    (sheepPos = wolfIndex - 1)(
      "Oi! Sheep number `{sheepPos}`! You are about to be eaten by a wolf!"
    );
}

function warnTheSheep(queue) {
  const index = queue.indexOf("wolf");
  return index === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - 1 - index
      }! You are about to be eaten by a wolf!`;
}

function warnTheSheep(queue) {
  var wolfIndex = queue.indexOf("wolf");
  var sheepPos = wolfIndex - 1;
  if (wolfIndex === queue.length - 1) {
    ("Pls go away and stop eating my sheep");
  } else {
    `Oi! Sheep number ${sheepPos}! You are about to be eaten by a wolf!`;
  }
}

function warnTheSheep(queue) {
  let sheepIndex = queue.length - queue.indexOf("wolf") - 1;
  if (sheepIndex === 0) return "Pls go away and stop eating my sheep";
  return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}
