function hideMenu() {
  const links = document.querySelectorAll(".nav-link");
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector("nav");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => link.classList.remove("show"));
      navMenu.classList.remove("show");
      menuIcon.classList.remove("close-icon");
      menuIcon.innerHTML = "&#9776;";
    });
  });
}

function toggleMenu() {
  const navMenu = document.querySelector("nav");
  const links = document.querySelectorAll(".nav-link");
  const menuIcon = document.querySelector(".menu-icon");

  links.forEach((link) => link.classList.toggle("show"));
  navMenu.classList.toggle("show");

  menuIcon.classList.toggle("close-icon");
  menuIcon.innerHTML = menuIcon.classList.contains("close-icon")
    ? "&#10006;"
    : "&#9776;";
}

function animateOnIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}

function initIntersectionObserver() {
  const observer = new IntersectionObserver(animateOnIntersection, {
    threshold: 0.1,
  });
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  elementsToAnimate.forEach((element) => {
    element.classList.add("pre-animate");
    observer.observe(element);
  });
}

function animateOnIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}

function handleFormSubmission() {
  emailjs.init("wZm83g8b4W-PGdkln");

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const templateParams = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };

    emailjs
      .send("service_qgd5a1l", "template_6k2qq5b", templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Mensagem enviada com sucesso!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Houve um erro ao enviar a mensagem. Tente novamente.");
      });
  });
}

function toggleVisibilityOnClick() {
  const strongElements = document.querySelectorAll("p strong");

  strongElements.forEach((strong) => {
    strong.addEventListener("click", () => {
      const nextSpan = strong.nextElementSibling;
      if (nextSpan) {
        nextSpan.classList.toggle("hidden");
        strong.querySelector(".arrow").classList.toggle("rotate");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hideMenu();
  initIntersectionObserver();
  handleFormSubmission();
  toggleVisibilityOnClick();
});
