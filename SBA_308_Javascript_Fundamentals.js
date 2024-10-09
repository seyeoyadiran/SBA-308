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


function getAverage(assignGroup, submissions){
  let ret = getAllIds(submissions);
  let returnMe = []
    
  for(let myId in ret)
  {
    let currStudent = ret[myId][0].learner_id
    for(let i = 0; i < ret[myId].length;i++){
      let scoreTotal = 0;
      for(let j = 0; j < assignGroup.assignments.length; j++){

        //Matching the ids for the test and the student submission
          if(assignGroup.assignments[j].id  == ret[myId][i].assignment_id ){
            
            //Checking if the date has passed or not  
            if(ret[myId][i].submission.submitted_at <= assignGroup.assignments[j].due_at){
            
            if(ret[myId][i].learner_id == '125'){
              //Grade is the average for that score
              let grade = ret[myId][i].submission.score /  assignGroup.assignments[j].points_possible
              console.log('student ' + ret[myId][i].learner_id + ' Has ' + ret[myId][i].submission.score + ' out of ' + assignGroup.assignments[j].points_possible + ' For assignment ' +assignGroup.assignments[j].id + ' His grade is ' + grade);
            }
            else if(ret[myId][i].learner_id == '132'){
              //Grade is the average for that score
            let grade = ret[myId][i].submission.score /  assignGroup.assignments[j].points_possible
            console.log('student ' + ret[myId][i].learner_id + ' Has ' + ret[myId][i].submission.score + ' out of ' + assignGroup.assignments[j].points_possible + ' For assignment ' +assignGroup.assignments[j].id + ' His grade is ' + grade);    
            }
            else{
              break;
            }
            //Here I'm trying to push the elements into the return array
            returnMe.push(ret[myId][i].learner_id)
        }
      }
        
   }
  }


}
return returnMe;
}


function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log('Here are the items grouped together')
console.log(getAllIds(LearnerSubmissions))

console.log('We are getting the grades for this assignemtn if it was turned in')
console.log(getAverage(AssignmentGroup, LearnerSubmissions));

