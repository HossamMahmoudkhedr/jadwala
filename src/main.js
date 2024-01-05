import { feautres } from './data/featuresData.js';

// Select Elements
const featuresContainer = document.querySelector('.left');
const dropdownIcon = document.querySelector('#dropdown > span');
const dropdownList = document.querySelector('#dropdown ul');
const menuIcon = document.querySelector('.menu-icon');
const CloseIcon = document.querySelector('.close-icon');
const menuList = document.querySelector('.menu');

const setFeaturesContent = () => {
	let html = ``;
	feautres.map((feautre) => {
		html += `
        <div class="card rounded-lg shadow-small border border-solid border-[#EBEBEB] w-full p-4 flex gap-4">
        <span>
            ${feautre.icon}
        </span>
            <div class="flex flex-col gap-2">
                <h5>${feautre.title}</h5>
                <p>${feautre.content}</p>
                </div>
        </div>
        `;
	});
	featuresContainer.innerHTML = html;
};

const ShowDropdownList = () => {
	dropdownList.classList.toggle('show');
};

const showMenuList = () => {
	menuList.classList.add('show');
	CloseIcon.classList.remove('hide');
	menuIcon.classList.add('hide');
};

const hideMenList = () => {
	menuList.classList.remove('show');
	CloseIcon.classList.add('hide');
	menuIcon.classList.remove('hide');
};

setFeaturesContent();

dropdownIcon.addEventListener('click', ShowDropdownList);
menuIcon.addEventListener('click', showMenuList);
CloseIcon.addEventListener('click', hideMenList);
