import Presenta from 'https://cdn.skypack.dev/@presenta/lib'
import configInterpolator from 'https://cdn.skypack.dev/@presenta/config-interpolator'

const {interpolate} = configInterpolator

const update = async () => {
    console.log("hey")
  const text = document.querySelector('textarea').value
  const data = text.split('\n')

  const frames = data.map((text,index) => ({text, page: index+1}))

  const config = await interpolate({frames}, 'd0e5e758967cb21cfe88717cf4f36822')
  
  document.querySelector('#app').innerHTML = ''
  const preso = await new Presenta('#app', config)
}

document.querySelector('textarea').addEventListener('change', update)

update()