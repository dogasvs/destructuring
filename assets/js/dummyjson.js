
for(let i = 1; i <= 30; i++) {
  getData(i);
}
async function getData(postId) {
  let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
  let {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());

  postList.innerHTML += `<h1> ${post.title} </h1> <h3> ${post.body} </h3>`
    +comments.map( x => `<p>${x.user.fullName}: ${x.body} <span> 👍🏻 </span> ${x.likes} </p>`).join('');
}


// async function getPosts() {
//   const {posts} = await fetch('https://dummyjson.com/post/').then(res => res.json());
//   return posts;
// }

// async function getPostsComments(postId) {
//   const {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());
//   return comments;
// }

// async function renderPost() {
//   const posts = await getPosts();
  
//   for(let i = 0; i <= posts.length; i++) {
//     const comments = await getPostsComments(posts[i].id);
//     postList.innerHTML += `<h1> ${posts[i].title} </h1> <h3> ${posts[i].body} </h3>
//     ${comments.map( x => `<p>${x.user.fullName}: ${x.body} <span> 👍🏻 </span> ${x.likes} </p>`).join('')}`}
//   }

// renderPost();