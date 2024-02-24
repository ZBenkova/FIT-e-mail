let jmeno = prompt("Zadej krestni jmeno bez diakritiky.")
let prijmeni = prompt("Zadej prijmeni bez diakritiky.")

jmeno = jmeno.trim()
prijmeni = prijmeni.trim()
jmeno = jmeno.slice(0, 3)
prijmeni = prijmeni.slice(0, 5)

let email = prijmeni + jmeno 
email = email.toLowerCase()


document.body.innerHTML = 
`<p>${email}@fit.cvut.cz
</p>`

