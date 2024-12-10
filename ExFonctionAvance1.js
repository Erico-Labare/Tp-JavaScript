function getFullName(firstName, lastName) {
   
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const formattedFirstName = capitalize(firstName);
    const formattedLastName = capitalize(lastName);

    return `${formattedFirstName} ${formattedLastName}`;
}

console.log(getFullName("jean", "dupont"));
console.log(getFullName("MARIE", "CURIE"));
console.log(getFullName("jOhN", "sMith"));