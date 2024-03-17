import profileImage from "../assests/profileImage.jpg";

function Home() {
  return (
    <div className="Home">
      <img alt="myImg" src={profileImage} />
      <h1>Rahul Pathak</h1>
    </div>
  );
}

export default Home;
