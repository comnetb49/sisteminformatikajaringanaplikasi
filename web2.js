const test = () => {
	alert("Hello Welcome to X SIJA B !!!")
}

const bgColor = () => {
	let body = document.body;
	body.classList.toggle('dark');
}

// ini buat input pesan
const send = () => {
	let pesan1 = document.getElementById('pesan1').value;
	if (pesan1 == "") {
		document.getElementById('demo1').innerHTML = "⚠️ Kolom kosong";
		setTimeout(() => {
			document.getElementById('demo1').innerHTML = "";
		}, [2200])
	} else {
		setTimeout(() => {
			document.getElementById('pesan1').value = "";
		},[])
		setTimeout(() => {
			alert("Terima kasih temanku sudah kirim pesannya :)")
		}, [1000])
	}
}