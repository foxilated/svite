import Home from 'pages/Home.svelte';
import NotFound from 'pages/NotFound.svelte';
import Maintenance from 'pages/Maintenance.svelte';

export default {
  '/': Maintenance,
  '*': NotFound,
};
