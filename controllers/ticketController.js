const { Ticket } = require('../models');

exports.getTicketEvent = async (req, res) => {
    const { eventId } = req.params;
    try {
        console.log("Entering getTicketEvent");
        const result = await Ticket.findAll({
            where: {
                event_id: eventId
            }
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};