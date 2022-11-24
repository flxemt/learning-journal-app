import view from '../utils/view';

function Homepage() {
  view.innerHTML = `
    <header>
      <div class="container header-container">
          <a href="/post" class="heading-link" data-navigo><h1>My new journey as a bootcamp student.</h1></a>
          <p class="header-content">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
          <time class="header-date" datetime="2022-07-23">July 23, 2022</time>
      </div>
    </header>
    <main class="container">
      <section class="posts">
          <article class="post">
              <img class="post-img" src="assets/images/article-image-03.png" alt="Laptop">
              <time class="post-date" datetime="2022-07-23">July 23, 2022</time>
              <h2 class="post-title">Blog one</h2>
              <p class="post-content">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article class="post">
              <img class="post-img" src="assets/images/article-image-02.png" alt="Laptop ">
              <time class="post-date" datetime="2022-07-23">July 23, 2022</time>
              <h2 class="post-title">Blog two</h2>
              <p class="post-content">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article class="post">
              <img class="post-img" src="assets/images/blog-image-05.png" alt="Laptop">
              <time class="post-date" datetime="2022-07-23">July 23, 2022</time>
              <h2 class="post-title">Blog three</h2>
              <p class="post-content">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article class="post">
              <img class="post-img" src="assets/images/blog-image-03.png" alt="Laptop">
              <time class="post-date" datetime="2022-07-23">July 23, 2022</time>
              <h2 class="post-title">Blog four</h2>
              <p class="post-content">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article class="post">
              <img class="post-img" src="assets/images/blog-image-01.png" alt="Laptop">
              <time class="post-date" datetime="2022-07-23">July 23, 2022</time>
              <h2 class="post-title">Blog five</h2>
              <p class="post-content">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
          <article class="post">
              <img class="post-img" src="assets/images/article-image-01.png" alt="Laptop">
              <time class="post-date" datetime="2022-07-23">July 23, 2022</time>
              <h2 class="post-title">Blog six</h2>
              <p class="post-content">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
          </article>
      </section>
      <div class="section-bottom">
          <a href="#" class="btn-link">View More</a>
      </div>
    </main>
  `;
}

export default Homepage;
