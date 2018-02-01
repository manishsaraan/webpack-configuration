//image_util.js

const addImageToPage = imageSrc => {
	const img = document.createElement('img');
	img.src = imageSrc;
	img.style.height = '100px';
	img.style.width = '100px';
	document.body.appendChild(img);
};

export default addImageToPage;