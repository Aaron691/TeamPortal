function nextPage() {
  window.location.href = "./profile.html";
}

function submitProfile() {
  const data = {
    primaryDirectorate: document.getElementById("primaryDoctorate").value,
    currentSchool: document.getElementById("currentSchool").value,
    currentGpa: document.getElementById("currentGpa").value,
    currentGrade: document.getElementById("currentGrade").value,
    eightGradeSchool: document.getElementById("eightGradeSchool").value,
    email: document.getElementById("email").value,
    cellPhone: document.getElementById("cellPhone").value,
    homePhone: document.getElementById("homePhone").value,
    address: document.getElementById("address").value,
    birthDate: document.getElementById("birthDate").value,
    gender: document.getElementById("gender").value,
    ethnicity: document.getElementById("ethnicity").value,
    dietaryRestrictions: document.getElementById("dietaryRestrictions").value,
    studentConsent: document.getElementById("studentConsent").value,
    parent1Name: document.getElementById("parent1Name").value,
    parent2Name: document.getElementById("parent2Name").value,
    parent1Email: document.getElementById("parent1Email").value,
    parent2Email: document.getElementById("parent2Email").value,
    parent1Phone: document.getElementById("parent1Phone").value,
    parent1Consent: document.getElementById("parent1Consent").value,
    parent2Consent: document.getElementById("parent2Consent").value,
  };

  console.log(data);
  return false;
}

const announcements = [
  {
    name: "Aaron Tostado",
    date: "Thursday, August 20",
    time: " 11:27 AM ",
    content: `Hi Team! Here is our quad chart for Week 1! Find your name and follow our
    example. These will be due every Sunday night at 8pm, unless we specify
    something different in the future. `,
  },
  {
    name: "Joy Uehara ",
    date: "Monday, August 17",
    time: " 8:16 PM",
    content: `Reminder that there are no directorate meetings or trainings this week. You
    are still required to attend the Tuesday meeting which is now from 6PM -
    8PM. There is no hours requirement for the week`,
  },
  {
    name: "Fazlul Zubair",
    date: "Monday, August 10",
    time: " 11:18 PM ",
    content: `Hello Everyone!
    It has been a while since our last update, so here goes:
    1) INFINITE RECHARGE - Part II
    For those who have not seen the announcement, next year Infinite Recharge
    will be back! We will be playing the same game with some rule updates (yet
    to be released). Due to this, we are officially kicking off our 2021 season
    now! This will include updates to our team handbook and expectations
    (more to follow soon)!
    2) Meeting Attendance is Mandatory!
    If you are a student member who is planning to return to the team next
    year, your attendance at our Tuesday meetings are mandatory going forward
    (starting 5/26). In a normal year we would have 12 hours of meetings a
    week, we are now down to 1 hour on Tuesday + Directorate level meetings,
    so everyone should be able to meet this commitment. Attendance will be
    tracked!
    3) Welcome 2021 Directors!
    Our new leadership team is starting the transition to the 2021 season. Thank
    you to our exiting team as they help the new leaders on board!
    4) Booster Bot Meeting - Tuesday, June 9th @ 8 PM
    Now that we have some idea of what next year will look like, we would like
    to let parents and boosters know about some of the changes in expectations
    for next year. The main topics will be:
    2021 Season Outlook `,
  },
];

const events = [
  {
    title: "Team Meeting",
    date: "September 1, 2020",
    time: "6:00 PM - 8;00 PM",
    location: "Zoom",
  },
  {
    title: "Team Meeting",
    date: "September 6, 2020",
    time: "2:00 PM - 7:00 PM",
    location: "Zoom",
  },
  {
    title: "Leadership Meeting",
    date: "September 6, 2020",
    time: "7:00 PM - 8:00 PM",
    location: "Zoom",
  },
  {
    title: "Rookie Bot CAD Session",
    date: "September 7, 2020",
    time: "5:00 PM - 6:00 PM",
    location: "Zoom",
  },
  {
    title: "Director Meeting",
    date: "September 8, 2020",
    time: "6:00 PM - 9:00 PM",
    location: "Zoom",
  },
];
