export const useVoiceRecognition = setInputValue => {
	const startVoiceRecognition = () => {
		if (!('webkitSpeechRecognition' in window)) {
			alert('Ваш браузер не поддерживает голосовой ввод');
			return;
		}

		const recognition = new window.webkitSpeechRecognition();
		recognition.lang = 'ru-RU';
		recognition.continuous = false;
		recognition.interimResults = false;

		recognition.onresult = event => {
			const voiceInput = event.results[0][0].transcript;
			setInputValue(voiceInput);
		};

		recognition.onerror = event => {
			console.error('Ошибка распознавания речи: ', event.error);
		};

		recognition.start();
	};

	return startVoiceRecognition;
};
