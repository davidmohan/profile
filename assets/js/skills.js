skills = [
  {
    skill: "React JS",
    percentage: 70,
  },
  {
    skill: "Next Js",
    percentage: 40,
  },
  {
    skill: "Angular",
    percentage: 50,
  },
  {
    skill: "Java",
    percentage: 60,
  },
  {
    skill: "Bootstarp",
    percentage: 70,
  },
  {
    skill: "Tailwind CSS",
    percentage: 70,
  },
  {
    skill: "Figma",
    percentage: 50,
  },
  {
    skill: "Photoshop",
    percentage: 70,
  },
];

skillsDiv = document.getElementById("skills");

content = "";

skills.forEach((skillset) => {
  content += ` <div
  class="skill border border-2 col-5 py-3 my-2 rounded-4 text-center"
>
  <span class="skill--skill">${skillset.skill}</span>
  <span class="skill--percentage">${skillset.percentage}%</span>
</div>`;
  skillsDiv.innerHTML = content;
});
