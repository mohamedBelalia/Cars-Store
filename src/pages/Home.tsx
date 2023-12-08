
const Home = () => {

  const backgroundImageUrl = 'url(public/imgs/bg.jpg)';

  const containerStyle = {
    background: backgroundImageUrl,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };

  return (
    <div style={containerStyle} className="home">
      <div className="text-home px-4">
        <h1>choose your cars collection</h1>
        <p>this is a simple website that i created in order to practice 
          <span> Typescript With React.js</span></p>
        
        <a href="/store"><button>Store</button></a>
      </div>
    </div>
  )
}

export default Home