document.querySelector('.create_contact_btn').addEventListener("click", () => {
  document.querySelector('.add_contact').classList.toggle('hidden')

})

document.querySelector('.close_create_contact').addEventListener("click", () => {
  document.querySelector('.add_contact').classList.toggle('hidden')

})

const submitForm = document.querySelector('.add_contact form')
submitForm.addEventListener("submit", (event) => {
  // document.querySelector('.add_contact').classList.toggle('hidden')
  event.preventDefault()

  console.log("submitting")

  const fname = submitForm.querySelector('input[name=fname]').value
  const lname = submitForm.querySelector('input[name=lname]').value
  const phone = submitForm.querySelector('input[name=number]').value

  console.log(fname, lname, phone)
  fetch("http://localhost:3000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: {
        first: fname,
        last: lname
      },
      phone
    })

  })
    .then(data => {
      console.log(data)
      const contact = createElems(fname, phone)
      document.querySelector('.all_contacts').appendChild(contact)
      document.querySelector('.add_contact').classList.toggle('hidden')
      submitForm.querySelector('input[name=number]').value = ''
      submitForm.querySelector('input[name=fname]').value = ''
      submitForm.querySelector('input[name=lname]').value = ''
    })
    .catch(error => {
      console.log(error)
    })
})



const getAllContacts = () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }
  fetch('http://localhost:3000/all', options)
    .then(res => {
      res.json()
        .then(data => {
          console.log(data)
          data.forEach(element => {
            console.log(element.name.first)

            const contact = createElems(element.name.first, element.phone)

            //   const ele1 = `        <div class="each_div flex items-center p-1 border-b-2 border-gray-50">

            //   <div class="w-[20px] h-[20px] bg-black rounded-full mr-2">

            //   </div>
            //   <p class="w-[450px]">${element.name.last}</p>
            //   <p>${element.phone}</p>
            // </div>`

            document.querySelector('.all_contacts').appendChild(contact)
          });
        })
    })
    .catch(err => {
      console.log(err)
    })
}

getAllContacts()

function createElems(name1, no1) {
  const contact = document.createElement("div")
  contact.setAttribute("class", "each_div flex items-center p-1 border-b-2 border-gray-50 group")

  const img = document.createElement('div')
  img.setAttribute("class", "w-[20px] h-[20px] bg-black rounded-full mr-2")


  const name = document.createElement('div')
  name.setAttribute("class", "w-[450px]")
  name.innerText = name1


  const no = document.createElement('div')
  no.innerHTML = no1

  // < i class="ri-delete-bin-2-fill text-red-900 p-1 rounded-full ml-[398px] hidden group-hover:block" ></i >

  // const delBtn = document.createElement('i')
  // name.setAttribute("class", "ri-delete-bin-2-fill text-red-900 p-1 rounded-full ml-[398px] hidden group-hover:block")

  contact.appendChild(img)
  contact.appendChild(name)
  contact.appendChild(no)
  // contact.appendChild(delBtn)

  return contact
}