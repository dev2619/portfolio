const { Router } = require('express'); // extrayendo modulo o funcion de node para la creacion de rutas
const router = Router(); // objeto enrutador u objeto para definir rutas dentro del servidor
const accountSid = 'AC707bd17228838ee2fb6f5fa6cf622d63';
const authToken = 'f1fb6fbb0a9ad0e1444d5347151864d6';
const client = require('twilio')(accountSid, authToken);

router.post('/', (req, res) => {
	const { name, email, message } = req.body; // destructuracion de datos del formulario

	client.messages
		.create({
			body: `Hola! soy " ${name} " vi tu portafolio y mi mensaje es " ${message} " y mi correo es [ ${email} ]`,
			from: 'whatsapp:+14155238886',
			to: 'whatsapp:+573174649051',
		})
		.then((message) => console.log(message.sid));
	res.redirect('/');
});

module.exports = router;
