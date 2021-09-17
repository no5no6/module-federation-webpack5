import faker from 'faker'
const {name , phone, company, image, address} = faker

const mount = (el) => {

  let dom = `
    <h1>Profile</h1>
    <div>name: ${name.firstName()} ${name.lastName()}</div>
    <div>from: ${address.city()}</div>
    <div>company: ${company.companyName()}</div>
  `
  el.innerHTML = dom
}

if(process.env.NODE_ENV === 'development') {
  const el = document.getElementById('single-profile')
  if (el) mount(el)
}

export { mount }

