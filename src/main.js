import { TC } from './data/TCData.js';
import { countryCodes } from './data/countryCodes.js';
import { feautres } from './data/featuresData.js';
import { annualyPrices } from './data/pricesData.js';
import { PP } from './data/privacyPolicyData.js';
import { questions } from './data/questionsData.js';

// Select Elements
// Main Page
const featuresContainer = document.querySelector('.left');
const dropdownIcon = document.querySelector('#dropdown > span');
const dropdownList = document.querySelector('#dropdown ul');
const menuIcon = document.querySelector('.menu-icon');
const CloseIcon = document.querySelector('.close-icon');
const menuList = document.querySelector('.menu');

//Prices Page
const plansBtns = document.querySelectorAll('.switch-plans button');
const pricesContainer = document.querySelector('.prices');
const questionsContainer = document.querySelector('.questions');

// TC Page
const TCContainer = document.querySelector('.tc');

// PrivacyPolicy Page
const PPContainer = document.querySelector('.pp');

// StartNow page
const select = document.getElementById('countryCode');
const phone = document.getElementById('phone');

const setFeaturesContent = () => {
	let html = ``;
	feautres.map((feautre) => {
		html += `
        <div class="card rounded-lg border w-full p-4 gap-4">
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
	if (featuresContainer) {
		featuresContainer.innerHTML = html;
	}
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

const setPricesContent = (prices) => {
	let html = '';
	prices.map((price) => {
		html += `
			<div
				class="card sm:w-[356px] w-[95%] flex-col gap-5 border-2 rounded-2xl justify-between items-center py-9 px-5">
				<h4 class="text-[24px] font-[600]">${price.plan}</h4>
				<p><span class="text-[24px] font-bold ${
					price.price == 0 ? 'text-[#666]' : ''
				}">${price.price}</span> ريال / الشهر / للعضو</p>
				<button class="styled-button w-full">ابدأ الآن</button>
					<ul class="w-full flex flex-col gap-4">
					${price.properities
						.map(
							(properity, i) =>
								`<li class='text-right ${
									price.price > 0 && i === 0 ? 'opacity-[1]' : 'opacity-[0.6]'
								} flex gap-1 items-start'><span>•</span><p>${properity}</p></li>`
						)
						.join('')}
					</ul>
				
			</div>
		`;
	});
	if (pricesContainer) {
		pricesContainer.innerHTML = html;
	}
};

window.showAnswer = (e) => {
	let questionContainer = e.target.parentElement.parentElement.parentElement;
	if (questionContainer.classList.contains('question')) {
		if (questionContainer.classList.contains('show-answer')) {
			questionContainer.classList.remove('show-answer');
		} else {
			questionContainer.classList.add('show-answer');
		}
	}
};

const setQuestionsContent = () => {
	let html = ``;
	questions.map((question) => {
		// lg:h-[55px] h-[60px]
		html += `
			<div
				class="question card flex-col gap-4 rounded-[9px] transition-all overflow-hidden w-full border py-4 px-6">
				<div class="flex justify-between items-center w-full">
					<h5 class="font-[500]">${question.question}</h5>
					<span class="cursor-pointer w-5 h-7 flex justify-center items-center transition-all" onclick="showAnswer(event)">
						<svg
							width="14"
							height="9"
							viewBox="0 0 14 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								id="Vector 1424"
								d="M1 1.5L7 7.5L13 1.5"
								stroke="#969696"
								stroke-width="1.5"
								stroke-linecap="round" />
						</svg>
					</span>
				</div>
				<div class='hidden'>
					<p class="opacity-[0.6]">
						${question.answer}
					</p>
				</div>
			</div>
		`;
	});
	if (questionsContainer) {
		questionsContainer.innerHTML = html;
	}
};

// Switch between plans
plansBtns.forEach((btn) => {
	btn.onclick = (e) => {
		plansBtns.forEach((btn) => {
			btn.classList.remove('active');
		});
		e.currentTarget.classList.add('active');
	};
});

const setTCandPPContent = (container, data) => {
	let html = ``;
	data.map((item) => {
		html += `
		<div>
		<h3 class="text-xl font-medium mb-5">${item.title}</h3>
		<div class="flex flex-col gap-7">
		${item.content.map((el) => `<p>${el}</p>`).join('')}
		</div>
		</div>
		`;
	});
	if (container) {
		container.innerHTML = html;
	}
};

const setOptions = () => {
	let html = ``;
	countryCodes.map((el) => {
		html += `
			<option id=${el.name} value=${el.code}>${el.code}</option>
		`;
	});
	if (select) {
		select.innerHTML = html;
	}
};

const makeInputNumbers = (e) => {
	e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
};

setFeaturesContent();
setPricesContent(annualyPrices);
setQuestionsContent();
setTCandPPContent(TCContainer, TC);
setTCandPPContent(PPContainer, PP);
setOptions();

dropdownIcon.addEventListener('click', ShowDropdownList);
menuIcon.addEventListener('click', showMenuList);
CloseIcon.addEventListener('click', hideMenList);
phone.addEventListener('input', makeInputNumbers);
