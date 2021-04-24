const initialisePage = () => {
  const content = document.getElementById("content");

  const header = document.createElement("header");
  content.appendChild(header);

  const heading = document.createElement("h1");
  heading.setAttribute("class", "heading");
  heading.textContent = "The Fried Guys";
  header.appendChild(heading);

  const subHeading = document.createElement("h2");
  subHeading.setAttribute("class", "sub-heading");
  subHeading.textContent = "Adelaide's Finest Fried Ice Cream";
  header.appendChild(subHeading);

  const headingImage = document.createElement("IMG");
  headingImage.setAttribute("class", "heading-image");
  headingImage.setAttribute(
    "src",
    "/src/deep-fried-ice-cream-with-salted-caramel.jpg"
  );
  headingImage.setAttribute("alt", "Deep Fried Ice Cream");
  header.appendChild(headingImage);

  //Create Tab Container
  const tabContainer = document.createElement("div");
  tabContainer.setAttribute("class", "tabs");
  content.appendChild(tabContainer);

  //Create Tab One
  const tabOneInput = document.createElement("input");
  tabOneInput.setAttribute("type", "radio");
  tabOneInput.setAttribute("id", "tab1");
  tabOneInput.setAttribute("name", "tabgroup");
  tabOneInput.checked = true;
  tabContainer.appendChild(tabOneInput);

  const tabOneLabel = document.createElement("label");

  tabOneLabel.setAttribute("for", "tab1");
  tabOneLabel.textContent = "Menu";
  tabContainer.appendChild(tabOneLabel);

  //Create Tab Two
  const tabTwoInput = document.createElement("input");
  tabTwoInput.setAttribute("type", "radio");
  tabTwoInput.setAttribute("id", "tab2");
  tabTwoInput.setAttribute("name", "tabgroup");
  tabContainer.appendChild(tabTwoInput);

  const tabTwoLabel = document.createElement("label");

  tabTwoLabel.setAttribute("for", "tab2");
  tabTwoLabel.textContent = "Contact Us";
  tabContainer.appendChild(tabTwoLabel);

  const tabContentContainer = document.createElement("div");
  tabContentContainer.setAttribute("class", "tabs");
  tabContentContainer.setAttribute("id", "tabs");
  tabContainer.appendChild(tabContentContainer);
};

const contactTab = () => {
  const tabContentContainer = document.getElementById("tabs");

  const tabContent = document.createElement("div");
  tabContent.setAttribute("class", "tab");
  tabContent.setAttribute("id", "tab");
  tabContentContainer.appendChild(tabContent);

  const tabHeading = document.createElement("h3");
  tabHeading.textContent = "Get in touch with The Fried Guys";
  tabContent.appendChild(tabHeading);

  const tabParagraph = document.createElement("a");
  tabParagraph.setAttribute("href", "contactus@thefriedguys.com");
  tabParagraph.innerHTML = "contactus@thefriedguys.com";
  tabContent.appendChild(tabParagraph);
};

const menuTab = () => {
  const tabContentContainer = document.getElementById("tabs");

  const tabContent = document.createElement("div");
  tabContent.setAttribute("class", "tab");
  tabContent.setAttribute("id", "tab");
  tabContentContainer.appendChild(tabContent);

  const tabHeading = document.createElement("h3");
  tabHeading.textContent = "Try out our different flavours, fried or fresh!";
  tabContent.appendChild(tabHeading);

  const tabParagraph1 = document.createElement("p");
  tabParagraph1.textContent = "Coconut and Pandan";
  tabContent.appendChild(tabParagraph1);

  const tabParagraph2 = document.createElement("p");
  tabParagraph2.textContent = "Pistachio";
  tabContent.appendChild(tabParagraph2);

  const tabParagraph3 = document.createElement("p");
  tabParagraph3.textContent = "Hazelnut and Nutella";
  tabContent.appendChild(tabParagraph3);

  const tabParagraph4 = document.createElement("p");
  tabParagraph4.textContent = "Salted Caramel and Macadamia";
  tabContent.appendChild(tabParagraph4);

  const tabParagraph5 = document.createElement("p");
  tabParagraph5.textContent = "Cookies and Cream";
  tabContent.appendChild(tabParagraph5);
};

const clearTab = () => {
  const currentPage = document.getElementById("tab");
  currentPage.remove();
};
export { initialisePage, contactTab, menuTab, clearTab };
