const { body, param } = require('express-validator');
const event_service = require('../../services/event');

const addEventValidation = () => {
	return [
		body('eventName')
			.notEmpty()
			.withMessage('Event name must not be empty')
			.isLength({ min: 8, max: 255 })
			.withMessage('Event name must be between 8 and 255 characters long'),
		body('eventDescription')
			.notEmpty()
			.withMessage('Event description must not be empty'),
		body('eventDateTime')
			.notEmpty()
			.withMessage('Event date time must not be empty'),
		body('eventVenue')
			.notEmpty()
			.withMessage('Event venue must not be empty'),
		body('eventOrganizer')
			.notEmpty()
			.withMessage('Event organizer must not be empty'),
	];
};

const deleteEventValidation = () => {
	return [
		param('id').custom(async id => {
			const exists = await event_service.getById(id);
			if (!exists) {
				throw new Error('Event not found');
			}
		}),
	];
};

const updateEventValidation = () => {
	return [
		param('id').custom(async id => {
			const exists = await event_service.getById(id);
			if (!exists) {
				throw new Error('Event not found');
			}
		}),
		body('eventName')
			.notEmpty()
			.withMessage('Event name must not be empty')
			.isLength({ min: 8, max: 255 })
			.withMessage('Event name must be between 8 and 255 characters long'),
		body('eventDescription')
			.notEmpty()
			.withMessage('Event description must not be empty'),
		body('eventDateTime')
			.notEmpty()
			.withMessage('Event date time must not be empty'),
		body('eventVenue')
			.notEmpty()
			.withMessage('Event venue must not be empty'),
		body('eventOrganizer')
			.notEmpty()
			.withMessage('Event organizer must not be empty'),
	];
};

module.exports = {
	addEventValidation,
	updateEventValidation,
	deleteEventValidation,
};
