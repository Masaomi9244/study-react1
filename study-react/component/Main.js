import classes from './Main.module.css'
import { Links } from '../component/Links'
import { Headline } from '../component/Headline'

export function Main(props) {
  return (
    <div>
      <main className={classes.main}>
        <Headline page={props.page}>
          {<code className={classes.code}>pages/{props.page}.js</code>}
        </Headline>
        <Links />
      </main>
    </div>
  );
}
