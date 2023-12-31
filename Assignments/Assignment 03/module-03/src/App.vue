<script setup>
    const navigation = {
            navbarBrand: "Start Bootstrap",
            menuItems: [
              { label: "Features", link: "#features" },
              { label: "Download", link: "#download" },
            ],
            feedbackButton: {
              label: "Send Feedback",
              icon: "bi-chat-text-fill",
            },
    };
    const mastheadHeader = {
  mastheadText: {
    heading: "Showcase your app beautifully.",
    description: "Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!",
  },
  appBadges: [
    { imageUrl: "assets/img/google-play-badge.svg", altText: "Google Play" },
    { imageUrl: "assets/img/app-store-badge.svg", altText: "App Store" },
  ],
  deviceMockup: {
    svgShapes: [
      { type: "circle", viewBox: "0 0 100 100" },
      { type: "rect", viewBox: "0 0 240.83 240.83", x: "-32.54", y: "78.39", width: "305.92", height: "84.05", rx: "42.03", transform: "translate(120.42 -49.88) rotate(45)" },
      { type: "rect", viewBox: "0 0 240.83 240.83", x: "-32.54", y: "78.39", width: "305.92", height: "84.05", rx: "42.03", transform: "translate(-49.88 120.42) rotate(-45)" },
      { type: "circle", viewBox: "0 0 100 100" },
    ],
    deviceWrapper: {
      device: {
        dataDevice: "iPhoneX",
        dataOrientation: "portrait",
        dataColor: "black",
        screenContent: {
          video: {
            muted: "muted",
            autoplay: "",
            loop: "",
            style: { maxWidth: "100%", height: "100%" },
            source: {
              src: "assets/img/demo-screen.mp4",
              type: "video/mp4",
            },
          },
        },
      },
    },
  },
};

const testimonialSection = {
  quote: "An intuitive solution to a common problem that we all face, wrapped up in a single app!",
  logoSrc: "assets/img/tnw-logo.svg",
  logoAlt: "TNW Logo",
  logoHeight: "3rem",
};

// 
const featuresSection = {
  featureItems: [
    {
      iconClasses: "bi-phone icon-feature text-gradient d-block mb-3",
      title: "Device Mockups",
      description: "Ready to use HTML/CSS device mockups, no Photoshop required!",
    },
    {
      iconClasses: "bi-camera icon-feature text-gradient d-block mb-3",
      title: "Flexible Use",
      description: "Put an image, video, animation, or anything else on the screen!",
    },
    {
      iconClasses: "bi-gift icon-feature text-gradient d-block mb-3",
      title: "Free to Use",
      description: "As always, this theme is free to download and use for any purpose!",
    },
    {
      iconClasses: "bi-patch-check icon-feature text-gradient d-block mb-3",
      title: "Open Source",
      description: "Since this theme is MIT licensed, you can use it commercially!",
    },
  ],
  deviceMockup: {
    svgShapes: [
      { type: "circle", viewBox: "0 0 100 100" },
      {
        type: "rect",
        viewBox: "0 0 240.83 240.83",
        x: "-32.54",
        y: "78.39",
        width: "305.92",
        height: "84.05",
        rx: "42.03",
        transform: "translate(120.42 -49.88) rotate(45)",
      },
      {
        type: "rect",
        viewBox: "0 0 240.83 240.83",
        x: "-32.54",
        y: "78.39",
        width: "305.92",
        height: "84.05",
        rx: "42.03",
        transform: "translate(-49.88 120.42) rotate(-45)",
      },
      { type: "circle", viewBox: "0 0 100 100" },
    ],
    deviceWrapper: {
      device: {
        dataDevice: "iPhoneX",
        dataOrientation: "portrait",
        dataColor: "black",
        screenContent: {
          video: {
            muted: "muted",
            autoplay: "",
            loop: "",
            style: { maxWidth: "100%", height: "100%" },
            source: {
              src: "assets/img/demo-screen.mp4",
              type: "video/mp4",
            },
          },
        },
      },
    },
  },
};

// footerSection
const footerSection = {
  footerText: "Your Website 2023. All Rights Reserved.",
  footerLinks: [
    { label: "Privacy", url: "#" },
    { label: "Terms", url: "#" },
    { label: "FAQ", url: "#" },
  ],
};

</script>


