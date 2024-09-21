import DonationRequest from '../models/pedidos/pedidoDoação.js';

// Controller for the tutor to accept or deny donation requests on behalf of the elderly
export const manageDonationRequest = async (req, res) => {
  const { requestId } = req.params;
  const { action } = req.body; // 'accept' or 'deny'

  try {
    // Fetch the donation request
    const donationRequest = await DonationRequest.findByPk(requestId);

    if (!donationRequest) {
      return res.status(404).json({ message: 'Donation request not found' });
    }

    // Handle the accept/deny logic
    if (action === 'accept') {
      donationRequest.status = 'Approved';
    } else if (action === 'deny') {
      donationRequest.status = 'Denied';
    } else {
      return res.status(400).json({ message: 'Invalid action. Must be either "accept" or "deny"' });
    }

    // Save the updated donation request
    await donationRequest.save();

    return res.json({ message: `Donation request ${action}ed successfully`, donationRequest });
  } catch (error) {
    return res.status(500).json({ message: 'Error managing donation request', error });
  }
};



