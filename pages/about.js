import view from '../utils/view';

function About() {
  view.innerHTML = `
  <main class="container">
    <section class="about-header">
        <img src="/assets/images/avatar.jpg" style="border-radius: 50%" alt="David's avatar">
        <div>
            <h1>Hi there! My name is David and welcome to my learning journal.</h1>
            <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </div>
    </section>
    <section class="post-container">
        <h4>How I stay committed to learning</h4>
        <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
        <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
        <h4>How I got started</h4>
        <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
        <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
    </section>
    <section class="posts">
        <h3 class="section-title">Recent posts</h3>
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
    </section>
  </main>
  `;
}

export default About;
