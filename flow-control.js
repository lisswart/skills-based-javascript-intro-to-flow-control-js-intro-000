function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return `You are a teenager!`
  }
}

function teenager(age) {
  if (13 <= age  && age <= 19) {
    return `You are a teenager!`
  } else {
    return `You are not a teenager`
  }
}

function ageChecker(age) {
  if (13 <= age && age <= 19) {
    return `You are a teenager!`
  } else if (age <= 12) {
    return `You are a kid`
  } else {
    return `You are a grownup`
  }
}

function ternaryTeenager(age) {
  return 13 <= age && age <= 19? `You are a teenager`:`You are not a teenager`
}

function switchAge(age) {
  var mood = "hungry"
  switch (mood) {
    case "happy":
      console.log("Dance to Pharrell's 'Happy'");
      break;
    case "sad":
      console.log("You should eat a pint of ice cream");
      break;
    case "anxious":
      console.log("Take some deep breaths");
      break;
    case "hungry":
      console.log("You should eat a big chocolate cake");
      break;
    default:
      console.log("That's not a mood we support");
    }
  }
}
