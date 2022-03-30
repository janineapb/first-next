import styles from '../../styles/Events.module.css'
import Link from 'next/link'


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { events: data }
  }
}

const Events = ({ events }) => {
  console.log(events)

  return (
    <div>
      <h1>All Events</h1>
      {events.map(event => (
        <Link href={'/events/' + event.id} key={event.id}>
          <a className={styles.single}>
            <h3>{ event.name }</h3>
          </a>
          </Link>
      ))}
    </div>
  );
}
 
export default Events;