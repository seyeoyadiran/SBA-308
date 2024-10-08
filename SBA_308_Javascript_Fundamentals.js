// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

//Group students submissions by their learner IDs
function getAllIds(submissions){
  //Grouping the ids together by the learner ID
   const studentsById = {};

  submissions.forEach((learnId ) => {
    const idNum = learnId.learner_id;

       if(!studentsById[idNum])
       {
         studentsById[idNum] = [];
       }
      studentsById[idNum].push(learnId);
    })
  return studentsById;
}

//Getting the learner's total grade and averaging it out.
function getGradeAverage(ag , submissions){


  for(let j = 0; j < submissions.length; j++){
    for(let i = 0; i < ag.assignments.length; i++){
      
      //Checking if they have the same id value
      if(submissions[j].assignment_id === ag.assignments[i].id)
      console.log('This assignment group ' + submissions[j].assignment_id + ' Has the score ' + submissions[j].submission.score + ' Out of ' + ag.assignments[i].points_possible)
    }
  }
}


//Putting it all together
function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
 
  getGradeAverage(submissions);
}

//const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//console.log(getAllIds(LearnerSubmissions))
getGradeAverage(AssignmentGroup, LearnerSubmissions);