<template>
  <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
      <div class="container px-5">
        <a class="navbar-brand fw-bold" href="#page-top">{{ navigation.navbarBrand }}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          Menu
          <i class="bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li v-for="item in navigation.menuItems" :key="item.label" class="nav-item">
              <a :href="item.link" class="nav-link me-lg-3">{{ item.label }}</a>
            </li>
          </ul>
          <button
            class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
            data-bs-toggle="modal"
            data-bs-target="#feedbackModal">
            <span class="d-flex align-items-center">
              <i :class="['bi', navigation.feedbackButton.icon, 'me-2']"></i>
              <span class="small">{{ navigation.feedbackButton.label }}</span>
            </span>
          </button>
        </div>
      </div>
    </nav>

  <!-- Mashead header-->
    <header class="masthead">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <!-- Mashead text and app badges-->
            <div class="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 class="display-1 lh-1 mb-3">{{ mastheadHeader.mastheadText.heading }}</h1>
              <p class="lead fw-normal text-muted mb-5">{{ mastheadHeader.mastheadText.description }}</p>
              <div class="d-flex flex-column flex-lg-row align-items-center">
                <a class="me-lg-3 mb-4 mb-lg-0" href="#!">
                  <img class="app-badge" :src="mastheadHeader.appBadges[0].imageUrl" :alt="mastheadHeader.appBadges[0].altText" />
                </a>
                <a href="#!">
                  <img class="app-badge" :src="mastheadHeader.appBadges[1].imageUrl" :alt="mastheadHeader.appBadges[1].altText" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- Masthead device mockup feature-->
              <div class="masthead-device-mockup">
                  <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                          <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                              <stop class="gradient-start-color" offset="0%"></stop>
                              <stop class="gradient-end-color" offset="100%"></stop>
                          </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="50"></circle></svg>
                      <svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                      <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                      <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg>
                      <svg class="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                  <div class="device-wrapper">
                      <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                          <div class="screen bg-black">
                              <!-- PUT CONTENTS HERE:-->
                              <!-- * * This can be a video, image, or just about anything else.-->
                              <!-- * * Set the max width of your media to 100% and the height to-->
                              <!-- * * 100% like the demo example below.-->
                              <video muted="muted" autoplay="" loop="" style="max-width: 100%; height: 100%"><source src="assets/img/demo-screen.mp4" type="video/mp4" /></video>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </header>

  <!-- Quote/testimonial aside-->
    <section class="text-center bg-gradient-primary-to-secondary">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xl-8">
            <div class="h2 fs-1 text-white mb-4">{{ testimonialSection.quote }}</div>
            <img :src="testimonialSection.logoSrc" :alt="testimonialSection.logoAlt" :style="{ height: testimonialSection.logoHeight }" />
          </div>
        </div>
      </div>
    </section>
   <!-- App features section -->
   <section id="features">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div class="container-fluid px-5">
              <div class="row gx-5">
                <div v-for="(feature, index) in featuresSection.featureItems" :key="index" class="col-md-6 mb-5">
                  <!-- Feature item -->
                  <div class="text-center">
                    <i :class="feature.iconClasses"></i>
                    <h3 class="font-alt">{{ feature.title }}</h3>
                    <p class="text-muted mb-0">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 order-lg-0">
              <!-- Features section device mockup-->
              <div class="features-device-mockup">
                  <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                          <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                              <stop class="gradient-start-color" offset="0%"></stop>
                              <stop class="gradient-end-color" offset="100%"></stop>
                          </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="50"></circle></svg>
                  <svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                      <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                      <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg>
                  <svg class="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                  <div class="device-wrapper">
                      <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                          <div class="screen bg-black">
                              <!-- PUT CONTENTS HERE:-->
                              <!-- * * This can be a video, image, or just about anything else.-->
                              <!-- * * Set the max width of your media to 100% and the height to-->
                              <!-- * * 100% like the demo example below.-->
                              <video muted="muted" autoplay="" loop="" style="max-width: 100%; height: 100%"><source src="assets/img/demo-screen.mp4" type="video/mp4" /></video>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="bg-gradient-primary-to-secondary" id="download">
            <div class="container px-5">
                <h2 class="text-center text-white font-alt mb-4">Get the app now!</h2>
                <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a class="me-lg-3 mb-4 mb-lg-0" href="#!"><img class="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
                    <a href="#!"><img class="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                </div>
            </div>
        </section>

<!-- Footer section -->
<footer class="bg-black text-center py-5">
      <div class="container px-5">
        <div class="text-white-50 small">
          <div class="mb-2">&copy;{{ footerSection.footerText }}</div>
          <a href="#!">{{footerSection.footerLinks[0].label}}</a> 
          <span class="mx-1">&middot;</span>
          <a href="#!">{{footerSection.footerLinks[1].label}}</a> 
          <span class="mx-1">&middot;</span>
          <a href="#!">{{footerSection.footerLinks[2].label}}</a> 

          <!-- Add the missing code here -->
        </div>
      </div>
    </footer>

        <!-- Feedback Modal-->
        <div class="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-gradient-primary-to-secondary p-4">
                        <h5 class="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
                        <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-0 p-4">
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <!-- Name input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <!-- Email address input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <!-- Phone number input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <!-- Message input-->
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <!-- Submit Button-->
                            <div class="d-grid"><button class="btn btn-primary rounded-pill btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

</template>

<style scoped></style>



