import styles from '../styles/Home.module.css'
import { Links } from '../component/Links'
import { Headline } from '../component/Headline'

export function Main(props) {
  return (
    <div>
      <main className={styles.main}>
        <Headline page={props.page}>
          {<code className={styles.code}>pages/{props.page}.js</code>}
        </Headline>
        <Links />
      </main>
    </div>
  );
}
