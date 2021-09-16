import faker from 'faker'
const {name , phone} = faker

const mount = (el) => {
  let list = ''

  for( i=0; i<6; i++ ) {
    list += `<div>name: ${ name.firstName} ${name.lastName} tek: ${phone.phoneNumber}</div>`
  }

  el.innerHTML = list
}

if(process.env.NODE_ENV === 'development') {
  const el = document.getElementById('single-list')
  if(el) mount(el)
}

export { mount }