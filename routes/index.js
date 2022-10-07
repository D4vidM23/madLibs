var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

function getStory (formData) {
  if (formData.storyChoice === "4") {
    formData.storyChoice = randNum(3).toString();
  }
    if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `Twas a cloudy and ${formData.adjective2} ${formData.noun1}. The ${formData.adjective1} kids in Web Programing, Evan, David, Elijah, and Kai started to ${formData.verb1}. They went on to play uno and obviously, David beat them every single time. This was the last ${formData.noun2} of school before December break. After school, they ${formData.verb2} into the ${formData.adjective3} W Building and ${formData.verb3} every single pencil.`
}

function generateStory2(formData){
  return `There was once a ${formData.adjective2} clown living in his ${formData.noun1}. The ${formData.adjective1} clown began to slowly ${formData.verb1} and notice strange things. The thing he saw ${formData.verb2} up and down the stairs. Tapping windows was its fate. Under the beds of children, he would ${formData.verb3} the floorboards. His name is Hoover The ${formData.adjective3} ${formData.noun2}.`
}

function generateStory3(formData){
  return `Florida Man always loved ${formData.verb1} ${formData.noun1}. He once tried to kidnap a ${formData.adjective2} ${formData.noun2} from the local golf course. He lives with the ${formData.adjective1} gators and wrestles them every day until he ${formData.verb2}. Their ${formData.adjective3} scales somehow do not effect Florida Man. He also finds enjoyment in ${formData.verb3} in dumpsters.`
}

router.post('/story', function(req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  })
});

module.exports = router;

function randNum (max){
  return Math.floor(Math.random() * max + 1)
}
