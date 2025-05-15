const { Ticket } = require('../models');

exports.getTicketEvent = async (req, res) => {
    const { eventId } = req.params;
    if (!eventId) {
        return res.status(400).json({ message: 'eventId tidak ditemukan dalam parameter.' });
    }

    try {
        console.log(`[getTicketEvent] Mencari tiket dengan event_id: ${eventId}`);

        const tickets = await Ticket.findAll({
            where: {
                event_id: eventId
            }
        });

        if (tickets.length === 0) {
            return res.status(404).json({ message: 'Tiket tidak ditemukan untuk event ini.' });
        }

        res.status(200).json(tickets);
    } catch (error) {
        console.error('[getTicketEvent] Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
    }
};