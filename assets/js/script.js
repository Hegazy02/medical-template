const departmentCard = [
  {
    title: "Cardiology",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/department-icon-cardiology.png",
  },
  {
    title: "Gastroenterology",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/department-icon-gastroenterology.png",
  },
  {
    title: "Pulmonology",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/department-icon-pulmonology.png",
  },
  {
    title: "Dental",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/department-icon-dental.png",
  },
  {
    title: "Gynecology",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/department-icon-gynecology.png",
  },
  {
    title: "Hepatology",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/department-icon-hepatology.png",
  },
];
const doctors = [
  {
    name: "John Doe",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/doctor-1.jpg",
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum...",
  },
  {
    name: "Robin Doe",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/doctor-2.jpg",
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum...",
  },
  {
    name: "Sahal Doe",
    image:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum...",
  },
  {
    name: "Martin Doe",
    image:
      "https://i.pinimg.com/736x/9d/85/ef/9d85ef63db3691882dee8b0d2dd08a4c.jpg",
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum...",
  },
];
const resources = [
  {
    title: "Prepare for visit",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-gallery-2-300x150.jpg",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh...",
  },
  {
    title: "Patients",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ajqExcR7cALi7nQuYo38I5xj1ApzSuxdIw&s",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh...",
  },
  {
    title: "Surgery process",
    image:
      "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-gallery-3-300x150.jpg",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh...",
  },
];

const cardContainer = document.querySelector(
  ".departments .departments__body__cards"
);
const insuranceLogos = [
  "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-logo-1.png",
  "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-logo-2.png",
  "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-logo-3.png",
  "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-logo-4.png",
  "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-logo-5.png",
  "https://www.portotheme.com/wordpress/porto/medical/wp-content/uploads/sites/67/2024/02/medical-logo-6.png",
];

departmentCard.forEach((card) => {
  cardContainer.innerHTML += `
    <div class="departments__body__card">
        <div class="departments__body__card__img">
            <img src="${card.image}" alt="" />
        </div>
    <div class="departments__body__card__content">
        <h3 class="departments__body__card__content__heading">${card.title}</h3>
        <p class="departments__body__card__content__para">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, leo vitae interdum…
        </p>
    </div>
    `;
});

const doctorsContainer = document.querySelector(".doctors .doctors__body");

doctors.forEach((card) => {
  doctorsContainer.innerHTML += `
    <div class="doctors__body__card">
        <div class="doctors__body__card__img">
            <img src="${card.image}" alt="" />
        </div>
    <div class="doctors__body__card__content">
        <h3 class="doctors__body__card__content__heading">${card.title}</h3>
        <p class="doctors__body__card__content__para">
           ${card.name}
        </p>
    </div>
    `;
});

const resourcesContainer = document.querySelector(
  ".resources .resources__body__cards"
);

resources.forEach((card) => {
  resourcesContainer.innerHTML += `
    <div class="resources__body__card">
        <div class="resources__body__card__img">
            <img src="${card.image}" alt="" />
        </div>
    <div class="resources__body__card__content">
        <h3 class="resources__body__card__content__heading">${card.title}</h3>
        <p class="resources__body__card__content__para">
           ${card.description}
        </p>
    </div>
    `;
});

const insuranceContainer = document.querySelector(
  ".insurance .insurance__body"
);

insuranceLogos.forEach((card) => {
  insuranceContainer.innerHTML += `
    <div class="insurance__body__card">
        <img src="${card}" alt="" />
    </div>
    `;
});
const toggle = document.querySelector(".header__navbar__body__toggle");
const menu = document.querySelector(".header__navbar__body__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
