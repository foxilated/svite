<script>
  let name = 'construktion';
  function change() {
    name = 'construction';
    setTimeout(() => {
      name = 'constrution';
    }, 1000);
    setTimeout(() => {
      name = 'construktion';
    }, 1300);
  }
</script>

<div class="container">
  <div class="square" />
  <div class="square-2" />
  <div>
    <h2>website under</h2>
    <button on:click={change}> <h1>&lt;{name} /&gt;</h1></button>
    <h3>Check our socials instead!</h3>
    <div class="socials">
      <a class="icon" href="https://t.me/thepostproject" target="_blank"
        ><svg viewBox="0 0 256 256"
          ><path
            fill="currentColor"
            d="M231.3 31.7A16.1 16.1 0 0 0 215 29L30.4 101.5a15.8 15.8 0 0 0-10.1 16.3a16 16 0 0 0 12.8 14.3l46.9 9.3V200a16 16 0 0 0 9.9 14.8A16.6 16.6 0 0 0 96 216a15.8 15.8 0 0 0 11.3-4.7l26-25.9l39.3 34.6a16 16 0 0 0 10.5 4a14.2 14.2 0 0 0 5-.8a15.9 15.9 0 0 0 10.7-11.6l37.6-164.2a16 16 0 0 0-5.1-15.7ZM86.1 126.3l-49.8-9.9l139.6-54.9ZM96 200v-47.4l25.2 22.2Zm87.2 8l-82.4-72.5l118.7-85.7Z"
          /></svg
        ></a
      >
      <a
        class="icon"
        href="https://www.instagram.com/thepostprojet/"
        target="_blank"
        ><svg viewBox="0 0 256 256"
          ><path
            fill="currentColor"
            d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
          /></svg
        ></a
      >
      <a
        class="icon"
        href="https://linkedin.com/company/thepostproject"
        target="_blank"
        ><svg viewBox="0 0 256 256"
          ><path
            fill="currentColor"
            d="M100 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm128-36v168a16 16 0 0 1-16 16H44a16 16 0 0 1-16-16V44a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16Zm-16 168V44H44v168ZM88 104a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0v-64a8 8 0 0 0-8-8Zm60 0a36 36 0 0 0-20.2 6.2A8 8 0 0 0 112 112v64a8 8 0 0 0 16 0v-36a20 20 0 0 1 40 0v36a8 8 0 0 0 16 0v-36a36 36 0 0 0-36-36Z"
          /></svg
        ></a
      >
      <a class="icon" href="https://facebook.com/thepostprojet" target="_blank"
        ><svg viewBox="0 0 256 256"
          ><path
            fill="currentColor"
            d="M232 128a104 104 0 1 0-104 104a104.1 104.1 0 0 0 104-104Zm-96 87.6V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32.1 32.1 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.6a88 88 0 1 1 16 0Z"
          /></svg
        ></a
      >
    </div>
  </div>
</div>

<style lang="scss">
  .square-2 {
    background: transparent;
    height: 25vmin;
    width: 25vmin;
    border: 0.1vmin solid var(--white);
    position: absolute;
    bottom: -10vmin;
    right: -10vmin;
  }
  .square {
    background: transparent;
    height: 25vmin;
    width: 25vmin;
    border: 0.1vmin solid var(--white);
    position: absolute;
    top: -10vmin;
    left: -10vmin;
  }
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .socials {
      .icon {
        color: var(--white);
        cursor: pointer;
        transition: 300ms;
        padding: 0 0.8rem 0 0;
      }
      .icon:hover {
        color: var(--black);
      }
      svg {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
    div {
      h2 {
        text-transform: uppercase;
        color: var(--white);
        font-weight: 300;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
      }
      h3 {
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 0.2rem;
        color: var(--white);
        padding-left: 14rem;
      }
      button {
        background: none;
        border: none;
      }
      h1 {
        text-transform: uppercase;
        color: var(--black);
        font-weight: 700;
        font-size: 3rem;
        transition: 300ms ease-in-out;
        cursor: pointer;
        letter-spacing: 0.2rem;
      }
      h1:hover {
        color: var(--white);
      }
    }
  }
  /* Responsiveness */
  @media all and (max-width: 500px) {
    h1 {
      font-size: 2.7rem !important;
    }
    h2 {
      font-size: 1.7rem !important;
    }
    h3 {
      padding-left: 0 !important;
      font-size: 1.7rem !important;
      padding-bottom: 0.5rem;
    }
  }
</style>
