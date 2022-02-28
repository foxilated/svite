<script>
  let penis = function () {
    console.log('penis');
  };
</script>

<div class="shadow" />
<button on:click={penis} class="square"><span>Join Us!</span></button>
<div class="squared" />

<style>
  .square {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--blue);
    border: 0.1vmin solid var(--white);
    height: 7vmin;
    width: 25vmin;
    transition: 300ms ease-in-out;
  }
  .square:hover span {
    color: var(--black);
  }
  .square:active span {
    font-size: 3.1vmin;
  }
  .shadow {
    background: transparent;
    border: 0.1vmin solid var(--white);
    height: 7vmin;
    width: 25vmin;
    margin-bottom: -8.5vmin;
    margin-left: -1.3vmin;
  }
  .squared {
    background: var(--white);
    height: 2vmin;
    width: 2vmin;
    margin-top: -8vmin;
    margin-left: 24vmin;
  }
  span {
    color: var(--white);
    font-weight: 300;
    font-size: 3vmin;
    letter-spacing: 0.1ch;
    transition: 100ms ease-in-out;
  }
</style>
