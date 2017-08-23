import data from '../features/data';

export default function* saga() {
  yield [
    data.saga(),
  ];
}
