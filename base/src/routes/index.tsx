import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { AuxLink } from '~/_components/aux-link/aux-link';
import { Carousel } from '~/_components/carousel/carousel';

export default component$(() => {
  return (
    <div>
    <Carousel></Carousel>
      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
      <Link class="todolist" href="/todolist/">
        TODO demo 📝
      </Link>

      <AuxLink level="l1" href="/flower"></AuxLink>


    </div>

  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
