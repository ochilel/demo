'use strict';

/* Controllers */

angular.module('7minWorkout')
  .controller('WorkoutController', ['$scope', '$interval', '$location', function ($scope, $interval, $location) {
      console.log('WorkoutController created.');
      function WorkoutPlan(args) {
          this.exercises = [];
          this.name = args.name;
          this.title = args.title;
          this.restBetweenExercise = args.restBetweenExercise;
      };

      function Exercise(args) {
          this.name = args.name;
          this.title = args.title;
          this.description = args.description;
          this.instructions = args.instructions;
          this.image = args.image;
          this.related = {};
          this.related.videos = args.videos;
          this.related.variations = args.variations;
          this.nameSound = args.Sound;
      }

      var restExercise;
      var workoutPlan;
      
      var startWorkout = function () {
          workoutPlan = createWorkout();
          restExercise = {
                  exercise: new Exercise({
                  name: "rest",
                  title: "Rest",
                  description: "Discription about resting :)",
                  image: "lib/img/rest.png",

              }),
              duration: workoutPlan.restBetweenExercise
          };
          startExercise(workoutPlan.exercises.shift());
      };

      var startExercise = function (exercisePlan) {
          console.log('starting exercise:' + exercisePlan.exercise.name);
          $scope.currentExercise = exercisePlan;
          $scope.currentExerciseDuration = 0;
          $interval(function () {
              $scope.currentExerciseDuration = $scope.currentExerciseDuration + 1;
          }, 1000, $scope.currentExercise.duration)
          .then(function () {
              var nextPlan = getNextExercise(exercisePlan);
              if (nextPlan) {
                  startExercise(nextPlan);
              }
              else {
                  workoutComplete();
              }
          });
      };

      var getNextExercise = function (currentExercisePlan) {
          var nextExercise = null;
          if (currentExercisePlan === restExercise) {
              nextExercise = workoutPlan.exercises.shift();
          }
          else {
              if (workoutPlan.exercises.length != 0) {
                  nextExercise = restExercise;
              }
          }
          return nextExercise;
      }
      
      var workoutComplete = function () {
          $location.path('/finish');
      }

      var createWorkout = function () {
          var workout = new WorkoutPlan({
              name: "7minWorkout",
              title: "7 Minute Workout",
              restBetweenExercise: 10
          });

          //Begin the exercises

          workout.exercises.push({
              exercise: new Exercise({
                  name: "jumpingJacks",
                  title: "Jumping Jacks",
                  description: "Jumping Jacks.",
                  image: "lib/img/JumpingJacks.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "wallSit",
                  title: "Wall Sit",
                  description: "Wall Sit.",
                  image: "lib/img/wallsit.png",
                  videos: [],
                  variations: [],

              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "Discription about pushup.",
                  image: "lib/img/pushup.png",
                  videos: ["https://www.youtube.com/watch?v=Eh00_rniF8E", "https://www.youtube.com/watch?v=ZWdBqFLNljc", "https://www.youtube.com/watch?v=UwRLWMcOdwI", "https://www.youtube.com/watch?v=ynPwl6qyUNM", "https://www.youtube.com/watch?v=OicNTT2xzMI"],
                  variations: ["Planche push-ups", "Knuckle push-ups", "Maltese push-ups", "One arm versions"],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "crunches",
                  title: "Abdominal Crunches",
                  description: "Abdominal Crunches.",
                  image: "lib/img/crunches.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "stepUpOntoChair",
                  title: "Step Up Onto Chair",
                  description: "Step Up Onto Chair.",
                  image: "lib/img/stepUpOntoChair.jpeg",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "squat",
                  title: "Squat",
                  description: "Squat.",
                  image: "lib/img/squat.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "tricepdips",
                  title: "Tricep Dips On Chair",
                  description: "Tricep Dips On Chair.",
                  image: "lib/img/tricepdips.jpg",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "plank",
                  title: "Plank",
                  description: "Plank.",
                  image: "lib/img/plank.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "highKnees",
                  title: "High Knees",
                  description: "High Knees.",
                  image: "lib/img/highknees.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "lunges",
                  title: "Lunges",
                  description: "Lunges.",
                  image: "lib/img/lunges.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "pushupNRotate",
                  title: "Pushup And Rotate",
                  description: "Pushup And Rotate.",
                  image: "lib/img/pushupNRotate.jpg",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          workout.exercises.push({
              exercise: new Exercise({
                  name: "sidePlank",
                  title: "Side Plank",
                  description: "Side Plank.",
                  image: "lib/img/sideplank.png",
                  videos: [],
                  variations: [],
                  procedure: ""
              }),
              duration: 30
          });
          return workout;
      }

      var init = function () {
          startWorkout();
      };

      init();
  }]);
