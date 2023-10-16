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
    <footer class="space-y-6 lg:space-y-16">
        <section
            class="lg:px-52 px-5 bg-neutral-100 text-stone-600 py-10 grid lg:grid-cols-4 grid-cols-1 lg:gap-14 gap-5">
            <div class="flex flex-col lg:flex-row lg:items-start gap-2 lg:col-span-2">
              <p class="text-2xl"><i class="fa-solid fa-location-dot"></i></p>
              <a class="" href="">Address
              <span class="text-xs block">Department of Applied Chemistry and Chemical Engineering (ACCE), <br>
              Faculty of Science,<br>
              University of Chittagong, <br>
              Chittagong-4331, Bangladesh</span></a>
            </div>
            <div class="flex flex-col lg:flex-row lg:items-start gap-2 ">
              <p class="text-2xl"><i class="fa-solid fa-envelope"></i></p>
              <a class="" href="">Contact Us
                <span
                  class="underline text-yellow-600 font-medium lg:text-sm text-[0.65rem] block">bntelabacce.cu@gmail.com</span></a>
            </div>
            <div class="space-x-2 ">
              <p>Follow Us</p>
              <p class="text-2xl text-sky-600">
                <i class="fa-brands fa-twitter"></i>
              </p>
            </div>
          </section>

          <section
            class="lg:px-52 px-10 bg-yellow-600 py-10 flex flex-col lg:flex-row justify-center items-center lg:justify-between">
            <div class="flex items-center gap-x-2">
              <img src="./images/cu-logo-black.svg" class="w-6 h-6">
              <a class="text-white lg:text-2xl " href="https://cu.ac.bd/" target="_blank">University of Chittagong</a>
            </div>
            <div class="space-x-3 flex flex-wrap">
              <span class=" text-white lg:text-sm text-[0.65rem]">©2023 Bio-Nanomaterials and Tissue Engineering Laboratory
                (BNTELab)</span>
            </div>
          </section>
    
    </footer>    
      `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
