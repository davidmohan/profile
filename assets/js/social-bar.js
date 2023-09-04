leftBar = document.getElementById("left-social");
leftSocialLinks = [
  { href: "#", icon: "fa-brands fa-github" },
  { href: "#", icon: "fa-brands fa-gitlab" },
  { href: "#", icon: "fa-brands fa-facebook" },
  { href: "#", icon: "fa-brands fa-instagram" },
  { href: "#", icon: "fa-brands fa-linkedin" },
];

content = "";

leftSocialLinks.forEach((link) => {
  content += `
  <a href="${link.href}" class="mx-2">
  <i class="${link.icon} text-info h2"></i>
  </a>`;
  leftBar.innerHTML = content;
});
