<script>
  import Header from 'lib/Header';
  import Button from 'lib/Button';
</script>

<div class="container">
  <Header />
  <div class="main">
    <h1>The<br />Post<br />Project</h1>
    <p class="top">opportunities at your fingertips</p>
    <p class="bot">at your fingertips</p>
  </div>
  <div class="button"><Button /></div>
  <div class="squared">
    <div class="square" />
  </div>
</div>

<style>
  .squared {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .square {
    height: 30vmin;
    width: 30vmin;
    border: 0.1vmin solid var(--white);
    background: transparent;
    margin-bottom: -60vmin;
    margin-left: -15vmin;
  }
  .container {
    background: var(--blue);
    height: 100vh;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
  .button{
    margin-left: 50%;
  }
  h1 {
    font-size: 12vmin;
    text-transform: uppercase;
    color: var(--white);
    padding: 8% 0 0 30%;
  }
  p {
    color: var(--black);
    font-size: 4vmin;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5ch;
  }
  .top {
    transform: rotate(90deg);
  }
  .bot {
    margin: 0;
  }
  @media all and (max-width: 1000px) {
    .main {
      margin-top: 50%;
    }
  }
</style>
