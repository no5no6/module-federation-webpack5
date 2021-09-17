import faker from 'faker'
const {name , phone} = faker

const mount = (el) => {
  let dom = '<h1>ListView</h1>'

  for(let i=0; i<6; i++ ) {
    dom += `<div>name: ${ name.firstName()} ${name.lastName() }  tel: ${phone.phoneNumber() }</div>`
  }

  el.innerHTML = dom
}

if(process.env.NODE_ENV === 'development') {
  const el = document.getElementById('single-list')
  if(el) mount(el)
}

export { mount }

