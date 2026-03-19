(() => {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a[data-nav-link]");
  const yearNode = document.querySelector("[data-current-year]");

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("nav-link--active");
    }

    link.addEventListener("click", () => {
      header?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const contactForm = document.querySelector("[data-contact-form]");
  const statusNode = document.querySelector("[data-contact-status]");

  if (!contactForm) {
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const publicKey = contactForm.dataset.emailjsPublicKey || "";
  const serviceId = contactForm.dataset.emailjsServiceId || "";
  const templateId = contactForm.dataset.emailjsTemplateId || "";
  const emailJsReady =
    Boolean(window.emailjs) &&
    publicKey &&
    serviceId &&
    templateId &&
    !publicKey.startsWith("YOUR_") &&
    !serviceId.startsWith("YOUR_") &&
    !templateId.startsWith("YOUR_");

  const setStatus = (message, tone) => {
    if (!statusNode) {
      return;
    }

    statusNode.textContent = message;
    statusNode.classList.remove("is-success", "is-error");

    if (tone === "success") {
      statusNode.classList.add("is-success");
    }

    if (tone === "error") {
      statusNode.classList.add("is-error");
    }
  };

  if (emailJsReady) {
    window.emailjs.init(publicKey);
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("user_name") || "").trim();
    const email = String(formData.get("user_email") || "").trim();
    const subject = String(formData.get("subject") || "Portfolio inquiry").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email, and message first.", "error");
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    if (emailJsReady) {
      try {
        await window.emailjs.sendForm(serviceId, templateId, contactForm);
        contactForm.reset();
        setStatus("Message sent successfully. Thanks for reaching out.", "success");
      } catch (error) {
        setStatus("The form could not be sent right now. Please try email instead.", "error");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send message";
        }
      }

      return;
    }

    const mailtoSubject = encodeURIComponent(subject);
    const mailtoBody = encodeURIComponent(
      `Hi Pushkar,\n\n${message}\n\nFrom,\n${name}\n${email}`
    );
    window.location.href = `mailto:Pushkarchoudhary362@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatus("Opening your email app so you can send the message directly.", "success");

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Send message";
    }
  });
})();
