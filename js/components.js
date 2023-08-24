class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>            
         Check Out        
        </nav>
      `;
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
      rel="stylesheet"
    />  
    <footer>
    <section
      class="lg:px-52 sm:px-10 bg-neutral-100 text-stone-600 py-10 grid sm:grid-cols-1 lg:grid-cols-5 lg:gap-14 sm:gap-5"
    >
      <div
        class="flex flex-col lg:flex-row lg:items-start gap-2 lg:col-span-2"
      >
        <p class="text-2xl"><i class="fa-solid fa-location-dot"></i></p>
        <a class="" href=""
          >Main Office and Lab
          <span class="text-xs block"
            >622 West 168th Street, Vanderbilt Clinic, Room 12-234 MC 104B ·
            New York, NY 10032</span
          ></a
        >
      </div>
      <div class="flex flex-col lg:flex-row lg:items-start gap-2">
        <p class="text-2xl"><i class="fa-solid fa-envelope"></i></p>
        <a class="" href=""
          >Contact Us
          <span
            class="underline text-cyan-600 font-medium lg:text-sm text-[0.65rem] block"
            >gvnlab@gmail.com</span
          ></a
        >
      </div>
      <div class="space-x-2">
        <p>Follow Us</p>
        <p class="text-2xl text-sky-600">
          <i class="fa-brands fa-twitter"></i>
        </p>
      </div>
      <div class="flex flex-col gap-y-1 text-xs lg:text-base">
        <a class="underline text-sky-700 font-medium" href="pages/research.html"
          >Research</a
        >
        <a
          class="underline text-sky-700 font-medium"
          href="pages/publications.html"
          >Publications</a
        >
        <a class="underline text-sky-700 font-medium" href="pages/people.html"
          >People</a
        >
        <a class="underline text-sky-700 font-medium" href="pages/news.html"
          >News</a
        >
        <a class="underline text-sky-700 font-medium" href="pages/contact.html"
          >Contact</a
        >
        <a class="underline text-sky-700 font-medium" href="pages/positions.html"
          >Positions</a
        >
      </div>
    </section>
    <section
      class="lg:px-52 px-10 bg-sky-800 py-10 flex sm:flex-col lg:flex-row sm:justify-center items-center lg:justify-between"
    >
      <div class="flex items-start gap-x-2">
        <p class="text-white lg:text-2xl">
          <i class="fa-solid fa-crown"></i>
        </p>
        <a class="text-white lg:text-2xl font-serif" href=""
          >Columbia University
          <span class="lg:lg:text-sm text-[0.65rem] text-[0.65rem] block"
            >In the city of New York</span
          ></a
        >
      </div>
      <div class="space-x-3 flex flex-wrap">
        <a
          class="underline text-white lg:text-sm text-[0.65rem]"
          href="http://"
          >©2023 Columbia University</a
        >
        <a
          class="underline text-white lg:text-sm text-[0.65rem]"
          href="http://"
          >Accessibility</a
        >
        <a
          class="underline text-white lg:text-sm text-[0.65rem]"
          href="http://"
          >Nondiscrimination</a
        >
        <a
          class="underline text-white lg:text-sm text-[0.65rem]"
          href="http://"
          >Careers</a
        >
        <a
          class="underline text-white lg:text-sm text-[0.65rem]"
          href="http://"
          >Built using Columbia Sites</a
        >
      </div>
    </section>
  </footer>    
      `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
