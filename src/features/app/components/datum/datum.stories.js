import h from 'react-hyperscript';
import { storiesOf } from '@storybook/react';
import { Datum } from './datum';

storiesOf('Datum', module)
  .add('Basics', () =>
    h('.datum-basics', {
      style: {
        padding: 16,
      },
    }, [
      h(Datum, {
        datum: {
          id: 1,
          name: 'Some Datum',
        },
      }),
    ]),
  );
