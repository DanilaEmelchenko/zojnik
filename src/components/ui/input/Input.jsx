import { useState } from 'react';

import { useVoiceRecognition } from '../../../hooks/useVoiceRecognition';

import styles from './Input.module.scss';

const Input = () => {
	const [inputValue, setInputValue] = useState('');
	const startVoiceRecognition = useVoiceRecognition(setInputValue);

	return (
		<div className={styles.block__input}>
			<img src='./icons/search.svg' alt='search' />
			<input
				type='text'
				placeholder='Поиск'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button
				className={styles.button__voice}
				onClick={
					inputValue !== '' ? () => setInputValue('') : startVoiceRecognition
				}
			>
				<img
					src={
						inputValue === '' ? './icons/microphone.svg' : './icons/exit.svg'
					}
					alt='image'
				/>
			</button>
		</div>
	);
};

export default Input;
