
const name = document.querySelector('#name');
const disc = document.querySelector('#disc');
const price = document.querySelector('#price');
const quant = document.querySelector('#quant');

const itemList = document.querySelector('#item-list');
const subBtn = document.querySelector('#subBtn');

subBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const candyData = {
		name: Name.value,
		disc: disc.value,
		price: price.value,
		quant: quant.value,
	};

	postOnCrud(candyData);
	Name.value = '';
	disc.value = '';
	price.value = '';
	quant.value = '';
});

async function postOnCrud(candyData) {
	await axios.post('https://crudcrud.com/api/605b3deefd84464ca708dba0ca0949ec/candyData', candyData)
		.then(response => {
			console.log(response);
			displayOnScreen();
		})
		.catch(err => console.log(err));
}

function displayOnScreen() {
	axios.get('https://crudcrud.com/api/605b3deefd84464ca708dba0ca0949ec/candyData')
		.then(response => {
			itemList.innerHTML = ''
			response.data.forEach(element => {
				const li = document.createElement('li')
				li.innerHTML = `${element.name}, ${element.disc}, price: ${element.price}, quantity: ${element.quant}, <button onclick="Buy1('${element._id}')">Buy 1</button><button onclick="Buy2('${element._id}')">Buy 2</button><button onclick="Buy3('${element._id}')">Buy 3</button>`;
				
                    //if (element.quant === 0) {
                    //const message = document.createElement('span');
                    //message.textContent = 'Item not available';
                    //li.appendChild(message);
                    // }
          
                 itemList.appendChild(li)
			});
		});
        
}

async function Buy1(candyId) {
	await axios.get(`https://crudcrud.com/api/605b3deefd84464ca708dba0ca0949ec/candyData/${candyId}`)
		.then(response => {
			const { name, disc, price, quant, _id } = response.data;
			const singleData = { name, disc, price, quant: quant-1 };
			updateOnCrud(singleData, _id);
		});
}

async function Buy2(candyId) {
	await axios.get(`https://crudcrud.com/api/605b3deefd84464ca708dba0ca0949ec/candyData/${candyId}`)
		.then(response => {
			const { name, disc, price, quant, _id } = response.data;
			const singleData = { name, disc, price, quant: quant-2 };
			updateOnCrud(singleData, _id);
		});
}

async function Buy3(candyId) {
	await axios.get(`https://crudcrud.com/api/605b3deefd84464ca708dba0ca0949ec/candyData/${candyId}`)
		.then(response => {
			const { name, disc, price, quant, _id } = response.data;
			const singleData = { name, disc, price, quant: quant-3 };
			updateOnCrud(singleData, _id);
		});
}

async function updateOnCrud(singleData, id) {
	await axios.put(`https://crudcrud.com/api/605b3deefd84464ca708dba0ca0949ec/candyData/${id}`, singleData)
		.then(response => {
			console.log(response.data);
			displayOnScreen();
		});
}

displayOnScreen();
