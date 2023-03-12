import { component$, Slot, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '../components/header/header';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});



export default component$(() => {
  const store = useStore({
    iframe: false,
  });
  const serverTime = useServerTimeLoader();
  useVisibleTask$(() => {
    if (window) {
      store.iframe = window.self !== window.top;
    }
  });

  return (
    <>
      {store.iframe ? '' : <Header />}
      <main>
        <Slot />
      </main>

      {store.iframe ? '' :

        <footer>
          <a href="https://www.builder.io/" target="_blank">
            Made with ♡ by Builder.io
            <div>{serverTime.value.date}</div>
          </a>
        </footer>

      }


    </>
  );
});
