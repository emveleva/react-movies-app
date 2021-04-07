import style from "./Home.module.css";

function Home() {
  return (
    <main className={style.home}>
      <h1 className={style.welcome}>Welcome to NextMovie!</h1>
      <video
        className={style.video}
        autoPlay
        muted
        src="/img/home2.mp4"
        type="video/mp4"
      />
    </main>
  );
}

export default Home;
