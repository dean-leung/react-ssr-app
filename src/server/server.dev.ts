import chalk from 'chalk'
import app from './app'
import render from './render'

app.use(render)

app.listen(
  3000,
  () => {
    console.log(
      'server is',
      chalk.greenBright('RUNNING'),
      'at',
      chalk.blueBright('3000')
    )
  }
)
