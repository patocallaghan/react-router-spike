import { useLoaderData } from 'react-router-dom';

export function loader() {
  console.log('started: clientLoader in blocking.grandparent.parent.child.tsx');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ firstName: 'Jimmy', lastName: 'Doe' });
      console.log('finished: clientLoader in blocking.grandparent.parent.child.tsx');
    }, 6000);
  });
}

export default function Child() {
  const child = useLoaderData();
  return (
    <div>
      <>
        <h1>Blocking Child</h1>
        <p>
          {child.firstName} {child.lastName}
        </p>
        <hr />
      </>
    </div>
  );
}
