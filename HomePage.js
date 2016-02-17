var React = require('react');

function Post(data) {
  return (
    <div>
      <h2>
        <a href={data.url}>{data.title}</a>
      </h2>
    </div>
  )
}

function HomePage(data) {

  var postsList = data.posts.map(
    function(item) {
      return <li key={item.id}><Post title={item.title} url={item.url}/></li>;
    }
  );

  return (
    <div>
      <h1>Reddit clone!</h1>
      <ul>
        {postsList}
      </ul>
    </div>
  )
}

module.exports = HomePage;
