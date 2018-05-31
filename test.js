describe('Stringa del giorno', () => {
	it('ritorni una stringa', () => {
		const stringaDelGiorno = require('./stringa-del-giorno');
		const aspettativa = stringaDelGiorno();
		expect(typeof stringaDelGiorno()).toEqual('string');
	});
	it('stringa del giorno contenga una data', () => {
		const stringaDelGiorno = require('./stringa-del-giorno');
		const aspettativa = /^[0-9]{2}.[0-9]{2}.[0-9]{4} - [\w ]+$/.test(stringaDelGiorno());
    	expect(aspettativa).toBeTruthy();
	});
	it('stringa contiene una frase', () => {
		const stringaDelGiorno = require('./stringa-del-giorno');
		const aspettativa = /- [\w  ']+$/.test(stringaDelGiorno());
    	expect(aspettativa).toBeTruthy();
    }

);
});