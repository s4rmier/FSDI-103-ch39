// One of the efficient ways to refactor the code

let appArray = [
  "Google",
  "YoutuBe",
  "FaceBook",
  "Twitter",
  "Amazon",
  "Netflix",
  "Gmail",
  "LinkedIn",
  "Instagram",
  "Spotify",
  "Wordpress",
  "Shopify",
  "Trello",
  "Zoom",
  "Slack",
  "Dropbox",
  "Github",
  "Canva",
  "Mailchimp",
  "Google Drive",
];

for (i = 0; i < appArray.length; i++) {
  const secondList = document.getElementById("second-list");
  const newListItem = document.createElement("li");
  newListItem.textContent = appArray[i];
  secondList.appendChild(newListItem);
}
