const getStoredData = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
}


const addToStoredData = (id) => {
  const storedBookData = getStoredData();

  if (storedBookData.includes(id)) {
    console.log('Hello');
    alert('this is already exists')
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
}

export { addToStoredData };